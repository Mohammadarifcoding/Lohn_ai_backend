interface ProviderErrorDetails {
  status?: number;
  code?: string;
  type?: string;
  param?: string;
  requestId?: string;
  message: string;
  raw?: unknown;
  stack?: string;
}

const SENSITIVE_KEYS = [
  "authorization",
  "apiKey",
  "api_key",
  "token",
  "access_token",
  "refresh_token",
  "password",
  "secret",
];

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null;
}

function redactSensitive(value: unknown): unknown {
  if (Array.isArray(value)) {
    return value.map(redactSensitive);
  }

  if (!isRecord(value)) {
    return value;
  }

  const redacted: Record<string, unknown> = {};
  for (const [key, val] of Object.entries(value)) {
    const lowered = key.toLowerCase();
    if (SENSITIVE_KEYS.some((sensitiveKey) => lowered.includes(sensitiveKey))) {
      redacted[key] = "[REDACTED]";
      continue;
    }

    redacted[key] = redactSensitive(val);
  }

  return redacted;
}

function parseNestedProviderRawMessage(source: unknown): string | undefined {
  if (!isRecord(source)) {
    return undefined;
  }

  const metadata = isRecord(source.metadata) ? source.metadata : undefined;
  const rawText = typeof metadata?.raw === "string" ? metadata.raw : undefined;
  if (!rawText) {
    return undefined;
  }

  try {
    const parsed = JSON.parse(rawText) as unknown;
    if (!isRecord(parsed)) {
      return undefined;
    }

    const nested = isRecord(parsed.error) ? parsed.error : undefined;
    const nestedMessage = typeof nested?.message === "string" ? nested.message : undefined;
    return nestedMessage;
  } catch {
    return undefined;
  }
}

export function normalizeProviderError(
  error: unknown,
  includeRawDetails = false
): ProviderErrorDetails {
  if (error instanceof Error) {
    const errRecord = error as Error & Record<string, unknown>;
    const status =
      typeof errRecord.status === "number"
        ? errRecord.status
        : typeof errRecord.statusCode === "number"
          ? errRecord.statusCode
          : undefined;

    const nestedError = isRecord(errRecord.error) ? errRecord.error : undefined;
    const response = isRecord(errRecord.response) ? errRecord.response : undefined;
    const responseData = response && isRecord(response.data) ? response.data : undefined;
    const headers = response && isRecord(response.headers) ? response.headers : undefined;

    const message =
      parseNestedProviderRawMessage(nestedError) ??
      parseNestedProviderRawMessage(responseData) ??
      (nestedError?.message as string | undefined) ??
      (responseData?.message as string | undefined) ??
      error.message;

    const details: ProviderErrorDetails = {
      status,
      code:
        (nestedError?.code as string | undefined) ??
        (errRecord.code as string | undefined),
      type: (nestedError?.type as string | undefined) ?? undefined,
      param: (nestedError?.param as string | undefined) ?? undefined,
      requestId:
        (errRecord.request_id as string | undefined) ??
        (headers?.["x-request-id"] as string | undefined),
      message,
    };

    if (includeRawDetails) {
      details.raw = redactSensitive(
        nestedError ?? responseData ?? errRecord.cause ?? errRecord
      );
      details.stack = error.stack;
    }

    return details;
  }

  return {
    message: typeof error === "string" ? error : "Unknown provider error",
    ...(includeRawDetails ? { raw: redactSensitive(error) } : {}),
  };
}
