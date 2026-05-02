
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Session
 * 
 */
export type Session = $Result.DefaultSelection<Prisma.$SessionPayload>
/**
 * Model Account
 * 
 */
export type Account = $Result.DefaultSelection<Prisma.$AccountPayload>
/**
 * Model Verification
 * 
 */
export type Verification = $Result.DefaultSelection<Prisma.$VerificationPayload>
/**
 * Model AiConversation
 * 
 */
export type AiConversation = $Result.DefaultSelection<Prisma.$AiConversationPayload>
/**
 * Model AiApiHit
 * 
 */
export type AiApiHit = $Result.DefaultSelection<Prisma.$AiApiHitPayload>
/**
 * Model SitePageView
 * 
 */
export type SitePageView = $Result.DefaultSelection<Prisma.$SitePageViewPayload>
/**
 * Model BlogBrief
 * 
 */
export type BlogBrief = $Result.DefaultSelection<Prisma.$BlogBriefPayload>
/**
 * Model BlogDraftEdit
 * 
 */
export type BlogDraftEdit = $Result.DefaultSelection<Prisma.$BlogDraftEditPayload>
/**
 * Model BlogPost
 * 
 */
export type BlogPost = $Result.DefaultSelection<Prisma.$BlogPostPayload>
/**
 * Model blogGenerationRun
 * 
 */
export type blogGenerationRun = $Result.DefaultSelection<Prisma.$blogGenerationRunPayload>
/**
 * Model blogDraft
 * 
 */
export type blogDraft = $Result.DefaultSelection<Prisma.$blogDraftPayload>
/**
 * Model blogEvaluation
 * 
 */
export type blogEvaluation = $Result.DefaultSelection<Prisma.$blogEvaluationPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const BlogBriefStatus: {
  new: 'new',
  in_progress: 'in_progress',
  ready: 'ready',
  selected: 'selected',
  published: 'published',
  failed: 'failed'
};

export type BlogBriefStatus = (typeof BlogBriefStatus)[keyof typeof BlogBriefStatus]

}

export type BlogBriefStatus = $Enums.BlogBriefStatus

export const BlogBriefStatus: typeof $Enums.BlogBriefStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.session`: Exposes CRUD operations for the **Session** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessions
    * const sessions = await prisma.session.findMany()
    * ```
    */
  get session(): Prisma.SessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.account`: Exposes CRUD operations for the **Account** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Accounts
    * const accounts = await prisma.account.findMany()
    * ```
    */
  get account(): Prisma.AccountDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.verification`: Exposes CRUD operations for the **Verification** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Verifications
    * const verifications = await prisma.verification.findMany()
    * ```
    */
  get verification(): Prisma.VerificationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.aiConversation`: Exposes CRUD operations for the **AiConversation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AiConversations
    * const aiConversations = await prisma.aiConversation.findMany()
    * ```
    */
  get aiConversation(): Prisma.AiConversationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.aiApiHit`: Exposes CRUD operations for the **AiApiHit** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AiApiHits
    * const aiApiHits = await prisma.aiApiHit.findMany()
    * ```
    */
  get aiApiHit(): Prisma.AiApiHitDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sitePageView`: Exposes CRUD operations for the **SitePageView** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SitePageViews
    * const sitePageViews = await prisma.sitePageView.findMany()
    * ```
    */
  get sitePageView(): Prisma.SitePageViewDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.blogBrief`: Exposes CRUD operations for the **BlogBrief** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BlogBriefs
    * const blogBriefs = await prisma.blogBrief.findMany()
    * ```
    */
  get blogBrief(): Prisma.BlogBriefDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.blogDraftEdit`: Exposes CRUD operations for the **BlogDraftEdit** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BlogDraftEdits
    * const blogDraftEdits = await prisma.blogDraftEdit.findMany()
    * ```
    */
  get blogDraftEdit(): Prisma.BlogDraftEditDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.blogPost`: Exposes CRUD operations for the **BlogPost** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BlogPosts
    * const blogPosts = await prisma.blogPost.findMany()
    * ```
    */
  get blogPost(): Prisma.BlogPostDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.blogGenerationRun`: Exposes CRUD operations for the **blogGenerationRun** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BlogGenerationRuns
    * const blogGenerationRuns = await prisma.blogGenerationRun.findMany()
    * ```
    */
  get blogGenerationRun(): Prisma.blogGenerationRunDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.blogDraft`: Exposes CRUD operations for the **blogDraft** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BlogDrafts
    * const blogDrafts = await prisma.blogDraft.findMany()
    * ```
    */
  get blogDraft(): Prisma.blogDraftDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.blogEvaluation`: Exposes CRUD operations for the **blogEvaluation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BlogEvaluations
    * const blogEvaluations = await prisma.blogEvaluation.findMany()
    * ```
    */
  get blogEvaluation(): Prisma.blogEvaluationDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.19.3
   * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Session: 'Session',
    Account: 'Account',
    Verification: 'Verification',
    AiConversation: 'AiConversation',
    AiApiHit: 'AiApiHit',
    SitePageView: 'SitePageView',
    BlogBrief: 'BlogBrief',
    BlogDraftEdit: 'BlogDraftEdit',
    BlogPost: 'BlogPost',
    blogGenerationRun: 'blogGenerationRun',
    blogDraft: 'blogDraft',
    blogEvaluation: 'blogEvaluation'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "session" | "account" | "verification" | "aiConversation" | "aiApiHit" | "sitePageView" | "blogBrief" | "blogDraftEdit" | "blogPost" | "blogGenerationRun" | "blogDraft" | "blogEvaluation"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Session: {
        payload: Prisma.$SessionPayload<ExtArgs>
        fields: Prisma.SessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findFirst: {
            args: Prisma.SessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findMany: {
            args: Prisma.SessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          create: {
            args: Prisma.SessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          createMany: {
            args: Prisma.SessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          delete: {
            args: Prisma.SessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          update: {
            args: Prisma.SessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          deleteMany: {
            args: Prisma.SessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          upsert: {
            args: Prisma.SessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          aggregate: {
            args: Prisma.SessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSession>
          }
          groupBy: {
            args: Prisma.SessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SessionCountArgs<ExtArgs>
            result: $Utils.Optional<SessionCountAggregateOutputType> | number
          }
        }
      }
      Account: {
        payload: Prisma.$AccountPayload<ExtArgs>
        fields: Prisma.AccountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AccountFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AccountFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findFirst: {
            args: Prisma.AccountFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AccountFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findMany: {
            args: Prisma.AccountFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          create: {
            args: Prisma.AccountCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          createMany: {
            args: Prisma.AccountCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AccountCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          delete: {
            args: Prisma.AccountDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          update: {
            args: Prisma.AccountUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          deleteMany: {
            args: Prisma.AccountDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AccountUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AccountUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          upsert: {
            args: Prisma.AccountUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          aggregate: {
            args: Prisma.AccountAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAccount>
          }
          groupBy: {
            args: Prisma.AccountGroupByArgs<ExtArgs>
            result: $Utils.Optional<AccountGroupByOutputType>[]
          }
          count: {
            args: Prisma.AccountCountArgs<ExtArgs>
            result: $Utils.Optional<AccountCountAggregateOutputType> | number
          }
        }
      }
      Verification: {
        payload: Prisma.$VerificationPayload<ExtArgs>
        fields: Prisma.VerificationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VerificationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VerificationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>
          }
          findFirst: {
            args: Prisma.VerificationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VerificationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>
          }
          findMany: {
            args: Prisma.VerificationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>[]
          }
          create: {
            args: Prisma.VerificationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>
          }
          createMany: {
            args: Prisma.VerificationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VerificationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>[]
          }
          delete: {
            args: Prisma.VerificationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>
          }
          update: {
            args: Prisma.VerificationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>
          }
          deleteMany: {
            args: Prisma.VerificationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VerificationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VerificationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>[]
          }
          upsert: {
            args: Prisma.VerificationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>
          }
          aggregate: {
            args: Prisma.VerificationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVerification>
          }
          groupBy: {
            args: Prisma.VerificationGroupByArgs<ExtArgs>
            result: $Utils.Optional<VerificationGroupByOutputType>[]
          }
          count: {
            args: Prisma.VerificationCountArgs<ExtArgs>
            result: $Utils.Optional<VerificationCountAggregateOutputType> | number
          }
        }
      }
      AiConversation: {
        payload: Prisma.$AiConversationPayload<ExtArgs>
        fields: Prisma.AiConversationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AiConversationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiConversationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AiConversationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiConversationPayload>
          }
          findFirst: {
            args: Prisma.AiConversationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiConversationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AiConversationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiConversationPayload>
          }
          findMany: {
            args: Prisma.AiConversationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiConversationPayload>[]
          }
          create: {
            args: Prisma.AiConversationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiConversationPayload>
          }
          createMany: {
            args: Prisma.AiConversationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AiConversationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiConversationPayload>[]
          }
          delete: {
            args: Prisma.AiConversationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiConversationPayload>
          }
          update: {
            args: Prisma.AiConversationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiConversationPayload>
          }
          deleteMany: {
            args: Prisma.AiConversationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AiConversationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AiConversationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiConversationPayload>[]
          }
          upsert: {
            args: Prisma.AiConversationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiConversationPayload>
          }
          aggregate: {
            args: Prisma.AiConversationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAiConversation>
          }
          groupBy: {
            args: Prisma.AiConversationGroupByArgs<ExtArgs>
            result: $Utils.Optional<AiConversationGroupByOutputType>[]
          }
          count: {
            args: Prisma.AiConversationCountArgs<ExtArgs>
            result: $Utils.Optional<AiConversationCountAggregateOutputType> | number
          }
        }
      }
      AiApiHit: {
        payload: Prisma.$AiApiHitPayload<ExtArgs>
        fields: Prisma.AiApiHitFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AiApiHitFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiApiHitPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AiApiHitFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiApiHitPayload>
          }
          findFirst: {
            args: Prisma.AiApiHitFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiApiHitPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AiApiHitFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiApiHitPayload>
          }
          findMany: {
            args: Prisma.AiApiHitFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiApiHitPayload>[]
          }
          create: {
            args: Prisma.AiApiHitCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiApiHitPayload>
          }
          createMany: {
            args: Prisma.AiApiHitCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AiApiHitCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiApiHitPayload>[]
          }
          delete: {
            args: Prisma.AiApiHitDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiApiHitPayload>
          }
          update: {
            args: Prisma.AiApiHitUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiApiHitPayload>
          }
          deleteMany: {
            args: Prisma.AiApiHitDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AiApiHitUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AiApiHitUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiApiHitPayload>[]
          }
          upsert: {
            args: Prisma.AiApiHitUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiApiHitPayload>
          }
          aggregate: {
            args: Prisma.AiApiHitAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAiApiHit>
          }
          groupBy: {
            args: Prisma.AiApiHitGroupByArgs<ExtArgs>
            result: $Utils.Optional<AiApiHitGroupByOutputType>[]
          }
          count: {
            args: Prisma.AiApiHitCountArgs<ExtArgs>
            result: $Utils.Optional<AiApiHitCountAggregateOutputType> | number
          }
        }
      }
      SitePageView: {
        payload: Prisma.$SitePageViewPayload<ExtArgs>
        fields: Prisma.SitePageViewFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SitePageViewFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SitePageViewPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SitePageViewFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SitePageViewPayload>
          }
          findFirst: {
            args: Prisma.SitePageViewFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SitePageViewPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SitePageViewFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SitePageViewPayload>
          }
          findMany: {
            args: Prisma.SitePageViewFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SitePageViewPayload>[]
          }
          create: {
            args: Prisma.SitePageViewCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SitePageViewPayload>
          }
          createMany: {
            args: Prisma.SitePageViewCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SitePageViewCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SitePageViewPayload>[]
          }
          delete: {
            args: Prisma.SitePageViewDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SitePageViewPayload>
          }
          update: {
            args: Prisma.SitePageViewUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SitePageViewPayload>
          }
          deleteMany: {
            args: Prisma.SitePageViewDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SitePageViewUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SitePageViewUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SitePageViewPayload>[]
          }
          upsert: {
            args: Prisma.SitePageViewUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SitePageViewPayload>
          }
          aggregate: {
            args: Prisma.SitePageViewAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSitePageView>
          }
          groupBy: {
            args: Prisma.SitePageViewGroupByArgs<ExtArgs>
            result: $Utils.Optional<SitePageViewGroupByOutputType>[]
          }
          count: {
            args: Prisma.SitePageViewCountArgs<ExtArgs>
            result: $Utils.Optional<SitePageViewCountAggregateOutputType> | number
          }
        }
      }
      BlogBrief: {
        payload: Prisma.$BlogBriefPayload<ExtArgs>
        fields: Prisma.BlogBriefFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BlogBriefFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogBriefPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BlogBriefFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogBriefPayload>
          }
          findFirst: {
            args: Prisma.BlogBriefFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogBriefPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BlogBriefFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogBriefPayload>
          }
          findMany: {
            args: Prisma.BlogBriefFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogBriefPayload>[]
          }
          create: {
            args: Prisma.BlogBriefCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogBriefPayload>
          }
          createMany: {
            args: Prisma.BlogBriefCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BlogBriefCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogBriefPayload>[]
          }
          delete: {
            args: Prisma.BlogBriefDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogBriefPayload>
          }
          update: {
            args: Prisma.BlogBriefUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogBriefPayload>
          }
          deleteMany: {
            args: Prisma.BlogBriefDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BlogBriefUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BlogBriefUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogBriefPayload>[]
          }
          upsert: {
            args: Prisma.BlogBriefUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogBriefPayload>
          }
          aggregate: {
            args: Prisma.BlogBriefAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBlogBrief>
          }
          groupBy: {
            args: Prisma.BlogBriefGroupByArgs<ExtArgs>
            result: $Utils.Optional<BlogBriefGroupByOutputType>[]
          }
          count: {
            args: Prisma.BlogBriefCountArgs<ExtArgs>
            result: $Utils.Optional<BlogBriefCountAggregateOutputType> | number
          }
        }
      }
      BlogDraftEdit: {
        payload: Prisma.$BlogDraftEditPayload<ExtArgs>
        fields: Prisma.BlogDraftEditFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BlogDraftEditFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogDraftEditPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BlogDraftEditFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogDraftEditPayload>
          }
          findFirst: {
            args: Prisma.BlogDraftEditFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogDraftEditPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BlogDraftEditFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogDraftEditPayload>
          }
          findMany: {
            args: Prisma.BlogDraftEditFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogDraftEditPayload>[]
          }
          create: {
            args: Prisma.BlogDraftEditCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogDraftEditPayload>
          }
          createMany: {
            args: Prisma.BlogDraftEditCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BlogDraftEditCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogDraftEditPayload>[]
          }
          delete: {
            args: Prisma.BlogDraftEditDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogDraftEditPayload>
          }
          update: {
            args: Prisma.BlogDraftEditUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogDraftEditPayload>
          }
          deleteMany: {
            args: Prisma.BlogDraftEditDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BlogDraftEditUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BlogDraftEditUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogDraftEditPayload>[]
          }
          upsert: {
            args: Prisma.BlogDraftEditUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogDraftEditPayload>
          }
          aggregate: {
            args: Prisma.BlogDraftEditAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBlogDraftEdit>
          }
          groupBy: {
            args: Prisma.BlogDraftEditGroupByArgs<ExtArgs>
            result: $Utils.Optional<BlogDraftEditGroupByOutputType>[]
          }
          count: {
            args: Prisma.BlogDraftEditCountArgs<ExtArgs>
            result: $Utils.Optional<BlogDraftEditCountAggregateOutputType> | number
          }
        }
      }
      BlogPost: {
        payload: Prisma.$BlogPostPayload<ExtArgs>
        fields: Prisma.BlogPostFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BlogPostFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPostPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BlogPostFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPostPayload>
          }
          findFirst: {
            args: Prisma.BlogPostFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPostPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BlogPostFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPostPayload>
          }
          findMany: {
            args: Prisma.BlogPostFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPostPayload>[]
          }
          create: {
            args: Prisma.BlogPostCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPostPayload>
          }
          createMany: {
            args: Prisma.BlogPostCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BlogPostCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPostPayload>[]
          }
          delete: {
            args: Prisma.BlogPostDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPostPayload>
          }
          update: {
            args: Prisma.BlogPostUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPostPayload>
          }
          deleteMany: {
            args: Prisma.BlogPostDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BlogPostUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BlogPostUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPostPayload>[]
          }
          upsert: {
            args: Prisma.BlogPostUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPostPayload>
          }
          aggregate: {
            args: Prisma.BlogPostAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBlogPost>
          }
          groupBy: {
            args: Prisma.BlogPostGroupByArgs<ExtArgs>
            result: $Utils.Optional<BlogPostGroupByOutputType>[]
          }
          count: {
            args: Prisma.BlogPostCountArgs<ExtArgs>
            result: $Utils.Optional<BlogPostCountAggregateOutputType> | number
          }
        }
      }
      blogGenerationRun: {
        payload: Prisma.$blogGenerationRunPayload<ExtArgs>
        fields: Prisma.blogGenerationRunFieldRefs
        operations: {
          findUnique: {
            args: Prisma.blogGenerationRunFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$blogGenerationRunPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.blogGenerationRunFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$blogGenerationRunPayload>
          }
          findFirst: {
            args: Prisma.blogGenerationRunFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$blogGenerationRunPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.blogGenerationRunFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$blogGenerationRunPayload>
          }
          findMany: {
            args: Prisma.blogGenerationRunFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$blogGenerationRunPayload>[]
          }
          create: {
            args: Prisma.blogGenerationRunCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$blogGenerationRunPayload>
          }
          createMany: {
            args: Prisma.blogGenerationRunCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.blogGenerationRunCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$blogGenerationRunPayload>[]
          }
          delete: {
            args: Prisma.blogGenerationRunDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$blogGenerationRunPayload>
          }
          update: {
            args: Prisma.blogGenerationRunUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$blogGenerationRunPayload>
          }
          deleteMany: {
            args: Prisma.blogGenerationRunDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.blogGenerationRunUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.blogGenerationRunUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$blogGenerationRunPayload>[]
          }
          upsert: {
            args: Prisma.blogGenerationRunUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$blogGenerationRunPayload>
          }
          aggregate: {
            args: Prisma.BlogGenerationRunAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBlogGenerationRun>
          }
          groupBy: {
            args: Prisma.blogGenerationRunGroupByArgs<ExtArgs>
            result: $Utils.Optional<BlogGenerationRunGroupByOutputType>[]
          }
          count: {
            args: Prisma.blogGenerationRunCountArgs<ExtArgs>
            result: $Utils.Optional<BlogGenerationRunCountAggregateOutputType> | number
          }
        }
      }
      blogDraft: {
        payload: Prisma.$blogDraftPayload<ExtArgs>
        fields: Prisma.blogDraftFieldRefs
        operations: {
          findUnique: {
            args: Prisma.blogDraftFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$blogDraftPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.blogDraftFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$blogDraftPayload>
          }
          findFirst: {
            args: Prisma.blogDraftFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$blogDraftPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.blogDraftFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$blogDraftPayload>
          }
          findMany: {
            args: Prisma.blogDraftFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$blogDraftPayload>[]
          }
          create: {
            args: Prisma.blogDraftCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$blogDraftPayload>
          }
          createMany: {
            args: Prisma.blogDraftCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.blogDraftCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$blogDraftPayload>[]
          }
          delete: {
            args: Prisma.blogDraftDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$blogDraftPayload>
          }
          update: {
            args: Prisma.blogDraftUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$blogDraftPayload>
          }
          deleteMany: {
            args: Prisma.blogDraftDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.blogDraftUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.blogDraftUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$blogDraftPayload>[]
          }
          upsert: {
            args: Prisma.blogDraftUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$blogDraftPayload>
          }
          aggregate: {
            args: Prisma.BlogDraftAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBlogDraft>
          }
          groupBy: {
            args: Prisma.blogDraftGroupByArgs<ExtArgs>
            result: $Utils.Optional<BlogDraftGroupByOutputType>[]
          }
          count: {
            args: Prisma.blogDraftCountArgs<ExtArgs>
            result: $Utils.Optional<BlogDraftCountAggregateOutputType> | number
          }
        }
      }
      blogEvaluation: {
        payload: Prisma.$blogEvaluationPayload<ExtArgs>
        fields: Prisma.blogEvaluationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.blogEvaluationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$blogEvaluationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.blogEvaluationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$blogEvaluationPayload>
          }
          findFirst: {
            args: Prisma.blogEvaluationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$blogEvaluationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.blogEvaluationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$blogEvaluationPayload>
          }
          findMany: {
            args: Prisma.blogEvaluationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$blogEvaluationPayload>[]
          }
          create: {
            args: Prisma.blogEvaluationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$blogEvaluationPayload>
          }
          createMany: {
            args: Prisma.blogEvaluationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.blogEvaluationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$blogEvaluationPayload>[]
          }
          delete: {
            args: Prisma.blogEvaluationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$blogEvaluationPayload>
          }
          update: {
            args: Prisma.blogEvaluationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$blogEvaluationPayload>
          }
          deleteMany: {
            args: Prisma.blogEvaluationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.blogEvaluationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.blogEvaluationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$blogEvaluationPayload>[]
          }
          upsert: {
            args: Prisma.blogEvaluationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$blogEvaluationPayload>
          }
          aggregate: {
            args: Prisma.BlogEvaluationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBlogEvaluation>
          }
          groupBy: {
            args: Prisma.blogEvaluationGroupByArgs<ExtArgs>
            result: $Utils.Optional<BlogEvaluationGroupByOutputType>[]
          }
          count: {
            args: Prisma.blogEvaluationCountArgs<ExtArgs>
            result: $Utils.Optional<BlogEvaluationCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    session?: SessionOmit
    account?: AccountOmit
    verification?: VerificationOmit
    aiConversation?: AiConversationOmit
    aiApiHit?: AiApiHitOmit
    sitePageView?: SitePageViewOmit
    blogBrief?: BlogBriefOmit
    blogDraftEdit?: BlogDraftEditOmit
    blogPost?: BlogPostOmit
    blogGenerationRun?: blogGenerationRunOmit
    blogDraft?: blogDraftOmit
    blogEvaluation?: blogEvaluationOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    sessions: number
    accounts: number
    blogRuns: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sessions?: boolean | UserCountOutputTypeCountSessionsArgs
    accounts?: boolean | UserCountOutputTypeCountAccountsArgs
    blogRuns?: boolean | UserCountOutputTypeCountBlogRunsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAccountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountBlogRunsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: blogGenerationRunWhereInput
  }


  /**
   * Count Type AiConversationCountOutputType
   */

  export type AiConversationCountOutputType = {
    hits: number
  }

  export type AiConversationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    hits?: boolean | AiConversationCountOutputTypeCountHitsArgs
  }

  // Custom InputTypes
  /**
   * AiConversationCountOutputType without action
   */
  export type AiConversationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiConversationCountOutputType
     */
    select?: AiConversationCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AiConversationCountOutputType without action
   */
  export type AiConversationCountOutputTypeCountHitsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AiApiHitWhereInput
  }


  /**
   * Count Type BlogBriefCountOutputType
   */

  export type BlogBriefCountOutputType = {
    draftEdits: number
  }

  export type BlogBriefCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    draftEdits?: boolean | BlogBriefCountOutputTypeCountDraftEditsArgs
  }

  // Custom InputTypes
  /**
   * BlogBriefCountOutputType without action
   */
  export type BlogBriefCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogBriefCountOutputType
     */
    select?: BlogBriefCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BlogBriefCountOutputType without action
   */
  export type BlogBriefCountOutputTypeCountDraftEditsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BlogDraftEditWhereInput
  }


  /**
   * Count Type BlogGenerationRunCountOutputType
   */

  export type BlogGenerationRunCountOutputType = {
    drafts: number
    evaluations: number
  }

  export type BlogGenerationRunCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    drafts?: boolean | BlogGenerationRunCountOutputTypeCountDraftsArgs
    evaluations?: boolean | BlogGenerationRunCountOutputTypeCountEvaluationsArgs
  }

  // Custom InputTypes
  /**
   * BlogGenerationRunCountOutputType without action
   */
  export type BlogGenerationRunCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogGenerationRunCountOutputType
     */
    select?: BlogGenerationRunCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BlogGenerationRunCountOutputType without action
   */
  export type BlogGenerationRunCountOutputTypeCountDraftsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: blogDraftWhereInput
  }

  /**
   * BlogGenerationRunCountOutputType without action
   */
  export type BlogGenerationRunCountOutputTypeCountEvaluationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: blogEvaluationWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    emailVerified: boolean | null
    image: string | null
    role: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    emailVerified: boolean | null
    image: string | null
    role: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    emailVerified: number
    image: number
    role: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
    role?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string
    email: string
    emailVerified: boolean
    image: string | null
    role: string
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    accounts?: boolean | User$accountsArgs<ExtArgs>
    blogRuns?: boolean | User$blogRunsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "emailVerified" | "image" | "role" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    accounts?: boolean | User$accountsArgs<ExtArgs>
    blogRuns?: boolean | User$blogRunsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      sessions: Prisma.$SessionPayload<ExtArgs>[]
      accounts: Prisma.$AccountPayload<ExtArgs>[]
      blogRuns: Prisma.$blogGenerationRunPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      emailVerified: boolean
      image: string | null
      role: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sessions<T extends User$sessionsArgs<ExtArgs> = {}>(args?: Subset<T, User$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    accounts<T extends User$accountsArgs<ExtArgs> = {}>(args?: Subset<T, User$accountsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    blogRuns<T extends User$blogRunsArgs<ExtArgs> = {}>(args?: Subset<T, User$blogRunsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$blogGenerationRunPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly emailVerified: FieldRef<"User", 'Boolean'>
    readonly image: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.sessions
   */
  export type User$sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    cursor?: SessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * User.accounts
   */
  export type User$accountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    cursor?: AccountWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * User.blogRuns
   */
  export type User$blogRunsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the blogGenerationRun
     */
    select?: blogGenerationRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the blogGenerationRun
     */
    omit?: blogGenerationRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: blogGenerationRunInclude<ExtArgs> | null
    where?: blogGenerationRunWhereInput
    orderBy?: blogGenerationRunOrderByWithRelationInput | blogGenerationRunOrderByWithRelationInput[]
    cursor?: blogGenerationRunWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BlogGenerationRunScalarFieldEnum | BlogGenerationRunScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Session
   */

  export type AggregateSession = {
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  export type SessionMinAggregateOutputType = {
    id: string | null
    userId: string | null
    token: string | null
    expiresAt: Date | null
    ipAddress: string | null
    userAgent: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SessionMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    token: string | null
    expiresAt: Date | null
    ipAddress: string | null
    userAgent: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SessionCountAggregateOutputType = {
    id: number
    userId: number
    token: number
    expiresAt: number
    ipAddress: number
    userAgent: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SessionMinAggregateInputType = {
    id?: true
    userId?: true
    token?: true
    expiresAt?: true
    ipAddress?: true
    userAgent?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SessionMaxAggregateInputType = {
    id?: true
    userId?: true
    token?: true
    expiresAt?: true
    ipAddress?: true
    userAgent?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SessionCountAggregateInputType = {
    id?: true
    userId?: true
    token?: true
    expiresAt?: true
    ipAddress?: true
    userAgent?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Session to aggregate.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sessions
    **/
    _count?: true | SessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionMaxAggregateInputType
  }

  export type GetSessionAggregateType<T extends SessionAggregateArgs> = {
        [P in keyof T & keyof AggregateSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSession[P]>
      : GetScalarType<T[P], AggregateSession[P]>
  }




  export type SessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithAggregationInput | SessionOrderByWithAggregationInput[]
    by: SessionScalarFieldEnum[] | SessionScalarFieldEnum
    having?: SessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionCountAggregateInputType | true
    _min?: SessionMinAggregateInputType
    _max?: SessionMaxAggregateInputType
  }

  export type SessionGroupByOutputType = {
    id: string
    userId: string
    token: string
    expiresAt: Date
    ipAddress: string | null
    userAgent: string | null
    createdAt: Date
    updatedAt: Date
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  type GetSessionGroupByPayload<T extends SessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionGroupByOutputType[P]>
            : GetScalarType<T[P], SessionGroupByOutputType[P]>
        }
      >
    >


  export type SessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    token?: boolean
    expiresAt?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    token?: boolean
    expiresAt?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    token?: boolean
    expiresAt?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectScalar = {
    id?: boolean
    userId?: boolean
    token?: boolean
    expiresAt?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "token" | "expiresAt" | "ipAddress" | "userAgent" | "createdAt" | "updatedAt", ExtArgs["result"]["session"]>
  export type SessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Session"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      token: string
      expiresAt: Date
      ipAddress: string | null
      userAgent: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["session"]>
    composites: {}
  }

  type SessionGetPayload<S extends boolean | null | undefined | SessionDefaultArgs> = $Result.GetResult<Prisma.$SessionPayload, S>

  type SessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SessionCountAggregateInputType | true
    }

  export interface SessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Session'], meta: { name: 'Session' } }
    /**
     * Find zero or one Session that matches the filter.
     * @param {SessionFindUniqueArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SessionFindUniqueArgs>(args: SelectSubset<T, SessionFindUniqueArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Session that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SessionFindUniqueOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SessionFindUniqueOrThrowArgs>(args: SelectSubset<T, SessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SessionFindFirstArgs>(args?: SelectSubset<T, SessionFindFirstArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SessionFindFirstOrThrowArgs>(args?: SelectSubset<T, SessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sessions
     * const sessions = await prisma.session.findMany()
     * 
     * // Get first 10 Sessions
     * const sessions = await prisma.session.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sessionWithIdOnly = await prisma.session.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SessionFindManyArgs>(args?: SelectSubset<T, SessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Session.
     * @param {SessionCreateArgs} args - Arguments to create a Session.
     * @example
     * // Create one Session
     * const Session = await prisma.session.create({
     *   data: {
     *     // ... data to create a Session
     *   }
     * })
     * 
     */
    create<T extends SessionCreateArgs>(args: SelectSubset<T, SessionCreateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sessions.
     * @param {SessionCreateManyArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SessionCreateManyArgs>(args?: SelectSubset<T, SessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sessions and returns the data saved in the database.
     * @param {SessionCreateManyAndReturnArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SessionCreateManyAndReturnArgs>(args?: SelectSubset<T, SessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Session.
     * @param {SessionDeleteArgs} args - Arguments to delete one Session.
     * @example
     * // Delete one Session
     * const Session = await prisma.session.delete({
     *   where: {
     *     // ... filter to delete one Session
     *   }
     * })
     * 
     */
    delete<T extends SessionDeleteArgs>(args: SelectSubset<T, SessionDeleteArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Session.
     * @param {SessionUpdateArgs} args - Arguments to update one Session.
     * @example
     * // Update one Session
     * const session = await prisma.session.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SessionUpdateArgs>(args: SelectSubset<T, SessionUpdateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sessions.
     * @param {SessionDeleteManyArgs} args - Arguments to filter Sessions to delete.
     * @example
     * // Delete a few Sessions
     * const { count } = await prisma.session.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SessionDeleteManyArgs>(args?: SelectSubset<T, SessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SessionUpdateManyArgs>(args: SelectSubset<T, SessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions and returns the data updated in the database.
     * @param {SessionUpdateManyAndReturnArgs} args - Arguments to update many Sessions.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SessionUpdateManyAndReturnArgs>(args: SelectSubset<T, SessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Session.
     * @param {SessionUpsertArgs} args - Arguments to update or create a Session.
     * @example
     * // Update or create a Session
     * const session = await prisma.session.upsert({
     *   create: {
     *     // ... data to create a Session
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Session we want to update
     *   }
     * })
     */
    upsert<T extends SessionUpsertArgs>(args: SelectSubset<T, SessionUpsertArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionCountArgs} args - Arguments to filter Sessions to count.
     * @example
     * // Count the number of Sessions
     * const count = await prisma.session.count({
     *   where: {
     *     // ... the filter for the Sessions we want to count
     *   }
     * })
    **/
    count<T extends SessionCountArgs>(
      args?: Subset<T, SessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SessionAggregateArgs>(args: Subset<T, SessionAggregateArgs>): Prisma.PrismaPromise<GetSessionAggregateType<T>>

    /**
     * Group by Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessionGroupByArgs['orderBy'] }
        : { orderBy?: SessionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Session model
   */
  readonly fields: SessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Session.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Session model
   */
  interface SessionFieldRefs {
    readonly id: FieldRef<"Session", 'String'>
    readonly userId: FieldRef<"Session", 'String'>
    readonly token: FieldRef<"Session", 'String'>
    readonly expiresAt: FieldRef<"Session", 'DateTime'>
    readonly ipAddress: FieldRef<"Session", 'String'>
    readonly userAgent: FieldRef<"Session", 'String'>
    readonly createdAt: FieldRef<"Session", 'DateTime'>
    readonly updatedAt: FieldRef<"Session", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Session findUnique
   */
  export type SessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findUniqueOrThrow
   */
  export type SessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findFirst
   */
  export type SessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findFirstOrThrow
   */
  export type SessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findMany
   */
  export type SessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Sessions to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session create
   */
  export type SessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to create a Session.
     */
    data: XOR<SessionCreateInput, SessionUncheckedCreateInput>
  }

  /**
   * Session createMany
   */
  export type SessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Session createManyAndReturn
   */
  export type SessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session update
   */
  export type SessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to update a Session.
     */
    data: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
    /**
     * Choose, which Session to update.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session updateMany
   */
  export type SessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
  }

  /**
   * Session updateManyAndReturn
   */
  export type SessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session upsert
   */
  export type SessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The filter to search for the Session to update in case it exists.
     */
    where: SessionWhereUniqueInput
    /**
     * In case the Session found by the `where` argument doesn't exist, create a new Session with this data.
     */
    create: XOR<SessionCreateInput, SessionUncheckedCreateInput>
    /**
     * In case the Session was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
  }

  /**
   * Session delete
   */
  export type SessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter which Session to delete.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session deleteMany
   */
  export type SessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sessions to delete
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to delete.
     */
    limit?: number
  }

  /**
   * Session without action
   */
  export type SessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
  }


  /**
   * Model Account
   */

  export type AggregateAccount = {
    _count: AccountCountAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  export type AccountMinAggregateOutputType = {
    id: string | null
    userId: string | null
    accountId: string | null
    providerId: string | null
    accessToken: string | null
    refreshToken: string | null
    accessTokenExpiresAt: Date | null
    refreshTokenExpiresAt: Date | null
    scope: string | null
    idToken: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AccountMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    accountId: string | null
    providerId: string | null
    accessToken: string | null
    refreshToken: string | null
    accessTokenExpiresAt: Date | null
    refreshTokenExpiresAt: Date | null
    scope: string | null
    idToken: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AccountCountAggregateOutputType = {
    id: number
    userId: number
    accountId: number
    providerId: number
    accessToken: number
    refreshToken: number
    accessTokenExpiresAt: number
    refreshTokenExpiresAt: number
    scope: number
    idToken: number
    password: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AccountMinAggregateInputType = {
    id?: true
    userId?: true
    accountId?: true
    providerId?: true
    accessToken?: true
    refreshToken?: true
    accessTokenExpiresAt?: true
    refreshTokenExpiresAt?: true
    scope?: true
    idToken?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AccountMaxAggregateInputType = {
    id?: true
    userId?: true
    accountId?: true
    providerId?: true
    accessToken?: true
    refreshToken?: true
    accessTokenExpiresAt?: true
    refreshTokenExpiresAt?: true
    scope?: true
    idToken?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AccountCountAggregateInputType = {
    id?: true
    userId?: true
    accountId?: true
    providerId?: true
    accessToken?: true
    refreshToken?: true
    accessTokenExpiresAt?: true
    refreshTokenExpiresAt?: true
    scope?: true
    idToken?: true
    password?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AccountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Account to aggregate.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Accounts
    **/
    _count?: true | AccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccountMaxAggregateInputType
  }

  export type GetAccountAggregateType<T extends AccountAggregateArgs> = {
        [P in keyof T & keyof AggregateAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccount[P]>
      : GetScalarType<T[P], AggregateAccount[P]>
  }




  export type AccountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithAggregationInput | AccountOrderByWithAggregationInput[]
    by: AccountScalarFieldEnum[] | AccountScalarFieldEnum
    having?: AccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccountCountAggregateInputType | true
    _min?: AccountMinAggregateInputType
    _max?: AccountMaxAggregateInputType
  }

  export type AccountGroupByOutputType = {
    id: string
    userId: string
    accountId: string
    providerId: string
    accessToken: string | null
    refreshToken: string | null
    accessTokenExpiresAt: Date | null
    refreshTokenExpiresAt: Date | null
    scope: string | null
    idToken: string | null
    password: string | null
    createdAt: Date
    updatedAt: Date
    _count: AccountCountAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  type GetAccountGroupByPayload<T extends AccountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccountGroupByOutputType[P]>
            : GetScalarType<T[P], AccountGroupByOutputType[P]>
        }
      >
    >


  export type AccountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    accountId?: boolean
    providerId?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    accessTokenExpiresAt?: boolean
    refreshTokenExpiresAt?: boolean
    scope?: boolean
    idToken?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    accountId?: boolean
    providerId?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    accessTokenExpiresAt?: boolean
    refreshTokenExpiresAt?: boolean
    scope?: boolean
    idToken?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    accountId?: boolean
    providerId?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    accessTokenExpiresAt?: boolean
    refreshTokenExpiresAt?: boolean
    scope?: boolean
    idToken?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectScalar = {
    id?: boolean
    userId?: boolean
    accountId?: boolean
    providerId?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    accessTokenExpiresAt?: boolean
    refreshTokenExpiresAt?: boolean
    scope?: boolean
    idToken?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AccountOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "accountId" | "providerId" | "accessToken" | "refreshToken" | "accessTokenExpiresAt" | "refreshTokenExpiresAt" | "scope" | "idToken" | "password" | "createdAt" | "updatedAt", ExtArgs["result"]["account"]>
  export type AccountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AccountIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AccountIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AccountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Account"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      accountId: string
      providerId: string
      accessToken: string | null
      refreshToken: string | null
      accessTokenExpiresAt: Date | null
      refreshTokenExpiresAt: Date | null
      scope: string | null
      idToken: string | null
      password: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["account"]>
    composites: {}
  }

  type AccountGetPayload<S extends boolean | null | undefined | AccountDefaultArgs> = $Result.GetResult<Prisma.$AccountPayload, S>

  type AccountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AccountFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AccountCountAggregateInputType | true
    }

  export interface AccountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Account'], meta: { name: 'Account' } }
    /**
     * Find zero or one Account that matches the filter.
     * @param {AccountFindUniqueArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AccountFindUniqueArgs>(args: SelectSubset<T, AccountFindUniqueArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Account that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AccountFindUniqueOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AccountFindUniqueOrThrowArgs>(args: SelectSubset<T, AccountFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AccountFindFirstArgs>(args?: SelectSubset<T, AccountFindFirstArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AccountFindFirstOrThrowArgs>(args?: SelectSubset<T, AccountFindFirstOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Accounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Accounts
     * const accounts = await prisma.account.findMany()
     * 
     * // Get first 10 Accounts
     * const accounts = await prisma.account.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const accountWithIdOnly = await prisma.account.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AccountFindManyArgs>(args?: SelectSubset<T, AccountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Account.
     * @param {AccountCreateArgs} args - Arguments to create a Account.
     * @example
     * // Create one Account
     * const Account = await prisma.account.create({
     *   data: {
     *     // ... data to create a Account
     *   }
     * })
     * 
     */
    create<T extends AccountCreateArgs>(args: SelectSubset<T, AccountCreateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Accounts.
     * @param {AccountCreateManyArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AccountCreateManyArgs>(args?: SelectSubset<T, AccountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Accounts and returns the data saved in the database.
     * @param {AccountCreateManyAndReturnArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Accounts and only return the `id`
     * const accountWithIdOnly = await prisma.account.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AccountCreateManyAndReturnArgs>(args?: SelectSubset<T, AccountCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Account.
     * @param {AccountDeleteArgs} args - Arguments to delete one Account.
     * @example
     * // Delete one Account
     * const Account = await prisma.account.delete({
     *   where: {
     *     // ... filter to delete one Account
     *   }
     * })
     * 
     */
    delete<T extends AccountDeleteArgs>(args: SelectSubset<T, AccountDeleteArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Account.
     * @param {AccountUpdateArgs} args - Arguments to update one Account.
     * @example
     * // Update one Account
     * const account = await prisma.account.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AccountUpdateArgs>(args: SelectSubset<T, AccountUpdateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Accounts.
     * @param {AccountDeleteManyArgs} args - Arguments to filter Accounts to delete.
     * @example
     * // Delete a few Accounts
     * const { count } = await prisma.account.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AccountDeleteManyArgs>(args?: SelectSubset<T, AccountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AccountUpdateManyArgs>(args: SelectSubset<T, AccountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts and returns the data updated in the database.
     * @param {AccountUpdateManyAndReturnArgs} args - Arguments to update many Accounts.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Accounts and only return the `id`
     * const accountWithIdOnly = await prisma.account.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AccountUpdateManyAndReturnArgs>(args: SelectSubset<T, AccountUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Account.
     * @param {AccountUpsertArgs} args - Arguments to update or create a Account.
     * @example
     * // Update or create a Account
     * const account = await prisma.account.upsert({
     *   create: {
     *     // ... data to create a Account
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Account we want to update
     *   }
     * })
     */
    upsert<T extends AccountUpsertArgs>(args: SelectSubset<T, AccountUpsertArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountCountArgs} args - Arguments to filter Accounts to count.
     * @example
     * // Count the number of Accounts
     * const count = await prisma.account.count({
     *   where: {
     *     // ... the filter for the Accounts we want to count
     *   }
     * })
    **/
    count<T extends AccountCountArgs>(
      args?: Subset<T, AccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AccountAggregateArgs>(args: Subset<T, AccountAggregateArgs>): Prisma.PrismaPromise<GetAccountAggregateType<T>>

    /**
     * Group by Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AccountGroupByArgs['orderBy'] }
        : { orderBy?: AccountGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Account model
   */
  readonly fields: AccountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Account.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AccountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Account model
   */
  interface AccountFieldRefs {
    readonly id: FieldRef<"Account", 'String'>
    readonly userId: FieldRef<"Account", 'String'>
    readonly accountId: FieldRef<"Account", 'String'>
    readonly providerId: FieldRef<"Account", 'String'>
    readonly accessToken: FieldRef<"Account", 'String'>
    readonly refreshToken: FieldRef<"Account", 'String'>
    readonly accessTokenExpiresAt: FieldRef<"Account", 'DateTime'>
    readonly refreshTokenExpiresAt: FieldRef<"Account", 'DateTime'>
    readonly scope: FieldRef<"Account", 'String'>
    readonly idToken: FieldRef<"Account", 'String'>
    readonly password: FieldRef<"Account", 'String'>
    readonly createdAt: FieldRef<"Account", 'DateTime'>
    readonly updatedAt: FieldRef<"Account", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Account findUnique
   */
  export type AccountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findUniqueOrThrow
   */
  export type AccountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findFirst
   */
  export type AccountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findFirstOrThrow
   */
  export type AccountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findMany
   */
  export type AccountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Accounts to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account create
   */
  export type AccountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to create a Account.
     */
    data: XOR<AccountCreateInput, AccountUncheckedCreateInput>
  }

  /**
   * Account createMany
   */
  export type AccountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Account createManyAndReturn
   */
  export type AccountCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Account update
   */
  export type AccountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to update a Account.
     */
    data: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
    /**
     * Choose, which Account to update.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account updateMany
   */
  export type AccountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
  }

  /**
   * Account updateManyAndReturn
   */
  export type AccountUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Account upsert
   */
  export type AccountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The filter to search for the Account to update in case it exists.
     */
    where: AccountWhereUniqueInput
    /**
     * In case the Account found by the `where` argument doesn't exist, create a new Account with this data.
     */
    create: XOR<AccountCreateInput, AccountUncheckedCreateInput>
    /**
     * In case the Account was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
  }

  /**
   * Account delete
   */
  export type AccountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter which Account to delete.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account deleteMany
   */
  export type AccountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Accounts to delete
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to delete.
     */
    limit?: number
  }

  /**
   * Account without action
   */
  export type AccountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
  }


  /**
   * Model Verification
   */

  export type AggregateVerification = {
    _count: VerificationCountAggregateOutputType | null
    _min: VerificationMinAggregateOutputType | null
    _max: VerificationMaxAggregateOutputType | null
  }

  export type VerificationMinAggregateOutputType = {
    id: string | null
    identifier: string | null
    value: string | null
    expiresAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VerificationMaxAggregateOutputType = {
    id: string | null
    identifier: string | null
    value: string | null
    expiresAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VerificationCountAggregateOutputType = {
    id: number
    identifier: number
    value: number
    expiresAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type VerificationMinAggregateInputType = {
    id?: true
    identifier?: true
    value?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VerificationMaxAggregateInputType = {
    id?: true
    identifier?: true
    value?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VerificationCountAggregateInputType = {
    id?: true
    identifier?: true
    value?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type VerificationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Verification to aggregate.
     */
    where?: VerificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Verifications to fetch.
     */
    orderBy?: VerificationOrderByWithRelationInput | VerificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VerificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Verifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Verifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Verifications
    **/
    _count?: true | VerificationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VerificationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VerificationMaxAggregateInputType
  }

  export type GetVerificationAggregateType<T extends VerificationAggregateArgs> = {
        [P in keyof T & keyof AggregateVerification]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVerification[P]>
      : GetScalarType<T[P], AggregateVerification[P]>
  }




  export type VerificationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VerificationWhereInput
    orderBy?: VerificationOrderByWithAggregationInput | VerificationOrderByWithAggregationInput[]
    by: VerificationScalarFieldEnum[] | VerificationScalarFieldEnum
    having?: VerificationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VerificationCountAggregateInputType | true
    _min?: VerificationMinAggregateInputType
    _max?: VerificationMaxAggregateInputType
  }

  export type VerificationGroupByOutputType = {
    id: string
    identifier: string
    value: string
    expiresAt: Date
    createdAt: Date
    updatedAt: Date
    _count: VerificationCountAggregateOutputType | null
    _min: VerificationMinAggregateOutputType | null
    _max: VerificationMaxAggregateOutputType | null
  }

  type GetVerificationGroupByPayload<T extends VerificationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VerificationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VerificationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VerificationGroupByOutputType[P]>
            : GetScalarType<T[P], VerificationGroupByOutputType[P]>
        }
      >
    >


  export type VerificationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    identifier?: boolean
    value?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["verification"]>

  export type VerificationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    identifier?: boolean
    value?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["verification"]>

  export type VerificationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    identifier?: boolean
    value?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["verification"]>

  export type VerificationSelectScalar = {
    id?: boolean
    identifier?: boolean
    value?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type VerificationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "identifier" | "value" | "expiresAt" | "createdAt" | "updatedAt", ExtArgs["result"]["verification"]>

  export type $VerificationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Verification"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      identifier: string
      value: string
      expiresAt: Date
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["verification"]>
    composites: {}
  }

  type VerificationGetPayload<S extends boolean | null | undefined | VerificationDefaultArgs> = $Result.GetResult<Prisma.$VerificationPayload, S>

  type VerificationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VerificationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VerificationCountAggregateInputType | true
    }

  export interface VerificationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Verification'], meta: { name: 'Verification' } }
    /**
     * Find zero or one Verification that matches the filter.
     * @param {VerificationFindUniqueArgs} args - Arguments to find a Verification
     * @example
     * // Get one Verification
     * const verification = await prisma.verification.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VerificationFindUniqueArgs>(args: SelectSubset<T, VerificationFindUniqueArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Verification that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VerificationFindUniqueOrThrowArgs} args - Arguments to find a Verification
     * @example
     * // Get one Verification
     * const verification = await prisma.verification.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VerificationFindUniqueOrThrowArgs>(args: SelectSubset<T, VerificationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Verification that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationFindFirstArgs} args - Arguments to find a Verification
     * @example
     * // Get one Verification
     * const verification = await prisma.verification.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VerificationFindFirstArgs>(args?: SelectSubset<T, VerificationFindFirstArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Verification that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationFindFirstOrThrowArgs} args - Arguments to find a Verification
     * @example
     * // Get one Verification
     * const verification = await prisma.verification.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VerificationFindFirstOrThrowArgs>(args?: SelectSubset<T, VerificationFindFirstOrThrowArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Verifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Verifications
     * const verifications = await prisma.verification.findMany()
     * 
     * // Get first 10 Verifications
     * const verifications = await prisma.verification.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const verificationWithIdOnly = await prisma.verification.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VerificationFindManyArgs>(args?: SelectSubset<T, VerificationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Verification.
     * @param {VerificationCreateArgs} args - Arguments to create a Verification.
     * @example
     * // Create one Verification
     * const Verification = await prisma.verification.create({
     *   data: {
     *     // ... data to create a Verification
     *   }
     * })
     * 
     */
    create<T extends VerificationCreateArgs>(args: SelectSubset<T, VerificationCreateArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Verifications.
     * @param {VerificationCreateManyArgs} args - Arguments to create many Verifications.
     * @example
     * // Create many Verifications
     * const verification = await prisma.verification.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VerificationCreateManyArgs>(args?: SelectSubset<T, VerificationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Verifications and returns the data saved in the database.
     * @param {VerificationCreateManyAndReturnArgs} args - Arguments to create many Verifications.
     * @example
     * // Create many Verifications
     * const verification = await prisma.verification.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Verifications and only return the `id`
     * const verificationWithIdOnly = await prisma.verification.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VerificationCreateManyAndReturnArgs>(args?: SelectSubset<T, VerificationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Verification.
     * @param {VerificationDeleteArgs} args - Arguments to delete one Verification.
     * @example
     * // Delete one Verification
     * const Verification = await prisma.verification.delete({
     *   where: {
     *     // ... filter to delete one Verification
     *   }
     * })
     * 
     */
    delete<T extends VerificationDeleteArgs>(args: SelectSubset<T, VerificationDeleteArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Verification.
     * @param {VerificationUpdateArgs} args - Arguments to update one Verification.
     * @example
     * // Update one Verification
     * const verification = await prisma.verification.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VerificationUpdateArgs>(args: SelectSubset<T, VerificationUpdateArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Verifications.
     * @param {VerificationDeleteManyArgs} args - Arguments to filter Verifications to delete.
     * @example
     * // Delete a few Verifications
     * const { count } = await prisma.verification.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VerificationDeleteManyArgs>(args?: SelectSubset<T, VerificationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Verifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Verifications
     * const verification = await prisma.verification.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VerificationUpdateManyArgs>(args: SelectSubset<T, VerificationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Verifications and returns the data updated in the database.
     * @param {VerificationUpdateManyAndReturnArgs} args - Arguments to update many Verifications.
     * @example
     * // Update many Verifications
     * const verification = await prisma.verification.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Verifications and only return the `id`
     * const verificationWithIdOnly = await prisma.verification.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends VerificationUpdateManyAndReturnArgs>(args: SelectSubset<T, VerificationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Verification.
     * @param {VerificationUpsertArgs} args - Arguments to update or create a Verification.
     * @example
     * // Update or create a Verification
     * const verification = await prisma.verification.upsert({
     *   create: {
     *     // ... data to create a Verification
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Verification we want to update
     *   }
     * })
     */
    upsert<T extends VerificationUpsertArgs>(args: SelectSubset<T, VerificationUpsertArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Verifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationCountArgs} args - Arguments to filter Verifications to count.
     * @example
     * // Count the number of Verifications
     * const count = await prisma.verification.count({
     *   where: {
     *     // ... the filter for the Verifications we want to count
     *   }
     * })
    **/
    count<T extends VerificationCountArgs>(
      args?: Subset<T, VerificationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VerificationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Verification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VerificationAggregateArgs>(args: Subset<T, VerificationAggregateArgs>): Prisma.PrismaPromise<GetVerificationAggregateType<T>>

    /**
     * Group by Verification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VerificationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VerificationGroupByArgs['orderBy'] }
        : { orderBy?: VerificationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VerificationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVerificationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Verification model
   */
  readonly fields: VerificationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Verification.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VerificationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Verification model
   */
  interface VerificationFieldRefs {
    readonly id: FieldRef<"Verification", 'String'>
    readonly identifier: FieldRef<"Verification", 'String'>
    readonly value: FieldRef<"Verification", 'String'>
    readonly expiresAt: FieldRef<"Verification", 'DateTime'>
    readonly createdAt: FieldRef<"Verification", 'DateTime'>
    readonly updatedAt: FieldRef<"Verification", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Verification findUnique
   */
  export type VerificationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * Filter, which Verification to fetch.
     */
    where: VerificationWhereUniqueInput
  }

  /**
   * Verification findUniqueOrThrow
   */
  export type VerificationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * Filter, which Verification to fetch.
     */
    where: VerificationWhereUniqueInput
  }

  /**
   * Verification findFirst
   */
  export type VerificationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * Filter, which Verification to fetch.
     */
    where?: VerificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Verifications to fetch.
     */
    orderBy?: VerificationOrderByWithRelationInput | VerificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Verifications.
     */
    cursor?: VerificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Verifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Verifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Verifications.
     */
    distinct?: VerificationScalarFieldEnum | VerificationScalarFieldEnum[]
  }

  /**
   * Verification findFirstOrThrow
   */
  export type VerificationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * Filter, which Verification to fetch.
     */
    where?: VerificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Verifications to fetch.
     */
    orderBy?: VerificationOrderByWithRelationInput | VerificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Verifications.
     */
    cursor?: VerificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Verifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Verifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Verifications.
     */
    distinct?: VerificationScalarFieldEnum | VerificationScalarFieldEnum[]
  }

  /**
   * Verification findMany
   */
  export type VerificationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * Filter, which Verifications to fetch.
     */
    where?: VerificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Verifications to fetch.
     */
    orderBy?: VerificationOrderByWithRelationInput | VerificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Verifications.
     */
    cursor?: VerificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Verifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Verifications.
     */
    skip?: number
    distinct?: VerificationScalarFieldEnum | VerificationScalarFieldEnum[]
  }

  /**
   * Verification create
   */
  export type VerificationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * The data needed to create a Verification.
     */
    data: XOR<VerificationCreateInput, VerificationUncheckedCreateInput>
  }

  /**
   * Verification createMany
   */
  export type VerificationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Verifications.
     */
    data: VerificationCreateManyInput | VerificationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Verification createManyAndReturn
   */
  export type VerificationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * The data used to create many Verifications.
     */
    data: VerificationCreateManyInput | VerificationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Verification update
   */
  export type VerificationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * The data needed to update a Verification.
     */
    data: XOR<VerificationUpdateInput, VerificationUncheckedUpdateInput>
    /**
     * Choose, which Verification to update.
     */
    where: VerificationWhereUniqueInput
  }

  /**
   * Verification updateMany
   */
  export type VerificationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Verifications.
     */
    data: XOR<VerificationUpdateManyMutationInput, VerificationUncheckedUpdateManyInput>
    /**
     * Filter which Verifications to update
     */
    where?: VerificationWhereInput
    /**
     * Limit how many Verifications to update.
     */
    limit?: number
  }

  /**
   * Verification updateManyAndReturn
   */
  export type VerificationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * The data used to update Verifications.
     */
    data: XOR<VerificationUpdateManyMutationInput, VerificationUncheckedUpdateManyInput>
    /**
     * Filter which Verifications to update
     */
    where?: VerificationWhereInput
    /**
     * Limit how many Verifications to update.
     */
    limit?: number
  }

  /**
   * Verification upsert
   */
  export type VerificationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * The filter to search for the Verification to update in case it exists.
     */
    where: VerificationWhereUniqueInput
    /**
     * In case the Verification found by the `where` argument doesn't exist, create a new Verification with this data.
     */
    create: XOR<VerificationCreateInput, VerificationUncheckedCreateInput>
    /**
     * In case the Verification was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VerificationUpdateInput, VerificationUncheckedUpdateInput>
  }

  /**
   * Verification delete
   */
  export type VerificationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * Filter which Verification to delete.
     */
    where: VerificationWhereUniqueInput
  }

  /**
   * Verification deleteMany
   */
  export type VerificationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Verifications to delete
     */
    where?: VerificationWhereInput
    /**
     * Limit how many Verifications to delete.
     */
    limit?: number
  }

  /**
   * Verification without action
   */
  export type VerificationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
  }


  /**
   * Model AiConversation
   */

  export type AggregateAiConversation = {
    _count: AiConversationCountAggregateOutputType | null
    _avg: AiConversationAvgAggregateOutputType | null
    _sum: AiConversationSumAggregateOutputType | null
    _min: AiConversationMinAggregateOutputType | null
    _max: AiConversationMaxAggregateOutputType | null
  }

  export type AiConversationAvgAggregateOutputType = {
    apiHitCount: number | null
  }

  export type AiConversationSumAggregateOutputType = {
    apiHitCount: number | null
  }

  export type AiConversationMinAggregateOutputType = {
    id: string | null
    conversationId: string | null
    createdAt: Date | null
    updatedAt: Date | null
    apiHitCount: number | null
  }

  export type AiConversationMaxAggregateOutputType = {
    id: string | null
    conversationId: string | null
    createdAt: Date | null
    updatedAt: Date | null
    apiHitCount: number | null
  }

  export type AiConversationCountAggregateOutputType = {
    id: number
    conversationId: number
    createdAt: number
    updatedAt: number
    apiHitCount: number
    _all: number
  }


  export type AiConversationAvgAggregateInputType = {
    apiHitCount?: true
  }

  export type AiConversationSumAggregateInputType = {
    apiHitCount?: true
  }

  export type AiConversationMinAggregateInputType = {
    id?: true
    conversationId?: true
    createdAt?: true
    updatedAt?: true
    apiHitCount?: true
  }

  export type AiConversationMaxAggregateInputType = {
    id?: true
    conversationId?: true
    createdAt?: true
    updatedAt?: true
    apiHitCount?: true
  }

  export type AiConversationCountAggregateInputType = {
    id?: true
    conversationId?: true
    createdAt?: true
    updatedAt?: true
    apiHitCount?: true
    _all?: true
  }

  export type AiConversationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AiConversation to aggregate.
     */
    where?: AiConversationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AiConversations to fetch.
     */
    orderBy?: AiConversationOrderByWithRelationInput | AiConversationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AiConversationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AiConversations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AiConversations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AiConversations
    **/
    _count?: true | AiConversationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AiConversationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AiConversationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AiConversationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AiConversationMaxAggregateInputType
  }

  export type GetAiConversationAggregateType<T extends AiConversationAggregateArgs> = {
        [P in keyof T & keyof AggregateAiConversation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAiConversation[P]>
      : GetScalarType<T[P], AggregateAiConversation[P]>
  }




  export type AiConversationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AiConversationWhereInput
    orderBy?: AiConversationOrderByWithAggregationInput | AiConversationOrderByWithAggregationInput[]
    by: AiConversationScalarFieldEnum[] | AiConversationScalarFieldEnum
    having?: AiConversationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AiConversationCountAggregateInputType | true
    _avg?: AiConversationAvgAggregateInputType
    _sum?: AiConversationSumAggregateInputType
    _min?: AiConversationMinAggregateInputType
    _max?: AiConversationMaxAggregateInputType
  }

  export type AiConversationGroupByOutputType = {
    id: string
    conversationId: string
    createdAt: Date
    updatedAt: Date
    apiHitCount: number
    _count: AiConversationCountAggregateOutputType | null
    _avg: AiConversationAvgAggregateOutputType | null
    _sum: AiConversationSumAggregateOutputType | null
    _min: AiConversationMinAggregateOutputType | null
    _max: AiConversationMaxAggregateOutputType | null
  }

  type GetAiConversationGroupByPayload<T extends AiConversationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AiConversationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AiConversationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AiConversationGroupByOutputType[P]>
            : GetScalarType<T[P], AiConversationGroupByOutputType[P]>
        }
      >
    >


  export type AiConversationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    conversationId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    apiHitCount?: boolean
    hits?: boolean | AiConversation$hitsArgs<ExtArgs>
    _count?: boolean | AiConversationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["aiConversation"]>

  export type AiConversationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    conversationId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    apiHitCount?: boolean
  }, ExtArgs["result"]["aiConversation"]>

  export type AiConversationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    conversationId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    apiHitCount?: boolean
  }, ExtArgs["result"]["aiConversation"]>

  export type AiConversationSelectScalar = {
    id?: boolean
    conversationId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    apiHitCount?: boolean
  }

  export type AiConversationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "conversationId" | "createdAt" | "updatedAt" | "apiHitCount", ExtArgs["result"]["aiConversation"]>
  export type AiConversationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    hits?: boolean | AiConversation$hitsArgs<ExtArgs>
    _count?: boolean | AiConversationCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AiConversationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type AiConversationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $AiConversationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AiConversation"
    objects: {
      hits: Prisma.$AiApiHitPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      conversationId: string
      createdAt: Date
      updatedAt: Date
      apiHitCount: number
    }, ExtArgs["result"]["aiConversation"]>
    composites: {}
  }

  type AiConversationGetPayload<S extends boolean | null | undefined | AiConversationDefaultArgs> = $Result.GetResult<Prisma.$AiConversationPayload, S>

  type AiConversationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AiConversationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AiConversationCountAggregateInputType | true
    }

  export interface AiConversationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AiConversation'], meta: { name: 'AiConversation' } }
    /**
     * Find zero or one AiConversation that matches the filter.
     * @param {AiConversationFindUniqueArgs} args - Arguments to find a AiConversation
     * @example
     * // Get one AiConversation
     * const aiConversation = await prisma.aiConversation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AiConversationFindUniqueArgs>(args: SelectSubset<T, AiConversationFindUniqueArgs<ExtArgs>>): Prisma__AiConversationClient<$Result.GetResult<Prisma.$AiConversationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AiConversation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AiConversationFindUniqueOrThrowArgs} args - Arguments to find a AiConversation
     * @example
     * // Get one AiConversation
     * const aiConversation = await prisma.aiConversation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AiConversationFindUniqueOrThrowArgs>(args: SelectSubset<T, AiConversationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AiConversationClient<$Result.GetResult<Prisma.$AiConversationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AiConversation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AiConversationFindFirstArgs} args - Arguments to find a AiConversation
     * @example
     * // Get one AiConversation
     * const aiConversation = await prisma.aiConversation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AiConversationFindFirstArgs>(args?: SelectSubset<T, AiConversationFindFirstArgs<ExtArgs>>): Prisma__AiConversationClient<$Result.GetResult<Prisma.$AiConversationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AiConversation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AiConversationFindFirstOrThrowArgs} args - Arguments to find a AiConversation
     * @example
     * // Get one AiConversation
     * const aiConversation = await prisma.aiConversation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AiConversationFindFirstOrThrowArgs>(args?: SelectSubset<T, AiConversationFindFirstOrThrowArgs<ExtArgs>>): Prisma__AiConversationClient<$Result.GetResult<Prisma.$AiConversationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AiConversations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AiConversationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AiConversations
     * const aiConversations = await prisma.aiConversation.findMany()
     * 
     * // Get first 10 AiConversations
     * const aiConversations = await prisma.aiConversation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const aiConversationWithIdOnly = await prisma.aiConversation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AiConversationFindManyArgs>(args?: SelectSubset<T, AiConversationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AiConversationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AiConversation.
     * @param {AiConversationCreateArgs} args - Arguments to create a AiConversation.
     * @example
     * // Create one AiConversation
     * const AiConversation = await prisma.aiConversation.create({
     *   data: {
     *     // ... data to create a AiConversation
     *   }
     * })
     * 
     */
    create<T extends AiConversationCreateArgs>(args: SelectSubset<T, AiConversationCreateArgs<ExtArgs>>): Prisma__AiConversationClient<$Result.GetResult<Prisma.$AiConversationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AiConversations.
     * @param {AiConversationCreateManyArgs} args - Arguments to create many AiConversations.
     * @example
     * // Create many AiConversations
     * const aiConversation = await prisma.aiConversation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AiConversationCreateManyArgs>(args?: SelectSubset<T, AiConversationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AiConversations and returns the data saved in the database.
     * @param {AiConversationCreateManyAndReturnArgs} args - Arguments to create many AiConversations.
     * @example
     * // Create many AiConversations
     * const aiConversation = await prisma.aiConversation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AiConversations and only return the `id`
     * const aiConversationWithIdOnly = await prisma.aiConversation.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AiConversationCreateManyAndReturnArgs>(args?: SelectSubset<T, AiConversationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AiConversationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AiConversation.
     * @param {AiConversationDeleteArgs} args - Arguments to delete one AiConversation.
     * @example
     * // Delete one AiConversation
     * const AiConversation = await prisma.aiConversation.delete({
     *   where: {
     *     // ... filter to delete one AiConversation
     *   }
     * })
     * 
     */
    delete<T extends AiConversationDeleteArgs>(args: SelectSubset<T, AiConversationDeleteArgs<ExtArgs>>): Prisma__AiConversationClient<$Result.GetResult<Prisma.$AiConversationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AiConversation.
     * @param {AiConversationUpdateArgs} args - Arguments to update one AiConversation.
     * @example
     * // Update one AiConversation
     * const aiConversation = await prisma.aiConversation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AiConversationUpdateArgs>(args: SelectSubset<T, AiConversationUpdateArgs<ExtArgs>>): Prisma__AiConversationClient<$Result.GetResult<Prisma.$AiConversationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AiConversations.
     * @param {AiConversationDeleteManyArgs} args - Arguments to filter AiConversations to delete.
     * @example
     * // Delete a few AiConversations
     * const { count } = await prisma.aiConversation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AiConversationDeleteManyArgs>(args?: SelectSubset<T, AiConversationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AiConversations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AiConversationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AiConversations
     * const aiConversation = await prisma.aiConversation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AiConversationUpdateManyArgs>(args: SelectSubset<T, AiConversationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AiConversations and returns the data updated in the database.
     * @param {AiConversationUpdateManyAndReturnArgs} args - Arguments to update many AiConversations.
     * @example
     * // Update many AiConversations
     * const aiConversation = await prisma.aiConversation.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AiConversations and only return the `id`
     * const aiConversationWithIdOnly = await prisma.aiConversation.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AiConversationUpdateManyAndReturnArgs>(args: SelectSubset<T, AiConversationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AiConversationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AiConversation.
     * @param {AiConversationUpsertArgs} args - Arguments to update or create a AiConversation.
     * @example
     * // Update or create a AiConversation
     * const aiConversation = await prisma.aiConversation.upsert({
     *   create: {
     *     // ... data to create a AiConversation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AiConversation we want to update
     *   }
     * })
     */
    upsert<T extends AiConversationUpsertArgs>(args: SelectSubset<T, AiConversationUpsertArgs<ExtArgs>>): Prisma__AiConversationClient<$Result.GetResult<Prisma.$AiConversationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AiConversations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AiConversationCountArgs} args - Arguments to filter AiConversations to count.
     * @example
     * // Count the number of AiConversations
     * const count = await prisma.aiConversation.count({
     *   where: {
     *     // ... the filter for the AiConversations we want to count
     *   }
     * })
    **/
    count<T extends AiConversationCountArgs>(
      args?: Subset<T, AiConversationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AiConversationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AiConversation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AiConversationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AiConversationAggregateArgs>(args: Subset<T, AiConversationAggregateArgs>): Prisma.PrismaPromise<GetAiConversationAggregateType<T>>

    /**
     * Group by AiConversation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AiConversationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AiConversationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AiConversationGroupByArgs['orderBy'] }
        : { orderBy?: AiConversationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AiConversationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAiConversationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AiConversation model
   */
  readonly fields: AiConversationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AiConversation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AiConversationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    hits<T extends AiConversation$hitsArgs<ExtArgs> = {}>(args?: Subset<T, AiConversation$hitsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AiApiHitPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AiConversation model
   */
  interface AiConversationFieldRefs {
    readonly id: FieldRef<"AiConversation", 'String'>
    readonly conversationId: FieldRef<"AiConversation", 'String'>
    readonly createdAt: FieldRef<"AiConversation", 'DateTime'>
    readonly updatedAt: FieldRef<"AiConversation", 'DateTime'>
    readonly apiHitCount: FieldRef<"AiConversation", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * AiConversation findUnique
   */
  export type AiConversationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiConversation
     */
    select?: AiConversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AiConversation
     */
    omit?: AiConversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiConversationInclude<ExtArgs> | null
    /**
     * Filter, which AiConversation to fetch.
     */
    where: AiConversationWhereUniqueInput
  }

  /**
   * AiConversation findUniqueOrThrow
   */
  export type AiConversationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiConversation
     */
    select?: AiConversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AiConversation
     */
    omit?: AiConversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiConversationInclude<ExtArgs> | null
    /**
     * Filter, which AiConversation to fetch.
     */
    where: AiConversationWhereUniqueInput
  }

  /**
   * AiConversation findFirst
   */
  export type AiConversationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiConversation
     */
    select?: AiConversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AiConversation
     */
    omit?: AiConversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiConversationInclude<ExtArgs> | null
    /**
     * Filter, which AiConversation to fetch.
     */
    where?: AiConversationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AiConversations to fetch.
     */
    orderBy?: AiConversationOrderByWithRelationInput | AiConversationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AiConversations.
     */
    cursor?: AiConversationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AiConversations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AiConversations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AiConversations.
     */
    distinct?: AiConversationScalarFieldEnum | AiConversationScalarFieldEnum[]
  }

  /**
   * AiConversation findFirstOrThrow
   */
  export type AiConversationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiConversation
     */
    select?: AiConversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AiConversation
     */
    omit?: AiConversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiConversationInclude<ExtArgs> | null
    /**
     * Filter, which AiConversation to fetch.
     */
    where?: AiConversationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AiConversations to fetch.
     */
    orderBy?: AiConversationOrderByWithRelationInput | AiConversationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AiConversations.
     */
    cursor?: AiConversationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AiConversations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AiConversations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AiConversations.
     */
    distinct?: AiConversationScalarFieldEnum | AiConversationScalarFieldEnum[]
  }

  /**
   * AiConversation findMany
   */
  export type AiConversationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiConversation
     */
    select?: AiConversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AiConversation
     */
    omit?: AiConversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiConversationInclude<ExtArgs> | null
    /**
     * Filter, which AiConversations to fetch.
     */
    where?: AiConversationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AiConversations to fetch.
     */
    orderBy?: AiConversationOrderByWithRelationInput | AiConversationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AiConversations.
     */
    cursor?: AiConversationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AiConversations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AiConversations.
     */
    skip?: number
    distinct?: AiConversationScalarFieldEnum | AiConversationScalarFieldEnum[]
  }

  /**
   * AiConversation create
   */
  export type AiConversationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiConversation
     */
    select?: AiConversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AiConversation
     */
    omit?: AiConversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiConversationInclude<ExtArgs> | null
    /**
     * The data needed to create a AiConversation.
     */
    data: XOR<AiConversationCreateInput, AiConversationUncheckedCreateInput>
  }

  /**
   * AiConversation createMany
   */
  export type AiConversationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AiConversations.
     */
    data: AiConversationCreateManyInput | AiConversationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AiConversation createManyAndReturn
   */
  export type AiConversationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiConversation
     */
    select?: AiConversationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AiConversation
     */
    omit?: AiConversationOmit<ExtArgs> | null
    /**
     * The data used to create many AiConversations.
     */
    data: AiConversationCreateManyInput | AiConversationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AiConversation update
   */
  export type AiConversationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiConversation
     */
    select?: AiConversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AiConversation
     */
    omit?: AiConversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiConversationInclude<ExtArgs> | null
    /**
     * The data needed to update a AiConversation.
     */
    data: XOR<AiConversationUpdateInput, AiConversationUncheckedUpdateInput>
    /**
     * Choose, which AiConversation to update.
     */
    where: AiConversationWhereUniqueInput
  }

  /**
   * AiConversation updateMany
   */
  export type AiConversationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AiConversations.
     */
    data: XOR<AiConversationUpdateManyMutationInput, AiConversationUncheckedUpdateManyInput>
    /**
     * Filter which AiConversations to update
     */
    where?: AiConversationWhereInput
    /**
     * Limit how many AiConversations to update.
     */
    limit?: number
  }

  /**
   * AiConversation updateManyAndReturn
   */
  export type AiConversationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiConversation
     */
    select?: AiConversationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AiConversation
     */
    omit?: AiConversationOmit<ExtArgs> | null
    /**
     * The data used to update AiConversations.
     */
    data: XOR<AiConversationUpdateManyMutationInput, AiConversationUncheckedUpdateManyInput>
    /**
     * Filter which AiConversations to update
     */
    where?: AiConversationWhereInput
    /**
     * Limit how many AiConversations to update.
     */
    limit?: number
  }

  /**
   * AiConversation upsert
   */
  export type AiConversationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiConversation
     */
    select?: AiConversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AiConversation
     */
    omit?: AiConversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiConversationInclude<ExtArgs> | null
    /**
     * The filter to search for the AiConversation to update in case it exists.
     */
    where: AiConversationWhereUniqueInput
    /**
     * In case the AiConversation found by the `where` argument doesn't exist, create a new AiConversation with this data.
     */
    create: XOR<AiConversationCreateInput, AiConversationUncheckedCreateInput>
    /**
     * In case the AiConversation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AiConversationUpdateInput, AiConversationUncheckedUpdateInput>
  }

  /**
   * AiConversation delete
   */
  export type AiConversationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiConversation
     */
    select?: AiConversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AiConversation
     */
    omit?: AiConversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiConversationInclude<ExtArgs> | null
    /**
     * Filter which AiConversation to delete.
     */
    where: AiConversationWhereUniqueInput
  }

  /**
   * AiConversation deleteMany
   */
  export type AiConversationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AiConversations to delete
     */
    where?: AiConversationWhereInput
    /**
     * Limit how many AiConversations to delete.
     */
    limit?: number
  }

  /**
   * AiConversation.hits
   */
  export type AiConversation$hitsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiApiHit
     */
    select?: AiApiHitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AiApiHit
     */
    omit?: AiApiHitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiApiHitInclude<ExtArgs> | null
    where?: AiApiHitWhereInput
    orderBy?: AiApiHitOrderByWithRelationInput | AiApiHitOrderByWithRelationInput[]
    cursor?: AiApiHitWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AiApiHitScalarFieldEnum | AiApiHitScalarFieldEnum[]
  }

  /**
   * AiConversation without action
   */
  export type AiConversationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiConversation
     */
    select?: AiConversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AiConversation
     */
    omit?: AiConversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiConversationInclude<ExtArgs> | null
  }


  /**
   * Model AiApiHit
   */

  export type AggregateAiApiHit = {
    _count: AiApiHitCountAggregateOutputType | null
    _min: AiApiHitMinAggregateOutputType | null
    _max: AiApiHitMaxAggregateOutputType | null
  }

  export type AiApiHitMinAggregateOutputType = {
    id: string | null
    route: string | null
    createdAt: Date | null
    conversationId: string | null
  }

  export type AiApiHitMaxAggregateOutputType = {
    id: string | null
    route: string | null
    createdAt: Date | null
    conversationId: string | null
  }

  export type AiApiHitCountAggregateOutputType = {
    id: number
    route: number
    createdAt: number
    conversationId: number
    _all: number
  }


  export type AiApiHitMinAggregateInputType = {
    id?: true
    route?: true
    createdAt?: true
    conversationId?: true
  }

  export type AiApiHitMaxAggregateInputType = {
    id?: true
    route?: true
    createdAt?: true
    conversationId?: true
  }

  export type AiApiHitCountAggregateInputType = {
    id?: true
    route?: true
    createdAt?: true
    conversationId?: true
    _all?: true
  }

  export type AiApiHitAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AiApiHit to aggregate.
     */
    where?: AiApiHitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AiApiHits to fetch.
     */
    orderBy?: AiApiHitOrderByWithRelationInput | AiApiHitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AiApiHitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AiApiHits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AiApiHits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AiApiHits
    **/
    _count?: true | AiApiHitCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AiApiHitMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AiApiHitMaxAggregateInputType
  }

  export type GetAiApiHitAggregateType<T extends AiApiHitAggregateArgs> = {
        [P in keyof T & keyof AggregateAiApiHit]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAiApiHit[P]>
      : GetScalarType<T[P], AggregateAiApiHit[P]>
  }




  export type AiApiHitGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AiApiHitWhereInput
    orderBy?: AiApiHitOrderByWithAggregationInput | AiApiHitOrderByWithAggregationInput[]
    by: AiApiHitScalarFieldEnum[] | AiApiHitScalarFieldEnum
    having?: AiApiHitScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AiApiHitCountAggregateInputType | true
    _min?: AiApiHitMinAggregateInputType
    _max?: AiApiHitMaxAggregateInputType
  }

  export type AiApiHitGroupByOutputType = {
    id: string
    route: string
    createdAt: Date
    conversationId: string
    _count: AiApiHitCountAggregateOutputType | null
    _min: AiApiHitMinAggregateOutputType | null
    _max: AiApiHitMaxAggregateOutputType | null
  }

  type GetAiApiHitGroupByPayload<T extends AiApiHitGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AiApiHitGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AiApiHitGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AiApiHitGroupByOutputType[P]>
            : GetScalarType<T[P], AiApiHitGroupByOutputType[P]>
        }
      >
    >


  export type AiApiHitSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    route?: boolean
    createdAt?: boolean
    conversationId?: boolean
    conversation?: boolean | AiConversationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["aiApiHit"]>

  export type AiApiHitSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    route?: boolean
    createdAt?: boolean
    conversationId?: boolean
    conversation?: boolean | AiConversationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["aiApiHit"]>

  export type AiApiHitSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    route?: boolean
    createdAt?: boolean
    conversationId?: boolean
    conversation?: boolean | AiConversationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["aiApiHit"]>

  export type AiApiHitSelectScalar = {
    id?: boolean
    route?: boolean
    createdAt?: boolean
    conversationId?: boolean
  }

  export type AiApiHitOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "route" | "createdAt" | "conversationId", ExtArgs["result"]["aiApiHit"]>
  export type AiApiHitInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    conversation?: boolean | AiConversationDefaultArgs<ExtArgs>
  }
  export type AiApiHitIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    conversation?: boolean | AiConversationDefaultArgs<ExtArgs>
  }
  export type AiApiHitIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    conversation?: boolean | AiConversationDefaultArgs<ExtArgs>
  }

  export type $AiApiHitPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AiApiHit"
    objects: {
      conversation: Prisma.$AiConversationPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      route: string
      createdAt: Date
      conversationId: string
    }, ExtArgs["result"]["aiApiHit"]>
    composites: {}
  }

  type AiApiHitGetPayload<S extends boolean | null | undefined | AiApiHitDefaultArgs> = $Result.GetResult<Prisma.$AiApiHitPayload, S>

  type AiApiHitCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AiApiHitFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AiApiHitCountAggregateInputType | true
    }

  export interface AiApiHitDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AiApiHit'], meta: { name: 'AiApiHit' } }
    /**
     * Find zero or one AiApiHit that matches the filter.
     * @param {AiApiHitFindUniqueArgs} args - Arguments to find a AiApiHit
     * @example
     * // Get one AiApiHit
     * const aiApiHit = await prisma.aiApiHit.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AiApiHitFindUniqueArgs>(args: SelectSubset<T, AiApiHitFindUniqueArgs<ExtArgs>>): Prisma__AiApiHitClient<$Result.GetResult<Prisma.$AiApiHitPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AiApiHit that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AiApiHitFindUniqueOrThrowArgs} args - Arguments to find a AiApiHit
     * @example
     * // Get one AiApiHit
     * const aiApiHit = await prisma.aiApiHit.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AiApiHitFindUniqueOrThrowArgs>(args: SelectSubset<T, AiApiHitFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AiApiHitClient<$Result.GetResult<Prisma.$AiApiHitPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AiApiHit that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AiApiHitFindFirstArgs} args - Arguments to find a AiApiHit
     * @example
     * // Get one AiApiHit
     * const aiApiHit = await prisma.aiApiHit.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AiApiHitFindFirstArgs>(args?: SelectSubset<T, AiApiHitFindFirstArgs<ExtArgs>>): Prisma__AiApiHitClient<$Result.GetResult<Prisma.$AiApiHitPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AiApiHit that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AiApiHitFindFirstOrThrowArgs} args - Arguments to find a AiApiHit
     * @example
     * // Get one AiApiHit
     * const aiApiHit = await prisma.aiApiHit.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AiApiHitFindFirstOrThrowArgs>(args?: SelectSubset<T, AiApiHitFindFirstOrThrowArgs<ExtArgs>>): Prisma__AiApiHitClient<$Result.GetResult<Prisma.$AiApiHitPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AiApiHits that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AiApiHitFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AiApiHits
     * const aiApiHits = await prisma.aiApiHit.findMany()
     * 
     * // Get first 10 AiApiHits
     * const aiApiHits = await prisma.aiApiHit.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const aiApiHitWithIdOnly = await prisma.aiApiHit.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AiApiHitFindManyArgs>(args?: SelectSubset<T, AiApiHitFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AiApiHitPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AiApiHit.
     * @param {AiApiHitCreateArgs} args - Arguments to create a AiApiHit.
     * @example
     * // Create one AiApiHit
     * const AiApiHit = await prisma.aiApiHit.create({
     *   data: {
     *     // ... data to create a AiApiHit
     *   }
     * })
     * 
     */
    create<T extends AiApiHitCreateArgs>(args: SelectSubset<T, AiApiHitCreateArgs<ExtArgs>>): Prisma__AiApiHitClient<$Result.GetResult<Prisma.$AiApiHitPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AiApiHits.
     * @param {AiApiHitCreateManyArgs} args - Arguments to create many AiApiHits.
     * @example
     * // Create many AiApiHits
     * const aiApiHit = await prisma.aiApiHit.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AiApiHitCreateManyArgs>(args?: SelectSubset<T, AiApiHitCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AiApiHits and returns the data saved in the database.
     * @param {AiApiHitCreateManyAndReturnArgs} args - Arguments to create many AiApiHits.
     * @example
     * // Create many AiApiHits
     * const aiApiHit = await prisma.aiApiHit.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AiApiHits and only return the `id`
     * const aiApiHitWithIdOnly = await prisma.aiApiHit.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AiApiHitCreateManyAndReturnArgs>(args?: SelectSubset<T, AiApiHitCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AiApiHitPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AiApiHit.
     * @param {AiApiHitDeleteArgs} args - Arguments to delete one AiApiHit.
     * @example
     * // Delete one AiApiHit
     * const AiApiHit = await prisma.aiApiHit.delete({
     *   where: {
     *     // ... filter to delete one AiApiHit
     *   }
     * })
     * 
     */
    delete<T extends AiApiHitDeleteArgs>(args: SelectSubset<T, AiApiHitDeleteArgs<ExtArgs>>): Prisma__AiApiHitClient<$Result.GetResult<Prisma.$AiApiHitPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AiApiHit.
     * @param {AiApiHitUpdateArgs} args - Arguments to update one AiApiHit.
     * @example
     * // Update one AiApiHit
     * const aiApiHit = await prisma.aiApiHit.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AiApiHitUpdateArgs>(args: SelectSubset<T, AiApiHitUpdateArgs<ExtArgs>>): Prisma__AiApiHitClient<$Result.GetResult<Prisma.$AiApiHitPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AiApiHits.
     * @param {AiApiHitDeleteManyArgs} args - Arguments to filter AiApiHits to delete.
     * @example
     * // Delete a few AiApiHits
     * const { count } = await prisma.aiApiHit.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AiApiHitDeleteManyArgs>(args?: SelectSubset<T, AiApiHitDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AiApiHits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AiApiHitUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AiApiHits
     * const aiApiHit = await prisma.aiApiHit.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AiApiHitUpdateManyArgs>(args: SelectSubset<T, AiApiHitUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AiApiHits and returns the data updated in the database.
     * @param {AiApiHitUpdateManyAndReturnArgs} args - Arguments to update many AiApiHits.
     * @example
     * // Update many AiApiHits
     * const aiApiHit = await prisma.aiApiHit.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AiApiHits and only return the `id`
     * const aiApiHitWithIdOnly = await prisma.aiApiHit.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AiApiHitUpdateManyAndReturnArgs>(args: SelectSubset<T, AiApiHitUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AiApiHitPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AiApiHit.
     * @param {AiApiHitUpsertArgs} args - Arguments to update or create a AiApiHit.
     * @example
     * // Update or create a AiApiHit
     * const aiApiHit = await prisma.aiApiHit.upsert({
     *   create: {
     *     // ... data to create a AiApiHit
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AiApiHit we want to update
     *   }
     * })
     */
    upsert<T extends AiApiHitUpsertArgs>(args: SelectSubset<T, AiApiHitUpsertArgs<ExtArgs>>): Prisma__AiApiHitClient<$Result.GetResult<Prisma.$AiApiHitPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AiApiHits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AiApiHitCountArgs} args - Arguments to filter AiApiHits to count.
     * @example
     * // Count the number of AiApiHits
     * const count = await prisma.aiApiHit.count({
     *   where: {
     *     // ... the filter for the AiApiHits we want to count
     *   }
     * })
    **/
    count<T extends AiApiHitCountArgs>(
      args?: Subset<T, AiApiHitCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AiApiHitCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AiApiHit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AiApiHitAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AiApiHitAggregateArgs>(args: Subset<T, AiApiHitAggregateArgs>): Prisma.PrismaPromise<GetAiApiHitAggregateType<T>>

    /**
     * Group by AiApiHit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AiApiHitGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AiApiHitGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AiApiHitGroupByArgs['orderBy'] }
        : { orderBy?: AiApiHitGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AiApiHitGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAiApiHitGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AiApiHit model
   */
  readonly fields: AiApiHitFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AiApiHit.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AiApiHitClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    conversation<T extends AiConversationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AiConversationDefaultArgs<ExtArgs>>): Prisma__AiConversationClient<$Result.GetResult<Prisma.$AiConversationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AiApiHit model
   */
  interface AiApiHitFieldRefs {
    readonly id: FieldRef<"AiApiHit", 'String'>
    readonly route: FieldRef<"AiApiHit", 'String'>
    readonly createdAt: FieldRef<"AiApiHit", 'DateTime'>
    readonly conversationId: FieldRef<"AiApiHit", 'String'>
  }
    

  // Custom InputTypes
  /**
   * AiApiHit findUnique
   */
  export type AiApiHitFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiApiHit
     */
    select?: AiApiHitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AiApiHit
     */
    omit?: AiApiHitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiApiHitInclude<ExtArgs> | null
    /**
     * Filter, which AiApiHit to fetch.
     */
    where: AiApiHitWhereUniqueInput
  }

  /**
   * AiApiHit findUniqueOrThrow
   */
  export type AiApiHitFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiApiHit
     */
    select?: AiApiHitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AiApiHit
     */
    omit?: AiApiHitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiApiHitInclude<ExtArgs> | null
    /**
     * Filter, which AiApiHit to fetch.
     */
    where: AiApiHitWhereUniqueInput
  }

  /**
   * AiApiHit findFirst
   */
  export type AiApiHitFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiApiHit
     */
    select?: AiApiHitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AiApiHit
     */
    omit?: AiApiHitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiApiHitInclude<ExtArgs> | null
    /**
     * Filter, which AiApiHit to fetch.
     */
    where?: AiApiHitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AiApiHits to fetch.
     */
    orderBy?: AiApiHitOrderByWithRelationInput | AiApiHitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AiApiHits.
     */
    cursor?: AiApiHitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AiApiHits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AiApiHits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AiApiHits.
     */
    distinct?: AiApiHitScalarFieldEnum | AiApiHitScalarFieldEnum[]
  }

  /**
   * AiApiHit findFirstOrThrow
   */
  export type AiApiHitFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiApiHit
     */
    select?: AiApiHitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AiApiHit
     */
    omit?: AiApiHitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiApiHitInclude<ExtArgs> | null
    /**
     * Filter, which AiApiHit to fetch.
     */
    where?: AiApiHitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AiApiHits to fetch.
     */
    orderBy?: AiApiHitOrderByWithRelationInput | AiApiHitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AiApiHits.
     */
    cursor?: AiApiHitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AiApiHits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AiApiHits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AiApiHits.
     */
    distinct?: AiApiHitScalarFieldEnum | AiApiHitScalarFieldEnum[]
  }

  /**
   * AiApiHit findMany
   */
  export type AiApiHitFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiApiHit
     */
    select?: AiApiHitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AiApiHit
     */
    omit?: AiApiHitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiApiHitInclude<ExtArgs> | null
    /**
     * Filter, which AiApiHits to fetch.
     */
    where?: AiApiHitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AiApiHits to fetch.
     */
    orderBy?: AiApiHitOrderByWithRelationInput | AiApiHitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AiApiHits.
     */
    cursor?: AiApiHitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AiApiHits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AiApiHits.
     */
    skip?: number
    distinct?: AiApiHitScalarFieldEnum | AiApiHitScalarFieldEnum[]
  }

  /**
   * AiApiHit create
   */
  export type AiApiHitCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiApiHit
     */
    select?: AiApiHitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AiApiHit
     */
    omit?: AiApiHitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiApiHitInclude<ExtArgs> | null
    /**
     * The data needed to create a AiApiHit.
     */
    data: XOR<AiApiHitCreateInput, AiApiHitUncheckedCreateInput>
  }

  /**
   * AiApiHit createMany
   */
  export type AiApiHitCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AiApiHits.
     */
    data: AiApiHitCreateManyInput | AiApiHitCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AiApiHit createManyAndReturn
   */
  export type AiApiHitCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiApiHit
     */
    select?: AiApiHitSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AiApiHit
     */
    omit?: AiApiHitOmit<ExtArgs> | null
    /**
     * The data used to create many AiApiHits.
     */
    data: AiApiHitCreateManyInput | AiApiHitCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiApiHitIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AiApiHit update
   */
  export type AiApiHitUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiApiHit
     */
    select?: AiApiHitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AiApiHit
     */
    omit?: AiApiHitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiApiHitInclude<ExtArgs> | null
    /**
     * The data needed to update a AiApiHit.
     */
    data: XOR<AiApiHitUpdateInput, AiApiHitUncheckedUpdateInput>
    /**
     * Choose, which AiApiHit to update.
     */
    where: AiApiHitWhereUniqueInput
  }

  /**
   * AiApiHit updateMany
   */
  export type AiApiHitUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AiApiHits.
     */
    data: XOR<AiApiHitUpdateManyMutationInput, AiApiHitUncheckedUpdateManyInput>
    /**
     * Filter which AiApiHits to update
     */
    where?: AiApiHitWhereInput
    /**
     * Limit how many AiApiHits to update.
     */
    limit?: number
  }

  /**
   * AiApiHit updateManyAndReturn
   */
  export type AiApiHitUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiApiHit
     */
    select?: AiApiHitSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AiApiHit
     */
    omit?: AiApiHitOmit<ExtArgs> | null
    /**
     * The data used to update AiApiHits.
     */
    data: XOR<AiApiHitUpdateManyMutationInput, AiApiHitUncheckedUpdateManyInput>
    /**
     * Filter which AiApiHits to update
     */
    where?: AiApiHitWhereInput
    /**
     * Limit how many AiApiHits to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiApiHitIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AiApiHit upsert
   */
  export type AiApiHitUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiApiHit
     */
    select?: AiApiHitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AiApiHit
     */
    omit?: AiApiHitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiApiHitInclude<ExtArgs> | null
    /**
     * The filter to search for the AiApiHit to update in case it exists.
     */
    where: AiApiHitWhereUniqueInput
    /**
     * In case the AiApiHit found by the `where` argument doesn't exist, create a new AiApiHit with this data.
     */
    create: XOR<AiApiHitCreateInput, AiApiHitUncheckedCreateInput>
    /**
     * In case the AiApiHit was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AiApiHitUpdateInput, AiApiHitUncheckedUpdateInput>
  }

  /**
   * AiApiHit delete
   */
  export type AiApiHitDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiApiHit
     */
    select?: AiApiHitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AiApiHit
     */
    omit?: AiApiHitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiApiHitInclude<ExtArgs> | null
    /**
     * Filter which AiApiHit to delete.
     */
    where: AiApiHitWhereUniqueInput
  }

  /**
   * AiApiHit deleteMany
   */
  export type AiApiHitDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AiApiHits to delete
     */
    where?: AiApiHitWhereInput
    /**
     * Limit how many AiApiHits to delete.
     */
    limit?: number
  }

  /**
   * AiApiHit without action
   */
  export type AiApiHitDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiApiHit
     */
    select?: AiApiHitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AiApiHit
     */
    omit?: AiApiHitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiApiHitInclude<ExtArgs> | null
  }


  /**
   * Model SitePageView
   */

  export type AggregateSitePageView = {
    _count: SitePageViewCountAggregateOutputType | null
    _min: SitePageViewMinAggregateOutputType | null
    _max: SitePageViewMaxAggregateOutputType | null
  }

  export type SitePageViewMinAggregateOutputType = {
    id: string | null
    pathname: string | null
    visitorHash: string | null
    createdAt: Date | null
  }

  export type SitePageViewMaxAggregateOutputType = {
    id: string | null
    pathname: string | null
    visitorHash: string | null
    createdAt: Date | null
  }

  export type SitePageViewCountAggregateOutputType = {
    id: number
    pathname: number
    visitorHash: number
    createdAt: number
    _all: number
  }


  export type SitePageViewMinAggregateInputType = {
    id?: true
    pathname?: true
    visitorHash?: true
    createdAt?: true
  }

  export type SitePageViewMaxAggregateInputType = {
    id?: true
    pathname?: true
    visitorHash?: true
    createdAt?: true
  }

  export type SitePageViewCountAggregateInputType = {
    id?: true
    pathname?: true
    visitorHash?: true
    createdAt?: true
    _all?: true
  }

  export type SitePageViewAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SitePageView to aggregate.
     */
    where?: SitePageViewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SitePageViews to fetch.
     */
    orderBy?: SitePageViewOrderByWithRelationInput | SitePageViewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SitePageViewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SitePageViews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SitePageViews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SitePageViews
    **/
    _count?: true | SitePageViewCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SitePageViewMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SitePageViewMaxAggregateInputType
  }

  export type GetSitePageViewAggregateType<T extends SitePageViewAggregateArgs> = {
        [P in keyof T & keyof AggregateSitePageView]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSitePageView[P]>
      : GetScalarType<T[P], AggregateSitePageView[P]>
  }




  export type SitePageViewGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SitePageViewWhereInput
    orderBy?: SitePageViewOrderByWithAggregationInput | SitePageViewOrderByWithAggregationInput[]
    by: SitePageViewScalarFieldEnum[] | SitePageViewScalarFieldEnum
    having?: SitePageViewScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SitePageViewCountAggregateInputType | true
    _min?: SitePageViewMinAggregateInputType
    _max?: SitePageViewMaxAggregateInputType
  }

  export type SitePageViewGroupByOutputType = {
    id: string
    pathname: string
    visitorHash: string
    createdAt: Date
    _count: SitePageViewCountAggregateOutputType | null
    _min: SitePageViewMinAggregateOutputType | null
    _max: SitePageViewMaxAggregateOutputType | null
  }

  type GetSitePageViewGroupByPayload<T extends SitePageViewGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SitePageViewGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SitePageViewGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SitePageViewGroupByOutputType[P]>
            : GetScalarType<T[P], SitePageViewGroupByOutputType[P]>
        }
      >
    >


  export type SitePageViewSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pathname?: boolean
    visitorHash?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["sitePageView"]>

  export type SitePageViewSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pathname?: boolean
    visitorHash?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["sitePageView"]>

  export type SitePageViewSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pathname?: boolean
    visitorHash?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["sitePageView"]>

  export type SitePageViewSelectScalar = {
    id?: boolean
    pathname?: boolean
    visitorHash?: boolean
    createdAt?: boolean
  }

  export type SitePageViewOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "pathname" | "visitorHash" | "createdAt", ExtArgs["result"]["sitePageView"]>

  export type $SitePageViewPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SitePageView"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      pathname: string
      visitorHash: string
      createdAt: Date
    }, ExtArgs["result"]["sitePageView"]>
    composites: {}
  }

  type SitePageViewGetPayload<S extends boolean | null | undefined | SitePageViewDefaultArgs> = $Result.GetResult<Prisma.$SitePageViewPayload, S>

  type SitePageViewCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SitePageViewFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SitePageViewCountAggregateInputType | true
    }

  export interface SitePageViewDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SitePageView'], meta: { name: 'SitePageView' } }
    /**
     * Find zero or one SitePageView that matches the filter.
     * @param {SitePageViewFindUniqueArgs} args - Arguments to find a SitePageView
     * @example
     * // Get one SitePageView
     * const sitePageView = await prisma.sitePageView.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SitePageViewFindUniqueArgs>(args: SelectSubset<T, SitePageViewFindUniqueArgs<ExtArgs>>): Prisma__SitePageViewClient<$Result.GetResult<Prisma.$SitePageViewPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SitePageView that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SitePageViewFindUniqueOrThrowArgs} args - Arguments to find a SitePageView
     * @example
     * // Get one SitePageView
     * const sitePageView = await prisma.sitePageView.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SitePageViewFindUniqueOrThrowArgs>(args: SelectSubset<T, SitePageViewFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SitePageViewClient<$Result.GetResult<Prisma.$SitePageViewPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SitePageView that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SitePageViewFindFirstArgs} args - Arguments to find a SitePageView
     * @example
     * // Get one SitePageView
     * const sitePageView = await prisma.sitePageView.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SitePageViewFindFirstArgs>(args?: SelectSubset<T, SitePageViewFindFirstArgs<ExtArgs>>): Prisma__SitePageViewClient<$Result.GetResult<Prisma.$SitePageViewPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SitePageView that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SitePageViewFindFirstOrThrowArgs} args - Arguments to find a SitePageView
     * @example
     * // Get one SitePageView
     * const sitePageView = await prisma.sitePageView.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SitePageViewFindFirstOrThrowArgs>(args?: SelectSubset<T, SitePageViewFindFirstOrThrowArgs<ExtArgs>>): Prisma__SitePageViewClient<$Result.GetResult<Prisma.$SitePageViewPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SitePageViews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SitePageViewFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SitePageViews
     * const sitePageViews = await prisma.sitePageView.findMany()
     * 
     * // Get first 10 SitePageViews
     * const sitePageViews = await prisma.sitePageView.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sitePageViewWithIdOnly = await prisma.sitePageView.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SitePageViewFindManyArgs>(args?: SelectSubset<T, SitePageViewFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SitePageViewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SitePageView.
     * @param {SitePageViewCreateArgs} args - Arguments to create a SitePageView.
     * @example
     * // Create one SitePageView
     * const SitePageView = await prisma.sitePageView.create({
     *   data: {
     *     // ... data to create a SitePageView
     *   }
     * })
     * 
     */
    create<T extends SitePageViewCreateArgs>(args: SelectSubset<T, SitePageViewCreateArgs<ExtArgs>>): Prisma__SitePageViewClient<$Result.GetResult<Prisma.$SitePageViewPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SitePageViews.
     * @param {SitePageViewCreateManyArgs} args - Arguments to create many SitePageViews.
     * @example
     * // Create many SitePageViews
     * const sitePageView = await prisma.sitePageView.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SitePageViewCreateManyArgs>(args?: SelectSubset<T, SitePageViewCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SitePageViews and returns the data saved in the database.
     * @param {SitePageViewCreateManyAndReturnArgs} args - Arguments to create many SitePageViews.
     * @example
     * // Create many SitePageViews
     * const sitePageView = await prisma.sitePageView.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SitePageViews and only return the `id`
     * const sitePageViewWithIdOnly = await prisma.sitePageView.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SitePageViewCreateManyAndReturnArgs>(args?: SelectSubset<T, SitePageViewCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SitePageViewPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SitePageView.
     * @param {SitePageViewDeleteArgs} args - Arguments to delete one SitePageView.
     * @example
     * // Delete one SitePageView
     * const SitePageView = await prisma.sitePageView.delete({
     *   where: {
     *     // ... filter to delete one SitePageView
     *   }
     * })
     * 
     */
    delete<T extends SitePageViewDeleteArgs>(args: SelectSubset<T, SitePageViewDeleteArgs<ExtArgs>>): Prisma__SitePageViewClient<$Result.GetResult<Prisma.$SitePageViewPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SitePageView.
     * @param {SitePageViewUpdateArgs} args - Arguments to update one SitePageView.
     * @example
     * // Update one SitePageView
     * const sitePageView = await prisma.sitePageView.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SitePageViewUpdateArgs>(args: SelectSubset<T, SitePageViewUpdateArgs<ExtArgs>>): Prisma__SitePageViewClient<$Result.GetResult<Prisma.$SitePageViewPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SitePageViews.
     * @param {SitePageViewDeleteManyArgs} args - Arguments to filter SitePageViews to delete.
     * @example
     * // Delete a few SitePageViews
     * const { count } = await prisma.sitePageView.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SitePageViewDeleteManyArgs>(args?: SelectSubset<T, SitePageViewDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SitePageViews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SitePageViewUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SitePageViews
     * const sitePageView = await prisma.sitePageView.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SitePageViewUpdateManyArgs>(args: SelectSubset<T, SitePageViewUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SitePageViews and returns the data updated in the database.
     * @param {SitePageViewUpdateManyAndReturnArgs} args - Arguments to update many SitePageViews.
     * @example
     * // Update many SitePageViews
     * const sitePageView = await prisma.sitePageView.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SitePageViews and only return the `id`
     * const sitePageViewWithIdOnly = await prisma.sitePageView.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SitePageViewUpdateManyAndReturnArgs>(args: SelectSubset<T, SitePageViewUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SitePageViewPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SitePageView.
     * @param {SitePageViewUpsertArgs} args - Arguments to update or create a SitePageView.
     * @example
     * // Update or create a SitePageView
     * const sitePageView = await prisma.sitePageView.upsert({
     *   create: {
     *     // ... data to create a SitePageView
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SitePageView we want to update
     *   }
     * })
     */
    upsert<T extends SitePageViewUpsertArgs>(args: SelectSubset<T, SitePageViewUpsertArgs<ExtArgs>>): Prisma__SitePageViewClient<$Result.GetResult<Prisma.$SitePageViewPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SitePageViews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SitePageViewCountArgs} args - Arguments to filter SitePageViews to count.
     * @example
     * // Count the number of SitePageViews
     * const count = await prisma.sitePageView.count({
     *   where: {
     *     // ... the filter for the SitePageViews we want to count
     *   }
     * })
    **/
    count<T extends SitePageViewCountArgs>(
      args?: Subset<T, SitePageViewCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SitePageViewCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SitePageView.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SitePageViewAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SitePageViewAggregateArgs>(args: Subset<T, SitePageViewAggregateArgs>): Prisma.PrismaPromise<GetSitePageViewAggregateType<T>>

    /**
     * Group by SitePageView.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SitePageViewGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SitePageViewGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SitePageViewGroupByArgs['orderBy'] }
        : { orderBy?: SitePageViewGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SitePageViewGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSitePageViewGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SitePageView model
   */
  readonly fields: SitePageViewFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SitePageView.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SitePageViewClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SitePageView model
   */
  interface SitePageViewFieldRefs {
    readonly id: FieldRef<"SitePageView", 'String'>
    readonly pathname: FieldRef<"SitePageView", 'String'>
    readonly visitorHash: FieldRef<"SitePageView", 'String'>
    readonly createdAt: FieldRef<"SitePageView", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SitePageView findUnique
   */
  export type SitePageViewFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SitePageView
     */
    select?: SitePageViewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SitePageView
     */
    omit?: SitePageViewOmit<ExtArgs> | null
    /**
     * Filter, which SitePageView to fetch.
     */
    where: SitePageViewWhereUniqueInput
  }

  /**
   * SitePageView findUniqueOrThrow
   */
  export type SitePageViewFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SitePageView
     */
    select?: SitePageViewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SitePageView
     */
    omit?: SitePageViewOmit<ExtArgs> | null
    /**
     * Filter, which SitePageView to fetch.
     */
    where: SitePageViewWhereUniqueInput
  }

  /**
   * SitePageView findFirst
   */
  export type SitePageViewFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SitePageView
     */
    select?: SitePageViewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SitePageView
     */
    omit?: SitePageViewOmit<ExtArgs> | null
    /**
     * Filter, which SitePageView to fetch.
     */
    where?: SitePageViewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SitePageViews to fetch.
     */
    orderBy?: SitePageViewOrderByWithRelationInput | SitePageViewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SitePageViews.
     */
    cursor?: SitePageViewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SitePageViews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SitePageViews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SitePageViews.
     */
    distinct?: SitePageViewScalarFieldEnum | SitePageViewScalarFieldEnum[]
  }

  /**
   * SitePageView findFirstOrThrow
   */
  export type SitePageViewFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SitePageView
     */
    select?: SitePageViewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SitePageView
     */
    omit?: SitePageViewOmit<ExtArgs> | null
    /**
     * Filter, which SitePageView to fetch.
     */
    where?: SitePageViewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SitePageViews to fetch.
     */
    orderBy?: SitePageViewOrderByWithRelationInput | SitePageViewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SitePageViews.
     */
    cursor?: SitePageViewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SitePageViews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SitePageViews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SitePageViews.
     */
    distinct?: SitePageViewScalarFieldEnum | SitePageViewScalarFieldEnum[]
  }

  /**
   * SitePageView findMany
   */
  export type SitePageViewFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SitePageView
     */
    select?: SitePageViewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SitePageView
     */
    omit?: SitePageViewOmit<ExtArgs> | null
    /**
     * Filter, which SitePageViews to fetch.
     */
    where?: SitePageViewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SitePageViews to fetch.
     */
    orderBy?: SitePageViewOrderByWithRelationInput | SitePageViewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SitePageViews.
     */
    cursor?: SitePageViewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SitePageViews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SitePageViews.
     */
    skip?: number
    distinct?: SitePageViewScalarFieldEnum | SitePageViewScalarFieldEnum[]
  }

  /**
   * SitePageView create
   */
  export type SitePageViewCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SitePageView
     */
    select?: SitePageViewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SitePageView
     */
    omit?: SitePageViewOmit<ExtArgs> | null
    /**
     * The data needed to create a SitePageView.
     */
    data: XOR<SitePageViewCreateInput, SitePageViewUncheckedCreateInput>
  }

  /**
   * SitePageView createMany
   */
  export type SitePageViewCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SitePageViews.
     */
    data: SitePageViewCreateManyInput | SitePageViewCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SitePageView createManyAndReturn
   */
  export type SitePageViewCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SitePageView
     */
    select?: SitePageViewSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SitePageView
     */
    omit?: SitePageViewOmit<ExtArgs> | null
    /**
     * The data used to create many SitePageViews.
     */
    data: SitePageViewCreateManyInput | SitePageViewCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SitePageView update
   */
  export type SitePageViewUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SitePageView
     */
    select?: SitePageViewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SitePageView
     */
    omit?: SitePageViewOmit<ExtArgs> | null
    /**
     * The data needed to update a SitePageView.
     */
    data: XOR<SitePageViewUpdateInput, SitePageViewUncheckedUpdateInput>
    /**
     * Choose, which SitePageView to update.
     */
    where: SitePageViewWhereUniqueInput
  }

  /**
   * SitePageView updateMany
   */
  export type SitePageViewUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SitePageViews.
     */
    data: XOR<SitePageViewUpdateManyMutationInput, SitePageViewUncheckedUpdateManyInput>
    /**
     * Filter which SitePageViews to update
     */
    where?: SitePageViewWhereInput
    /**
     * Limit how many SitePageViews to update.
     */
    limit?: number
  }

  /**
   * SitePageView updateManyAndReturn
   */
  export type SitePageViewUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SitePageView
     */
    select?: SitePageViewSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SitePageView
     */
    omit?: SitePageViewOmit<ExtArgs> | null
    /**
     * The data used to update SitePageViews.
     */
    data: XOR<SitePageViewUpdateManyMutationInput, SitePageViewUncheckedUpdateManyInput>
    /**
     * Filter which SitePageViews to update
     */
    where?: SitePageViewWhereInput
    /**
     * Limit how many SitePageViews to update.
     */
    limit?: number
  }

  /**
   * SitePageView upsert
   */
  export type SitePageViewUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SitePageView
     */
    select?: SitePageViewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SitePageView
     */
    omit?: SitePageViewOmit<ExtArgs> | null
    /**
     * The filter to search for the SitePageView to update in case it exists.
     */
    where: SitePageViewWhereUniqueInput
    /**
     * In case the SitePageView found by the `where` argument doesn't exist, create a new SitePageView with this data.
     */
    create: XOR<SitePageViewCreateInput, SitePageViewUncheckedCreateInput>
    /**
     * In case the SitePageView was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SitePageViewUpdateInput, SitePageViewUncheckedUpdateInput>
  }

  /**
   * SitePageView delete
   */
  export type SitePageViewDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SitePageView
     */
    select?: SitePageViewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SitePageView
     */
    omit?: SitePageViewOmit<ExtArgs> | null
    /**
     * Filter which SitePageView to delete.
     */
    where: SitePageViewWhereUniqueInput
  }

  /**
   * SitePageView deleteMany
   */
  export type SitePageViewDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SitePageViews to delete
     */
    where?: SitePageViewWhereInput
    /**
     * Limit how many SitePageViews to delete.
     */
    limit?: number
  }

  /**
   * SitePageView without action
   */
  export type SitePageViewDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SitePageView
     */
    select?: SitePageViewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SitePageView
     */
    omit?: SitePageViewOmit<ExtArgs> | null
  }


  /**
   * Model BlogBrief
   */

  export type AggregateBlogBrief = {
    _count: BlogBriefCountAggregateOutputType | null
    _avg: BlogBriefAvgAggregateOutputType | null
    _sum: BlogBriefSumAggregateOutputType | null
    _min: BlogBriefMinAggregateOutputType | null
    _max: BlogBriefMaxAggregateOutputType | null
  }

  export type BlogBriefAvgAggregateOutputType = {
    selectedDraftIndex: number | null
  }

  export type BlogBriefSumAggregateOutputType = {
    selectedDraftIndex: number | null
  }

  export type BlogBriefMinAggregateOutputType = {
    id: string | null
    title: string | null
    topic: string | null
    goal: string | null
    audience: string | null
    userContext: string | null
    tone: string | null
    depth: string | null
    backendRequestId: string | null
    selectedDraftIndex: number | null
    finalDraftContent: string | null
    slug: string | null
    locale: string | null
    publishedAt: Date | null
    translationStatus: string | null
    translationError: string | null
    translationTriggerRunId: string | null
    englishSlug: string | null
    translationStartedAt: Date | null
    translationCompletedAt: Date | null
    generationError: string | null
    idea: string | null
    clientHints: string | null
    category: string | null
    status: $Enums.BlogBriefStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BlogBriefMaxAggregateOutputType = {
    id: string | null
    title: string | null
    topic: string | null
    goal: string | null
    audience: string | null
    userContext: string | null
    tone: string | null
    depth: string | null
    backendRequestId: string | null
    selectedDraftIndex: number | null
    finalDraftContent: string | null
    slug: string | null
    locale: string | null
    publishedAt: Date | null
    translationStatus: string | null
    translationError: string | null
    translationTriggerRunId: string | null
    englishSlug: string | null
    translationStartedAt: Date | null
    translationCompletedAt: Date | null
    generationError: string | null
    idea: string | null
    clientHints: string | null
    category: string | null
    status: $Enums.BlogBriefStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BlogBriefCountAggregateOutputType = {
    id: number
    title: number
    topic: number
    goal: number
    audience: number
    userContext: number
    tone: number
    keywords: number
    includeServices: number
    constraints: number
    depth: number
    backendRequestId: number
    selectedDraftIndex: number
    finalDraftContent: number
    slug: number
    locale: number
    publishedAt: number
    translationStatus: number
    translationError: number
    translationTriggerRunId: number
    englishSlug: number
    translationStartedAt: number
    translationCompletedAt: number
    generationError: number
    idea: number
    clientHints: number
    category: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BlogBriefAvgAggregateInputType = {
    selectedDraftIndex?: true
  }

  export type BlogBriefSumAggregateInputType = {
    selectedDraftIndex?: true
  }

  export type BlogBriefMinAggregateInputType = {
    id?: true
    title?: true
    topic?: true
    goal?: true
    audience?: true
    userContext?: true
    tone?: true
    depth?: true
    backendRequestId?: true
    selectedDraftIndex?: true
    finalDraftContent?: true
    slug?: true
    locale?: true
    publishedAt?: true
    translationStatus?: true
    translationError?: true
    translationTriggerRunId?: true
    englishSlug?: true
    translationStartedAt?: true
    translationCompletedAt?: true
    generationError?: true
    idea?: true
    clientHints?: true
    category?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BlogBriefMaxAggregateInputType = {
    id?: true
    title?: true
    topic?: true
    goal?: true
    audience?: true
    userContext?: true
    tone?: true
    depth?: true
    backendRequestId?: true
    selectedDraftIndex?: true
    finalDraftContent?: true
    slug?: true
    locale?: true
    publishedAt?: true
    translationStatus?: true
    translationError?: true
    translationTriggerRunId?: true
    englishSlug?: true
    translationStartedAt?: true
    translationCompletedAt?: true
    generationError?: true
    idea?: true
    clientHints?: true
    category?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BlogBriefCountAggregateInputType = {
    id?: true
    title?: true
    topic?: true
    goal?: true
    audience?: true
    userContext?: true
    tone?: true
    keywords?: true
    includeServices?: true
    constraints?: true
    depth?: true
    backendRequestId?: true
    selectedDraftIndex?: true
    finalDraftContent?: true
    slug?: true
    locale?: true
    publishedAt?: true
    translationStatus?: true
    translationError?: true
    translationTriggerRunId?: true
    englishSlug?: true
    translationStartedAt?: true
    translationCompletedAt?: true
    generationError?: true
    idea?: true
    clientHints?: true
    category?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BlogBriefAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BlogBrief to aggregate.
     */
    where?: BlogBriefWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlogBriefs to fetch.
     */
    orderBy?: BlogBriefOrderByWithRelationInput | BlogBriefOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BlogBriefWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlogBriefs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlogBriefs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BlogBriefs
    **/
    _count?: true | BlogBriefCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BlogBriefAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BlogBriefSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BlogBriefMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BlogBriefMaxAggregateInputType
  }

  export type GetBlogBriefAggregateType<T extends BlogBriefAggregateArgs> = {
        [P in keyof T & keyof AggregateBlogBrief]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBlogBrief[P]>
      : GetScalarType<T[P], AggregateBlogBrief[P]>
  }




  export type BlogBriefGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BlogBriefWhereInput
    orderBy?: BlogBriefOrderByWithAggregationInput | BlogBriefOrderByWithAggregationInput[]
    by: BlogBriefScalarFieldEnum[] | BlogBriefScalarFieldEnum
    having?: BlogBriefScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BlogBriefCountAggregateInputType | true
    _avg?: BlogBriefAvgAggregateInputType
    _sum?: BlogBriefSumAggregateInputType
    _min?: BlogBriefMinAggregateInputType
    _max?: BlogBriefMaxAggregateInputType
  }

  export type BlogBriefGroupByOutputType = {
    id: string
    title: string | null
    topic: string
    goal: string
    audience: string
    userContext: string | null
    tone: string | null
    keywords: string[]
    includeServices: string[]
    constraints: string[]
    depth: string | null
    backendRequestId: string | null
    selectedDraftIndex: number | null
    finalDraftContent: string | null
    slug: string | null
    locale: string
    publishedAt: Date | null
    translationStatus: string
    translationError: string | null
    translationTriggerRunId: string | null
    englishSlug: string | null
    translationStartedAt: Date | null
    translationCompletedAt: Date | null
    generationError: string | null
    idea: string
    clientHints: string | null
    category: string | null
    status: $Enums.BlogBriefStatus
    createdAt: Date
    updatedAt: Date
    _count: BlogBriefCountAggregateOutputType | null
    _avg: BlogBriefAvgAggregateOutputType | null
    _sum: BlogBriefSumAggregateOutputType | null
    _min: BlogBriefMinAggregateOutputType | null
    _max: BlogBriefMaxAggregateOutputType | null
  }

  type GetBlogBriefGroupByPayload<T extends BlogBriefGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BlogBriefGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BlogBriefGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BlogBriefGroupByOutputType[P]>
            : GetScalarType<T[P], BlogBriefGroupByOutputType[P]>
        }
      >
    >


  export type BlogBriefSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    topic?: boolean
    goal?: boolean
    audience?: boolean
    userContext?: boolean
    tone?: boolean
    keywords?: boolean
    includeServices?: boolean
    constraints?: boolean
    depth?: boolean
    backendRequestId?: boolean
    selectedDraftIndex?: boolean
    finalDraftContent?: boolean
    slug?: boolean
    locale?: boolean
    publishedAt?: boolean
    translationStatus?: boolean
    translationError?: boolean
    translationTriggerRunId?: boolean
    englishSlug?: boolean
    translationStartedAt?: boolean
    translationCompletedAt?: boolean
    generationError?: boolean
    idea?: boolean
    clientHints?: boolean
    category?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    draftEdits?: boolean | BlogBrief$draftEditsArgs<ExtArgs>
    _count?: boolean | BlogBriefCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["blogBrief"]>

  export type BlogBriefSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    topic?: boolean
    goal?: boolean
    audience?: boolean
    userContext?: boolean
    tone?: boolean
    keywords?: boolean
    includeServices?: boolean
    constraints?: boolean
    depth?: boolean
    backendRequestId?: boolean
    selectedDraftIndex?: boolean
    finalDraftContent?: boolean
    slug?: boolean
    locale?: boolean
    publishedAt?: boolean
    translationStatus?: boolean
    translationError?: boolean
    translationTriggerRunId?: boolean
    englishSlug?: boolean
    translationStartedAt?: boolean
    translationCompletedAt?: boolean
    generationError?: boolean
    idea?: boolean
    clientHints?: boolean
    category?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["blogBrief"]>

  export type BlogBriefSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    topic?: boolean
    goal?: boolean
    audience?: boolean
    userContext?: boolean
    tone?: boolean
    keywords?: boolean
    includeServices?: boolean
    constraints?: boolean
    depth?: boolean
    backendRequestId?: boolean
    selectedDraftIndex?: boolean
    finalDraftContent?: boolean
    slug?: boolean
    locale?: boolean
    publishedAt?: boolean
    translationStatus?: boolean
    translationError?: boolean
    translationTriggerRunId?: boolean
    englishSlug?: boolean
    translationStartedAt?: boolean
    translationCompletedAt?: boolean
    generationError?: boolean
    idea?: boolean
    clientHints?: boolean
    category?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["blogBrief"]>

  export type BlogBriefSelectScalar = {
    id?: boolean
    title?: boolean
    topic?: boolean
    goal?: boolean
    audience?: boolean
    userContext?: boolean
    tone?: boolean
    keywords?: boolean
    includeServices?: boolean
    constraints?: boolean
    depth?: boolean
    backendRequestId?: boolean
    selectedDraftIndex?: boolean
    finalDraftContent?: boolean
    slug?: boolean
    locale?: boolean
    publishedAt?: boolean
    translationStatus?: boolean
    translationError?: boolean
    translationTriggerRunId?: boolean
    englishSlug?: boolean
    translationStartedAt?: boolean
    translationCompletedAt?: boolean
    generationError?: boolean
    idea?: boolean
    clientHints?: boolean
    category?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type BlogBriefOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "topic" | "goal" | "audience" | "userContext" | "tone" | "keywords" | "includeServices" | "constraints" | "depth" | "backendRequestId" | "selectedDraftIndex" | "finalDraftContent" | "slug" | "locale" | "publishedAt" | "translationStatus" | "translationError" | "translationTriggerRunId" | "englishSlug" | "translationStartedAt" | "translationCompletedAt" | "generationError" | "idea" | "clientHints" | "category" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["blogBrief"]>
  export type BlogBriefInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    draftEdits?: boolean | BlogBrief$draftEditsArgs<ExtArgs>
    _count?: boolean | BlogBriefCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type BlogBriefIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type BlogBriefIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $BlogBriefPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BlogBrief"
    objects: {
      draftEdits: Prisma.$BlogDraftEditPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string | null
      topic: string
      goal: string
      audience: string
      userContext: string | null
      tone: string | null
      keywords: string[]
      includeServices: string[]
      constraints: string[]
      depth: string | null
      backendRequestId: string | null
      selectedDraftIndex: number | null
      finalDraftContent: string | null
      slug: string | null
      locale: string
      publishedAt: Date | null
      translationStatus: string
      translationError: string | null
      translationTriggerRunId: string | null
      englishSlug: string | null
      translationStartedAt: Date | null
      translationCompletedAt: Date | null
      generationError: string | null
      idea: string
      clientHints: string | null
      category: string | null
      status: $Enums.BlogBriefStatus
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["blogBrief"]>
    composites: {}
  }

  type BlogBriefGetPayload<S extends boolean | null | undefined | BlogBriefDefaultArgs> = $Result.GetResult<Prisma.$BlogBriefPayload, S>

  type BlogBriefCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BlogBriefFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BlogBriefCountAggregateInputType | true
    }

  export interface BlogBriefDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BlogBrief'], meta: { name: 'BlogBrief' } }
    /**
     * Find zero or one BlogBrief that matches the filter.
     * @param {BlogBriefFindUniqueArgs} args - Arguments to find a BlogBrief
     * @example
     * // Get one BlogBrief
     * const blogBrief = await prisma.blogBrief.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BlogBriefFindUniqueArgs>(args: SelectSubset<T, BlogBriefFindUniqueArgs<ExtArgs>>): Prisma__BlogBriefClient<$Result.GetResult<Prisma.$BlogBriefPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BlogBrief that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BlogBriefFindUniqueOrThrowArgs} args - Arguments to find a BlogBrief
     * @example
     * // Get one BlogBrief
     * const blogBrief = await prisma.blogBrief.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BlogBriefFindUniqueOrThrowArgs>(args: SelectSubset<T, BlogBriefFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BlogBriefClient<$Result.GetResult<Prisma.$BlogBriefPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BlogBrief that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogBriefFindFirstArgs} args - Arguments to find a BlogBrief
     * @example
     * // Get one BlogBrief
     * const blogBrief = await prisma.blogBrief.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BlogBriefFindFirstArgs>(args?: SelectSubset<T, BlogBriefFindFirstArgs<ExtArgs>>): Prisma__BlogBriefClient<$Result.GetResult<Prisma.$BlogBriefPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BlogBrief that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogBriefFindFirstOrThrowArgs} args - Arguments to find a BlogBrief
     * @example
     * // Get one BlogBrief
     * const blogBrief = await prisma.blogBrief.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BlogBriefFindFirstOrThrowArgs>(args?: SelectSubset<T, BlogBriefFindFirstOrThrowArgs<ExtArgs>>): Prisma__BlogBriefClient<$Result.GetResult<Prisma.$BlogBriefPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BlogBriefs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogBriefFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BlogBriefs
     * const blogBriefs = await prisma.blogBrief.findMany()
     * 
     * // Get first 10 BlogBriefs
     * const blogBriefs = await prisma.blogBrief.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const blogBriefWithIdOnly = await prisma.blogBrief.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BlogBriefFindManyArgs>(args?: SelectSubset<T, BlogBriefFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlogBriefPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BlogBrief.
     * @param {BlogBriefCreateArgs} args - Arguments to create a BlogBrief.
     * @example
     * // Create one BlogBrief
     * const BlogBrief = await prisma.blogBrief.create({
     *   data: {
     *     // ... data to create a BlogBrief
     *   }
     * })
     * 
     */
    create<T extends BlogBriefCreateArgs>(args: SelectSubset<T, BlogBriefCreateArgs<ExtArgs>>): Prisma__BlogBriefClient<$Result.GetResult<Prisma.$BlogBriefPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BlogBriefs.
     * @param {BlogBriefCreateManyArgs} args - Arguments to create many BlogBriefs.
     * @example
     * // Create many BlogBriefs
     * const blogBrief = await prisma.blogBrief.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BlogBriefCreateManyArgs>(args?: SelectSubset<T, BlogBriefCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BlogBriefs and returns the data saved in the database.
     * @param {BlogBriefCreateManyAndReturnArgs} args - Arguments to create many BlogBriefs.
     * @example
     * // Create many BlogBriefs
     * const blogBrief = await prisma.blogBrief.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BlogBriefs and only return the `id`
     * const blogBriefWithIdOnly = await prisma.blogBrief.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BlogBriefCreateManyAndReturnArgs>(args?: SelectSubset<T, BlogBriefCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlogBriefPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a BlogBrief.
     * @param {BlogBriefDeleteArgs} args - Arguments to delete one BlogBrief.
     * @example
     * // Delete one BlogBrief
     * const BlogBrief = await prisma.blogBrief.delete({
     *   where: {
     *     // ... filter to delete one BlogBrief
     *   }
     * })
     * 
     */
    delete<T extends BlogBriefDeleteArgs>(args: SelectSubset<T, BlogBriefDeleteArgs<ExtArgs>>): Prisma__BlogBriefClient<$Result.GetResult<Prisma.$BlogBriefPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BlogBrief.
     * @param {BlogBriefUpdateArgs} args - Arguments to update one BlogBrief.
     * @example
     * // Update one BlogBrief
     * const blogBrief = await prisma.blogBrief.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BlogBriefUpdateArgs>(args: SelectSubset<T, BlogBriefUpdateArgs<ExtArgs>>): Prisma__BlogBriefClient<$Result.GetResult<Prisma.$BlogBriefPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BlogBriefs.
     * @param {BlogBriefDeleteManyArgs} args - Arguments to filter BlogBriefs to delete.
     * @example
     * // Delete a few BlogBriefs
     * const { count } = await prisma.blogBrief.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BlogBriefDeleteManyArgs>(args?: SelectSubset<T, BlogBriefDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BlogBriefs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogBriefUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BlogBriefs
     * const blogBrief = await prisma.blogBrief.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BlogBriefUpdateManyArgs>(args: SelectSubset<T, BlogBriefUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BlogBriefs and returns the data updated in the database.
     * @param {BlogBriefUpdateManyAndReturnArgs} args - Arguments to update many BlogBriefs.
     * @example
     * // Update many BlogBriefs
     * const blogBrief = await prisma.blogBrief.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more BlogBriefs and only return the `id`
     * const blogBriefWithIdOnly = await prisma.blogBrief.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BlogBriefUpdateManyAndReturnArgs>(args: SelectSubset<T, BlogBriefUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlogBriefPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one BlogBrief.
     * @param {BlogBriefUpsertArgs} args - Arguments to update or create a BlogBrief.
     * @example
     * // Update or create a BlogBrief
     * const blogBrief = await prisma.blogBrief.upsert({
     *   create: {
     *     // ... data to create a BlogBrief
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BlogBrief we want to update
     *   }
     * })
     */
    upsert<T extends BlogBriefUpsertArgs>(args: SelectSubset<T, BlogBriefUpsertArgs<ExtArgs>>): Prisma__BlogBriefClient<$Result.GetResult<Prisma.$BlogBriefPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BlogBriefs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogBriefCountArgs} args - Arguments to filter BlogBriefs to count.
     * @example
     * // Count the number of BlogBriefs
     * const count = await prisma.blogBrief.count({
     *   where: {
     *     // ... the filter for the BlogBriefs we want to count
     *   }
     * })
    **/
    count<T extends BlogBriefCountArgs>(
      args?: Subset<T, BlogBriefCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BlogBriefCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BlogBrief.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogBriefAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BlogBriefAggregateArgs>(args: Subset<T, BlogBriefAggregateArgs>): Prisma.PrismaPromise<GetBlogBriefAggregateType<T>>

    /**
     * Group by BlogBrief.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogBriefGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BlogBriefGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BlogBriefGroupByArgs['orderBy'] }
        : { orderBy?: BlogBriefGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BlogBriefGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBlogBriefGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BlogBrief model
   */
  readonly fields: BlogBriefFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BlogBrief.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BlogBriefClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    draftEdits<T extends BlogBrief$draftEditsArgs<ExtArgs> = {}>(args?: Subset<T, BlogBrief$draftEditsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlogDraftEditPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the BlogBrief model
   */
  interface BlogBriefFieldRefs {
    readonly id: FieldRef<"BlogBrief", 'String'>
    readonly title: FieldRef<"BlogBrief", 'String'>
    readonly topic: FieldRef<"BlogBrief", 'String'>
    readonly goal: FieldRef<"BlogBrief", 'String'>
    readonly audience: FieldRef<"BlogBrief", 'String'>
    readonly userContext: FieldRef<"BlogBrief", 'String'>
    readonly tone: FieldRef<"BlogBrief", 'String'>
    readonly keywords: FieldRef<"BlogBrief", 'String[]'>
    readonly includeServices: FieldRef<"BlogBrief", 'String[]'>
    readonly constraints: FieldRef<"BlogBrief", 'String[]'>
    readonly depth: FieldRef<"BlogBrief", 'String'>
    readonly backendRequestId: FieldRef<"BlogBrief", 'String'>
    readonly selectedDraftIndex: FieldRef<"BlogBrief", 'Int'>
    readonly finalDraftContent: FieldRef<"BlogBrief", 'String'>
    readonly slug: FieldRef<"BlogBrief", 'String'>
    readonly locale: FieldRef<"BlogBrief", 'String'>
    readonly publishedAt: FieldRef<"BlogBrief", 'DateTime'>
    readonly translationStatus: FieldRef<"BlogBrief", 'String'>
    readonly translationError: FieldRef<"BlogBrief", 'String'>
    readonly translationTriggerRunId: FieldRef<"BlogBrief", 'String'>
    readonly englishSlug: FieldRef<"BlogBrief", 'String'>
    readonly translationStartedAt: FieldRef<"BlogBrief", 'DateTime'>
    readonly translationCompletedAt: FieldRef<"BlogBrief", 'DateTime'>
    readonly generationError: FieldRef<"BlogBrief", 'String'>
    readonly idea: FieldRef<"BlogBrief", 'String'>
    readonly clientHints: FieldRef<"BlogBrief", 'String'>
    readonly category: FieldRef<"BlogBrief", 'String'>
    readonly status: FieldRef<"BlogBrief", 'BlogBriefStatus'>
    readonly createdAt: FieldRef<"BlogBrief", 'DateTime'>
    readonly updatedAt: FieldRef<"BlogBrief", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * BlogBrief findUnique
   */
  export type BlogBriefFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogBrief
     */
    select?: BlogBriefSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogBrief
     */
    omit?: BlogBriefOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogBriefInclude<ExtArgs> | null
    /**
     * Filter, which BlogBrief to fetch.
     */
    where: BlogBriefWhereUniqueInput
  }

  /**
   * BlogBrief findUniqueOrThrow
   */
  export type BlogBriefFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogBrief
     */
    select?: BlogBriefSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogBrief
     */
    omit?: BlogBriefOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogBriefInclude<ExtArgs> | null
    /**
     * Filter, which BlogBrief to fetch.
     */
    where: BlogBriefWhereUniqueInput
  }

  /**
   * BlogBrief findFirst
   */
  export type BlogBriefFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogBrief
     */
    select?: BlogBriefSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogBrief
     */
    omit?: BlogBriefOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogBriefInclude<ExtArgs> | null
    /**
     * Filter, which BlogBrief to fetch.
     */
    where?: BlogBriefWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlogBriefs to fetch.
     */
    orderBy?: BlogBriefOrderByWithRelationInput | BlogBriefOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BlogBriefs.
     */
    cursor?: BlogBriefWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlogBriefs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlogBriefs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BlogBriefs.
     */
    distinct?: BlogBriefScalarFieldEnum | BlogBriefScalarFieldEnum[]
  }

  /**
   * BlogBrief findFirstOrThrow
   */
  export type BlogBriefFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogBrief
     */
    select?: BlogBriefSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogBrief
     */
    omit?: BlogBriefOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogBriefInclude<ExtArgs> | null
    /**
     * Filter, which BlogBrief to fetch.
     */
    where?: BlogBriefWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlogBriefs to fetch.
     */
    orderBy?: BlogBriefOrderByWithRelationInput | BlogBriefOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BlogBriefs.
     */
    cursor?: BlogBriefWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlogBriefs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlogBriefs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BlogBriefs.
     */
    distinct?: BlogBriefScalarFieldEnum | BlogBriefScalarFieldEnum[]
  }

  /**
   * BlogBrief findMany
   */
  export type BlogBriefFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogBrief
     */
    select?: BlogBriefSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogBrief
     */
    omit?: BlogBriefOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogBriefInclude<ExtArgs> | null
    /**
     * Filter, which BlogBriefs to fetch.
     */
    where?: BlogBriefWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlogBriefs to fetch.
     */
    orderBy?: BlogBriefOrderByWithRelationInput | BlogBriefOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BlogBriefs.
     */
    cursor?: BlogBriefWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlogBriefs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlogBriefs.
     */
    skip?: number
    distinct?: BlogBriefScalarFieldEnum | BlogBriefScalarFieldEnum[]
  }

  /**
   * BlogBrief create
   */
  export type BlogBriefCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogBrief
     */
    select?: BlogBriefSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogBrief
     */
    omit?: BlogBriefOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogBriefInclude<ExtArgs> | null
    /**
     * The data needed to create a BlogBrief.
     */
    data: XOR<BlogBriefCreateInput, BlogBriefUncheckedCreateInput>
  }

  /**
   * BlogBrief createMany
   */
  export type BlogBriefCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BlogBriefs.
     */
    data: BlogBriefCreateManyInput | BlogBriefCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BlogBrief createManyAndReturn
   */
  export type BlogBriefCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogBrief
     */
    select?: BlogBriefSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BlogBrief
     */
    omit?: BlogBriefOmit<ExtArgs> | null
    /**
     * The data used to create many BlogBriefs.
     */
    data: BlogBriefCreateManyInput | BlogBriefCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BlogBrief update
   */
  export type BlogBriefUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogBrief
     */
    select?: BlogBriefSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogBrief
     */
    omit?: BlogBriefOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogBriefInclude<ExtArgs> | null
    /**
     * The data needed to update a BlogBrief.
     */
    data: XOR<BlogBriefUpdateInput, BlogBriefUncheckedUpdateInput>
    /**
     * Choose, which BlogBrief to update.
     */
    where: BlogBriefWhereUniqueInput
  }

  /**
   * BlogBrief updateMany
   */
  export type BlogBriefUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BlogBriefs.
     */
    data: XOR<BlogBriefUpdateManyMutationInput, BlogBriefUncheckedUpdateManyInput>
    /**
     * Filter which BlogBriefs to update
     */
    where?: BlogBriefWhereInput
    /**
     * Limit how many BlogBriefs to update.
     */
    limit?: number
  }

  /**
   * BlogBrief updateManyAndReturn
   */
  export type BlogBriefUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogBrief
     */
    select?: BlogBriefSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BlogBrief
     */
    omit?: BlogBriefOmit<ExtArgs> | null
    /**
     * The data used to update BlogBriefs.
     */
    data: XOR<BlogBriefUpdateManyMutationInput, BlogBriefUncheckedUpdateManyInput>
    /**
     * Filter which BlogBriefs to update
     */
    where?: BlogBriefWhereInput
    /**
     * Limit how many BlogBriefs to update.
     */
    limit?: number
  }

  /**
   * BlogBrief upsert
   */
  export type BlogBriefUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogBrief
     */
    select?: BlogBriefSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogBrief
     */
    omit?: BlogBriefOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogBriefInclude<ExtArgs> | null
    /**
     * The filter to search for the BlogBrief to update in case it exists.
     */
    where: BlogBriefWhereUniqueInput
    /**
     * In case the BlogBrief found by the `where` argument doesn't exist, create a new BlogBrief with this data.
     */
    create: XOR<BlogBriefCreateInput, BlogBriefUncheckedCreateInput>
    /**
     * In case the BlogBrief was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BlogBriefUpdateInput, BlogBriefUncheckedUpdateInput>
  }

  /**
   * BlogBrief delete
   */
  export type BlogBriefDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogBrief
     */
    select?: BlogBriefSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogBrief
     */
    omit?: BlogBriefOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogBriefInclude<ExtArgs> | null
    /**
     * Filter which BlogBrief to delete.
     */
    where: BlogBriefWhereUniqueInput
  }

  /**
   * BlogBrief deleteMany
   */
  export type BlogBriefDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BlogBriefs to delete
     */
    where?: BlogBriefWhereInput
    /**
     * Limit how many BlogBriefs to delete.
     */
    limit?: number
  }

  /**
   * BlogBrief.draftEdits
   */
  export type BlogBrief$draftEditsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogDraftEdit
     */
    select?: BlogDraftEditSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogDraftEdit
     */
    omit?: BlogDraftEditOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogDraftEditInclude<ExtArgs> | null
    where?: BlogDraftEditWhereInput
    orderBy?: BlogDraftEditOrderByWithRelationInput | BlogDraftEditOrderByWithRelationInput[]
    cursor?: BlogDraftEditWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BlogDraftEditScalarFieldEnum | BlogDraftEditScalarFieldEnum[]
  }

  /**
   * BlogBrief without action
   */
  export type BlogBriefDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogBrief
     */
    select?: BlogBriefSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogBrief
     */
    omit?: BlogBriefOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogBriefInclude<ExtArgs> | null
  }


  /**
   * Model BlogDraftEdit
   */

  export type AggregateBlogDraftEdit = {
    _count: BlogDraftEditCountAggregateOutputType | null
    _avg: BlogDraftEditAvgAggregateOutputType | null
    _sum: BlogDraftEditSumAggregateOutputType | null
    _min: BlogDraftEditMinAggregateOutputType | null
    _max: BlogDraftEditMaxAggregateOutputType | null
  }

  export type BlogDraftEditAvgAggregateOutputType = {
    draftIndex: number | null
  }

  export type BlogDraftEditSumAggregateOutputType = {
    draftIndex: number | null
  }

  export type BlogDraftEditMinAggregateOutputType = {
    id: string | null
    briefId: string | null
    draftIndex: number | null
    content: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BlogDraftEditMaxAggregateOutputType = {
    id: string | null
    briefId: string | null
    draftIndex: number | null
    content: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BlogDraftEditCountAggregateOutputType = {
    id: number
    briefId: number
    draftIndex: number
    content: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BlogDraftEditAvgAggregateInputType = {
    draftIndex?: true
  }

  export type BlogDraftEditSumAggregateInputType = {
    draftIndex?: true
  }

  export type BlogDraftEditMinAggregateInputType = {
    id?: true
    briefId?: true
    draftIndex?: true
    content?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BlogDraftEditMaxAggregateInputType = {
    id?: true
    briefId?: true
    draftIndex?: true
    content?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BlogDraftEditCountAggregateInputType = {
    id?: true
    briefId?: true
    draftIndex?: true
    content?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BlogDraftEditAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BlogDraftEdit to aggregate.
     */
    where?: BlogDraftEditWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlogDraftEdits to fetch.
     */
    orderBy?: BlogDraftEditOrderByWithRelationInput | BlogDraftEditOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BlogDraftEditWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlogDraftEdits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlogDraftEdits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BlogDraftEdits
    **/
    _count?: true | BlogDraftEditCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BlogDraftEditAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BlogDraftEditSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BlogDraftEditMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BlogDraftEditMaxAggregateInputType
  }

  export type GetBlogDraftEditAggregateType<T extends BlogDraftEditAggregateArgs> = {
        [P in keyof T & keyof AggregateBlogDraftEdit]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBlogDraftEdit[P]>
      : GetScalarType<T[P], AggregateBlogDraftEdit[P]>
  }




  export type BlogDraftEditGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BlogDraftEditWhereInput
    orderBy?: BlogDraftEditOrderByWithAggregationInput | BlogDraftEditOrderByWithAggregationInput[]
    by: BlogDraftEditScalarFieldEnum[] | BlogDraftEditScalarFieldEnum
    having?: BlogDraftEditScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BlogDraftEditCountAggregateInputType | true
    _avg?: BlogDraftEditAvgAggregateInputType
    _sum?: BlogDraftEditSumAggregateInputType
    _min?: BlogDraftEditMinAggregateInputType
    _max?: BlogDraftEditMaxAggregateInputType
  }

  export type BlogDraftEditGroupByOutputType = {
    id: string
    briefId: string
    draftIndex: number
    content: string
    createdAt: Date
    updatedAt: Date
    _count: BlogDraftEditCountAggregateOutputType | null
    _avg: BlogDraftEditAvgAggregateOutputType | null
    _sum: BlogDraftEditSumAggregateOutputType | null
    _min: BlogDraftEditMinAggregateOutputType | null
    _max: BlogDraftEditMaxAggregateOutputType | null
  }

  type GetBlogDraftEditGroupByPayload<T extends BlogDraftEditGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BlogDraftEditGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BlogDraftEditGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BlogDraftEditGroupByOutputType[P]>
            : GetScalarType<T[P], BlogDraftEditGroupByOutputType[P]>
        }
      >
    >


  export type BlogDraftEditSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    briefId?: boolean
    draftIndex?: boolean
    content?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    brief?: boolean | BlogBriefDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["blogDraftEdit"]>

  export type BlogDraftEditSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    briefId?: boolean
    draftIndex?: boolean
    content?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    brief?: boolean | BlogBriefDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["blogDraftEdit"]>

  export type BlogDraftEditSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    briefId?: boolean
    draftIndex?: boolean
    content?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    brief?: boolean | BlogBriefDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["blogDraftEdit"]>

  export type BlogDraftEditSelectScalar = {
    id?: boolean
    briefId?: boolean
    draftIndex?: boolean
    content?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type BlogDraftEditOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "briefId" | "draftIndex" | "content" | "createdAt" | "updatedAt", ExtArgs["result"]["blogDraftEdit"]>
  export type BlogDraftEditInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    brief?: boolean | BlogBriefDefaultArgs<ExtArgs>
  }
  export type BlogDraftEditIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    brief?: boolean | BlogBriefDefaultArgs<ExtArgs>
  }
  export type BlogDraftEditIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    brief?: boolean | BlogBriefDefaultArgs<ExtArgs>
  }

  export type $BlogDraftEditPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BlogDraftEdit"
    objects: {
      brief: Prisma.$BlogBriefPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      briefId: string
      draftIndex: number
      content: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["blogDraftEdit"]>
    composites: {}
  }

  type BlogDraftEditGetPayload<S extends boolean | null | undefined | BlogDraftEditDefaultArgs> = $Result.GetResult<Prisma.$BlogDraftEditPayload, S>

  type BlogDraftEditCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BlogDraftEditFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BlogDraftEditCountAggregateInputType | true
    }

  export interface BlogDraftEditDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BlogDraftEdit'], meta: { name: 'BlogDraftEdit' } }
    /**
     * Find zero or one BlogDraftEdit that matches the filter.
     * @param {BlogDraftEditFindUniqueArgs} args - Arguments to find a BlogDraftEdit
     * @example
     * // Get one BlogDraftEdit
     * const blogDraftEdit = await prisma.blogDraftEdit.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BlogDraftEditFindUniqueArgs>(args: SelectSubset<T, BlogDraftEditFindUniqueArgs<ExtArgs>>): Prisma__BlogDraftEditClient<$Result.GetResult<Prisma.$BlogDraftEditPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BlogDraftEdit that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BlogDraftEditFindUniqueOrThrowArgs} args - Arguments to find a BlogDraftEdit
     * @example
     * // Get one BlogDraftEdit
     * const blogDraftEdit = await prisma.blogDraftEdit.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BlogDraftEditFindUniqueOrThrowArgs>(args: SelectSubset<T, BlogDraftEditFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BlogDraftEditClient<$Result.GetResult<Prisma.$BlogDraftEditPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BlogDraftEdit that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogDraftEditFindFirstArgs} args - Arguments to find a BlogDraftEdit
     * @example
     * // Get one BlogDraftEdit
     * const blogDraftEdit = await prisma.blogDraftEdit.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BlogDraftEditFindFirstArgs>(args?: SelectSubset<T, BlogDraftEditFindFirstArgs<ExtArgs>>): Prisma__BlogDraftEditClient<$Result.GetResult<Prisma.$BlogDraftEditPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BlogDraftEdit that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogDraftEditFindFirstOrThrowArgs} args - Arguments to find a BlogDraftEdit
     * @example
     * // Get one BlogDraftEdit
     * const blogDraftEdit = await prisma.blogDraftEdit.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BlogDraftEditFindFirstOrThrowArgs>(args?: SelectSubset<T, BlogDraftEditFindFirstOrThrowArgs<ExtArgs>>): Prisma__BlogDraftEditClient<$Result.GetResult<Prisma.$BlogDraftEditPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BlogDraftEdits that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogDraftEditFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BlogDraftEdits
     * const blogDraftEdits = await prisma.blogDraftEdit.findMany()
     * 
     * // Get first 10 BlogDraftEdits
     * const blogDraftEdits = await prisma.blogDraftEdit.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const blogDraftEditWithIdOnly = await prisma.blogDraftEdit.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BlogDraftEditFindManyArgs>(args?: SelectSubset<T, BlogDraftEditFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlogDraftEditPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BlogDraftEdit.
     * @param {BlogDraftEditCreateArgs} args - Arguments to create a BlogDraftEdit.
     * @example
     * // Create one BlogDraftEdit
     * const BlogDraftEdit = await prisma.blogDraftEdit.create({
     *   data: {
     *     // ... data to create a BlogDraftEdit
     *   }
     * })
     * 
     */
    create<T extends BlogDraftEditCreateArgs>(args: SelectSubset<T, BlogDraftEditCreateArgs<ExtArgs>>): Prisma__BlogDraftEditClient<$Result.GetResult<Prisma.$BlogDraftEditPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BlogDraftEdits.
     * @param {BlogDraftEditCreateManyArgs} args - Arguments to create many BlogDraftEdits.
     * @example
     * // Create many BlogDraftEdits
     * const blogDraftEdit = await prisma.blogDraftEdit.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BlogDraftEditCreateManyArgs>(args?: SelectSubset<T, BlogDraftEditCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BlogDraftEdits and returns the data saved in the database.
     * @param {BlogDraftEditCreateManyAndReturnArgs} args - Arguments to create many BlogDraftEdits.
     * @example
     * // Create many BlogDraftEdits
     * const blogDraftEdit = await prisma.blogDraftEdit.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BlogDraftEdits and only return the `id`
     * const blogDraftEditWithIdOnly = await prisma.blogDraftEdit.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BlogDraftEditCreateManyAndReturnArgs>(args?: SelectSubset<T, BlogDraftEditCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlogDraftEditPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a BlogDraftEdit.
     * @param {BlogDraftEditDeleteArgs} args - Arguments to delete one BlogDraftEdit.
     * @example
     * // Delete one BlogDraftEdit
     * const BlogDraftEdit = await prisma.blogDraftEdit.delete({
     *   where: {
     *     // ... filter to delete one BlogDraftEdit
     *   }
     * })
     * 
     */
    delete<T extends BlogDraftEditDeleteArgs>(args: SelectSubset<T, BlogDraftEditDeleteArgs<ExtArgs>>): Prisma__BlogDraftEditClient<$Result.GetResult<Prisma.$BlogDraftEditPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BlogDraftEdit.
     * @param {BlogDraftEditUpdateArgs} args - Arguments to update one BlogDraftEdit.
     * @example
     * // Update one BlogDraftEdit
     * const blogDraftEdit = await prisma.blogDraftEdit.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BlogDraftEditUpdateArgs>(args: SelectSubset<T, BlogDraftEditUpdateArgs<ExtArgs>>): Prisma__BlogDraftEditClient<$Result.GetResult<Prisma.$BlogDraftEditPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BlogDraftEdits.
     * @param {BlogDraftEditDeleteManyArgs} args - Arguments to filter BlogDraftEdits to delete.
     * @example
     * // Delete a few BlogDraftEdits
     * const { count } = await prisma.blogDraftEdit.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BlogDraftEditDeleteManyArgs>(args?: SelectSubset<T, BlogDraftEditDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BlogDraftEdits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogDraftEditUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BlogDraftEdits
     * const blogDraftEdit = await prisma.blogDraftEdit.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BlogDraftEditUpdateManyArgs>(args: SelectSubset<T, BlogDraftEditUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BlogDraftEdits and returns the data updated in the database.
     * @param {BlogDraftEditUpdateManyAndReturnArgs} args - Arguments to update many BlogDraftEdits.
     * @example
     * // Update many BlogDraftEdits
     * const blogDraftEdit = await prisma.blogDraftEdit.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more BlogDraftEdits and only return the `id`
     * const blogDraftEditWithIdOnly = await prisma.blogDraftEdit.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BlogDraftEditUpdateManyAndReturnArgs>(args: SelectSubset<T, BlogDraftEditUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlogDraftEditPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one BlogDraftEdit.
     * @param {BlogDraftEditUpsertArgs} args - Arguments to update or create a BlogDraftEdit.
     * @example
     * // Update or create a BlogDraftEdit
     * const blogDraftEdit = await prisma.blogDraftEdit.upsert({
     *   create: {
     *     // ... data to create a BlogDraftEdit
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BlogDraftEdit we want to update
     *   }
     * })
     */
    upsert<T extends BlogDraftEditUpsertArgs>(args: SelectSubset<T, BlogDraftEditUpsertArgs<ExtArgs>>): Prisma__BlogDraftEditClient<$Result.GetResult<Prisma.$BlogDraftEditPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BlogDraftEdits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogDraftEditCountArgs} args - Arguments to filter BlogDraftEdits to count.
     * @example
     * // Count the number of BlogDraftEdits
     * const count = await prisma.blogDraftEdit.count({
     *   where: {
     *     // ... the filter for the BlogDraftEdits we want to count
     *   }
     * })
    **/
    count<T extends BlogDraftEditCountArgs>(
      args?: Subset<T, BlogDraftEditCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BlogDraftEditCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BlogDraftEdit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogDraftEditAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BlogDraftEditAggregateArgs>(args: Subset<T, BlogDraftEditAggregateArgs>): Prisma.PrismaPromise<GetBlogDraftEditAggregateType<T>>

    /**
     * Group by BlogDraftEdit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogDraftEditGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BlogDraftEditGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BlogDraftEditGroupByArgs['orderBy'] }
        : { orderBy?: BlogDraftEditGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BlogDraftEditGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBlogDraftEditGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BlogDraftEdit model
   */
  readonly fields: BlogDraftEditFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BlogDraftEdit.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BlogDraftEditClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    brief<T extends BlogBriefDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BlogBriefDefaultArgs<ExtArgs>>): Prisma__BlogBriefClient<$Result.GetResult<Prisma.$BlogBriefPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the BlogDraftEdit model
   */
  interface BlogDraftEditFieldRefs {
    readonly id: FieldRef<"BlogDraftEdit", 'String'>
    readonly briefId: FieldRef<"BlogDraftEdit", 'String'>
    readonly draftIndex: FieldRef<"BlogDraftEdit", 'Int'>
    readonly content: FieldRef<"BlogDraftEdit", 'String'>
    readonly createdAt: FieldRef<"BlogDraftEdit", 'DateTime'>
    readonly updatedAt: FieldRef<"BlogDraftEdit", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * BlogDraftEdit findUnique
   */
  export type BlogDraftEditFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogDraftEdit
     */
    select?: BlogDraftEditSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogDraftEdit
     */
    omit?: BlogDraftEditOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogDraftEditInclude<ExtArgs> | null
    /**
     * Filter, which BlogDraftEdit to fetch.
     */
    where: BlogDraftEditWhereUniqueInput
  }

  /**
   * BlogDraftEdit findUniqueOrThrow
   */
  export type BlogDraftEditFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogDraftEdit
     */
    select?: BlogDraftEditSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogDraftEdit
     */
    omit?: BlogDraftEditOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogDraftEditInclude<ExtArgs> | null
    /**
     * Filter, which BlogDraftEdit to fetch.
     */
    where: BlogDraftEditWhereUniqueInput
  }

  /**
   * BlogDraftEdit findFirst
   */
  export type BlogDraftEditFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogDraftEdit
     */
    select?: BlogDraftEditSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogDraftEdit
     */
    omit?: BlogDraftEditOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogDraftEditInclude<ExtArgs> | null
    /**
     * Filter, which BlogDraftEdit to fetch.
     */
    where?: BlogDraftEditWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlogDraftEdits to fetch.
     */
    orderBy?: BlogDraftEditOrderByWithRelationInput | BlogDraftEditOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BlogDraftEdits.
     */
    cursor?: BlogDraftEditWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlogDraftEdits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlogDraftEdits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BlogDraftEdits.
     */
    distinct?: BlogDraftEditScalarFieldEnum | BlogDraftEditScalarFieldEnum[]
  }

  /**
   * BlogDraftEdit findFirstOrThrow
   */
  export type BlogDraftEditFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogDraftEdit
     */
    select?: BlogDraftEditSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogDraftEdit
     */
    omit?: BlogDraftEditOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogDraftEditInclude<ExtArgs> | null
    /**
     * Filter, which BlogDraftEdit to fetch.
     */
    where?: BlogDraftEditWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlogDraftEdits to fetch.
     */
    orderBy?: BlogDraftEditOrderByWithRelationInput | BlogDraftEditOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BlogDraftEdits.
     */
    cursor?: BlogDraftEditWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlogDraftEdits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlogDraftEdits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BlogDraftEdits.
     */
    distinct?: BlogDraftEditScalarFieldEnum | BlogDraftEditScalarFieldEnum[]
  }

  /**
   * BlogDraftEdit findMany
   */
  export type BlogDraftEditFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogDraftEdit
     */
    select?: BlogDraftEditSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogDraftEdit
     */
    omit?: BlogDraftEditOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogDraftEditInclude<ExtArgs> | null
    /**
     * Filter, which BlogDraftEdits to fetch.
     */
    where?: BlogDraftEditWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlogDraftEdits to fetch.
     */
    orderBy?: BlogDraftEditOrderByWithRelationInput | BlogDraftEditOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BlogDraftEdits.
     */
    cursor?: BlogDraftEditWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlogDraftEdits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlogDraftEdits.
     */
    skip?: number
    distinct?: BlogDraftEditScalarFieldEnum | BlogDraftEditScalarFieldEnum[]
  }

  /**
   * BlogDraftEdit create
   */
  export type BlogDraftEditCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogDraftEdit
     */
    select?: BlogDraftEditSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogDraftEdit
     */
    omit?: BlogDraftEditOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogDraftEditInclude<ExtArgs> | null
    /**
     * The data needed to create a BlogDraftEdit.
     */
    data: XOR<BlogDraftEditCreateInput, BlogDraftEditUncheckedCreateInput>
  }

  /**
   * BlogDraftEdit createMany
   */
  export type BlogDraftEditCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BlogDraftEdits.
     */
    data: BlogDraftEditCreateManyInput | BlogDraftEditCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BlogDraftEdit createManyAndReturn
   */
  export type BlogDraftEditCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogDraftEdit
     */
    select?: BlogDraftEditSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BlogDraftEdit
     */
    omit?: BlogDraftEditOmit<ExtArgs> | null
    /**
     * The data used to create many BlogDraftEdits.
     */
    data: BlogDraftEditCreateManyInput | BlogDraftEditCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogDraftEditIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * BlogDraftEdit update
   */
  export type BlogDraftEditUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogDraftEdit
     */
    select?: BlogDraftEditSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogDraftEdit
     */
    omit?: BlogDraftEditOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogDraftEditInclude<ExtArgs> | null
    /**
     * The data needed to update a BlogDraftEdit.
     */
    data: XOR<BlogDraftEditUpdateInput, BlogDraftEditUncheckedUpdateInput>
    /**
     * Choose, which BlogDraftEdit to update.
     */
    where: BlogDraftEditWhereUniqueInput
  }

  /**
   * BlogDraftEdit updateMany
   */
  export type BlogDraftEditUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BlogDraftEdits.
     */
    data: XOR<BlogDraftEditUpdateManyMutationInput, BlogDraftEditUncheckedUpdateManyInput>
    /**
     * Filter which BlogDraftEdits to update
     */
    where?: BlogDraftEditWhereInput
    /**
     * Limit how many BlogDraftEdits to update.
     */
    limit?: number
  }

  /**
   * BlogDraftEdit updateManyAndReturn
   */
  export type BlogDraftEditUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogDraftEdit
     */
    select?: BlogDraftEditSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BlogDraftEdit
     */
    omit?: BlogDraftEditOmit<ExtArgs> | null
    /**
     * The data used to update BlogDraftEdits.
     */
    data: XOR<BlogDraftEditUpdateManyMutationInput, BlogDraftEditUncheckedUpdateManyInput>
    /**
     * Filter which BlogDraftEdits to update
     */
    where?: BlogDraftEditWhereInput
    /**
     * Limit how many BlogDraftEdits to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogDraftEditIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * BlogDraftEdit upsert
   */
  export type BlogDraftEditUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogDraftEdit
     */
    select?: BlogDraftEditSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogDraftEdit
     */
    omit?: BlogDraftEditOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogDraftEditInclude<ExtArgs> | null
    /**
     * The filter to search for the BlogDraftEdit to update in case it exists.
     */
    where: BlogDraftEditWhereUniqueInput
    /**
     * In case the BlogDraftEdit found by the `where` argument doesn't exist, create a new BlogDraftEdit with this data.
     */
    create: XOR<BlogDraftEditCreateInput, BlogDraftEditUncheckedCreateInput>
    /**
     * In case the BlogDraftEdit was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BlogDraftEditUpdateInput, BlogDraftEditUncheckedUpdateInput>
  }

  /**
   * BlogDraftEdit delete
   */
  export type BlogDraftEditDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogDraftEdit
     */
    select?: BlogDraftEditSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogDraftEdit
     */
    omit?: BlogDraftEditOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogDraftEditInclude<ExtArgs> | null
    /**
     * Filter which BlogDraftEdit to delete.
     */
    where: BlogDraftEditWhereUniqueInput
  }

  /**
   * BlogDraftEdit deleteMany
   */
  export type BlogDraftEditDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BlogDraftEdits to delete
     */
    where?: BlogDraftEditWhereInput
    /**
     * Limit how many BlogDraftEdits to delete.
     */
    limit?: number
  }

  /**
   * BlogDraftEdit without action
   */
  export type BlogDraftEditDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogDraftEdit
     */
    select?: BlogDraftEditSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogDraftEdit
     */
    omit?: BlogDraftEditOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogDraftEditInclude<ExtArgs> | null
  }


  /**
   * Model BlogPost
   */

  export type AggregateBlogPost = {
    _count: BlogPostCountAggregateOutputType | null
    _min: BlogPostMinAggregateOutputType | null
    _max: BlogPostMaxAggregateOutputType | null
  }

  export type BlogPostMinAggregateOutputType = {
    id: string | null
    slug: string | null
    locale: string | null
    title: string | null
    excerpt: string | null
    author: string | null
    category: string | null
    featured: boolean | null
    seoTitle: string | null
    seoDescription: string | null
    coverImage: string | null
    mdxContent: string | null
    sourceBriefId: string | null
    sourceRequestId: string | null
    translationGroupId: string | null
    publishedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BlogPostMaxAggregateOutputType = {
    id: string | null
    slug: string | null
    locale: string | null
    title: string | null
    excerpt: string | null
    author: string | null
    category: string | null
    featured: boolean | null
    seoTitle: string | null
    seoDescription: string | null
    coverImage: string | null
    mdxContent: string | null
    sourceBriefId: string | null
    sourceRequestId: string | null
    translationGroupId: string | null
    publishedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BlogPostCountAggregateOutputType = {
    id: number
    slug: number
    locale: number
    title: number
    excerpt: number
    author: number
    category: number
    featured: number
    seoTitle: number
    seoDescription: number
    coverImage: number
    frontmatterJson: number
    mdxContent: number
    sourceBriefId: number
    sourceRequestId: number
    translationGroupId: number
    publishedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BlogPostMinAggregateInputType = {
    id?: true
    slug?: true
    locale?: true
    title?: true
    excerpt?: true
    author?: true
    category?: true
    featured?: true
    seoTitle?: true
    seoDescription?: true
    coverImage?: true
    mdxContent?: true
    sourceBriefId?: true
    sourceRequestId?: true
    translationGroupId?: true
    publishedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BlogPostMaxAggregateInputType = {
    id?: true
    slug?: true
    locale?: true
    title?: true
    excerpt?: true
    author?: true
    category?: true
    featured?: true
    seoTitle?: true
    seoDescription?: true
    coverImage?: true
    mdxContent?: true
    sourceBriefId?: true
    sourceRequestId?: true
    translationGroupId?: true
    publishedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BlogPostCountAggregateInputType = {
    id?: true
    slug?: true
    locale?: true
    title?: true
    excerpt?: true
    author?: true
    category?: true
    featured?: true
    seoTitle?: true
    seoDescription?: true
    coverImage?: true
    frontmatterJson?: true
    mdxContent?: true
    sourceBriefId?: true
    sourceRequestId?: true
    translationGroupId?: true
    publishedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BlogPostAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BlogPost to aggregate.
     */
    where?: BlogPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlogPosts to fetch.
     */
    orderBy?: BlogPostOrderByWithRelationInput | BlogPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BlogPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlogPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlogPosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BlogPosts
    **/
    _count?: true | BlogPostCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BlogPostMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BlogPostMaxAggregateInputType
  }

  export type GetBlogPostAggregateType<T extends BlogPostAggregateArgs> = {
        [P in keyof T & keyof AggregateBlogPost]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBlogPost[P]>
      : GetScalarType<T[P], AggregateBlogPost[P]>
  }




  export type BlogPostGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BlogPostWhereInput
    orderBy?: BlogPostOrderByWithAggregationInput | BlogPostOrderByWithAggregationInput[]
    by: BlogPostScalarFieldEnum[] | BlogPostScalarFieldEnum
    having?: BlogPostScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BlogPostCountAggregateInputType | true
    _min?: BlogPostMinAggregateInputType
    _max?: BlogPostMaxAggregateInputType
  }

  export type BlogPostGroupByOutputType = {
    id: string
    slug: string
    locale: string
    title: string
    excerpt: string
    author: string
    category: string
    featured: boolean
    seoTitle: string | null
    seoDescription: string | null
    coverImage: string | null
    frontmatterJson: JsonValue | null
    mdxContent: string
    sourceBriefId: string | null
    sourceRequestId: string | null
    translationGroupId: string | null
    publishedAt: Date
    createdAt: Date
    updatedAt: Date
    _count: BlogPostCountAggregateOutputType | null
    _min: BlogPostMinAggregateOutputType | null
    _max: BlogPostMaxAggregateOutputType | null
  }

  type GetBlogPostGroupByPayload<T extends BlogPostGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BlogPostGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BlogPostGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BlogPostGroupByOutputType[P]>
            : GetScalarType<T[P], BlogPostGroupByOutputType[P]>
        }
      >
    >


  export type BlogPostSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slug?: boolean
    locale?: boolean
    title?: boolean
    excerpt?: boolean
    author?: boolean
    category?: boolean
    featured?: boolean
    seoTitle?: boolean
    seoDescription?: boolean
    coverImage?: boolean
    frontmatterJson?: boolean
    mdxContent?: boolean
    sourceBriefId?: boolean
    sourceRequestId?: boolean
    translationGroupId?: boolean
    publishedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["blogPost"]>

  export type BlogPostSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slug?: boolean
    locale?: boolean
    title?: boolean
    excerpt?: boolean
    author?: boolean
    category?: boolean
    featured?: boolean
    seoTitle?: boolean
    seoDescription?: boolean
    coverImage?: boolean
    frontmatterJson?: boolean
    mdxContent?: boolean
    sourceBriefId?: boolean
    sourceRequestId?: boolean
    translationGroupId?: boolean
    publishedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["blogPost"]>

  export type BlogPostSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slug?: boolean
    locale?: boolean
    title?: boolean
    excerpt?: boolean
    author?: boolean
    category?: boolean
    featured?: boolean
    seoTitle?: boolean
    seoDescription?: boolean
    coverImage?: boolean
    frontmatterJson?: boolean
    mdxContent?: boolean
    sourceBriefId?: boolean
    sourceRequestId?: boolean
    translationGroupId?: boolean
    publishedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["blogPost"]>

  export type BlogPostSelectScalar = {
    id?: boolean
    slug?: boolean
    locale?: boolean
    title?: boolean
    excerpt?: boolean
    author?: boolean
    category?: boolean
    featured?: boolean
    seoTitle?: boolean
    seoDescription?: boolean
    coverImage?: boolean
    frontmatterJson?: boolean
    mdxContent?: boolean
    sourceBriefId?: boolean
    sourceRequestId?: boolean
    translationGroupId?: boolean
    publishedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type BlogPostOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "slug" | "locale" | "title" | "excerpt" | "author" | "category" | "featured" | "seoTitle" | "seoDescription" | "coverImage" | "frontmatterJson" | "mdxContent" | "sourceBriefId" | "sourceRequestId" | "translationGroupId" | "publishedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["blogPost"]>

  export type $BlogPostPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BlogPost"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      slug: string
      locale: string
      title: string
      excerpt: string
      author: string
      category: string
      featured: boolean
      seoTitle: string | null
      seoDescription: string | null
      coverImage: string | null
      frontmatterJson: Prisma.JsonValue | null
      mdxContent: string
      sourceBriefId: string | null
      sourceRequestId: string | null
      translationGroupId: string | null
      publishedAt: Date
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["blogPost"]>
    composites: {}
  }

  type BlogPostGetPayload<S extends boolean | null | undefined | BlogPostDefaultArgs> = $Result.GetResult<Prisma.$BlogPostPayload, S>

  type BlogPostCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BlogPostFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BlogPostCountAggregateInputType | true
    }

  export interface BlogPostDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BlogPost'], meta: { name: 'BlogPost' } }
    /**
     * Find zero or one BlogPost that matches the filter.
     * @param {BlogPostFindUniqueArgs} args - Arguments to find a BlogPost
     * @example
     * // Get one BlogPost
     * const blogPost = await prisma.blogPost.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BlogPostFindUniqueArgs>(args: SelectSubset<T, BlogPostFindUniqueArgs<ExtArgs>>): Prisma__BlogPostClient<$Result.GetResult<Prisma.$BlogPostPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BlogPost that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BlogPostFindUniqueOrThrowArgs} args - Arguments to find a BlogPost
     * @example
     * // Get one BlogPost
     * const blogPost = await prisma.blogPost.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BlogPostFindUniqueOrThrowArgs>(args: SelectSubset<T, BlogPostFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BlogPostClient<$Result.GetResult<Prisma.$BlogPostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BlogPost that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogPostFindFirstArgs} args - Arguments to find a BlogPost
     * @example
     * // Get one BlogPost
     * const blogPost = await prisma.blogPost.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BlogPostFindFirstArgs>(args?: SelectSubset<T, BlogPostFindFirstArgs<ExtArgs>>): Prisma__BlogPostClient<$Result.GetResult<Prisma.$BlogPostPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BlogPost that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogPostFindFirstOrThrowArgs} args - Arguments to find a BlogPost
     * @example
     * // Get one BlogPost
     * const blogPost = await prisma.blogPost.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BlogPostFindFirstOrThrowArgs>(args?: SelectSubset<T, BlogPostFindFirstOrThrowArgs<ExtArgs>>): Prisma__BlogPostClient<$Result.GetResult<Prisma.$BlogPostPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BlogPosts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogPostFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BlogPosts
     * const blogPosts = await prisma.blogPost.findMany()
     * 
     * // Get first 10 BlogPosts
     * const blogPosts = await prisma.blogPost.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const blogPostWithIdOnly = await prisma.blogPost.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BlogPostFindManyArgs>(args?: SelectSubset<T, BlogPostFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlogPostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BlogPost.
     * @param {BlogPostCreateArgs} args - Arguments to create a BlogPost.
     * @example
     * // Create one BlogPost
     * const BlogPost = await prisma.blogPost.create({
     *   data: {
     *     // ... data to create a BlogPost
     *   }
     * })
     * 
     */
    create<T extends BlogPostCreateArgs>(args: SelectSubset<T, BlogPostCreateArgs<ExtArgs>>): Prisma__BlogPostClient<$Result.GetResult<Prisma.$BlogPostPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BlogPosts.
     * @param {BlogPostCreateManyArgs} args - Arguments to create many BlogPosts.
     * @example
     * // Create many BlogPosts
     * const blogPost = await prisma.blogPost.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BlogPostCreateManyArgs>(args?: SelectSubset<T, BlogPostCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BlogPosts and returns the data saved in the database.
     * @param {BlogPostCreateManyAndReturnArgs} args - Arguments to create many BlogPosts.
     * @example
     * // Create many BlogPosts
     * const blogPost = await prisma.blogPost.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BlogPosts and only return the `id`
     * const blogPostWithIdOnly = await prisma.blogPost.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BlogPostCreateManyAndReturnArgs>(args?: SelectSubset<T, BlogPostCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlogPostPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a BlogPost.
     * @param {BlogPostDeleteArgs} args - Arguments to delete one BlogPost.
     * @example
     * // Delete one BlogPost
     * const BlogPost = await prisma.blogPost.delete({
     *   where: {
     *     // ... filter to delete one BlogPost
     *   }
     * })
     * 
     */
    delete<T extends BlogPostDeleteArgs>(args: SelectSubset<T, BlogPostDeleteArgs<ExtArgs>>): Prisma__BlogPostClient<$Result.GetResult<Prisma.$BlogPostPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BlogPost.
     * @param {BlogPostUpdateArgs} args - Arguments to update one BlogPost.
     * @example
     * // Update one BlogPost
     * const blogPost = await prisma.blogPost.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BlogPostUpdateArgs>(args: SelectSubset<T, BlogPostUpdateArgs<ExtArgs>>): Prisma__BlogPostClient<$Result.GetResult<Prisma.$BlogPostPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BlogPosts.
     * @param {BlogPostDeleteManyArgs} args - Arguments to filter BlogPosts to delete.
     * @example
     * // Delete a few BlogPosts
     * const { count } = await prisma.blogPost.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BlogPostDeleteManyArgs>(args?: SelectSubset<T, BlogPostDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BlogPosts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogPostUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BlogPosts
     * const blogPost = await prisma.blogPost.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BlogPostUpdateManyArgs>(args: SelectSubset<T, BlogPostUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BlogPosts and returns the data updated in the database.
     * @param {BlogPostUpdateManyAndReturnArgs} args - Arguments to update many BlogPosts.
     * @example
     * // Update many BlogPosts
     * const blogPost = await prisma.blogPost.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more BlogPosts and only return the `id`
     * const blogPostWithIdOnly = await prisma.blogPost.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BlogPostUpdateManyAndReturnArgs>(args: SelectSubset<T, BlogPostUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlogPostPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one BlogPost.
     * @param {BlogPostUpsertArgs} args - Arguments to update or create a BlogPost.
     * @example
     * // Update or create a BlogPost
     * const blogPost = await prisma.blogPost.upsert({
     *   create: {
     *     // ... data to create a BlogPost
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BlogPost we want to update
     *   }
     * })
     */
    upsert<T extends BlogPostUpsertArgs>(args: SelectSubset<T, BlogPostUpsertArgs<ExtArgs>>): Prisma__BlogPostClient<$Result.GetResult<Prisma.$BlogPostPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BlogPosts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogPostCountArgs} args - Arguments to filter BlogPosts to count.
     * @example
     * // Count the number of BlogPosts
     * const count = await prisma.blogPost.count({
     *   where: {
     *     // ... the filter for the BlogPosts we want to count
     *   }
     * })
    **/
    count<T extends BlogPostCountArgs>(
      args?: Subset<T, BlogPostCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BlogPostCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BlogPost.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogPostAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BlogPostAggregateArgs>(args: Subset<T, BlogPostAggregateArgs>): Prisma.PrismaPromise<GetBlogPostAggregateType<T>>

    /**
     * Group by BlogPost.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogPostGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BlogPostGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BlogPostGroupByArgs['orderBy'] }
        : { orderBy?: BlogPostGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BlogPostGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBlogPostGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BlogPost model
   */
  readonly fields: BlogPostFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BlogPost.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BlogPostClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the BlogPost model
   */
  interface BlogPostFieldRefs {
    readonly id: FieldRef<"BlogPost", 'String'>
    readonly slug: FieldRef<"BlogPost", 'String'>
    readonly locale: FieldRef<"BlogPost", 'String'>
    readonly title: FieldRef<"BlogPost", 'String'>
    readonly excerpt: FieldRef<"BlogPost", 'String'>
    readonly author: FieldRef<"BlogPost", 'String'>
    readonly category: FieldRef<"BlogPost", 'String'>
    readonly featured: FieldRef<"BlogPost", 'Boolean'>
    readonly seoTitle: FieldRef<"BlogPost", 'String'>
    readonly seoDescription: FieldRef<"BlogPost", 'String'>
    readonly coverImage: FieldRef<"BlogPost", 'String'>
    readonly frontmatterJson: FieldRef<"BlogPost", 'Json'>
    readonly mdxContent: FieldRef<"BlogPost", 'String'>
    readonly sourceBriefId: FieldRef<"BlogPost", 'String'>
    readonly sourceRequestId: FieldRef<"BlogPost", 'String'>
    readonly translationGroupId: FieldRef<"BlogPost", 'String'>
    readonly publishedAt: FieldRef<"BlogPost", 'DateTime'>
    readonly createdAt: FieldRef<"BlogPost", 'DateTime'>
    readonly updatedAt: FieldRef<"BlogPost", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * BlogPost findUnique
   */
  export type BlogPostFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPost
     */
    select?: BlogPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogPost
     */
    omit?: BlogPostOmit<ExtArgs> | null
    /**
     * Filter, which BlogPost to fetch.
     */
    where: BlogPostWhereUniqueInput
  }

  /**
   * BlogPost findUniqueOrThrow
   */
  export type BlogPostFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPost
     */
    select?: BlogPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogPost
     */
    omit?: BlogPostOmit<ExtArgs> | null
    /**
     * Filter, which BlogPost to fetch.
     */
    where: BlogPostWhereUniqueInput
  }

  /**
   * BlogPost findFirst
   */
  export type BlogPostFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPost
     */
    select?: BlogPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogPost
     */
    omit?: BlogPostOmit<ExtArgs> | null
    /**
     * Filter, which BlogPost to fetch.
     */
    where?: BlogPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlogPosts to fetch.
     */
    orderBy?: BlogPostOrderByWithRelationInput | BlogPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BlogPosts.
     */
    cursor?: BlogPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlogPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlogPosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BlogPosts.
     */
    distinct?: BlogPostScalarFieldEnum | BlogPostScalarFieldEnum[]
  }

  /**
   * BlogPost findFirstOrThrow
   */
  export type BlogPostFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPost
     */
    select?: BlogPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogPost
     */
    omit?: BlogPostOmit<ExtArgs> | null
    /**
     * Filter, which BlogPost to fetch.
     */
    where?: BlogPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlogPosts to fetch.
     */
    orderBy?: BlogPostOrderByWithRelationInput | BlogPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BlogPosts.
     */
    cursor?: BlogPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlogPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlogPosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BlogPosts.
     */
    distinct?: BlogPostScalarFieldEnum | BlogPostScalarFieldEnum[]
  }

  /**
   * BlogPost findMany
   */
  export type BlogPostFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPost
     */
    select?: BlogPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogPost
     */
    omit?: BlogPostOmit<ExtArgs> | null
    /**
     * Filter, which BlogPosts to fetch.
     */
    where?: BlogPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlogPosts to fetch.
     */
    orderBy?: BlogPostOrderByWithRelationInput | BlogPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BlogPosts.
     */
    cursor?: BlogPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlogPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlogPosts.
     */
    skip?: number
    distinct?: BlogPostScalarFieldEnum | BlogPostScalarFieldEnum[]
  }

  /**
   * BlogPost create
   */
  export type BlogPostCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPost
     */
    select?: BlogPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogPost
     */
    omit?: BlogPostOmit<ExtArgs> | null
    /**
     * The data needed to create a BlogPost.
     */
    data: XOR<BlogPostCreateInput, BlogPostUncheckedCreateInput>
  }

  /**
   * BlogPost createMany
   */
  export type BlogPostCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BlogPosts.
     */
    data: BlogPostCreateManyInput | BlogPostCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BlogPost createManyAndReturn
   */
  export type BlogPostCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPost
     */
    select?: BlogPostSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BlogPost
     */
    omit?: BlogPostOmit<ExtArgs> | null
    /**
     * The data used to create many BlogPosts.
     */
    data: BlogPostCreateManyInput | BlogPostCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BlogPost update
   */
  export type BlogPostUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPost
     */
    select?: BlogPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogPost
     */
    omit?: BlogPostOmit<ExtArgs> | null
    /**
     * The data needed to update a BlogPost.
     */
    data: XOR<BlogPostUpdateInput, BlogPostUncheckedUpdateInput>
    /**
     * Choose, which BlogPost to update.
     */
    where: BlogPostWhereUniqueInput
  }

  /**
   * BlogPost updateMany
   */
  export type BlogPostUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BlogPosts.
     */
    data: XOR<BlogPostUpdateManyMutationInput, BlogPostUncheckedUpdateManyInput>
    /**
     * Filter which BlogPosts to update
     */
    where?: BlogPostWhereInput
    /**
     * Limit how many BlogPosts to update.
     */
    limit?: number
  }

  /**
   * BlogPost updateManyAndReturn
   */
  export type BlogPostUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPost
     */
    select?: BlogPostSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BlogPost
     */
    omit?: BlogPostOmit<ExtArgs> | null
    /**
     * The data used to update BlogPosts.
     */
    data: XOR<BlogPostUpdateManyMutationInput, BlogPostUncheckedUpdateManyInput>
    /**
     * Filter which BlogPosts to update
     */
    where?: BlogPostWhereInput
    /**
     * Limit how many BlogPosts to update.
     */
    limit?: number
  }

  /**
   * BlogPost upsert
   */
  export type BlogPostUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPost
     */
    select?: BlogPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogPost
     */
    omit?: BlogPostOmit<ExtArgs> | null
    /**
     * The filter to search for the BlogPost to update in case it exists.
     */
    where: BlogPostWhereUniqueInput
    /**
     * In case the BlogPost found by the `where` argument doesn't exist, create a new BlogPost with this data.
     */
    create: XOR<BlogPostCreateInput, BlogPostUncheckedCreateInput>
    /**
     * In case the BlogPost was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BlogPostUpdateInput, BlogPostUncheckedUpdateInput>
  }

  /**
   * BlogPost delete
   */
  export type BlogPostDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPost
     */
    select?: BlogPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogPost
     */
    omit?: BlogPostOmit<ExtArgs> | null
    /**
     * Filter which BlogPost to delete.
     */
    where: BlogPostWhereUniqueInput
  }

  /**
   * BlogPost deleteMany
   */
  export type BlogPostDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BlogPosts to delete
     */
    where?: BlogPostWhereInput
    /**
     * Limit how many BlogPosts to delete.
     */
    limit?: number
  }

  /**
   * BlogPost without action
   */
  export type BlogPostDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPost
     */
    select?: BlogPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogPost
     */
    omit?: BlogPostOmit<ExtArgs> | null
  }


  /**
   * Model blogGenerationRun
   */

  export type AggregateBlogGenerationRun = {
    _count: BlogGenerationRunCountAggregateOutputType | null
    _avg: BlogGenerationRunAvgAggregateOutputType | null
    _sum: BlogGenerationRunSumAggregateOutputType | null
    _min: BlogGenerationRunMinAggregateOutputType | null
    _max: BlogGenerationRunMaxAggregateOutputType | null
  }

  export type BlogGenerationRunAvgAggregateOutputType = {
    retryCount: number | null
    durationMs: number | null
    iterationCount: number | null
    selectedDraftIndex: number | null
  }

  export type BlogGenerationRunSumAggregateOutputType = {
    retryCount: number | null
    durationMs: number | null
    iterationCount: number | null
    selectedDraftIndex: number | null
  }

  export type BlogGenerationRunMinAggregateOutputType = {
    id: string | null
    requestId: string | null
    userId: string | null
    topic: string | null
    status: string | null
    triggerRunId: string | null
    retryCount: number | null
    workflowStatus: string | null
    error: string | null
    durationMs: number | null
    iterationCount: number | null
    selectedDraftIndex: number | null
    finalBlog: string | null
    finalPolishApplied: boolean | null
    finalPolishWarning: string | null
    queuedAt: Date | null
    startedAt: Date | null
    heartbeatAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    completedAt: Date | null
  }

  export type BlogGenerationRunMaxAggregateOutputType = {
    id: string | null
    requestId: string | null
    userId: string | null
    topic: string | null
    status: string | null
    triggerRunId: string | null
    retryCount: number | null
    workflowStatus: string | null
    error: string | null
    durationMs: number | null
    iterationCount: number | null
    selectedDraftIndex: number | null
    finalBlog: string | null
    finalPolishApplied: boolean | null
    finalPolishWarning: string | null
    queuedAt: Date | null
    startedAt: Date | null
    heartbeatAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    completedAt: Date | null
  }

  export type BlogGenerationRunCountAggregateOutputType = {
    id: number
    requestId: number
    userId: number
    topic: number
    inputPayload: number
    status: number
    triggerRunId: number
    retryCount: number
    workflowStatus: number
    error: number
    durationMs: number
    iterationCount: number
    selectedDraftIndex: number
    finalBlog: number
    finalPolishApplied: number
    finalPolishWarning: number
    queuedAt: number
    startedAt: number
    heartbeatAt: number
    createdAt: number
    updatedAt: number
    completedAt: number
    _all: number
  }


  export type BlogGenerationRunAvgAggregateInputType = {
    retryCount?: true
    durationMs?: true
    iterationCount?: true
    selectedDraftIndex?: true
  }

  export type BlogGenerationRunSumAggregateInputType = {
    retryCount?: true
    durationMs?: true
    iterationCount?: true
    selectedDraftIndex?: true
  }

  export type BlogGenerationRunMinAggregateInputType = {
    id?: true
    requestId?: true
    userId?: true
    topic?: true
    status?: true
    triggerRunId?: true
    retryCount?: true
    workflowStatus?: true
    error?: true
    durationMs?: true
    iterationCount?: true
    selectedDraftIndex?: true
    finalBlog?: true
    finalPolishApplied?: true
    finalPolishWarning?: true
    queuedAt?: true
    startedAt?: true
    heartbeatAt?: true
    createdAt?: true
    updatedAt?: true
    completedAt?: true
  }

  export type BlogGenerationRunMaxAggregateInputType = {
    id?: true
    requestId?: true
    userId?: true
    topic?: true
    status?: true
    triggerRunId?: true
    retryCount?: true
    workflowStatus?: true
    error?: true
    durationMs?: true
    iterationCount?: true
    selectedDraftIndex?: true
    finalBlog?: true
    finalPolishApplied?: true
    finalPolishWarning?: true
    queuedAt?: true
    startedAt?: true
    heartbeatAt?: true
    createdAt?: true
    updatedAt?: true
    completedAt?: true
  }

  export type BlogGenerationRunCountAggregateInputType = {
    id?: true
    requestId?: true
    userId?: true
    topic?: true
    inputPayload?: true
    status?: true
    triggerRunId?: true
    retryCount?: true
    workflowStatus?: true
    error?: true
    durationMs?: true
    iterationCount?: true
    selectedDraftIndex?: true
    finalBlog?: true
    finalPolishApplied?: true
    finalPolishWarning?: true
    queuedAt?: true
    startedAt?: true
    heartbeatAt?: true
    createdAt?: true
    updatedAt?: true
    completedAt?: true
    _all?: true
  }

  export type BlogGenerationRunAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which blogGenerationRun to aggregate.
     */
    where?: blogGenerationRunWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of blogGenerationRuns to fetch.
     */
    orderBy?: blogGenerationRunOrderByWithRelationInput | blogGenerationRunOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: blogGenerationRunWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` blogGenerationRuns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` blogGenerationRuns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned blogGenerationRuns
    **/
    _count?: true | BlogGenerationRunCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BlogGenerationRunAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BlogGenerationRunSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BlogGenerationRunMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BlogGenerationRunMaxAggregateInputType
  }

  export type GetBlogGenerationRunAggregateType<T extends BlogGenerationRunAggregateArgs> = {
        [P in keyof T & keyof AggregateBlogGenerationRun]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBlogGenerationRun[P]>
      : GetScalarType<T[P], AggregateBlogGenerationRun[P]>
  }




  export type blogGenerationRunGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: blogGenerationRunWhereInput
    orderBy?: blogGenerationRunOrderByWithAggregationInput | blogGenerationRunOrderByWithAggregationInput[]
    by: BlogGenerationRunScalarFieldEnum[] | BlogGenerationRunScalarFieldEnum
    having?: blogGenerationRunScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BlogGenerationRunCountAggregateInputType | true
    _avg?: BlogGenerationRunAvgAggregateInputType
    _sum?: BlogGenerationRunSumAggregateInputType
    _min?: BlogGenerationRunMinAggregateInputType
    _max?: BlogGenerationRunMaxAggregateInputType
  }

  export type BlogGenerationRunGroupByOutputType = {
    id: string
    requestId: string
    userId: string | null
    topic: string
    inputPayload: JsonValue | null
    status: string
    triggerRunId: string | null
    retryCount: number
    workflowStatus: string | null
    error: string | null
    durationMs: number | null
    iterationCount: number | null
    selectedDraftIndex: number | null
    finalBlog: string | null
    finalPolishApplied: boolean | null
    finalPolishWarning: string | null
    queuedAt: Date | null
    startedAt: Date | null
    heartbeatAt: Date | null
    createdAt: Date
    updatedAt: Date
    completedAt: Date | null
    _count: BlogGenerationRunCountAggregateOutputType | null
    _avg: BlogGenerationRunAvgAggregateOutputType | null
    _sum: BlogGenerationRunSumAggregateOutputType | null
    _min: BlogGenerationRunMinAggregateOutputType | null
    _max: BlogGenerationRunMaxAggregateOutputType | null
  }

  type GetBlogGenerationRunGroupByPayload<T extends blogGenerationRunGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BlogGenerationRunGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BlogGenerationRunGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BlogGenerationRunGroupByOutputType[P]>
            : GetScalarType<T[P], BlogGenerationRunGroupByOutputType[P]>
        }
      >
    >


  export type blogGenerationRunSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    requestId?: boolean
    userId?: boolean
    topic?: boolean
    inputPayload?: boolean
    status?: boolean
    triggerRunId?: boolean
    retryCount?: boolean
    workflowStatus?: boolean
    error?: boolean
    durationMs?: boolean
    iterationCount?: boolean
    selectedDraftIndex?: boolean
    finalBlog?: boolean
    finalPolishApplied?: boolean
    finalPolishWarning?: boolean
    queuedAt?: boolean
    startedAt?: boolean
    heartbeatAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    completedAt?: boolean
    user?: boolean | blogGenerationRun$userArgs<ExtArgs>
    drafts?: boolean | blogGenerationRun$draftsArgs<ExtArgs>
    evaluations?: boolean | blogGenerationRun$evaluationsArgs<ExtArgs>
    _count?: boolean | BlogGenerationRunCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["blogGenerationRun"]>

  export type blogGenerationRunSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    requestId?: boolean
    userId?: boolean
    topic?: boolean
    inputPayload?: boolean
    status?: boolean
    triggerRunId?: boolean
    retryCount?: boolean
    workflowStatus?: boolean
    error?: boolean
    durationMs?: boolean
    iterationCount?: boolean
    selectedDraftIndex?: boolean
    finalBlog?: boolean
    finalPolishApplied?: boolean
    finalPolishWarning?: boolean
    queuedAt?: boolean
    startedAt?: boolean
    heartbeatAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    completedAt?: boolean
    user?: boolean | blogGenerationRun$userArgs<ExtArgs>
  }, ExtArgs["result"]["blogGenerationRun"]>

  export type blogGenerationRunSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    requestId?: boolean
    userId?: boolean
    topic?: boolean
    inputPayload?: boolean
    status?: boolean
    triggerRunId?: boolean
    retryCount?: boolean
    workflowStatus?: boolean
    error?: boolean
    durationMs?: boolean
    iterationCount?: boolean
    selectedDraftIndex?: boolean
    finalBlog?: boolean
    finalPolishApplied?: boolean
    finalPolishWarning?: boolean
    queuedAt?: boolean
    startedAt?: boolean
    heartbeatAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    completedAt?: boolean
    user?: boolean | blogGenerationRun$userArgs<ExtArgs>
  }, ExtArgs["result"]["blogGenerationRun"]>

  export type blogGenerationRunSelectScalar = {
    id?: boolean
    requestId?: boolean
    userId?: boolean
    topic?: boolean
    inputPayload?: boolean
    status?: boolean
    triggerRunId?: boolean
    retryCount?: boolean
    workflowStatus?: boolean
    error?: boolean
    durationMs?: boolean
    iterationCount?: boolean
    selectedDraftIndex?: boolean
    finalBlog?: boolean
    finalPolishApplied?: boolean
    finalPolishWarning?: boolean
    queuedAt?: boolean
    startedAt?: boolean
    heartbeatAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    completedAt?: boolean
  }

  export type blogGenerationRunOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "requestId" | "userId" | "topic" | "inputPayload" | "status" | "triggerRunId" | "retryCount" | "workflowStatus" | "error" | "durationMs" | "iterationCount" | "selectedDraftIndex" | "finalBlog" | "finalPolishApplied" | "finalPolishWarning" | "queuedAt" | "startedAt" | "heartbeatAt" | "createdAt" | "updatedAt" | "completedAt", ExtArgs["result"]["blogGenerationRun"]>
  export type blogGenerationRunInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | blogGenerationRun$userArgs<ExtArgs>
    drafts?: boolean | blogGenerationRun$draftsArgs<ExtArgs>
    evaluations?: boolean | blogGenerationRun$evaluationsArgs<ExtArgs>
    _count?: boolean | BlogGenerationRunCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type blogGenerationRunIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | blogGenerationRun$userArgs<ExtArgs>
  }
  export type blogGenerationRunIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | blogGenerationRun$userArgs<ExtArgs>
  }

  export type $blogGenerationRunPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "blogGenerationRun"
    objects: {
      user: Prisma.$UserPayload<ExtArgs> | null
      drafts: Prisma.$blogDraftPayload<ExtArgs>[]
      evaluations: Prisma.$blogEvaluationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      requestId: string
      userId: string | null
      topic: string
      inputPayload: Prisma.JsonValue | null
      status: string
      triggerRunId: string | null
      retryCount: number
      workflowStatus: string | null
      error: string | null
      durationMs: number | null
      iterationCount: number | null
      selectedDraftIndex: number | null
      finalBlog: string | null
      finalPolishApplied: boolean | null
      finalPolishWarning: string | null
      queuedAt: Date | null
      startedAt: Date | null
      heartbeatAt: Date | null
      createdAt: Date
      updatedAt: Date
      completedAt: Date | null
    }, ExtArgs["result"]["blogGenerationRun"]>
    composites: {}
  }

  type blogGenerationRunGetPayload<S extends boolean | null | undefined | blogGenerationRunDefaultArgs> = $Result.GetResult<Prisma.$blogGenerationRunPayload, S>

  type blogGenerationRunCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<blogGenerationRunFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BlogGenerationRunCountAggregateInputType | true
    }

  export interface blogGenerationRunDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['blogGenerationRun'], meta: { name: 'blogGenerationRun' } }
    /**
     * Find zero or one BlogGenerationRun that matches the filter.
     * @param {blogGenerationRunFindUniqueArgs} args - Arguments to find a BlogGenerationRun
     * @example
     * // Get one BlogGenerationRun
     * const blogGenerationRun = await prisma.blogGenerationRun.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends blogGenerationRunFindUniqueArgs>(args: SelectSubset<T, blogGenerationRunFindUniqueArgs<ExtArgs>>): Prisma__blogGenerationRunClient<$Result.GetResult<Prisma.$blogGenerationRunPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BlogGenerationRun that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {blogGenerationRunFindUniqueOrThrowArgs} args - Arguments to find a BlogGenerationRun
     * @example
     * // Get one BlogGenerationRun
     * const blogGenerationRun = await prisma.blogGenerationRun.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends blogGenerationRunFindUniqueOrThrowArgs>(args: SelectSubset<T, blogGenerationRunFindUniqueOrThrowArgs<ExtArgs>>): Prisma__blogGenerationRunClient<$Result.GetResult<Prisma.$blogGenerationRunPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BlogGenerationRun that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {blogGenerationRunFindFirstArgs} args - Arguments to find a BlogGenerationRun
     * @example
     * // Get one BlogGenerationRun
     * const blogGenerationRun = await prisma.blogGenerationRun.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends blogGenerationRunFindFirstArgs>(args?: SelectSubset<T, blogGenerationRunFindFirstArgs<ExtArgs>>): Prisma__blogGenerationRunClient<$Result.GetResult<Prisma.$blogGenerationRunPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BlogGenerationRun that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {blogGenerationRunFindFirstOrThrowArgs} args - Arguments to find a BlogGenerationRun
     * @example
     * // Get one BlogGenerationRun
     * const blogGenerationRun = await prisma.blogGenerationRun.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends blogGenerationRunFindFirstOrThrowArgs>(args?: SelectSubset<T, blogGenerationRunFindFirstOrThrowArgs<ExtArgs>>): Prisma__blogGenerationRunClient<$Result.GetResult<Prisma.$blogGenerationRunPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BlogGenerationRuns that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {blogGenerationRunFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BlogGenerationRuns
     * const blogGenerationRuns = await prisma.blogGenerationRun.findMany()
     * 
     * // Get first 10 BlogGenerationRuns
     * const blogGenerationRuns = await prisma.blogGenerationRun.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const blogGenerationRunWithIdOnly = await prisma.blogGenerationRun.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends blogGenerationRunFindManyArgs>(args?: SelectSubset<T, blogGenerationRunFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$blogGenerationRunPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BlogGenerationRun.
     * @param {blogGenerationRunCreateArgs} args - Arguments to create a BlogGenerationRun.
     * @example
     * // Create one BlogGenerationRun
     * const BlogGenerationRun = await prisma.blogGenerationRun.create({
     *   data: {
     *     // ... data to create a BlogGenerationRun
     *   }
     * })
     * 
     */
    create<T extends blogGenerationRunCreateArgs>(args: SelectSubset<T, blogGenerationRunCreateArgs<ExtArgs>>): Prisma__blogGenerationRunClient<$Result.GetResult<Prisma.$blogGenerationRunPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BlogGenerationRuns.
     * @param {blogGenerationRunCreateManyArgs} args - Arguments to create many BlogGenerationRuns.
     * @example
     * // Create many BlogGenerationRuns
     * const blogGenerationRun = await prisma.blogGenerationRun.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends blogGenerationRunCreateManyArgs>(args?: SelectSubset<T, blogGenerationRunCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BlogGenerationRuns and returns the data saved in the database.
     * @param {blogGenerationRunCreateManyAndReturnArgs} args - Arguments to create many BlogGenerationRuns.
     * @example
     * // Create many BlogGenerationRuns
     * const blogGenerationRun = await prisma.blogGenerationRun.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BlogGenerationRuns and only return the `id`
     * const blogGenerationRunWithIdOnly = await prisma.blogGenerationRun.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends blogGenerationRunCreateManyAndReturnArgs>(args?: SelectSubset<T, blogGenerationRunCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$blogGenerationRunPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a BlogGenerationRun.
     * @param {blogGenerationRunDeleteArgs} args - Arguments to delete one BlogGenerationRun.
     * @example
     * // Delete one BlogGenerationRun
     * const BlogGenerationRun = await prisma.blogGenerationRun.delete({
     *   where: {
     *     // ... filter to delete one BlogGenerationRun
     *   }
     * })
     * 
     */
    delete<T extends blogGenerationRunDeleteArgs>(args: SelectSubset<T, blogGenerationRunDeleteArgs<ExtArgs>>): Prisma__blogGenerationRunClient<$Result.GetResult<Prisma.$blogGenerationRunPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BlogGenerationRun.
     * @param {blogGenerationRunUpdateArgs} args - Arguments to update one BlogGenerationRun.
     * @example
     * // Update one BlogGenerationRun
     * const blogGenerationRun = await prisma.blogGenerationRun.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends blogGenerationRunUpdateArgs>(args: SelectSubset<T, blogGenerationRunUpdateArgs<ExtArgs>>): Prisma__blogGenerationRunClient<$Result.GetResult<Prisma.$blogGenerationRunPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BlogGenerationRuns.
     * @param {blogGenerationRunDeleteManyArgs} args - Arguments to filter BlogGenerationRuns to delete.
     * @example
     * // Delete a few BlogGenerationRuns
     * const { count } = await prisma.blogGenerationRun.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends blogGenerationRunDeleteManyArgs>(args?: SelectSubset<T, blogGenerationRunDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BlogGenerationRuns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {blogGenerationRunUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BlogGenerationRuns
     * const blogGenerationRun = await prisma.blogGenerationRun.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends blogGenerationRunUpdateManyArgs>(args: SelectSubset<T, blogGenerationRunUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BlogGenerationRuns and returns the data updated in the database.
     * @param {blogGenerationRunUpdateManyAndReturnArgs} args - Arguments to update many BlogGenerationRuns.
     * @example
     * // Update many BlogGenerationRuns
     * const blogGenerationRun = await prisma.blogGenerationRun.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more BlogGenerationRuns and only return the `id`
     * const blogGenerationRunWithIdOnly = await prisma.blogGenerationRun.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends blogGenerationRunUpdateManyAndReturnArgs>(args: SelectSubset<T, blogGenerationRunUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$blogGenerationRunPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one BlogGenerationRun.
     * @param {blogGenerationRunUpsertArgs} args - Arguments to update or create a BlogGenerationRun.
     * @example
     * // Update or create a BlogGenerationRun
     * const blogGenerationRun = await prisma.blogGenerationRun.upsert({
     *   create: {
     *     // ... data to create a BlogGenerationRun
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BlogGenerationRun we want to update
     *   }
     * })
     */
    upsert<T extends blogGenerationRunUpsertArgs>(args: SelectSubset<T, blogGenerationRunUpsertArgs<ExtArgs>>): Prisma__blogGenerationRunClient<$Result.GetResult<Prisma.$blogGenerationRunPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BlogGenerationRuns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {blogGenerationRunCountArgs} args - Arguments to filter BlogGenerationRuns to count.
     * @example
     * // Count the number of BlogGenerationRuns
     * const count = await prisma.blogGenerationRun.count({
     *   where: {
     *     // ... the filter for the BlogGenerationRuns we want to count
     *   }
     * })
    **/
    count<T extends blogGenerationRunCountArgs>(
      args?: Subset<T, blogGenerationRunCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BlogGenerationRunCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BlogGenerationRun.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogGenerationRunAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BlogGenerationRunAggregateArgs>(args: Subset<T, BlogGenerationRunAggregateArgs>): Prisma.PrismaPromise<GetBlogGenerationRunAggregateType<T>>

    /**
     * Group by BlogGenerationRun.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {blogGenerationRunGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends blogGenerationRunGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: blogGenerationRunGroupByArgs['orderBy'] }
        : { orderBy?: blogGenerationRunGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, blogGenerationRunGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBlogGenerationRunGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the blogGenerationRun model
   */
  readonly fields: blogGenerationRunFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for blogGenerationRun.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__blogGenerationRunClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends blogGenerationRun$userArgs<ExtArgs> = {}>(args?: Subset<T, blogGenerationRun$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    drafts<T extends blogGenerationRun$draftsArgs<ExtArgs> = {}>(args?: Subset<T, blogGenerationRun$draftsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$blogDraftPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    evaluations<T extends blogGenerationRun$evaluationsArgs<ExtArgs> = {}>(args?: Subset<T, blogGenerationRun$evaluationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$blogEvaluationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the blogGenerationRun model
   */
  interface blogGenerationRunFieldRefs {
    readonly id: FieldRef<"blogGenerationRun", 'String'>
    readonly requestId: FieldRef<"blogGenerationRun", 'String'>
    readonly userId: FieldRef<"blogGenerationRun", 'String'>
    readonly topic: FieldRef<"blogGenerationRun", 'String'>
    readonly inputPayload: FieldRef<"blogGenerationRun", 'Json'>
    readonly status: FieldRef<"blogGenerationRun", 'String'>
    readonly triggerRunId: FieldRef<"blogGenerationRun", 'String'>
    readonly retryCount: FieldRef<"blogGenerationRun", 'Int'>
    readonly workflowStatus: FieldRef<"blogGenerationRun", 'String'>
    readonly error: FieldRef<"blogGenerationRun", 'String'>
    readonly durationMs: FieldRef<"blogGenerationRun", 'Int'>
    readonly iterationCount: FieldRef<"blogGenerationRun", 'Int'>
    readonly selectedDraftIndex: FieldRef<"blogGenerationRun", 'Int'>
    readonly finalBlog: FieldRef<"blogGenerationRun", 'String'>
    readonly finalPolishApplied: FieldRef<"blogGenerationRun", 'Boolean'>
    readonly finalPolishWarning: FieldRef<"blogGenerationRun", 'String'>
    readonly queuedAt: FieldRef<"blogGenerationRun", 'DateTime'>
    readonly startedAt: FieldRef<"blogGenerationRun", 'DateTime'>
    readonly heartbeatAt: FieldRef<"blogGenerationRun", 'DateTime'>
    readonly createdAt: FieldRef<"blogGenerationRun", 'DateTime'>
    readonly updatedAt: FieldRef<"blogGenerationRun", 'DateTime'>
    readonly completedAt: FieldRef<"blogGenerationRun", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * blogGenerationRun findUnique
   */
  export type blogGenerationRunFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the blogGenerationRun
     */
    select?: blogGenerationRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the blogGenerationRun
     */
    omit?: blogGenerationRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: blogGenerationRunInclude<ExtArgs> | null
    /**
     * Filter, which blogGenerationRun to fetch.
     */
    where: blogGenerationRunWhereUniqueInput
  }

  /**
   * blogGenerationRun findUniqueOrThrow
   */
  export type blogGenerationRunFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the blogGenerationRun
     */
    select?: blogGenerationRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the blogGenerationRun
     */
    omit?: blogGenerationRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: blogGenerationRunInclude<ExtArgs> | null
    /**
     * Filter, which blogGenerationRun to fetch.
     */
    where: blogGenerationRunWhereUniqueInput
  }

  /**
   * blogGenerationRun findFirst
   */
  export type blogGenerationRunFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the blogGenerationRun
     */
    select?: blogGenerationRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the blogGenerationRun
     */
    omit?: blogGenerationRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: blogGenerationRunInclude<ExtArgs> | null
    /**
     * Filter, which blogGenerationRun to fetch.
     */
    where?: blogGenerationRunWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of blogGenerationRuns to fetch.
     */
    orderBy?: blogGenerationRunOrderByWithRelationInput | blogGenerationRunOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for blogGenerationRuns.
     */
    cursor?: blogGenerationRunWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` blogGenerationRuns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` blogGenerationRuns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of blogGenerationRuns.
     */
    distinct?: BlogGenerationRunScalarFieldEnum | BlogGenerationRunScalarFieldEnum[]
  }

  /**
   * blogGenerationRun findFirstOrThrow
   */
  export type blogGenerationRunFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the blogGenerationRun
     */
    select?: blogGenerationRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the blogGenerationRun
     */
    omit?: blogGenerationRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: blogGenerationRunInclude<ExtArgs> | null
    /**
     * Filter, which blogGenerationRun to fetch.
     */
    where?: blogGenerationRunWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of blogGenerationRuns to fetch.
     */
    orderBy?: blogGenerationRunOrderByWithRelationInput | blogGenerationRunOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for blogGenerationRuns.
     */
    cursor?: blogGenerationRunWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` blogGenerationRuns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` blogGenerationRuns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of blogGenerationRuns.
     */
    distinct?: BlogGenerationRunScalarFieldEnum | BlogGenerationRunScalarFieldEnum[]
  }

  /**
   * blogGenerationRun findMany
   */
  export type blogGenerationRunFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the blogGenerationRun
     */
    select?: blogGenerationRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the blogGenerationRun
     */
    omit?: blogGenerationRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: blogGenerationRunInclude<ExtArgs> | null
    /**
     * Filter, which blogGenerationRuns to fetch.
     */
    where?: blogGenerationRunWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of blogGenerationRuns to fetch.
     */
    orderBy?: blogGenerationRunOrderByWithRelationInput | blogGenerationRunOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing blogGenerationRuns.
     */
    cursor?: blogGenerationRunWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` blogGenerationRuns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` blogGenerationRuns.
     */
    skip?: number
    distinct?: BlogGenerationRunScalarFieldEnum | BlogGenerationRunScalarFieldEnum[]
  }

  /**
   * blogGenerationRun create
   */
  export type blogGenerationRunCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the blogGenerationRun
     */
    select?: blogGenerationRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the blogGenerationRun
     */
    omit?: blogGenerationRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: blogGenerationRunInclude<ExtArgs> | null
    /**
     * The data needed to create a blogGenerationRun.
     */
    data: XOR<blogGenerationRunCreateInput, blogGenerationRunUncheckedCreateInput>
  }

  /**
   * blogGenerationRun createMany
   */
  export type blogGenerationRunCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many blogGenerationRuns.
     */
    data: blogGenerationRunCreateManyInput | blogGenerationRunCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * blogGenerationRun createManyAndReturn
   */
  export type blogGenerationRunCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the blogGenerationRun
     */
    select?: blogGenerationRunSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the blogGenerationRun
     */
    omit?: blogGenerationRunOmit<ExtArgs> | null
    /**
     * The data used to create many blogGenerationRuns.
     */
    data: blogGenerationRunCreateManyInput | blogGenerationRunCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: blogGenerationRunIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * blogGenerationRun update
   */
  export type blogGenerationRunUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the blogGenerationRun
     */
    select?: blogGenerationRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the blogGenerationRun
     */
    omit?: blogGenerationRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: blogGenerationRunInclude<ExtArgs> | null
    /**
     * The data needed to update a blogGenerationRun.
     */
    data: XOR<blogGenerationRunUpdateInput, blogGenerationRunUncheckedUpdateInput>
    /**
     * Choose, which blogGenerationRun to update.
     */
    where: blogGenerationRunWhereUniqueInput
  }

  /**
   * blogGenerationRun updateMany
   */
  export type blogGenerationRunUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update blogGenerationRuns.
     */
    data: XOR<blogGenerationRunUpdateManyMutationInput, blogGenerationRunUncheckedUpdateManyInput>
    /**
     * Filter which blogGenerationRuns to update
     */
    where?: blogGenerationRunWhereInput
    /**
     * Limit how many blogGenerationRuns to update.
     */
    limit?: number
  }

  /**
   * blogGenerationRun updateManyAndReturn
   */
  export type blogGenerationRunUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the blogGenerationRun
     */
    select?: blogGenerationRunSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the blogGenerationRun
     */
    omit?: blogGenerationRunOmit<ExtArgs> | null
    /**
     * The data used to update blogGenerationRuns.
     */
    data: XOR<blogGenerationRunUpdateManyMutationInput, blogGenerationRunUncheckedUpdateManyInput>
    /**
     * Filter which blogGenerationRuns to update
     */
    where?: blogGenerationRunWhereInput
    /**
     * Limit how many blogGenerationRuns to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: blogGenerationRunIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * blogGenerationRun upsert
   */
  export type blogGenerationRunUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the blogGenerationRun
     */
    select?: blogGenerationRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the blogGenerationRun
     */
    omit?: blogGenerationRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: blogGenerationRunInclude<ExtArgs> | null
    /**
     * The filter to search for the blogGenerationRun to update in case it exists.
     */
    where: blogGenerationRunWhereUniqueInput
    /**
     * In case the blogGenerationRun found by the `where` argument doesn't exist, create a new blogGenerationRun with this data.
     */
    create: XOR<blogGenerationRunCreateInput, blogGenerationRunUncheckedCreateInput>
    /**
     * In case the blogGenerationRun was found with the provided `where` argument, update it with this data.
     */
    update: XOR<blogGenerationRunUpdateInput, blogGenerationRunUncheckedUpdateInput>
  }

  /**
   * blogGenerationRun delete
   */
  export type blogGenerationRunDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the blogGenerationRun
     */
    select?: blogGenerationRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the blogGenerationRun
     */
    omit?: blogGenerationRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: blogGenerationRunInclude<ExtArgs> | null
    /**
     * Filter which blogGenerationRun to delete.
     */
    where: blogGenerationRunWhereUniqueInput
  }

  /**
   * blogGenerationRun deleteMany
   */
  export type blogGenerationRunDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which blogGenerationRuns to delete
     */
    where?: blogGenerationRunWhereInput
    /**
     * Limit how many blogGenerationRuns to delete.
     */
    limit?: number
  }

  /**
   * blogGenerationRun.user
   */
  export type blogGenerationRun$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * blogGenerationRun.drafts
   */
  export type blogGenerationRun$draftsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the blogDraft
     */
    select?: blogDraftSelect<ExtArgs> | null
    /**
     * Omit specific fields from the blogDraft
     */
    omit?: blogDraftOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: blogDraftInclude<ExtArgs> | null
    where?: blogDraftWhereInput
    orderBy?: blogDraftOrderByWithRelationInput | blogDraftOrderByWithRelationInput[]
    cursor?: blogDraftWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BlogDraftScalarFieldEnum | BlogDraftScalarFieldEnum[]
  }

  /**
   * blogGenerationRun.evaluations
   */
  export type blogGenerationRun$evaluationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the blogEvaluation
     */
    select?: blogEvaluationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the blogEvaluation
     */
    omit?: blogEvaluationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: blogEvaluationInclude<ExtArgs> | null
    where?: blogEvaluationWhereInput
    orderBy?: blogEvaluationOrderByWithRelationInput | blogEvaluationOrderByWithRelationInput[]
    cursor?: blogEvaluationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BlogEvaluationScalarFieldEnum | BlogEvaluationScalarFieldEnum[]
  }

  /**
   * blogGenerationRun without action
   */
  export type blogGenerationRunDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the blogGenerationRun
     */
    select?: blogGenerationRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the blogGenerationRun
     */
    omit?: blogGenerationRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: blogGenerationRunInclude<ExtArgs> | null
  }


  /**
   * Model blogDraft
   */

  export type AggregateBlogDraft = {
    _count: BlogDraftCountAggregateOutputType | null
    _avg: BlogDraftAvgAggregateOutputType | null
    _sum: BlogDraftSumAggregateOutputType | null
    _min: BlogDraftMinAggregateOutputType | null
    _max: BlogDraftMaxAggregateOutputType | null
  }

  export type BlogDraftAvgAggregateOutputType = {
    draftIndex: number | null
    ideaIndex: number | null
    wordCountEstimate: number | null
  }

  export type BlogDraftSumAggregateOutputType = {
    draftIndex: number | null
    ideaIndex: number | null
    wordCountEstimate: number | null
  }

  export type BlogDraftMinAggregateOutputType = {
    id: string | null
    runId: string | null
    draftIndex: number | null
    ideaIndex: number | null
    ideaTitle: string | null
    mode: string | null
    format: string | null
    content: string | null
    wordCountEstimate: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BlogDraftMaxAggregateOutputType = {
    id: string | null
    runId: string | null
    draftIndex: number | null
    ideaIndex: number | null
    ideaTitle: string | null
    mode: string | null
    format: string | null
    content: string | null
    wordCountEstimate: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BlogDraftCountAggregateOutputType = {
    id: number
    runId: number
    draftIndex: number
    ideaIndex: number
    ideaTitle: number
    mode: number
    format: number
    content: number
    wordCountEstimate: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BlogDraftAvgAggregateInputType = {
    draftIndex?: true
    ideaIndex?: true
    wordCountEstimate?: true
  }

  export type BlogDraftSumAggregateInputType = {
    draftIndex?: true
    ideaIndex?: true
    wordCountEstimate?: true
  }

  export type BlogDraftMinAggregateInputType = {
    id?: true
    runId?: true
    draftIndex?: true
    ideaIndex?: true
    ideaTitle?: true
    mode?: true
    format?: true
    content?: true
    wordCountEstimate?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BlogDraftMaxAggregateInputType = {
    id?: true
    runId?: true
    draftIndex?: true
    ideaIndex?: true
    ideaTitle?: true
    mode?: true
    format?: true
    content?: true
    wordCountEstimate?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BlogDraftCountAggregateInputType = {
    id?: true
    runId?: true
    draftIndex?: true
    ideaIndex?: true
    ideaTitle?: true
    mode?: true
    format?: true
    content?: true
    wordCountEstimate?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BlogDraftAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which blogDraft to aggregate.
     */
    where?: blogDraftWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of blogDrafts to fetch.
     */
    orderBy?: blogDraftOrderByWithRelationInput | blogDraftOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: blogDraftWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` blogDrafts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` blogDrafts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned blogDrafts
    **/
    _count?: true | BlogDraftCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BlogDraftAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BlogDraftSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BlogDraftMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BlogDraftMaxAggregateInputType
  }

  export type GetBlogDraftAggregateType<T extends BlogDraftAggregateArgs> = {
        [P in keyof T & keyof AggregateBlogDraft]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBlogDraft[P]>
      : GetScalarType<T[P], AggregateBlogDraft[P]>
  }




  export type blogDraftGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: blogDraftWhereInput
    orderBy?: blogDraftOrderByWithAggregationInput | blogDraftOrderByWithAggregationInput[]
    by: BlogDraftScalarFieldEnum[] | BlogDraftScalarFieldEnum
    having?: blogDraftScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BlogDraftCountAggregateInputType | true
    _avg?: BlogDraftAvgAggregateInputType
    _sum?: BlogDraftSumAggregateInputType
    _min?: BlogDraftMinAggregateInputType
    _max?: BlogDraftMaxAggregateInputType
  }

  export type BlogDraftGroupByOutputType = {
    id: string
    runId: string
    draftIndex: number
    ideaIndex: number
    ideaTitle: string
    mode: string
    format: string
    content: string
    wordCountEstimate: number
    createdAt: Date
    updatedAt: Date
    _count: BlogDraftCountAggregateOutputType | null
    _avg: BlogDraftAvgAggregateOutputType | null
    _sum: BlogDraftSumAggregateOutputType | null
    _min: BlogDraftMinAggregateOutputType | null
    _max: BlogDraftMaxAggregateOutputType | null
  }

  type GetBlogDraftGroupByPayload<T extends blogDraftGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BlogDraftGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BlogDraftGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BlogDraftGroupByOutputType[P]>
            : GetScalarType<T[P], BlogDraftGroupByOutputType[P]>
        }
      >
    >


  export type blogDraftSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    runId?: boolean
    draftIndex?: boolean
    ideaIndex?: boolean
    ideaTitle?: boolean
    mode?: boolean
    format?: boolean
    content?: boolean
    wordCountEstimate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    run?: boolean | blogGenerationRunDefaultArgs<ExtArgs>
    evaluation?: boolean | blogDraft$evaluationArgs<ExtArgs>
  }, ExtArgs["result"]["blogDraft"]>

  export type blogDraftSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    runId?: boolean
    draftIndex?: boolean
    ideaIndex?: boolean
    ideaTitle?: boolean
    mode?: boolean
    format?: boolean
    content?: boolean
    wordCountEstimate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    run?: boolean | blogGenerationRunDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["blogDraft"]>

  export type blogDraftSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    runId?: boolean
    draftIndex?: boolean
    ideaIndex?: boolean
    ideaTitle?: boolean
    mode?: boolean
    format?: boolean
    content?: boolean
    wordCountEstimate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    run?: boolean | blogGenerationRunDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["blogDraft"]>

  export type blogDraftSelectScalar = {
    id?: boolean
    runId?: boolean
    draftIndex?: boolean
    ideaIndex?: boolean
    ideaTitle?: boolean
    mode?: boolean
    format?: boolean
    content?: boolean
    wordCountEstimate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type blogDraftOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "runId" | "draftIndex" | "ideaIndex" | "ideaTitle" | "mode" | "format" | "content" | "wordCountEstimate" | "createdAt" | "updatedAt", ExtArgs["result"]["blogDraft"]>
  export type blogDraftInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    run?: boolean | blogGenerationRunDefaultArgs<ExtArgs>
    evaluation?: boolean | blogDraft$evaluationArgs<ExtArgs>
  }
  export type blogDraftIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    run?: boolean | blogGenerationRunDefaultArgs<ExtArgs>
  }
  export type blogDraftIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    run?: boolean | blogGenerationRunDefaultArgs<ExtArgs>
  }

  export type $blogDraftPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "blogDraft"
    objects: {
      run: Prisma.$blogGenerationRunPayload<ExtArgs>
      evaluation: Prisma.$blogEvaluationPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      runId: string
      draftIndex: number
      ideaIndex: number
      ideaTitle: string
      mode: string
      format: string
      content: string
      wordCountEstimate: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["blogDraft"]>
    composites: {}
  }

  type blogDraftGetPayload<S extends boolean | null | undefined | blogDraftDefaultArgs> = $Result.GetResult<Prisma.$blogDraftPayload, S>

  type blogDraftCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<blogDraftFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BlogDraftCountAggregateInputType | true
    }

  export interface blogDraftDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['blogDraft'], meta: { name: 'blogDraft' } }
    /**
     * Find zero or one BlogDraft that matches the filter.
     * @param {blogDraftFindUniqueArgs} args - Arguments to find a BlogDraft
     * @example
     * // Get one BlogDraft
     * const blogDraft = await prisma.blogDraft.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends blogDraftFindUniqueArgs>(args: SelectSubset<T, blogDraftFindUniqueArgs<ExtArgs>>): Prisma__blogDraftClient<$Result.GetResult<Prisma.$blogDraftPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BlogDraft that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {blogDraftFindUniqueOrThrowArgs} args - Arguments to find a BlogDraft
     * @example
     * // Get one BlogDraft
     * const blogDraft = await prisma.blogDraft.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends blogDraftFindUniqueOrThrowArgs>(args: SelectSubset<T, blogDraftFindUniqueOrThrowArgs<ExtArgs>>): Prisma__blogDraftClient<$Result.GetResult<Prisma.$blogDraftPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BlogDraft that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {blogDraftFindFirstArgs} args - Arguments to find a BlogDraft
     * @example
     * // Get one BlogDraft
     * const blogDraft = await prisma.blogDraft.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends blogDraftFindFirstArgs>(args?: SelectSubset<T, blogDraftFindFirstArgs<ExtArgs>>): Prisma__blogDraftClient<$Result.GetResult<Prisma.$blogDraftPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BlogDraft that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {blogDraftFindFirstOrThrowArgs} args - Arguments to find a BlogDraft
     * @example
     * // Get one BlogDraft
     * const blogDraft = await prisma.blogDraft.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends blogDraftFindFirstOrThrowArgs>(args?: SelectSubset<T, blogDraftFindFirstOrThrowArgs<ExtArgs>>): Prisma__blogDraftClient<$Result.GetResult<Prisma.$blogDraftPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BlogDrafts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {blogDraftFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BlogDrafts
     * const blogDrafts = await prisma.blogDraft.findMany()
     * 
     * // Get first 10 BlogDrafts
     * const blogDrafts = await prisma.blogDraft.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const blogDraftWithIdOnly = await prisma.blogDraft.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends blogDraftFindManyArgs>(args?: SelectSubset<T, blogDraftFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$blogDraftPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BlogDraft.
     * @param {blogDraftCreateArgs} args - Arguments to create a BlogDraft.
     * @example
     * // Create one BlogDraft
     * const BlogDraft = await prisma.blogDraft.create({
     *   data: {
     *     // ... data to create a BlogDraft
     *   }
     * })
     * 
     */
    create<T extends blogDraftCreateArgs>(args: SelectSubset<T, blogDraftCreateArgs<ExtArgs>>): Prisma__blogDraftClient<$Result.GetResult<Prisma.$blogDraftPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BlogDrafts.
     * @param {blogDraftCreateManyArgs} args - Arguments to create many BlogDrafts.
     * @example
     * // Create many BlogDrafts
     * const blogDraft = await prisma.blogDraft.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends blogDraftCreateManyArgs>(args?: SelectSubset<T, blogDraftCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BlogDrafts and returns the data saved in the database.
     * @param {blogDraftCreateManyAndReturnArgs} args - Arguments to create many BlogDrafts.
     * @example
     * // Create many BlogDrafts
     * const blogDraft = await prisma.blogDraft.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BlogDrafts and only return the `id`
     * const blogDraftWithIdOnly = await prisma.blogDraft.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends blogDraftCreateManyAndReturnArgs>(args?: SelectSubset<T, blogDraftCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$blogDraftPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a BlogDraft.
     * @param {blogDraftDeleteArgs} args - Arguments to delete one BlogDraft.
     * @example
     * // Delete one BlogDraft
     * const BlogDraft = await prisma.blogDraft.delete({
     *   where: {
     *     // ... filter to delete one BlogDraft
     *   }
     * })
     * 
     */
    delete<T extends blogDraftDeleteArgs>(args: SelectSubset<T, blogDraftDeleteArgs<ExtArgs>>): Prisma__blogDraftClient<$Result.GetResult<Prisma.$blogDraftPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BlogDraft.
     * @param {blogDraftUpdateArgs} args - Arguments to update one BlogDraft.
     * @example
     * // Update one BlogDraft
     * const blogDraft = await prisma.blogDraft.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends blogDraftUpdateArgs>(args: SelectSubset<T, blogDraftUpdateArgs<ExtArgs>>): Prisma__blogDraftClient<$Result.GetResult<Prisma.$blogDraftPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BlogDrafts.
     * @param {blogDraftDeleteManyArgs} args - Arguments to filter BlogDrafts to delete.
     * @example
     * // Delete a few BlogDrafts
     * const { count } = await prisma.blogDraft.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends blogDraftDeleteManyArgs>(args?: SelectSubset<T, blogDraftDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BlogDrafts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {blogDraftUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BlogDrafts
     * const blogDraft = await prisma.blogDraft.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends blogDraftUpdateManyArgs>(args: SelectSubset<T, blogDraftUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BlogDrafts and returns the data updated in the database.
     * @param {blogDraftUpdateManyAndReturnArgs} args - Arguments to update many BlogDrafts.
     * @example
     * // Update many BlogDrafts
     * const blogDraft = await prisma.blogDraft.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more BlogDrafts and only return the `id`
     * const blogDraftWithIdOnly = await prisma.blogDraft.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends blogDraftUpdateManyAndReturnArgs>(args: SelectSubset<T, blogDraftUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$blogDraftPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one BlogDraft.
     * @param {blogDraftUpsertArgs} args - Arguments to update or create a BlogDraft.
     * @example
     * // Update or create a BlogDraft
     * const blogDraft = await prisma.blogDraft.upsert({
     *   create: {
     *     // ... data to create a BlogDraft
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BlogDraft we want to update
     *   }
     * })
     */
    upsert<T extends blogDraftUpsertArgs>(args: SelectSubset<T, blogDraftUpsertArgs<ExtArgs>>): Prisma__blogDraftClient<$Result.GetResult<Prisma.$blogDraftPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BlogDrafts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {blogDraftCountArgs} args - Arguments to filter BlogDrafts to count.
     * @example
     * // Count the number of BlogDrafts
     * const count = await prisma.blogDraft.count({
     *   where: {
     *     // ... the filter for the BlogDrafts we want to count
     *   }
     * })
    **/
    count<T extends blogDraftCountArgs>(
      args?: Subset<T, blogDraftCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BlogDraftCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BlogDraft.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogDraftAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BlogDraftAggregateArgs>(args: Subset<T, BlogDraftAggregateArgs>): Prisma.PrismaPromise<GetBlogDraftAggregateType<T>>

    /**
     * Group by BlogDraft.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {blogDraftGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends blogDraftGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: blogDraftGroupByArgs['orderBy'] }
        : { orderBy?: blogDraftGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, blogDraftGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBlogDraftGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the blogDraft model
   */
  readonly fields: blogDraftFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for blogDraft.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__blogDraftClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    run<T extends blogGenerationRunDefaultArgs<ExtArgs> = {}>(args?: Subset<T, blogGenerationRunDefaultArgs<ExtArgs>>): Prisma__blogGenerationRunClient<$Result.GetResult<Prisma.$blogGenerationRunPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    evaluation<T extends blogDraft$evaluationArgs<ExtArgs> = {}>(args?: Subset<T, blogDraft$evaluationArgs<ExtArgs>>): Prisma__blogEvaluationClient<$Result.GetResult<Prisma.$blogEvaluationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the blogDraft model
   */
  interface blogDraftFieldRefs {
    readonly id: FieldRef<"blogDraft", 'String'>
    readonly runId: FieldRef<"blogDraft", 'String'>
    readonly draftIndex: FieldRef<"blogDraft", 'Int'>
    readonly ideaIndex: FieldRef<"blogDraft", 'Int'>
    readonly ideaTitle: FieldRef<"blogDraft", 'String'>
    readonly mode: FieldRef<"blogDraft", 'String'>
    readonly format: FieldRef<"blogDraft", 'String'>
    readonly content: FieldRef<"blogDraft", 'String'>
    readonly wordCountEstimate: FieldRef<"blogDraft", 'Int'>
    readonly createdAt: FieldRef<"blogDraft", 'DateTime'>
    readonly updatedAt: FieldRef<"blogDraft", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * blogDraft findUnique
   */
  export type blogDraftFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the blogDraft
     */
    select?: blogDraftSelect<ExtArgs> | null
    /**
     * Omit specific fields from the blogDraft
     */
    omit?: blogDraftOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: blogDraftInclude<ExtArgs> | null
    /**
     * Filter, which blogDraft to fetch.
     */
    where: blogDraftWhereUniqueInput
  }

  /**
   * blogDraft findUniqueOrThrow
   */
  export type blogDraftFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the blogDraft
     */
    select?: blogDraftSelect<ExtArgs> | null
    /**
     * Omit specific fields from the blogDraft
     */
    omit?: blogDraftOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: blogDraftInclude<ExtArgs> | null
    /**
     * Filter, which blogDraft to fetch.
     */
    where: blogDraftWhereUniqueInput
  }

  /**
   * blogDraft findFirst
   */
  export type blogDraftFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the blogDraft
     */
    select?: blogDraftSelect<ExtArgs> | null
    /**
     * Omit specific fields from the blogDraft
     */
    omit?: blogDraftOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: blogDraftInclude<ExtArgs> | null
    /**
     * Filter, which blogDraft to fetch.
     */
    where?: blogDraftWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of blogDrafts to fetch.
     */
    orderBy?: blogDraftOrderByWithRelationInput | blogDraftOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for blogDrafts.
     */
    cursor?: blogDraftWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` blogDrafts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` blogDrafts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of blogDrafts.
     */
    distinct?: BlogDraftScalarFieldEnum | BlogDraftScalarFieldEnum[]
  }

  /**
   * blogDraft findFirstOrThrow
   */
  export type blogDraftFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the blogDraft
     */
    select?: blogDraftSelect<ExtArgs> | null
    /**
     * Omit specific fields from the blogDraft
     */
    omit?: blogDraftOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: blogDraftInclude<ExtArgs> | null
    /**
     * Filter, which blogDraft to fetch.
     */
    where?: blogDraftWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of blogDrafts to fetch.
     */
    orderBy?: blogDraftOrderByWithRelationInput | blogDraftOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for blogDrafts.
     */
    cursor?: blogDraftWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` blogDrafts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` blogDrafts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of blogDrafts.
     */
    distinct?: BlogDraftScalarFieldEnum | BlogDraftScalarFieldEnum[]
  }

  /**
   * blogDraft findMany
   */
  export type blogDraftFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the blogDraft
     */
    select?: blogDraftSelect<ExtArgs> | null
    /**
     * Omit specific fields from the blogDraft
     */
    omit?: blogDraftOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: blogDraftInclude<ExtArgs> | null
    /**
     * Filter, which blogDrafts to fetch.
     */
    where?: blogDraftWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of blogDrafts to fetch.
     */
    orderBy?: blogDraftOrderByWithRelationInput | blogDraftOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing blogDrafts.
     */
    cursor?: blogDraftWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` blogDrafts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` blogDrafts.
     */
    skip?: number
    distinct?: BlogDraftScalarFieldEnum | BlogDraftScalarFieldEnum[]
  }

  /**
   * blogDraft create
   */
  export type blogDraftCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the blogDraft
     */
    select?: blogDraftSelect<ExtArgs> | null
    /**
     * Omit specific fields from the blogDraft
     */
    omit?: blogDraftOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: blogDraftInclude<ExtArgs> | null
    /**
     * The data needed to create a blogDraft.
     */
    data: XOR<blogDraftCreateInput, blogDraftUncheckedCreateInput>
  }

  /**
   * blogDraft createMany
   */
  export type blogDraftCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many blogDrafts.
     */
    data: blogDraftCreateManyInput | blogDraftCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * blogDraft createManyAndReturn
   */
  export type blogDraftCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the blogDraft
     */
    select?: blogDraftSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the blogDraft
     */
    omit?: blogDraftOmit<ExtArgs> | null
    /**
     * The data used to create many blogDrafts.
     */
    data: blogDraftCreateManyInput | blogDraftCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: blogDraftIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * blogDraft update
   */
  export type blogDraftUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the blogDraft
     */
    select?: blogDraftSelect<ExtArgs> | null
    /**
     * Omit specific fields from the blogDraft
     */
    omit?: blogDraftOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: blogDraftInclude<ExtArgs> | null
    /**
     * The data needed to update a blogDraft.
     */
    data: XOR<blogDraftUpdateInput, blogDraftUncheckedUpdateInput>
    /**
     * Choose, which blogDraft to update.
     */
    where: blogDraftWhereUniqueInput
  }

  /**
   * blogDraft updateMany
   */
  export type blogDraftUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update blogDrafts.
     */
    data: XOR<blogDraftUpdateManyMutationInput, blogDraftUncheckedUpdateManyInput>
    /**
     * Filter which blogDrafts to update
     */
    where?: blogDraftWhereInput
    /**
     * Limit how many blogDrafts to update.
     */
    limit?: number
  }

  /**
   * blogDraft updateManyAndReturn
   */
  export type blogDraftUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the blogDraft
     */
    select?: blogDraftSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the blogDraft
     */
    omit?: blogDraftOmit<ExtArgs> | null
    /**
     * The data used to update blogDrafts.
     */
    data: XOR<blogDraftUpdateManyMutationInput, blogDraftUncheckedUpdateManyInput>
    /**
     * Filter which blogDrafts to update
     */
    where?: blogDraftWhereInput
    /**
     * Limit how many blogDrafts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: blogDraftIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * blogDraft upsert
   */
  export type blogDraftUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the blogDraft
     */
    select?: blogDraftSelect<ExtArgs> | null
    /**
     * Omit specific fields from the blogDraft
     */
    omit?: blogDraftOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: blogDraftInclude<ExtArgs> | null
    /**
     * The filter to search for the blogDraft to update in case it exists.
     */
    where: blogDraftWhereUniqueInput
    /**
     * In case the blogDraft found by the `where` argument doesn't exist, create a new blogDraft with this data.
     */
    create: XOR<blogDraftCreateInput, blogDraftUncheckedCreateInput>
    /**
     * In case the blogDraft was found with the provided `where` argument, update it with this data.
     */
    update: XOR<blogDraftUpdateInput, blogDraftUncheckedUpdateInput>
  }

  /**
   * blogDraft delete
   */
  export type blogDraftDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the blogDraft
     */
    select?: blogDraftSelect<ExtArgs> | null
    /**
     * Omit specific fields from the blogDraft
     */
    omit?: blogDraftOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: blogDraftInclude<ExtArgs> | null
    /**
     * Filter which blogDraft to delete.
     */
    where: blogDraftWhereUniqueInput
  }

  /**
   * blogDraft deleteMany
   */
  export type blogDraftDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which blogDrafts to delete
     */
    where?: blogDraftWhereInput
    /**
     * Limit how many blogDrafts to delete.
     */
    limit?: number
  }

  /**
   * blogDraft.evaluation
   */
  export type blogDraft$evaluationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the blogEvaluation
     */
    select?: blogEvaluationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the blogEvaluation
     */
    omit?: blogEvaluationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: blogEvaluationInclude<ExtArgs> | null
    where?: blogEvaluationWhereInput
  }

  /**
   * blogDraft without action
   */
  export type blogDraftDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the blogDraft
     */
    select?: blogDraftSelect<ExtArgs> | null
    /**
     * Omit specific fields from the blogDraft
     */
    omit?: blogDraftOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: blogDraftInclude<ExtArgs> | null
  }


  /**
   * Model blogEvaluation
   */

  export type AggregateBlogEvaluation = {
    _count: BlogEvaluationCountAggregateOutputType | null
    _avg: BlogEvaluationAvgAggregateOutputType | null
    _sum: BlogEvaluationSumAggregateOutputType | null
    _min: BlogEvaluationMinAggregateOutputType | null
    _max: BlogEvaluationMaxAggregateOutputType | null
  }

  export type BlogEvaluationAvgAggregateOutputType = {
    draftIndex: number | null
    score: number | null
  }

  export type BlogEvaluationSumAggregateOutputType = {
    draftIndex: number | null
    score: number | null
  }

  export type BlogEvaluationMinAggregateOutputType = {
    id: string | null
    runId: string | null
    draftId: string | null
    draftIndex: number | null
    score: number | null
    approved: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BlogEvaluationMaxAggregateOutputType = {
    id: string | null
    runId: string | null
    draftId: string | null
    draftIndex: number | null
    score: number | null
    approved: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BlogEvaluationCountAggregateOutputType = {
    id: number
    runId: number
    draftId: number
    draftIndex: number
    score: number
    approved: number
    issues: number
    improvements: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BlogEvaluationAvgAggregateInputType = {
    draftIndex?: true
    score?: true
  }

  export type BlogEvaluationSumAggregateInputType = {
    draftIndex?: true
    score?: true
  }

  export type BlogEvaluationMinAggregateInputType = {
    id?: true
    runId?: true
    draftId?: true
    draftIndex?: true
    score?: true
    approved?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BlogEvaluationMaxAggregateInputType = {
    id?: true
    runId?: true
    draftId?: true
    draftIndex?: true
    score?: true
    approved?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BlogEvaluationCountAggregateInputType = {
    id?: true
    runId?: true
    draftId?: true
    draftIndex?: true
    score?: true
    approved?: true
    issues?: true
    improvements?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BlogEvaluationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which blogEvaluation to aggregate.
     */
    where?: blogEvaluationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of blogEvaluations to fetch.
     */
    orderBy?: blogEvaluationOrderByWithRelationInput | blogEvaluationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: blogEvaluationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` blogEvaluations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` blogEvaluations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned blogEvaluations
    **/
    _count?: true | BlogEvaluationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BlogEvaluationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BlogEvaluationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BlogEvaluationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BlogEvaluationMaxAggregateInputType
  }

  export type GetBlogEvaluationAggregateType<T extends BlogEvaluationAggregateArgs> = {
        [P in keyof T & keyof AggregateBlogEvaluation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBlogEvaluation[P]>
      : GetScalarType<T[P], AggregateBlogEvaluation[P]>
  }




  export type blogEvaluationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: blogEvaluationWhereInput
    orderBy?: blogEvaluationOrderByWithAggregationInput | blogEvaluationOrderByWithAggregationInput[]
    by: BlogEvaluationScalarFieldEnum[] | BlogEvaluationScalarFieldEnum
    having?: blogEvaluationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BlogEvaluationCountAggregateInputType | true
    _avg?: BlogEvaluationAvgAggregateInputType
    _sum?: BlogEvaluationSumAggregateInputType
    _min?: BlogEvaluationMinAggregateInputType
    _max?: BlogEvaluationMaxAggregateInputType
  }

  export type BlogEvaluationGroupByOutputType = {
    id: string
    runId: string
    draftId: string
    draftIndex: number
    score: number
    approved: boolean
    issues: JsonValue
    improvements: JsonValue
    createdAt: Date
    updatedAt: Date
    _count: BlogEvaluationCountAggregateOutputType | null
    _avg: BlogEvaluationAvgAggregateOutputType | null
    _sum: BlogEvaluationSumAggregateOutputType | null
    _min: BlogEvaluationMinAggregateOutputType | null
    _max: BlogEvaluationMaxAggregateOutputType | null
  }

  type GetBlogEvaluationGroupByPayload<T extends blogEvaluationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BlogEvaluationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BlogEvaluationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BlogEvaluationGroupByOutputType[P]>
            : GetScalarType<T[P], BlogEvaluationGroupByOutputType[P]>
        }
      >
    >


  export type blogEvaluationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    runId?: boolean
    draftId?: boolean
    draftIndex?: boolean
    score?: boolean
    approved?: boolean
    issues?: boolean
    improvements?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    run?: boolean | blogGenerationRunDefaultArgs<ExtArgs>
    draft?: boolean | blogDraftDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["blogEvaluation"]>

  export type blogEvaluationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    runId?: boolean
    draftId?: boolean
    draftIndex?: boolean
    score?: boolean
    approved?: boolean
    issues?: boolean
    improvements?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    run?: boolean | blogGenerationRunDefaultArgs<ExtArgs>
    draft?: boolean | blogDraftDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["blogEvaluation"]>

  export type blogEvaluationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    runId?: boolean
    draftId?: boolean
    draftIndex?: boolean
    score?: boolean
    approved?: boolean
    issues?: boolean
    improvements?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    run?: boolean | blogGenerationRunDefaultArgs<ExtArgs>
    draft?: boolean | blogDraftDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["blogEvaluation"]>

  export type blogEvaluationSelectScalar = {
    id?: boolean
    runId?: boolean
    draftId?: boolean
    draftIndex?: boolean
    score?: boolean
    approved?: boolean
    issues?: boolean
    improvements?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type blogEvaluationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "runId" | "draftId" | "draftIndex" | "score" | "approved" | "issues" | "improvements" | "createdAt" | "updatedAt", ExtArgs["result"]["blogEvaluation"]>
  export type blogEvaluationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    run?: boolean | blogGenerationRunDefaultArgs<ExtArgs>
    draft?: boolean | blogDraftDefaultArgs<ExtArgs>
  }
  export type blogEvaluationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    run?: boolean | blogGenerationRunDefaultArgs<ExtArgs>
    draft?: boolean | blogDraftDefaultArgs<ExtArgs>
  }
  export type blogEvaluationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    run?: boolean | blogGenerationRunDefaultArgs<ExtArgs>
    draft?: boolean | blogDraftDefaultArgs<ExtArgs>
  }

  export type $blogEvaluationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "blogEvaluation"
    objects: {
      run: Prisma.$blogGenerationRunPayload<ExtArgs>
      draft: Prisma.$blogDraftPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      runId: string
      draftId: string
      draftIndex: number
      score: number
      approved: boolean
      issues: Prisma.JsonValue
      improvements: Prisma.JsonValue
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["blogEvaluation"]>
    composites: {}
  }

  type blogEvaluationGetPayload<S extends boolean | null | undefined | blogEvaluationDefaultArgs> = $Result.GetResult<Prisma.$blogEvaluationPayload, S>

  type blogEvaluationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<blogEvaluationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BlogEvaluationCountAggregateInputType | true
    }

  export interface blogEvaluationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['blogEvaluation'], meta: { name: 'blogEvaluation' } }
    /**
     * Find zero or one BlogEvaluation that matches the filter.
     * @param {blogEvaluationFindUniqueArgs} args - Arguments to find a BlogEvaluation
     * @example
     * // Get one BlogEvaluation
     * const blogEvaluation = await prisma.blogEvaluation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends blogEvaluationFindUniqueArgs>(args: SelectSubset<T, blogEvaluationFindUniqueArgs<ExtArgs>>): Prisma__blogEvaluationClient<$Result.GetResult<Prisma.$blogEvaluationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BlogEvaluation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {blogEvaluationFindUniqueOrThrowArgs} args - Arguments to find a BlogEvaluation
     * @example
     * // Get one BlogEvaluation
     * const blogEvaluation = await prisma.blogEvaluation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends blogEvaluationFindUniqueOrThrowArgs>(args: SelectSubset<T, blogEvaluationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__blogEvaluationClient<$Result.GetResult<Prisma.$blogEvaluationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BlogEvaluation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {blogEvaluationFindFirstArgs} args - Arguments to find a BlogEvaluation
     * @example
     * // Get one BlogEvaluation
     * const blogEvaluation = await prisma.blogEvaluation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends blogEvaluationFindFirstArgs>(args?: SelectSubset<T, blogEvaluationFindFirstArgs<ExtArgs>>): Prisma__blogEvaluationClient<$Result.GetResult<Prisma.$blogEvaluationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BlogEvaluation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {blogEvaluationFindFirstOrThrowArgs} args - Arguments to find a BlogEvaluation
     * @example
     * // Get one BlogEvaluation
     * const blogEvaluation = await prisma.blogEvaluation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends blogEvaluationFindFirstOrThrowArgs>(args?: SelectSubset<T, blogEvaluationFindFirstOrThrowArgs<ExtArgs>>): Prisma__blogEvaluationClient<$Result.GetResult<Prisma.$blogEvaluationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BlogEvaluations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {blogEvaluationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BlogEvaluations
     * const blogEvaluations = await prisma.blogEvaluation.findMany()
     * 
     * // Get first 10 BlogEvaluations
     * const blogEvaluations = await prisma.blogEvaluation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const blogEvaluationWithIdOnly = await prisma.blogEvaluation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends blogEvaluationFindManyArgs>(args?: SelectSubset<T, blogEvaluationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$blogEvaluationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BlogEvaluation.
     * @param {blogEvaluationCreateArgs} args - Arguments to create a BlogEvaluation.
     * @example
     * // Create one BlogEvaluation
     * const BlogEvaluation = await prisma.blogEvaluation.create({
     *   data: {
     *     // ... data to create a BlogEvaluation
     *   }
     * })
     * 
     */
    create<T extends blogEvaluationCreateArgs>(args: SelectSubset<T, blogEvaluationCreateArgs<ExtArgs>>): Prisma__blogEvaluationClient<$Result.GetResult<Prisma.$blogEvaluationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BlogEvaluations.
     * @param {blogEvaluationCreateManyArgs} args - Arguments to create many BlogEvaluations.
     * @example
     * // Create many BlogEvaluations
     * const blogEvaluation = await prisma.blogEvaluation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends blogEvaluationCreateManyArgs>(args?: SelectSubset<T, blogEvaluationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BlogEvaluations and returns the data saved in the database.
     * @param {blogEvaluationCreateManyAndReturnArgs} args - Arguments to create many BlogEvaluations.
     * @example
     * // Create many BlogEvaluations
     * const blogEvaluation = await prisma.blogEvaluation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BlogEvaluations and only return the `id`
     * const blogEvaluationWithIdOnly = await prisma.blogEvaluation.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends blogEvaluationCreateManyAndReturnArgs>(args?: SelectSubset<T, blogEvaluationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$blogEvaluationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a BlogEvaluation.
     * @param {blogEvaluationDeleteArgs} args - Arguments to delete one BlogEvaluation.
     * @example
     * // Delete one BlogEvaluation
     * const BlogEvaluation = await prisma.blogEvaluation.delete({
     *   where: {
     *     // ... filter to delete one BlogEvaluation
     *   }
     * })
     * 
     */
    delete<T extends blogEvaluationDeleteArgs>(args: SelectSubset<T, blogEvaluationDeleteArgs<ExtArgs>>): Prisma__blogEvaluationClient<$Result.GetResult<Prisma.$blogEvaluationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BlogEvaluation.
     * @param {blogEvaluationUpdateArgs} args - Arguments to update one BlogEvaluation.
     * @example
     * // Update one BlogEvaluation
     * const blogEvaluation = await prisma.blogEvaluation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends blogEvaluationUpdateArgs>(args: SelectSubset<T, blogEvaluationUpdateArgs<ExtArgs>>): Prisma__blogEvaluationClient<$Result.GetResult<Prisma.$blogEvaluationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BlogEvaluations.
     * @param {blogEvaluationDeleteManyArgs} args - Arguments to filter BlogEvaluations to delete.
     * @example
     * // Delete a few BlogEvaluations
     * const { count } = await prisma.blogEvaluation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends blogEvaluationDeleteManyArgs>(args?: SelectSubset<T, blogEvaluationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BlogEvaluations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {blogEvaluationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BlogEvaluations
     * const blogEvaluation = await prisma.blogEvaluation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends blogEvaluationUpdateManyArgs>(args: SelectSubset<T, blogEvaluationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BlogEvaluations and returns the data updated in the database.
     * @param {blogEvaluationUpdateManyAndReturnArgs} args - Arguments to update many BlogEvaluations.
     * @example
     * // Update many BlogEvaluations
     * const blogEvaluation = await prisma.blogEvaluation.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more BlogEvaluations and only return the `id`
     * const blogEvaluationWithIdOnly = await prisma.blogEvaluation.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends blogEvaluationUpdateManyAndReturnArgs>(args: SelectSubset<T, blogEvaluationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$blogEvaluationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one BlogEvaluation.
     * @param {blogEvaluationUpsertArgs} args - Arguments to update or create a BlogEvaluation.
     * @example
     * // Update or create a BlogEvaluation
     * const blogEvaluation = await prisma.blogEvaluation.upsert({
     *   create: {
     *     // ... data to create a BlogEvaluation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BlogEvaluation we want to update
     *   }
     * })
     */
    upsert<T extends blogEvaluationUpsertArgs>(args: SelectSubset<T, blogEvaluationUpsertArgs<ExtArgs>>): Prisma__blogEvaluationClient<$Result.GetResult<Prisma.$blogEvaluationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BlogEvaluations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {blogEvaluationCountArgs} args - Arguments to filter BlogEvaluations to count.
     * @example
     * // Count the number of BlogEvaluations
     * const count = await prisma.blogEvaluation.count({
     *   where: {
     *     // ... the filter for the BlogEvaluations we want to count
     *   }
     * })
    **/
    count<T extends blogEvaluationCountArgs>(
      args?: Subset<T, blogEvaluationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BlogEvaluationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BlogEvaluation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogEvaluationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BlogEvaluationAggregateArgs>(args: Subset<T, BlogEvaluationAggregateArgs>): Prisma.PrismaPromise<GetBlogEvaluationAggregateType<T>>

    /**
     * Group by BlogEvaluation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {blogEvaluationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends blogEvaluationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: blogEvaluationGroupByArgs['orderBy'] }
        : { orderBy?: blogEvaluationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, blogEvaluationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBlogEvaluationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the blogEvaluation model
   */
  readonly fields: blogEvaluationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for blogEvaluation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__blogEvaluationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    run<T extends blogGenerationRunDefaultArgs<ExtArgs> = {}>(args?: Subset<T, blogGenerationRunDefaultArgs<ExtArgs>>): Prisma__blogGenerationRunClient<$Result.GetResult<Prisma.$blogGenerationRunPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    draft<T extends blogDraftDefaultArgs<ExtArgs> = {}>(args?: Subset<T, blogDraftDefaultArgs<ExtArgs>>): Prisma__blogDraftClient<$Result.GetResult<Prisma.$blogDraftPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the blogEvaluation model
   */
  interface blogEvaluationFieldRefs {
    readonly id: FieldRef<"blogEvaluation", 'String'>
    readonly runId: FieldRef<"blogEvaluation", 'String'>
    readonly draftId: FieldRef<"blogEvaluation", 'String'>
    readonly draftIndex: FieldRef<"blogEvaluation", 'Int'>
    readonly score: FieldRef<"blogEvaluation", 'Float'>
    readonly approved: FieldRef<"blogEvaluation", 'Boolean'>
    readonly issues: FieldRef<"blogEvaluation", 'Json'>
    readonly improvements: FieldRef<"blogEvaluation", 'Json'>
    readonly createdAt: FieldRef<"blogEvaluation", 'DateTime'>
    readonly updatedAt: FieldRef<"blogEvaluation", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * blogEvaluation findUnique
   */
  export type blogEvaluationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the blogEvaluation
     */
    select?: blogEvaluationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the blogEvaluation
     */
    omit?: blogEvaluationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: blogEvaluationInclude<ExtArgs> | null
    /**
     * Filter, which blogEvaluation to fetch.
     */
    where: blogEvaluationWhereUniqueInput
  }

  /**
   * blogEvaluation findUniqueOrThrow
   */
  export type blogEvaluationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the blogEvaluation
     */
    select?: blogEvaluationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the blogEvaluation
     */
    omit?: blogEvaluationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: blogEvaluationInclude<ExtArgs> | null
    /**
     * Filter, which blogEvaluation to fetch.
     */
    where: blogEvaluationWhereUniqueInput
  }

  /**
   * blogEvaluation findFirst
   */
  export type blogEvaluationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the blogEvaluation
     */
    select?: blogEvaluationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the blogEvaluation
     */
    omit?: blogEvaluationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: blogEvaluationInclude<ExtArgs> | null
    /**
     * Filter, which blogEvaluation to fetch.
     */
    where?: blogEvaluationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of blogEvaluations to fetch.
     */
    orderBy?: blogEvaluationOrderByWithRelationInput | blogEvaluationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for blogEvaluations.
     */
    cursor?: blogEvaluationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` blogEvaluations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` blogEvaluations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of blogEvaluations.
     */
    distinct?: BlogEvaluationScalarFieldEnum | BlogEvaluationScalarFieldEnum[]
  }

  /**
   * blogEvaluation findFirstOrThrow
   */
  export type blogEvaluationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the blogEvaluation
     */
    select?: blogEvaluationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the blogEvaluation
     */
    omit?: blogEvaluationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: blogEvaluationInclude<ExtArgs> | null
    /**
     * Filter, which blogEvaluation to fetch.
     */
    where?: blogEvaluationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of blogEvaluations to fetch.
     */
    orderBy?: blogEvaluationOrderByWithRelationInput | blogEvaluationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for blogEvaluations.
     */
    cursor?: blogEvaluationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` blogEvaluations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` blogEvaluations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of blogEvaluations.
     */
    distinct?: BlogEvaluationScalarFieldEnum | BlogEvaluationScalarFieldEnum[]
  }

  /**
   * blogEvaluation findMany
   */
  export type blogEvaluationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the blogEvaluation
     */
    select?: blogEvaluationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the blogEvaluation
     */
    omit?: blogEvaluationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: blogEvaluationInclude<ExtArgs> | null
    /**
     * Filter, which blogEvaluations to fetch.
     */
    where?: blogEvaluationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of blogEvaluations to fetch.
     */
    orderBy?: blogEvaluationOrderByWithRelationInput | blogEvaluationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing blogEvaluations.
     */
    cursor?: blogEvaluationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` blogEvaluations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` blogEvaluations.
     */
    skip?: number
    distinct?: BlogEvaluationScalarFieldEnum | BlogEvaluationScalarFieldEnum[]
  }

  /**
   * blogEvaluation create
   */
  export type blogEvaluationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the blogEvaluation
     */
    select?: blogEvaluationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the blogEvaluation
     */
    omit?: blogEvaluationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: blogEvaluationInclude<ExtArgs> | null
    /**
     * The data needed to create a blogEvaluation.
     */
    data: XOR<blogEvaluationCreateInput, blogEvaluationUncheckedCreateInput>
  }

  /**
   * blogEvaluation createMany
   */
  export type blogEvaluationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many blogEvaluations.
     */
    data: blogEvaluationCreateManyInput | blogEvaluationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * blogEvaluation createManyAndReturn
   */
  export type blogEvaluationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the blogEvaluation
     */
    select?: blogEvaluationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the blogEvaluation
     */
    omit?: blogEvaluationOmit<ExtArgs> | null
    /**
     * The data used to create many blogEvaluations.
     */
    data: blogEvaluationCreateManyInput | blogEvaluationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: blogEvaluationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * blogEvaluation update
   */
  export type blogEvaluationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the blogEvaluation
     */
    select?: blogEvaluationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the blogEvaluation
     */
    omit?: blogEvaluationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: blogEvaluationInclude<ExtArgs> | null
    /**
     * The data needed to update a blogEvaluation.
     */
    data: XOR<blogEvaluationUpdateInput, blogEvaluationUncheckedUpdateInput>
    /**
     * Choose, which blogEvaluation to update.
     */
    where: blogEvaluationWhereUniqueInput
  }

  /**
   * blogEvaluation updateMany
   */
  export type blogEvaluationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update blogEvaluations.
     */
    data: XOR<blogEvaluationUpdateManyMutationInput, blogEvaluationUncheckedUpdateManyInput>
    /**
     * Filter which blogEvaluations to update
     */
    where?: blogEvaluationWhereInput
    /**
     * Limit how many blogEvaluations to update.
     */
    limit?: number
  }

  /**
   * blogEvaluation updateManyAndReturn
   */
  export type blogEvaluationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the blogEvaluation
     */
    select?: blogEvaluationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the blogEvaluation
     */
    omit?: blogEvaluationOmit<ExtArgs> | null
    /**
     * The data used to update blogEvaluations.
     */
    data: XOR<blogEvaluationUpdateManyMutationInput, blogEvaluationUncheckedUpdateManyInput>
    /**
     * Filter which blogEvaluations to update
     */
    where?: blogEvaluationWhereInput
    /**
     * Limit how many blogEvaluations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: blogEvaluationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * blogEvaluation upsert
   */
  export type blogEvaluationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the blogEvaluation
     */
    select?: blogEvaluationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the blogEvaluation
     */
    omit?: blogEvaluationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: blogEvaluationInclude<ExtArgs> | null
    /**
     * The filter to search for the blogEvaluation to update in case it exists.
     */
    where: blogEvaluationWhereUniqueInput
    /**
     * In case the blogEvaluation found by the `where` argument doesn't exist, create a new blogEvaluation with this data.
     */
    create: XOR<blogEvaluationCreateInput, blogEvaluationUncheckedCreateInput>
    /**
     * In case the blogEvaluation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<blogEvaluationUpdateInput, blogEvaluationUncheckedUpdateInput>
  }

  /**
   * blogEvaluation delete
   */
  export type blogEvaluationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the blogEvaluation
     */
    select?: blogEvaluationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the blogEvaluation
     */
    omit?: blogEvaluationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: blogEvaluationInclude<ExtArgs> | null
    /**
     * Filter which blogEvaluation to delete.
     */
    where: blogEvaluationWhereUniqueInput
  }

  /**
   * blogEvaluation deleteMany
   */
  export type blogEvaluationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which blogEvaluations to delete
     */
    where?: blogEvaluationWhereInput
    /**
     * Limit how many blogEvaluations to delete.
     */
    limit?: number
  }

  /**
   * blogEvaluation without action
   */
  export type blogEvaluationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the blogEvaluation
     */
    select?: blogEvaluationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the blogEvaluation
     */
    omit?: blogEvaluationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: blogEvaluationInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    emailVerified: 'emailVerified',
    image: 'image',
    role: 'role',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const SessionScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    token: 'token',
    expiresAt: 'expiresAt',
    ipAddress: 'ipAddress',
    userAgent: 'userAgent',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum]


  export const AccountScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    accountId: 'accountId',
    providerId: 'providerId',
    accessToken: 'accessToken',
    refreshToken: 'refreshToken',
    accessTokenExpiresAt: 'accessTokenExpiresAt',
    refreshTokenExpiresAt: 'refreshTokenExpiresAt',
    scope: 'scope',
    idToken: 'idToken',
    password: 'password',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AccountScalarFieldEnum = (typeof AccountScalarFieldEnum)[keyof typeof AccountScalarFieldEnum]


  export const VerificationScalarFieldEnum: {
    id: 'id',
    identifier: 'identifier',
    value: 'value',
    expiresAt: 'expiresAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type VerificationScalarFieldEnum = (typeof VerificationScalarFieldEnum)[keyof typeof VerificationScalarFieldEnum]


  export const AiConversationScalarFieldEnum: {
    id: 'id',
    conversationId: 'conversationId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    apiHitCount: 'apiHitCount'
  };

  export type AiConversationScalarFieldEnum = (typeof AiConversationScalarFieldEnum)[keyof typeof AiConversationScalarFieldEnum]


  export const AiApiHitScalarFieldEnum: {
    id: 'id',
    route: 'route',
    createdAt: 'createdAt',
    conversationId: 'conversationId'
  };

  export type AiApiHitScalarFieldEnum = (typeof AiApiHitScalarFieldEnum)[keyof typeof AiApiHitScalarFieldEnum]


  export const SitePageViewScalarFieldEnum: {
    id: 'id',
    pathname: 'pathname',
    visitorHash: 'visitorHash',
    createdAt: 'createdAt'
  };

  export type SitePageViewScalarFieldEnum = (typeof SitePageViewScalarFieldEnum)[keyof typeof SitePageViewScalarFieldEnum]


  export const BlogBriefScalarFieldEnum: {
    id: 'id',
    title: 'title',
    topic: 'topic',
    goal: 'goal',
    audience: 'audience',
    userContext: 'userContext',
    tone: 'tone',
    keywords: 'keywords',
    includeServices: 'includeServices',
    constraints: 'constraints',
    depth: 'depth',
    backendRequestId: 'backendRequestId',
    selectedDraftIndex: 'selectedDraftIndex',
    finalDraftContent: 'finalDraftContent',
    slug: 'slug',
    locale: 'locale',
    publishedAt: 'publishedAt',
    translationStatus: 'translationStatus',
    translationError: 'translationError',
    translationTriggerRunId: 'translationTriggerRunId',
    englishSlug: 'englishSlug',
    translationStartedAt: 'translationStartedAt',
    translationCompletedAt: 'translationCompletedAt',
    generationError: 'generationError',
    idea: 'idea',
    clientHints: 'clientHints',
    category: 'category',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type BlogBriefScalarFieldEnum = (typeof BlogBriefScalarFieldEnum)[keyof typeof BlogBriefScalarFieldEnum]


  export const BlogDraftEditScalarFieldEnum: {
    id: 'id',
    briefId: 'briefId',
    draftIndex: 'draftIndex',
    content: 'content',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type BlogDraftEditScalarFieldEnum = (typeof BlogDraftEditScalarFieldEnum)[keyof typeof BlogDraftEditScalarFieldEnum]


  export const BlogPostScalarFieldEnum: {
    id: 'id',
    slug: 'slug',
    locale: 'locale',
    title: 'title',
    excerpt: 'excerpt',
    author: 'author',
    category: 'category',
    featured: 'featured',
    seoTitle: 'seoTitle',
    seoDescription: 'seoDescription',
    coverImage: 'coverImage',
    frontmatterJson: 'frontmatterJson',
    mdxContent: 'mdxContent',
    sourceBriefId: 'sourceBriefId',
    sourceRequestId: 'sourceRequestId',
    translationGroupId: 'translationGroupId',
    publishedAt: 'publishedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type BlogPostScalarFieldEnum = (typeof BlogPostScalarFieldEnum)[keyof typeof BlogPostScalarFieldEnum]


  export const BlogGenerationRunScalarFieldEnum: {
    id: 'id',
    requestId: 'requestId',
    userId: 'userId',
    topic: 'topic',
    inputPayload: 'inputPayload',
    status: 'status',
    triggerRunId: 'triggerRunId',
    retryCount: 'retryCount',
    workflowStatus: 'workflowStatus',
    error: 'error',
    durationMs: 'durationMs',
    iterationCount: 'iterationCount',
    selectedDraftIndex: 'selectedDraftIndex',
    finalBlog: 'finalBlog',
    finalPolishApplied: 'finalPolishApplied',
    finalPolishWarning: 'finalPolishWarning',
    queuedAt: 'queuedAt',
    startedAt: 'startedAt',
    heartbeatAt: 'heartbeatAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    completedAt: 'completedAt'
  };

  export type BlogGenerationRunScalarFieldEnum = (typeof BlogGenerationRunScalarFieldEnum)[keyof typeof BlogGenerationRunScalarFieldEnum]


  export const BlogDraftScalarFieldEnum: {
    id: 'id',
    runId: 'runId',
    draftIndex: 'draftIndex',
    ideaIndex: 'ideaIndex',
    ideaTitle: 'ideaTitle',
    mode: 'mode',
    format: 'format',
    content: 'content',
    wordCountEstimate: 'wordCountEstimate',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type BlogDraftScalarFieldEnum = (typeof BlogDraftScalarFieldEnum)[keyof typeof BlogDraftScalarFieldEnum]


  export const BlogEvaluationScalarFieldEnum: {
    id: 'id',
    runId: 'runId',
    draftId: 'draftId',
    draftIndex: 'draftIndex',
    score: 'score',
    approved: 'approved',
    issues: 'issues',
    improvements: 'improvements',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type BlogEvaluationScalarFieldEnum = (typeof BlogEvaluationScalarFieldEnum)[keyof typeof BlogEvaluationScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'BlogBriefStatus'
   */
  export type EnumBlogBriefStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BlogBriefStatus'>
    


  /**
   * Reference to a field of type 'BlogBriefStatus[]'
   */
  export type ListEnumBlogBriefStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BlogBriefStatus[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    emailVerified?: BoolFilter<"User"> | boolean
    image?: StringNullableFilter<"User"> | string | null
    role?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    sessions?: SessionListRelationFilter
    accounts?: AccountListRelationFilter
    blogRuns?: BlogGenerationRunListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrderInput | SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    sessions?: SessionOrderByRelationAggregateInput
    accounts?: AccountOrderByRelationAggregateInput
    blogRuns?: blogGenerationRunOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    emailVerified?: BoolFilter<"User"> | boolean
    image?: StringNullableFilter<"User"> | string | null
    role?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    sessions?: SessionListRelationFilter
    accounts?: AccountListRelationFilter
    blogRuns?: BlogGenerationRunListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrderInput | SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    emailVerified?: BoolWithAggregatesFilter<"User"> | boolean
    image?: StringNullableWithAggregatesFilter<"User"> | string | null
    role?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type SessionWhereInput = {
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    id?: StringFilter<"Session"> | string
    userId?: StringFilter<"Session"> | string
    token?: StringFilter<"Session"> | string
    expiresAt?: DateTimeFilter<"Session"> | Date | string
    ipAddress?: StringNullableFilter<"Session"> | string | null
    userAgent?: StringNullableFilter<"Session"> | string | null
    createdAt?: DateTimeFilter<"Session"> | Date | string
    updatedAt?: DateTimeFilter<"Session"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type SessionOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    token?: SortOrder
    expiresAt?: SortOrder
    ipAddress?: SortOrderInput | SortOrder
    userAgent?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type SessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    token?: string
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    userId?: StringFilter<"Session"> | string
    expiresAt?: DateTimeFilter<"Session"> | Date | string
    ipAddress?: StringNullableFilter<"Session"> | string | null
    userAgent?: StringNullableFilter<"Session"> | string | null
    createdAt?: DateTimeFilter<"Session"> | Date | string
    updatedAt?: DateTimeFilter<"Session"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "token">

  export type SessionOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    token?: SortOrder
    expiresAt?: SortOrder
    ipAddress?: SortOrderInput | SortOrder
    userAgent?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SessionCountOrderByAggregateInput
    _max?: SessionMaxOrderByAggregateInput
    _min?: SessionMinOrderByAggregateInput
  }

  export type SessionScalarWhereWithAggregatesInput = {
    AND?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    OR?: SessionScalarWhereWithAggregatesInput[]
    NOT?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Session"> | string
    userId?: StringWithAggregatesFilter<"Session"> | string
    token?: StringWithAggregatesFilter<"Session"> | string
    expiresAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
    ipAddress?: StringNullableWithAggregatesFilter<"Session"> | string | null
    userAgent?: StringNullableWithAggregatesFilter<"Session"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
  }

  export type AccountWhereInput = {
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    id?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    accountId?: StringFilter<"Account"> | string
    providerId?: StringFilter<"Account"> | string
    accessToken?: StringNullableFilter<"Account"> | string | null
    refreshToken?: StringNullableFilter<"Account"> | string | null
    accessTokenExpiresAt?: DateTimeNullableFilter<"Account"> | Date | string | null
    refreshTokenExpiresAt?: DateTimeNullableFilter<"Account"> | Date | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    idToken?: StringNullableFilter<"Account"> | string | null
    password?: StringNullableFilter<"Account"> | string | null
    createdAt?: DateTimeFilter<"Account"> | Date | string
    updatedAt?: DateTimeFilter<"Account"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type AccountOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    accountId?: SortOrder
    providerId?: SortOrder
    accessToken?: SortOrderInput | SortOrder
    refreshToken?: SortOrderInput | SortOrder
    accessTokenExpiresAt?: SortOrderInput | SortOrder
    refreshTokenExpiresAt?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    idToken?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type AccountWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    userId?: StringFilter<"Account"> | string
    accountId?: StringFilter<"Account"> | string
    providerId?: StringFilter<"Account"> | string
    accessToken?: StringNullableFilter<"Account"> | string | null
    refreshToken?: StringNullableFilter<"Account"> | string | null
    accessTokenExpiresAt?: DateTimeNullableFilter<"Account"> | Date | string | null
    refreshTokenExpiresAt?: DateTimeNullableFilter<"Account"> | Date | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    idToken?: StringNullableFilter<"Account"> | string | null
    password?: StringNullableFilter<"Account"> | string | null
    createdAt?: DateTimeFilter<"Account"> | Date | string
    updatedAt?: DateTimeFilter<"Account"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type AccountOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    accountId?: SortOrder
    providerId?: SortOrder
    accessToken?: SortOrderInput | SortOrder
    refreshToken?: SortOrderInput | SortOrder
    accessTokenExpiresAt?: SortOrderInput | SortOrder
    refreshTokenExpiresAt?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    idToken?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AccountCountOrderByAggregateInput
    _max?: AccountMaxOrderByAggregateInput
    _min?: AccountMinOrderByAggregateInput
  }

  export type AccountScalarWhereWithAggregatesInput = {
    AND?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    OR?: AccountScalarWhereWithAggregatesInput[]
    NOT?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Account"> | string
    userId?: StringWithAggregatesFilter<"Account"> | string
    accountId?: StringWithAggregatesFilter<"Account"> | string
    providerId?: StringWithAggregatesFilter<"Account"> | string
    accessToken?: StringNullableWithAggregatesFilter<"Account"> | string | null
    refreshToken?: StringNullableWithAggregatesFilter<"Account"> | string | null
    accessTokenExpiresAt?: DateTimeNullableWithAggregatesFilter<"Account"> | Date | string | null
    refreshTokenExpiresAt?: DateTimeNullableWithAggregatesFilter<"Account"> | Date | string | null
    scope?: StringNullableWithAggregatesFilter<"Account"> | string | null
    idToken?: StringNullableWithAggregatesFilter<"Account"> | string | null
    password?: StringNullableWithAggregatesFilter<"Account"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Account"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Account"> | Date | string
  }

  export type VerificationWhereInput = {
    AND?: VerificationWhereInput | VerificationWhereInput[]
    OR?: VerificationWhereInput[]
    NOT?: VerificationWhereInput | VerificationWhereInput[]
    id?: StringFilter<"Verification"> | string
    identifier?: StringFilter<"Verification"> | string
    value?: StringFilter<"Verification"> | string
    expiresAt?: DateTimeFilter<"Verification"> | Date | string
    createdAt?: DateTimeFilter<"Verification"> | Date | string
    updatedAt?: DateTimeFilter<"Verification"> | Date | string
  }

  export type VerificationOrderByWithRelationInput = {
    id?: SortOrder
    identifier?: SortOrder
    value?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VerificationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: VerificationWhereInput | VerificationWhereInput[]
    OR?: VerificationWhereInput[]
    NOT?: VerificationWhereInput | VerificationWhereInput[]
    identifier?: StringFilter<"Verification"> | string
    value?: StringFilter<"Verification"> | string
    expiresAt?: DateTimeFilter<"Verification"> | Date | string
    createdAt?: DateTimeFilter<"Verification"> | Date | string
    updatedAt?: DateTimeFilter<"Verification"> | Date | string
  }, "id">

  export type VerificationOrderByWithAggregationInput = {
    id?: SortOrder
    identifier?: SortOrder
    value?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: VerificationCountOrderByAggregateInput
    _max?: VerificationMaxOrderByAggregateInput
    _min?: VerificationMinOrderByAggregateInput
  }

  export type VerificationScalarWhereWithAggregatesInput = {
    AND?: VerificationScalarWhereWithAggregatesInput | VerificationScalarWhereWithAggregatesInput[]
    OR?: VerificationScalarWhereWithAggregatesInput[]
    NOT?: VerificationScalarWhereWithAggregatesInput | VerificationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Verification"> | string
    identifier?: StringWithAggregatesFilter<"Verification"> | string
    value?: StringWithAggregatesFilter<"Verification"> | string
    expiresAt?: DateTimeWithAggregatesFilter<"Verification"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Verification"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Verification"> | Date | string
  }

  export type AiConversationWhereInput = {
    AND?: AiConversationWhereInput | AiConversationWhereInput[]
    OR?: AiConversationWhereInput[]
    NOT?: AiConversationWhereInput | AiConversationWhereInput[]
    id?: StringFilter<"AiConversation"> | string
    conversationId?: StringFilter<"AiConversation"> | string
    createdAt?: DateTimeFilter<"AiConversation"> | Date | string
    updatedAt?: DateTimeFilter<"AiConversation"> | Date | string
    apiHitCount?: IntFilter<"AiConversation"> | number
    hits?: AiApiHitListRelationFilter
  }

  export type AiConversationOrderByWithRelationInput = {
    id?: SortOrder
    conversationId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    apiHitCount?: SortOrder
    hits?: AiApiHitOrderByRelationAggregateInput
  }

  export type AiConversationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    conversationId?: string
    AND?: AiConversationWhereInput | AiConversationWhereInput[]
    OR?: AiConversationWhereInput[]
    NOT?: AiConversationWhereInput | AiConversationWhereInput[]
    createdAt?: DateTimeFilter<"AiConversation"> | Date | string
    updatedAt?: DateTimeFilter<"AiConversation"> | Date | string
    apiHitCount?: IntFilter<"AiConversation"> | number
    hits?: AiApiHitListRelationFilter
  }, "id" | "conversationId">

  export type AiConversationOrderByWithAggregationInput = {
    id?: SortOrder
    conversationId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    apiHitCount?: SortOrder
    _count?: AiConversationCountOrderByAggregateInput
    _avg?: AiConversationAvgOrderByAggregateInput
    _max?: AiConversationMaxOrderByAggregateInput
    _min?: AiConversationMinOrderByAggregateInput
    _sum?: AiConversationSumOrderByAggregateInput
  }

  export type AiConversationScalarWhereWithAggregatesInput = {
    AND?: AiConversationScalarWhereWithAggregatesInput | AiConversationScalarWhereWithAggregatesInput[]
    OR?: AiConversationScalarWhereWithAggregatesInput[]
    NOT?: AiConversationScalarWhereWithAggregatesInput | AiConversationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AiConversation"> | string
    conversationId?: StringWithAggregatesFilter<"AiConversation"> | string
    createdAt?: DateTimeWithAggregatesFilter<"AiConversation"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"AiConversation"> | Date | string
    apiHitCount?: IntWithAggregatesFilter<"AiConversation"> | number
  }

  export type AiApiHitWhereInput = {
    AND?: AiApiHitWhereInput | AiApiHitWhereInput[]
    OR?: AiApiHitWhereInput[]
    NOT?: AiApiHitWhereInput | AiApiHitWhereInput[]
    id?: StringFilter<"AiApiHit"> | string
    route?: StringFilter<"AiApiHit"> | string
    createdAt?: DateTimeFilter<"AiApiHit"> | Date | string
    conversationId?: StringFilter<"AiApiHit"> | string
    conversation?: XOR<AiConversationScalarRelationFilter, AiConversationWhereInput>
  }

  export type AiApiHitOrderByWithRelationInput = {
    id?: SortOrder
    route?: SortOrder
    createdAt?: SortOrder
    conversationId?: SortOrder
    conversation?: AiConversationOrderByWithRelationInput
  }

  export type AiApiHitWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AiApiHitWhereInput | AiApiHitWhereInput[]
    OR?: AiApiHitWhereInput[]
    NOT?: AiApiHitWhereInput | AiApiHitWhereInput[]
    route?: StringFilter<"AiApiHit"> | string
    createdAt?: DateTimeFilter<"AiApiHit"> | Date | string
    conversationId?: StringFilter<"AiApiHit"> | string
    conversation?: XOR<AiConversationScalarRelationFilter, AiConversationWhereInput>
  }, "id">

  export type AiApiHitOrderByWithAggregationInput = {
    id?: SortOrder
    route?: SortOrder
    createdAt?: SortOrder
    conversationId?: SortOrder
    _count?: AiApiHitCountOrderByAggregateInput
    _max?: AiApiHitMaxOrderByAggregateInput
    _min?: AiApiHitMinOrderByAggregateInput
  }

  export type AiApiHitScalarWhereWithAggregatesInput = {
    AND?: AiApiHitScalarWhereWithAggregatesInput | AiApiHitScalarWhereWithAggregatesInput[]
    OR?: AiApiHitScalarWhereWithAggregatesInput[]
    NOT?: AiApiHitScalarWhereWithAggregatesInput | AiApiHitScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AiApiHit"> | string
    route?: StringWithAggregatesFilter<"AiApiHit"> | string
    createdAt?: DateTimeWithAggregatesFilter<"AiApiHit"> | Date | string
    conversationId?: StringWithAggregatesFilter<"AiApiHit"> | string
  }

  export type SitePageViewWhereInput = {
    AND?: SitePageViewWhereInput | SitePageViewWhereInput[]
    OR?: SitePageViewWhereInput[]
    NOT?: SitePageViewWhereInput | SitePageViewWhereInput[]
    id?: StringFilter<"SitePageView"> | string
    pathname?: StringFilter<"SitePageView"> | string
    visitorHash?: StringFilter<"SitePageView"> | string
    createdAt?: DateTimeFilter<"SitePageView"> | Date | string
  }

  export type SitePageViewOrderByWithRelationInput = {
    id?: SortOrder
    pathname?: SortOrder
    visitorHash?: SortOrder
    createdAt?: SortOrder
  }

  export type SitePageViewWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SitePageViewWhereInput | SitePageViewWhereInput[]
    OR?: SitePageViewWhereInput[]
    NOT?: SitePageViewWhereInput | SitePageViewWhereInput[]
    pathname?: StringFilter<"SitePageView"> | string
    visitorHash?: StringFilter<"SitePageView"> | string
    createdAt?: DateTimeFilter<"SitePageView"> | Date | string
  }, "id">

  export type SitePageViewOrderByWithAggregationInput = {
    id?: SortOrder
    pathname?: SortOrder
    visitorHash?: SortOrder
    createdAt?: SortOrder
    _count?: SitePageViewCountOrderByAggregateInput
    _max?: SitePageViewMaxOrderByAggregateInput
    _min?: SitePageViewMinOrderByAggregateInput
  }

  export type SitePageViewScalarWhereWithAggregatesInput = {
    AND?: SitePageViewScalarWhereWithAggregatesInput | SitePageViewScalarWhereWithAggregatesInput[]
    OR?: SitePageViewScalarWhereWithAggregatesInput[]
    NOT?: SitePageViewScalarWhereWithAggregatesInput | SitePageViewScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SitePageView"> | string
    pathname?: StringWithAggregatesFilter<"SitePageView"> | string
    visitorHash?: StringWithAggregatesFilter<"SitePageView"> | string
    createdAt?: DateTimeWithAggregatesFilter<"SitePageView"> | Date | string
  }

  export type BlogBriefWhereInput = {
    AND?: BlogBriefWhereInput | BlogBriefWhereInput[]
    OR?: BlogBriefWhereInput[]
    NOT?: BlogBriefWhereInput | BlogBriefWhereInput[]
    id?: StringFilter<"BlogBrief"> | string
    title?: StringNullableFilter<"BlogBrief"> | string | null
    topic?: StringFilter<"BlogBrief"> | string
    goal?: StringFilter<"BlogBrief"> | string
    audience?: StringFilter<"BlogBrief"> | string
    userContext?: StringNullableFilter<"BlogBrief"> | string | null
    tone?: StringNullableFilter<"BlogBrief"> | string | null
    keywords?: StringNullableListFilter<"BlogBrief">
    includeServices?: StringNullableListFilter<"BlogBrief">
    constraints?: StringNullableListFilter<"BlogBrief">
    depth?: StringNullableFilter<"BlogBrief"> | string | null
    backendRequestId?: StringNullableFilter<"BlogBrief"> | string | null
    selectedDraftIndex?: IntNullableFilter<"BlogBrief"> | number | null
    finalDraftContent?: StringNullableFilter<"BlogBrief"> | string | null
    slug?: StringNullableFilter<"BlogBrief"> | string | null
    locale?: StringFilter<"BlogBrief"> | string
    publishedAt?: DateTimeNullableFilter<"BlogBrief"> | Date | string | null
    translationStatus?: StringFilter<"BlogBrief"> | string
    translationError?: StringNullableFilter<"BlogBrief"> | string | null
    translationTriggerRunId?: StringNullableFilter<"BlogBrief"> | string | null
    englishSlug?: StringNullableFilter<"BlogBrief"> | string | null
    translationStartedAt?: DateTimeNullableFilter<"BlogBrief"> | Date | string | null
    translationCompletedAt?: DateTimeNullableFilter<"BlogBrief"> | Date | string | null
    generationError?: StringNullableFilter<"BlogBrief"> | string | null
    idea?: StringFilter<"BlogBrief"> | string
    clientHints?: StringNullableFilter<"BlogBrief"> | string | null
    category?: StringNullableFilter<"BlogBrief"> | string | null
    status?: EnumBlogBriefStatusFilter<"BlogBrief"> | $Enums.BlogBriefStatus
    createdAt?: DateTimeFilter<"BlogBrief"> | Date | string
    updatedAt?: DateTimeFilter<"BlogBrief"> | Date | string
    draftEdits?: BlogDraftEditListRelationFilter
  }

  export type BlogBriefOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrderInput | SortOrder
    topic?: SortOrder
    goal?: SortOrder
    audience?: SortOrder
    userContext?: SortOrderInput | SortOrder
    tone?: SortOrderInput | SortOrder
    keywords?: SortOrder
    includeServices?: SortOrder
    constraints?: SortOrder
    depth?: SortOrderInput | SortOrder
    backendRequestId?: SortOrderInput | SortOrder
    selectedDraftIndex?: SortOrderInput | SortOrder
    finalDraftContent?: SortOrderInput | SortOrder
    slug?: SortOrderInput | SortOrder
    locale?: SortOrder
    publishedAt?: SortOrderInput | SortOrder
    translationStatus?: SortOrder
    translationError?: SortOrderInput | SortOrder
    translationTriggerRunId?: SortOrderInput | SortOrder
    englishSlug?: SortOrderInput | SortOrder
    translationStartedAt?: SortOrderInput | SortOrder
    translationCompletedAt?: SortOrderInput | SortOrder
    generationError?: SortOrderInput | SortOrder
    idea?: SortOrder
    clientHints?: SortOrderInput | SortOrder
    category?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    draftEdits?: BlogDraftEditOrderByRelationAggregateInput
  }

  export type BlogBriefWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    backendRequestId?: string
    AND?: BlogBriefWhereInput | BlogBriefWhereInput[]
    OR?: BlogBriefWhereInput[]
    NOT?: BlogBriefWhereInput | BlogBriefWhereInput[]
    title?: StringNullableFilter<"BlogBrief"> | string | null
    topic?: StringFilter<"BlogBrief"> | string
    goal?: StringFilter<"BlogBrief"> | string
    audience?: StringFilter<"BlogBrief"> | string
    userContext?: StringNullableFilter<"BlogBrief"> | string | null
    tone?: StringNullableFilter<"BlogBrief"> | string | null
    keywords?: StringNullableListFilter<"BlogBrief">
    includeServices?: StringNullableListFilter<"BlogBrief">
    constraints?: StringNullableListFilter<"BlogBrief">
    depth?: StringNullableFilter<"BlogBrief"> | string | null
    selectedDraftIndex?: IntNullableFilter<"BlogBrief"> | number | null
    finalDraftContent?: StringNullableFilter<"BlogBrief"> | string | null
    slug?: StringNullableFilter<"BlogBrief"> | string | null
    locale?: StringFilter<"BlogBrief"> | string
    publishedAt?: DateTimeNullableFilter<"BlogBrief"> | Date | string | null
    translationStatus?: StringFilter<"BlogBrief"> | string
    translationError?: StringNullableFilter<"BlogBrief"> | string | null
    translationTriggerRunId?: StringNullableFilter<"BlogBrief"> | string | null
    englishSlug?: StringNullableFilter<"BlogBrief"> | string | null
    translationStartedAt?: DateTimeNullableFilter<"BlogBrief"> | Date | string | null
    translationCompletedAt?: DateTimeNullableFilter<"BlogBrief"> | Date | string | null
    generationError?: StringNullableFilter<"BlogBrief"> | string | null
    idea?: StringFilter<"BlogBrief"> | string
    clientHints?: StringNullableFilter<"BlogBrief"> | string | null
    category?: StringNullableFilter<"BlogBrief"> | string | null
    status?: EnumBlogBriefStatusFilter<"BlogBrief"> | $Enums.BlogBriefStatus
    createdAt?: DateTimeFilter<"BlogBrief"> | Date | string
    updatedAt?: DateTimeFilter<"BlogBrief"> | Date | string
    draftEdits?: BlogDraftEditListRelationFilter
  }, "id" | "backendRequestId">

  export type BlogBriefOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrderInput | SortOrder
    topic?: SortOrder
    goal?: SortOrder
    audience?: SortOrder
    userContext?: SortOrderInput | SortOrder
    tone?: SortOrderInput | SortOrder
    keywords?: SortOrder
    includeServices?: SortOrder
    constraints?: SortOrder
    depth?: SortOrderInput | SortOrder
    backendRequestId?: SortOrderInput | SortOrder
    selectedDraftIndex?: SortOrderInput | SortOrder
    finalDraftContent?: SortOrderInput | SortOrder
    slug?: SortOrderInput | SortOrder
    locale?: SortOrder
    publishedAt?: SortOrderInput | SortOrder
    translationStatus?: SortOrder
    translationError?: SortOrderInput | SortOrder
    translationTriggerRunId?: SortOrderInput | SortOrder
    englishSlug?: SortOrderInput | SortOrder
    translationStartedAt?: SortOrderInput | SortOrder
    translationCompletedAt?: SortOrderInput | SortOrder
    generationError?: SortOrderInput | SortOrder
    idea?: SortOrder
    clientHints?: SortOrderInput | SortOrder
    category?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: BlogBriefCountOrderByAggregateInput
    _avg?: BlogBriefAvgOrderByAggregateInput
    _max?: BlogBriefMaxOrderByAggregateInput
    _min?: BlogBriefMinOrderByAggregateInput
    _sum?: BlogBriefSumOrderByAggregateInput
  }

  export type BlogBriefScalarWhereWithAggregatesInput = {
    AND?: BlogBriefScalarWhereWithAggregatesInput | BlogBriefScalarWhereWithAggregatesInput[]
    OR?: BlogBriefScalarWhereWithAggregatesInput[]
    NOT?: BlogBriefScalarWhereWithAggregatesInput | BlogBriefScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"BlogBrief"> | string
    title?: StringNullableWithAggregatesFilter<"BlogBrief"> | string | null
    topic?: StringWithAggregatesFilter<"BlogBrief"> | string
    goal?: StringWithAggregatesFilter<"BlogBrief"> | string
    audience?: StringWithAggregatesFilter<"BlogBrief"> | string
    userContext?: StringNullableWithAggregatesFilter<"BlogBrief"> | string | null
    tone?: StringNullableWithAggregatesFilter<"BlogBrief"> | string | null
    keywords?: StringNullableListFilter<"BlogBrief">
    includeServices?: StringNullableListFilter<"BlogBrief">
    constraints?: StringNullableListFilter<"BlogBrief">
    depth?: StringNullableWithAggregatesFilter<"BlogBrief"> | string | null
    backendRequestId?: StringNullableWithAggregatesFilter<"BlogBrief"> | string | null
    selectedDraftIndex?: IntNullableWithAggregatesFilter<"BlogBrief"> | number | null
    finalDraftContent?: StringNullableWithAggregatesFilter<"BlogBrief"> | string | null
    slug?: StringNullableWithAggregatesFilter<"BlogBrief"> | string | null
    locale?: StringWithAggregatesFilter<"BlogBrief"> | string
    publishedAt?: DateTimeNullableWithAggregatesFilter<"BlogBrief"> | Date | string | null
    translationStatus?: StringWithAggregatesFilter<"BlogBrief"> | string
    translationError?: StringNullableWithAggregatesFilter<"BlogBrief"> | string | null
    translationTriggerRunId?: StringNullableWithAggregatesFilter<"BlogBrief"> | string | null
    englishSlug?: StringNullableWithAggregatesFilter<"BlogBrief"> | string | null
    translationStartedAt?: DateTimeNullableWithAggregatesFilter<"BlogBrief"> | Date | string | null
    translationCompletedAt?: DateTimeNullableWithAggregatesFilter<"BlogBrief"> | Date | string | null
    generationError?: StringNullableWithAggregatesFilter<"BlogBrief"> | string | null
    idea?: StringWithAggregatesFilter<"BlogBrief"> | string
    clientHints?: StringNullableWithAggregatesFilter<"BlogBrief"> | string | null
    category?: StringNullableWithAggregatesFilter<"BlogBrief"> | string | null
    status?: EnumBlogBriefStatusWithAggregatesFilter<"BlogBrief"> | $Enums.BlogBriefStatus
    createdAt?: DateTimeWithAggregatesFilter<"BlogBrief"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"BlogBrief"> | Date | string
  }

  export type BlogDraftEditWhereInput = {
    AND?: BlogDraftEditWhereInput | BlogDraftEditWhereInput[]
    OR?: BlogDraftEditWhereInput[]
    NOT?: BlogDraftEditWhereInput | BlogDraftEditWhereInput[]
    id?: StringFilter<"BlogDraftEdit"> | string
    briefId?: StringFilter<"BlogDraftEdit"> | string
    draftIndex?: IntFilter<"BlogDraftEdit"> | number
    content?: StringFilter<"BlogDraftEdit"> | string
    createdAt?: DateTimeFilter<"BlogDraftEdit"> | Date | string
    updatedAt?: DateTimeFilter<"BlogDraftEdit"> | Date | string
    brief?: XOR<BlogBriefScalarRelationFilter, BlogBriefWhereInput>
  }

  export type BlogDraftEditOrderByWithRelationInput = {
    id?: SortOrder
    briefId?: SortOrder
    draftIndex?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    brief?: BlogBriefOrderByWithRelationInput
  }

  export type BlogDraftEditWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    briefId_draftIndex?: BlogDraftEditBriefIdDraftIndexCompoundUniqueInput
    AND?: BlogDraftEditWhereInput | BlogDraftEditWhereInput[]
    OR?: BlogDraftEditWhereInput[]
    NOT?: BlogDraftEditWhereInput | BlogDraftEditWhereInput[]
    briefId?: StringFilter<"BlogDraftEdit"> | string
    draftIndex?: IntFilter<"BlogDraftEdit"> | number
    content?: StringFilter<"BlogDraftEdit"> | string
    createdAt?: DateTimeFilter<"BlogDraftEdit"> | Date | string
    updatedAt?: DateTimeFilter<"BlogDraftEdit"> | Date | string
    brief?: XOR<BlogBriefScalarRelationFilter, BlogBriefWhereInput>
  }, "id" | "briefId_draftIndex">

  export type BlogDraftEditOrderByWithAggregationInput = {
    id?: SortOrder
    briefId?: SortOrder
    draftIndex?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: BlogDraftEditCountOrderByAggregateInput
    _avg?: BlogDraftEditAvgOrderByAggregateInput
    _max?: BlogDraftEditMaxOrderByAggregateInput
    _min?: BlogDraftEditMinOrderByAggregateInput
    _sum?: BlogDraftEditSumOrderByAggregateInput
  }

  export type BlogDraftEditScalarWhereWithAggregatesInput = {
    AND?: BlogDraftEditScalarWhereWithAggregatesInput | BlogDraftEditScalarWhereWithAggregatesInput[]
    OR?: BlogDraftEditScalarWhereWithAggregatesInput[]
    NOT?: BlogDraftEditScalarWhereWithAggregatesInput | BlogDraftEditScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"BlogDraftEdit"> | string
    briefId?: StringWithAggregatesFilter<"BlogDraftEdit"> | string
    draftIndex?: IntWithAggregatesFilter<"BlogDraftEdit"> | number
    content?: StringWithAggregatesFilter<"BlogDraftEdit"> | string
    createdAt?: DateTimeWithAggregatesFilter<"BlogDraftEdit"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"BlogDraftEdit"> | Date | string
  }

  export type BlogPostWhereInput = {
    AND?: BlogPostWhereInput | BlogPostWhereInput[]
    OR?: BlogPostWhereInput[]
    NOT?: BlogPostWhereInput | BlogPostWhereInput[]
    id?: StringFilter<"BlogPost"> | string
    slug?: StringFilter<"BlogPost"> | string
    locale?: StringFilter<"BlogPost"> | string
    title?: StringFilter<"BlogPost"> | string
    excerpt?: StringFilter<"BlogPost"> | string
    author?: StringFilter<"BlogPost"> | string
    category?: StringFilter<"BlogPost"> | string
    featured?: BoolFilter<"BlogPost"> | boolean
    seoTitle?: StringNullableFilter<"BlogPost"> | string | null
    seoDescription?: StringNullableFilter<"BlogPost"> | string | null
    coverImage?: StringNullableFilter<"BlogPost"> | string | null
    frontmatterJson?: JsonNullableFilter<"BlogPost">
    mdxContent?: StringFilter<"BlogPost"> | string
    sourceBriefId?: StringNullableFilter<"BlogPost"> | string | null
    sourceRequestId?: StringNullableFilter<"BlogPost"> | string | null
    translationGroupId?: StringNullableFilter<"BlogPost"> | string | null
    publishedAt?: DateTimeFilter<"BlogPost"> | Date | string
    createdAt?: DateTimeFilter<"BlogPost"> | Date | string
    updatedAt?: DateTimeFilter<"BlogPost"> | Date | string
  }

  export type BlogPostOrderByWithRelationInput = {
    id?: SortOrder
    slug?: SortOrder
    locale?: SortOrder
    title?: SortOrder
    excerpt?: SortOrder
    author?: SortOrder
    category?: SortOrder
    featured?: SortOrder
    seoTitle?: SortOrderInput | SortOrder
    seoDescription?: SortOrderInput | SortOrder
    coverImage?: SortOrderInput | SortOrder
    frontmatterJson?: SortOrderInput | SortOrder
    mdxContent?: SortOrder
    sourceBriefId?: SortOrderInput | SortOrder
    sourceRequestId?: SortOrderInput | SortOrder
    translationGroupId?: SortOrderInput | SortOrder
    publishedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BlogPostWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    locale_slug?: BlogPostLocaleSlugCompoundUniqueInput
    AND?: BlogPostWhereInput | BlogPostWhereInput[]
    OR?: BlogPostWhereInput[]
    NOT?: BlogPostWhereInput | BlogPostWhereInput[]
    slug?: StringFilter<"BlogPost"> | string
    locale?: StringFilter<"BlogPost"> | string
    title?: StringFilter<"BlogPost"> | string
    excerpt?: StringFilter<"BlogPost"> | string
    author?: StringFilter<"BlogPost"> | string
    category?: StringFilter<"BlogPost"> | string
    featured?: BoolFilter<"BlogPost"> | boolean
    seoTitle?: StringNullableFilter<"BlogPost"> | string | null
    seoDescription?: StringNullableFilter<"BlogPost"> | string | null
    coverImage?: StringNullableFilter<"BlogPost"> | string | null
    frontmatterJson?: JsonNullableFilter<"BlogPost">
    mdxContent?: StringFilter<"BlogPost"> | string
    sourceBriefId?: StringNullableFilter<"BlogPost"> | string | null
    sourceRequestId?: StringNullableFilter<"BlogPost"> | string | null
    translationGroupId?: StringNullableFilter<"BlogPost"> | string | null
    publishedAt?: DateTimeFilter<"BlogPost"> | Date | string
    createdAt?: DateTimeFilter<"BlogPost"> | Date | string
    updatedAt?: DateTimeFilter<"BlogPost"> | Date | string
  }, "id" | "locale_slug">

  export type BlogPostOrderByWithAggregationInput = {
    id?: SortOrder
    slug?: SortOrder
    locale?: SortOrder
    title?: SortOrder
    excerpt?: SortOrder
    author?: SortOrder
    category?: SortOrder
    featured?: SortOrder
    seoTitle?: SortOrderInput | SortOrder
    seoDescription?: SortOrderInput | SortOrder
    coverImage?: SortOrderInput | SortOrder
    frontmatterJson?: SortOrderInput | SortOrder
    mdxContent?: SortOrder
    sourceBriefId?: SortOrderInput | SortOrder
    sourceRequestId?: SortOrderInput | SortOrder
    translationGroupId?: SortOrderInput | SortOrder
    publishedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: BlogPostCountOrderByAggregateInput
    _max?: BlogPostMaxOrderByAggregateInput
    _min?: BlogPostMinOrderByAggregateInput
  }

  export type BlogPostScalarWhereWithAggregatesInput = {
    AND?: BlogPostScalarWhereWithAggregatesInput | BlogPostScalarWhereWithAggregatesInput[]
    OR?: BlogPostScalarWhereWithAggregatesInput[]
    NOT?: BlogPostScalarWhereWithAggregatesInput | BlogPostScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"BlogPost"> | string
    slug?: StringWithAggregatesFilter<"BlogPost"> | string
    locale?: StringWithAggregatesFilter<"BlogPost"> | string
    title?: StringWithAggregatesFilter<"BlogPost"> | string
    excerpt?: StringWithAggregatesFilter<"BlogPost"> | string
    author?: StringWithAggregatesFilter<"BlogPost"> | string
    category?: StringWithAggregatesFilter<"BlogPost"> | string
    featured?: BoolWithAggregatesFilter<"BlogPost"> | boolean
    seoTitle?: StringNullableWithAggregatesFilter<"BlogPost"> | string | null
    seoDescription?: StringNullableWithAggregatesFilter<"BlogPost"> | string | null
    coverImage?: StringNullableWithAggregatesFilter<"BlogPost"> | string | null
    frontmatterJson?: JsonNullableWithAggregatesFilter<"BlogPost">
    mdxContent?: StringWithAggregatesFilter<"BlogPost"> | string
    sourceBriefId?: StringNullableWithAggregatesFilter<"BlogPost"> | string | null
    sourceRequestId?: StringNullableWithAggregatesFilter<"BlogPost"> | string | null
    translationGroupId?: StringNullableWithAggregatesFilter<"BlogPost"> | string | null
    publishedAt?: DateTimeWithAggregatesFilter<"BlogPost"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"BlogPost"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"BlogPost"> | Date | string
  }

  export type blogGenerationRunWhereInput = {
    AND?: blogGenerationRunWhereInput | blogGenerationRunWhereInput[]
    OR?: blogGenerationRunWhereInput[]
    NOT?: blogGenerationRunWhereInput | blogGenerationRunWhereInput[]
    id?: StringFilter<"blogGenerationRun"> | string
    requestId?: StringFilter<"blogGenerationRun"> | string
    userId?: StringNullableFilter<"blogGenerationRun"> | string | null
    topic?: StringFilter<"blogGenerationRun"> | string
    inputPayload?: JsonNullableFilter<"blogGenerationRun">
    status?: StringFilter<"blogGenerationRun"> | string
    triggerRunId?: StringNullableFilter<"blogGenerationRun"> | string | null
    retryCount?: IntFilter<"blogGenerationRun"> | number
    workflowStatus?: StringNullableFilter<"blogGenerationRun"> | string | null
    error?: StringNullableFilter<"blogGenerationRun"> | string | null
    durationMs?: IntNullableFilter<"blogGenerationRun"> | number | null
    iterationCount?: IntNullableFilter<"blogGenerationRun"> | number | null
    selectedDraftIndex?: IntNullableFilter<"blogGenerationRun"> | number | null
    finalBlog?: StringNullableFilter<"blogGenerationRun"> | string | null
    finalPolishApplied?: BoolNullableFilter<"blogGenerationRun"> | boolean | null
    finalPolishWarning?: StringNullableFilter<"blogGenerationRun"> | string | null
    queuedAt?: DateTimeNullableFilter<"blogGenerationRun"> | Date | string | null
    startedAt?: DateTimeNullableFilter<"blogGenerationRun"> | Date | string | null
    heartbeatAt?: DateTimeNullableFilter<"blogGenerationRun"> | Date | string | null
    createdAt?: DateTimeFilter<"blogGenerationRun"> | Date | string
    updatedAt?: DateTimeFilter<"blogGenerationRun"> | Date | string
    completedAt?: DateTimeNullableFilter<"blogGenerationRun"> | Date | string | null
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    drafts?: BlogDraftListRelationFilter
    evaluations?: BlogEvaluationListRelationFilter
  }

  export type blogGenerationRunOrderByWithRelationInput = {
    id?: SortOrder
    requestId?: SortOrder
    userId?: SortOrderInput | SortOrder
    topic?: SortOrder
    inputPayload?: SortOrderInput | SortOrder
    status?: SortOrder
    triggerRunId?: SortOrderInput | SortOrder
    retryCount?: SortOrder
    workflowStatus?: SortOrderInput | SortOrder
    error?: SortOrderInput | SortOrder
    durationMs?: SortOrderInput | SortOrder
    iterationCount?: SortOrderInput | SortOrder
    selectedDraftIndex?: SortOrderInput | SortOrder
    finalBlog?: SortOrderInput | SortOrder
    finalPolishApplied?: SortOrderInput | SortOrder
    finalPolishWarning?: SortOrderInput | SortOrder
    queuedAt?: SortOrderInput | SortOrder
    startedAt?: SortOrderInput | SortOrder
    heartbeatAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    completedAt?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
    drafts?: blogDraftOrderByRelationAggregateInput
    evaluations?: blogEvaluationOrderByRelationAggregateInput
  }

  export type blogGenerationRunWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    requestId?: string
    AND?: blogGenerationRunWhereInput | blogGenerationRunWhereInput[]
    OR?: blogGenerationRunWhereInput[]
    NOT?: blogGenerationRunWhereInput | blogGenerationRunWhereInput[]
    userId?: StringNullableFilter<"blogGenerationRun"> | string | null
    topic?: StringFilter<"blogGenerationRun"> | string
    inputPayload?: JsonNullableFilter<"blogGenerationRun">
    status?: StringFilter<"blogGenerationRun"> | string
    triggerRunId?: StringNullableFilter<"blogGenerationRun"> | string | null
    retryCount?: IntFilter<"blogGenerationRun"> | number
    workflowStatus?: StringNullableFilter<"blogGenerationRun"> | string | null
    error?: StringNullableFilter<"blogGenerationRun"> | string | null
    durationMs?: IntNullableFilter<"blogGenerationRun"> | number | null
    iterationCount?: IntNullableFilter<"blogGenerationRun"> | number | null
    selectedDraftIndex?: IntNullableFilter<"blogGenerationRun"> | number | null
    finalBlog?: StringNullableFilter<"blogGenerationRun"> | string | null
    finalPolishApplied?: BoolNullableFilter<"blogGenerationRun"> | boolean | null
    finalPolishWarning?: StringNullableFilter<"blogGenerationRun"> | string | null
    queuedAt?: DateTimeNullableFilter<"blogGenerationRun"> | Date | string | null
    startedAt?: DateTimeNullableFilter<"blogGenerationRun"> | Date | string | null
    heartbeatAt?: DateTimeNullableFilter<"blogGenerationRun"> | Date | string | null
    createdAt?: DateTimeFilter<"blogGenerationRun"> | Date | string
    updatedAt?: DateTimeFilter<"blogGenerationRun"> | Date | string
    completedAt?: DateTimeNullableFilter<"blogGenerationRun"> | Date | string | null
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    drafts?: BlogDraftListRelationFilter
    evaluations?: BlogEvaluationListRelationFilter
  }, "id" | "requestId">

  export type blogGenerationRunOrderByWithAggregationInput = {
    id?: SortOrder
    requestId?: SortOrder
    userId?: SortOrderInput | SortOrder
    topic?: SortOrder
    inputPayload?: SortOrderInput | SortOrder
    status?: SortOrder
    triggerRunId?: SortOrderInput | SortOrder
    retryCount?: SortOrder
    workflowStatus?: SortOrderInput | SortOrder
    error?: SortOrderInput | SortOrder
    durationMs?: SortOrderInput | SortOrder
    iterationCount?: SortOrderInput | SortOrder
    selectedDraftIndex?: SortOrderInput | SortOrder
    finalBlog?: SortOrderInput | SortOrder
    finalPolishApplied?: SortOrderInput | SortOrder
    finalPolishWarning?: SortOrderInput | SortOrder
    queuedAt?: SortOrderInput | SortOrder
    startedAt?: SortOrderInput | SortOrder
    heartbeatAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    completedAt?: SortOrderInput | SortOrder
    _count?: blogGenerationRunCountOrderByAggregateInput
    _avg?: blogGenerationRunAvgOrderByAggregateInput
    _max?: blogGenerationRunMaxOrderByAggregateInput
    _min?: blogGenerationRunMinOrderByAggregateInput
    _sum?: blogGenerationRunSumOrderByAggregateInput
  }

  export type blogGenerationRunScalarWhereWithAggregatesInput = {
    AND?: blogGenerationRunScalarWhereWithAggregatesInput | blogGenerationRunScalarWhereWithAggregatesInput[]
    OR?: blogGenerationRunScalarWhereWithAggregatesInput[]
    NOT?: blogGenerationRunScalarWhereWithAggregatesInput | blogGenerationRunScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"blogGenerationRun"> | string
    requestId?: StringWithAggregatesFilter<"blogGenerationRun"> | string
    userId?: StringNullableWithAggregatesFilter<"blogGenerationRun"> | string | null
    topic?: StringWithAggregatesFilter<"blogGenerationRun"> | string
    inputPayload?: JsonNullableWithAggregatesFilter<"blogGenerationRun">
    status?: StringWithAggregatesFilter<"blogGenerationRun"> | string
    triggerRunId?: StringNullableWithAggregatesFilter<"blogGenerationRun"> | string | null
    retryCount?: IntWithAggregatesFilter<"blogGenerationRun"> | number
    workflowStatus?: StringNullableWithAggregatesFilter<"blogGenerationRun"> | string | null
    error?: StringNullableWithAggregatesFilter<"blogGenerationRun"> | string | null
    durationMs?: IntNullableWithAggregatesFilter<"blogGenerationRun"> | number | null
    iterationCount?: IntNullableWithAggregatesFilter<"blogGenerationRun"> | number | null
    selectedDraftIndex?: IntNullableWithAggregatesFilter<"blogGenerationRun"> | number | null
    finalBlog?: StringNullableWithAggregatesFilter<"blogGenerationRun"> | string | null
    finalPolishApplied?: BoolNullableWithAggregatesFilter<"blogGenerationRun"> | boolean | null
    finalPolishWarning?: StringNullableWithAggregatesFilter<"blogGenerationRun"> | string | null
    queuedAt?: DateTimeNullableWithAggregatesFilter<"blogGenerationRun"> | Date | string | null
    startedAt?: DateTimeNullableWithAggregatesFilter<"blogGenerationRun"> | Date | string | null
    heartbeatAt?: DateTimeNullableWithAggregatesFilter<"blogGenerationRun"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"blogGenerationRun"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"blogGenerationRun"> | Date | string
    completedAt?: DateTimeNullableWithAggregatesFilter<"blogGenerationRun"> | Date | string | null
  }

  export type blogDraftWhereInput = {
    AND?: blogDraftWhereInput | blogDraftWhereInput[]
    OR?: blogDraftWhereInput[]
    NOT?: blogDraftWhereInput | blogDraftWhereInput[]
    id?: StringFilter<"blogDraft"> | string
    runId?: StringFilter<"blogDraft"> | string
    draftIndex?: IntFilter<"blogDraft"> | number
    ideaIndex?: IntFilter<"blogDraft"> | number
    ideaTitle?: StringFilter<"blogDraft"> | string
    mode?: StringFilter<"blogDraft"> | string
    format?: StringFilter<"blogDraft"> | string
    content?: StringFilter<"blogDraft"> | string
    wordCountEstimate?: IntFilter<"blogDraft"> | number
    createdAt?: DateTimeFilter<"blogDraft"> | Date | string
    updatedAt?: DateTimeFilter<"blogDraft"> | Date | string
    run?: XOR<BlogGenerationRunScalarRelationFilter, blogGenerationRunWhereInput>
    evaluation?: XOR<BlogEvaluationNullableScalarRelationFilter, blogEvaluationWhereInput> | null
  }

  export type blogDraftOrderByWithRelationInput = {
    id?: SortOrder
    runId?: SortOrder
    draftIndex?: SortOrder
    ideaIndex?: SortOrder
    ideaTitle?: SortOrder
    mode?: SortOrder
    format?: SortOrder
    content?: SortOrder
    wordCountEstimate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    run?: blogGenerationRunOrderByWithRelationInput
    evaluation?: blogEvaluationOrderByWithRelationInput
  }

  export type blogDraftWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    runId_draftIndex?: blogDraftRunIdDraftIndexCompoundUniqueInput
    AND?: blogDraftWhereInput | blogDraftWhereInput[]
    OR?: blogDraftWhereInput[]
    NOT?: blogDraftWhereInput | blogDraftWhereInput[]
    runId?: StringFilter<"blogDraft"> | string
    draftIndex?: IntFilter<"blogDraft"> | number
    ideaIndex?: IntFilter<"blogDraft"> | number
    ideaTitle?: StringFilter<"blogDraft"> | string
    mode?: StringFilter<"blogDraft"> | string
    format?: StringFilter<"blogDraft"> | string
    content?: StringFilter<"blogDraft"> | string
    wordCountEstimate?: IntFilter<"blogDraft"> | number
    createdAt?: DateTimeFilter<"blogDraft"> | Date | string
    updatedAt?: DateTimeFilter<"blogDraft"> | Date | string
    run?: XOR<BlogGenerationRunScalarRelationFilter, blogGenerationRunWhereInput>
    evaluation?: XOR<BlogEvaluationNullableScalarRelationFilter, blogEvaluationWhereInput> | null
  }, "id" | "runId_draftIndex">

  export type blogDraftOrderByWithAggregationInput = {
    id?: SortOrder
    runId?: SortOrder
    draftIndex?: SortOrder
    ideaIndex?: SortOrder
    ideaTitle?: SortOrder
    mode?: SortOrder
    format?: SortOrder
    content?: SortOrder
    wordCountEstimate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: blogDraftCountOrderByAggregateInput
    _avg?: blogDraftAvgOrderByAggregateInput
    _max?: blogDraftMaxOrderByAggregateInput
    _min?: blogDraftMinOrderByAggregateInput
    _sum?: blogDraftSumOrderByAggregateInput
  }

  export type blogDraftScalarWhereWithAggregatesInput = {
    AND?: blogDraftScalarWhereWithAggregatesInput | blogDraftScalarWhereWithAggregatesInput[]
    OR?: blogDraftScalarWhereWithAggregatesInput[]
    NOT?: blogDraftScalarWhereWithAggregatesInput | blogDraftScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"blogDraft"> | string
    runId?: StringWithAggregatesFilter<"blogDraft"> | string
    draftIndex?: IntWithAggregatesFilter<"blogDraft"> | number
    ideaIndex?: IntWithAggregatesFilter<"blogDraft"> | number
    ideaTitle?: StringWithAggregatesFilter<"blogDraft"> | string
    mode?: StringWithAggregatesFilter<"blogDraft"> | string
    format?: StringWithAggregatesFilter<"blogDraft"> | string
    content?: StringWithAggregatesFilter<"blogDraft"> | string
    wordCountEstimate?: IntWithAggregatesFilter<"blogDraft"> | number
    createdAt?: DateTimeWithAggregatesFilter<"blogDraft"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"blogDraft"> | Date | string
  }

  export type blogEvaluationWhereInput = {
    AND?: blogEvaluationWhereInput | blogEvaluationWhereInput[]
    OR?: blogEvaluationWhereInput[]
    NOT?: blogEvaluationWhereInput | blogEvaluationWhereInput[]
    id?: StringFilter<"blogEvaluation"> | string
    runId?: StringFilter<"blogEvaluation"> | string
    draftId?: StringFilter<"blogEvaluation"> | string
    draftIndex?: IntFilter<"blogEvaluation"> | number
    score?: FloatFilter<"blogEvaluation"> | number
    approved?: BoolFilter<"blogEvaluation"> | boolean
    issues?: JsonFilter<"blogEvaluation">
    improvements?: JsonFilter<"blogEvaluation">
    createdAt?: DateTimeFilter<"blogEvaluation"> | Date | string
    updatedAt?: DateTimeFilter<"blogEvaluation"> | Date | string
    run?: XOR<BlogGenerationRunScalarRelationFilter, blogGenerationRunWhereInput>
    draft?: XOR<BlogDraftScalarRelationFilter, blogDraftWhereInput>
  }

  export type blogEvaluationOrderByWithRelationInput = {
    id?: SortOrder
    runId?: SortOrder
    draftId?: SortOrder
    draftIndex?: SortOrder
    score?: SortOrder
    approved?: SortOrder
    issues?: SortOrder
    improvements?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    run?: blogGenerationRunOrderByWithRelationInput
    draft?: blogDraftOrderByWithRelationInput
  }

  export type blogEvaluationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    draftId?: string
    AND?: blogEvaluationWhereInput | blogEvaluationWhereInput[]
    OR?: blogEvaluationWhereInput[]
    NOT?: blogEvaluationWhereInput | blogEvaluationWhereInput[]
    runId?: StringFilter<"blogEvaluation"> | string
    draftIndex?: IntFilter<"blogEvaluation"> | number
    score?: FloatFilter<"blogEvaluation"> | number
    approved?: BoolFilter<"blogEvaluation"> | boolean
    issues?: JsonFilter<"blogEvaluation">
    improvements?: JsonFilter<"blogEvaluation">
    createdAt?: DateTimeFilter<"blogEvaluation"> | Date | string
    updatedAt?: DateTimeFilter<"blogEvaluation"> | Date | string
    run?: XOR<BlogGenerationRunScalarRelationFilter, blogGenerationRunWhereInput>
    draft?: XOR<BlogDraftScalarRelationFilter, blogDraftWhereInput>
  }, "id" | "draftId">

  export type blogEvaluationOrderByWithAggregationInput = {
    id?: SortOrder
    runId?: SortOrder
    draftId?: SortOrder
    draftIndex?: SortOrder
    score?: SortOrder
    approved?: SortOrder
    issues?: SortOrder
    improvements?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: blogEvaluationCountOrderByAggregateInput
    _avg?: blogEvaluationAvgOrderByAggregateInput
    _max?: blogEvaluationMaxOrderByAggregateInput
    _min?: blogEvaluationMinOrderByAggregateInput
    _sum?: blogEvaluationSumOrderByAggregateInput
  }

  export type blogEvaluationScalarWhereWithAggregatesInput = {
    AND?: blogEvaluationScalarWhereWithAggregatesInput | blogEvaluationScalarWhereWithAggregatesInput[]
    OR?: blogEvaluationScalarWhereWithAggregatesInput[]
    NOT?: blogEvaluationScalarWhereWithAggregatesInput | blogEvaluationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"blogEvaluation"> | string
    runId?: StringWithAggregatesFilter<"blogEvaluation"> | string
    draftId?: StringWithAggregatesFilter<"blogEvaluation"> | string
    draftIndex?: IntWithAggregatesFilter<"blogEvaluation"> | number
    score?: FloatWithAggregatesFilter<"blogEvaluation"> | number
    approved?: BoolWithAggregatesFilter<"blogEvaluation"> | boolean
    issues?: JsonWithAggregatesFilter<"blogEvaluation">
    improvements?: JsonWithAggregatesFilter<"blogEvaluation">
    createdAt?: DateTimeWithAggregatesFilter<"blogEvaluation"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"blogEvaluation"> | Date | string
  }

  export type UserCreateInput = {
    id: string
    name: string
    email: string
    emailVerified?: boolean
    image?: string | null
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionCreateNestedManyWithoutUserInput
    accounts?: AccountCreateNestedManyWithoutUserInput
    blogRuns?: blogGenerationRunCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id: string
    name: string
    email: string
    emailVerified?: boolean
    image?: string | null
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    blogRuns?: blogGenerationRunUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUpdateManyWithoutUserNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
    blogRuns?: blogGenerationRunUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    blogRuns?: blogGenerationRunUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id: string
    name: string
    email: string
    emailVerified?: boolean
    image?: string | null
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateInput = {
    id: string
    token: string
    expiresAt: Date | string
    ipAddress?: string | null
    userAgent?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutSessionsInput
  }

  export type SessionUncheckedCreateInput = {
    id: string
    userId: string
    token: string
    expiresAt: Date | string
    ipAddress?: string | null
    userAgent?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSessionsNestedInput
  }

  export type SessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateManyInput = {
    id: string
    userId: string
    token: string
    expiresAt: Date | string
    ipAddress?: string | null
    userAgent?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountCreateInput = {
    id: string
    accountId: string
    providerId: string
    accessToken?: string | null
    refreshToken?: string | null
    accessTokenExpiresAt?: Date | string | null
    refreshTokenExpiresAt?: Date | string | null
    scope?: string | null
    idToken?: string | null
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutAccountsInput
  }

  export type AccountUncheckedCreateInput = {
    id: string
    userId: string
    accountId: string
    providerId: string
    accessToken?: string | null
    refreshToken?: string | null
    accessTokenExpiresAt?: Date | string | null
    refreshTokenExpiresAt?: Date | string | null
    scope?: string | null
    idToken?: string | null
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutAccountsNestedInput
  }

  export type AccountUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountCreateManyInput = {
    id: string
    userId: string
    accountId: string
    providerId: string
    accessToken?: string | null
    refreshToken?: string | null
    accessTokenExpiresAt?: Date | string | null
    refreshTokenExpiresAt?: Date | string | null
    scope?: string | null
    idToken?: string | null
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationCreateInput = {
    id: string
    identifier: string
    value: string
    expiresAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VerificationUncheckedCreateInput = {
    id: string
    identifier: string
    value: string
    expiresAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VerificationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    identifier?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    identifier?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationCreateManyInput = {
    id: string
    identifier: string
    value: string
    expiresAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VerificationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    identifier?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    identifier?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AiConversationCreateInput = {
    id?: string
    conversationId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    apiHitCount?: number
    hits?: AiApiHitCreateNestedManyWithoutConversationInput
  }

  export type AiConversationUncheckedCreateInput = {
    id?: string
    conversationId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    apiHitCount?: number
    hits?: AiApiHitUncheckedCreateNestedManyWithoutConversationInput
  }

  export type AiConversationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    conversationId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    apiHitCount?: IntFieldUpdateOperationsInput | number
    hits?: AiApiHitUpdateManyWithoutConversationNestedInput
  }

  export type AiConversationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    conversationId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    apiHitCount?: IntFieldUpdateOperationsInput | number
    hits?: AiApiHitUncheckedUpdateManyWithoutConversationNestedInput
  }

  export type AiConversationCreateManyInput = {
    id?: string
    conversationId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    apiHitCount?: number
  }

  export type AiConversationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    conversationId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    apiHitCount?: IntFieldUpdateOperationsInput | number
  }

  export type AiConversationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    conversationId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    apiHitCount?: IntFieldUpdateOperationsInput | number
  }

  export type AiApiHitCreateInput = {
    id?: string
    route: string
    createdAt?: Date | string
    conversation: AiConversationCreateNestedOneWithoutHitsInput
  }

  export type AiApiHitUncheckedCreateInput = {
    id?: string
    route: string
    createdAt?: Date | string
    conversationId: string
  }

  export type AiApiHitUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    route?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    conversation?: AiConversationUpdateOneRequiredWithoutHitsNestedInput
  }

  export type AiApiHitUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    route?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    conversationId?: StringFieldUpdateOperationsInput | string
  }

  export type AiApiHitCreateManyInput = {
    id?: string
    route: string
    createdAt?: Date | string
    conversationId: string
  }

  export type AiApiHitUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    route?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AiApiHitUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    route?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    conversationId?: StringFieldUpdateOperationsInput | string
  }

  export type SitePageViewCreateInput = {
    id?: string
    pathname: string
    visitorHash: string
    createdAt?: Date | string
  }

  export type SitePageViewUncheckedCreateInput = {
    id?: string
    pathname: string
    visitorHash: string
    createdAt?: Date | string
  }

  export type SitePageViewUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    pathname?: StringFieldUpdateOperationsInput | string
    visitorHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SitePageViewUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    pathname?: StringFieldUpdateOperationsInput | string
    visitorHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SitePageViewCreateManyInput = {
    id?: string
    pathname: string
    visitorHash: string
    createdAt?: Date | string
  }

  export type SitePageViewUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    pathname?: StringFieldUpdateOperationsInput | string
    visitorHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SitePageViewUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    pathname?: StringFieldUpdateOperationsInput | string
    visitorHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlogBriefCreateInput = {
    id?: string
    title?: string | null
    topic: string
    goal?: string
    audience?: string
    userContext?: string | null
    tone?: string | null
    keywords?: BlogBriefCreatekeywordsInput | string[]
    includeServices?: BlogBriefCreateincludeServicesInput | string[]
    constraints?: BlogBriefCreateconstraintsInput | string[]
    depth?: string | null
    backendRequestId?: string | null
    selectedDraftIndex?: number | null
    finalDraftContent?: string | null
    slug?: string | null
    locale?: string
    publishedAt?: Date | string | null
    translationStatus?: string
    translationError?: string | null
    translationTriggerRunId?: string | null
    englishSlug?: string | null
    translationStartedAt?: Date | string | null
    translationCompletedAt?: Date | string | null
    generationError?: string | null
    idea: string
    clientHints?: string | null
    category?: string | null
    status?: $Enums.BlogBriefStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    draftEdits?: BlogDraftEditCreateNestedManyWithoutBriefInput
  }

  export type BlogBriefUncheckedCreateInput = {
    id?: string
    title?: string | null
    topic: string
    goal?: string
    audience?: string
    userContext?: string | null
    tone?: string | null
    keywords?: BlogBriefCreatekeywordsInput | string[]
    includeServices?: BlogBriefCreateincludeServicesInput | string[]
    constraints?: BlogBriefCreateconstraintsInput | string[]
    depth?: string | null
    backendRequestId?: string | null
    selectedDraftIndex?: number | null
    finalDraftContent?: string | null
    slug?: string | null
    locale?: string
    publishedAt?: Date | string | null
    translationStatus?: string
    translationError?: string | null
    translationTriggerRunId?: string | null
    englishSlug?: string | null
    translationStartedAt?: Date | string | null
    translationCompletedAt?: Date | string | null
    generationError?: string | null
    idea: string
    clientHints?: string | null
    category?: string | null
    status?: $Enums.BlogBriefStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    draftEdits?: BlogDraftEditUncheckedCreateNestedManyWithoutBriefInput
  }

  export type BlogBriefUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    topic?: StringFieldUpdateOperationsInput | string
    goal?: StringFieldUpdateOperationsInput | string
    audience?: StringFieldUpdateOperationsInput | string
    userContext?: NullableStringFieldUpdateOperationsInput | string | null
    tone?: NullableStringFieldUpdateOperationsInput | string | null
    keywords?: BlogBriefUpdatekeywordsInput | string[]
    includeServices?: BlogBriefUpdateincludeServicesInput | string[]
    constraints?: BlogBriefUpdateconstraintsInput | string[]
    depth?: NullableStringFieldUpdateOperationsInput | string | null
    backendRequestId?: NullableStringFieldUpdateOperationsInput | string | null
    selectedDraftIndex?: NullableIntFieldUpdateOperationsInput | number | null
    finalDraftContent?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    locale?: StringFieldUpdateOperationsInput | string
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    translationStatus?: StringFieldUpdateOperationsInput | string
    translationError?: NullableStringFieldUpdateOperationsInput | string | null
    translationTriggerRunId?: NullableStringFieldUpdateOperationsInput | string | null
    englishSlug?: NullableStringFieldUpdateOperationsInput | string | null
    translationStartedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    translationCompletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    generationError?: NullableStringFieldUpdateOperationsInput | string | null
    idea?: StringFieldUpdateOperationsInput | string
    clientHints?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumBlogBriefStatusFieldUpdateOperationsInput | $Enums.BlogBriefStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    draftEdits?: BlogDraftEditUpdateManyWithoutBriefNestedInput
  }

  export type BlogBriefUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    topic?: StringFieldUpdateOperationsInput | string
    goal?: StringFieldUpdateOperationsInput | string
    audience?: StringFieldUpdateOperationsInput | string
    userContext?: NullableStringFieldUpdateOperationsInput | string | null
    tone?: NullableStringFieldUpdateOperationsInput | string | null
    keywords?: BlogBriefUpdatekeywordsInput | string[]
    includeServices?: BlogBriefUpdateincludeServicesInput | string[]
    constraints?: BlogBriefUpdateconstraintsInput | string[]
    depth?: NullableStringFieldUpdateOperationsInput | string | null
    backendRequestId?: NullableStringFieldUpdateOperationsInput | string | null
    selectedDraftIndex?: NullableIntFieldUpdateOperationsInput | number | null
    finalDraftContent?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    locale?: StringFieldUpdateOperationsInput | string
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    translationStatus?: StringFieldUpdateOperationsInput | string
    translationError?: NullableStringFieldUpdateOperationsInput | string | null
    translationTriggerRunId?: NullableStringFieldUpdateOperationsInput | string | null
    englishSlug?: NullableStringFieldUpdateOperationsInput | string | null
    translationStartedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    translationCompletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    generationError?: NullableStringFieldUpdateOperationsInput | string | null
    idea?: StringFieldUpdateOperationsInput | string
    clientHints?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumBlogBriefStatusFieldUpdateOperationsInput | $Enums.BlogBriefStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    draftEdits?: BlogDraftEditUncheckedUpdateManyWithoutBriefNestedInput
  }

  export type BlogBriefCreateManyInput = {
    id?: string
    title?: string | null
    topic: string
    goal?: string
    audience?: string
    userContext?: string | null
    tone?: string | null
    keywords?: BlogBriefCreatekeywordsInput | string[]
    includeServices?: BlogBriefCreateincludeServicesInput | string[]
    constraints?: BlogBriefCreateconstraintsInput | string[]
    depth?: string | null
    backendRequestId?: string | null
    selectedDraftIndex?: number | null
    finalDraftContent?: string | null
    slug?: string | null
    locale?: string
    publishedAt?: Date | string | null
    translationStatus?: string
    translationError?: string | null
    translationTriggerRunId?: string | null
    englishSlug?: string | null
    translationStartedAt?: Date | string | null
    translationCompletedAt?: Date | string | null
    generationError?: string | null
    idea: string
    clientHints?: string | null
    category?: string | null
    status?: $Enums.BlogBriefStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BlogBriefUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    topic?: StringFieldUpdateOperationsInput | string
    goal?: StringFieldUpdateOperationsInput | string
    audience?: StringFieldUpdateOperationsInput | string
    userContext?: NullableStringFieldUpdateOperationsInput | string | null
    tone?: NullableStringFieldUpdateOperationsInput | string | null
    keywords?: BlogBriefUpdatekeywordsInput | string[]
    includeServices?: BlogBriefUpdateincludeServicesInput | string[]
    constraints?: BlogBriefUpdateconstraintsInput | string[]
    depth?: NullableStringFieldUpdateOperationsInput | string | null
    backendRequestId?: NullableStringFieldUpdateOperationsInput | string | null
    selectedDraftIndex?: NullableIntFieldUpdateOperationsInput | number | null
    finalDraftContent?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    locale?: StringFieldUpdateOperationsInput | string
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    translationStatus?: StringFieldUpdateOperationsInput | string
    translationError?: NullableStringFieldUpdateOperationsInput | string | null
    translationTriggerRunId?: NullableStringFieldUpdateOperationsInput | string | null
    englishSlug?: NullableStringFieldUpdateOperationsInput | string | null
    translationStartedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    translationCompletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    generationError?: NullableStringFieldUpdateOperationsInput | string | null
    idea?: StringFieldUpdateOperationsInput | string
    clientHints?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumBlogBriefStatusFieldUpdateOperationsInput | $Enums.BlogBriefStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlogBriefUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    topic?: StringFieldUpdateOperationsInput | string
    goal?: StringFieldUpdateOperationsInput | string
    audience?: StringFieldUpdateOperationsInput | string
    userContext?: NullableStringFieldUpdateOperationsInput | string | null
    tone?: NullableStringFieldUpdateOperationsInput | string | null
    keywords?: BlogBriefUpdatekeywordsInput | string[]
    includeServices?: BlogBriefUpdateincludeServicesInput | string[]
    constraints?: BlogBriefUpdateconstraintsInput | string[]
    depth?: NullableStringFieldUpdateOperationsInput | string | null
    backendRequestId?: NullableStringFieldUpdateOperationsInput | string | null
    selectedDraftIndex?: NullableIntFieldUpdateOperationsInput | number | null
    finalDraftContent?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    locale?: StringFieldUpdateOperationsInput | string
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    translationStatus?: StringFieldUpdateOperationsInput | string
    translationError?: NullableStringFieldUpdateOperationsInput | string | null
    translationTriggerRunId?: NullableStringFieldUpdateOperationsInput | string | null
    englishSlug?: NullableStringFieldUpdateOperationsInput | string | null
    translationStartedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    translationCompletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    generationError?: NullableStringFieldUpdateOperationsInput | string | null
    idea?: StringFieldUpdateOperationsInput | string
    clientHints?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumBlogBriefStatusFieldUpdateOperationsInput | $Enums.BlogBriefStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlogDraftEditCreateInput = {
    id?: string
    draftIndex: number
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    brief: BlogBriefCreateNestedOneWithoutDraftEditsInput
  }

  export type BlogDraftEditUncheckedCreateInput = {
    id?: string
    briefId: string
    draftIndex: number
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BlogDraftEditUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    draftIndex?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    brief?: BlogBriefUpdateOneRequiredWithoutDraftEditsNestedInput
  }

  export type BlogDraftEditUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    briefId?: StringFieldUpdateOperationsInput | string
    draftIndex?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlogDraftEditCreateManyInput = {
    id?: string
    briefId: string
    draftIndex: number
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BlogDraftEditUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    draftIndex?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlogDraftEditUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    briefId?: StringFieldUpdateOperationsInput | string
    draftIndex?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlogPostCreateInput = {
    id?: string
    slug: string
    locale: string
    title: string
    excerpt: string
    author: string
    category: string
    featured?: boolean
    seoTitle?: string | null
    seoDescription?: string | null
    coverImage?: string | null
    frontmatterJson?: NullableJsonNullValueInput | InputJsonValue
    mdxContent: string
    sourceBriefId?: string | null
    sourceRequestId?: string | null
    translationGroupId?: string | null
    publishedAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BlogPostUncheckedCreateInput = {
    id?: string
    slug: string
    locale: string
    title: string
    excerpt: string
    author: string
    category: string
    featured?: boolean
    seoTitle?: string | null
    seoDescription?: string | null
    coverImage?: string | null
    frontmatterJson?: NullableJsonNullValueInput | InputJsonValue
    mdxContent: string
    sourceBriefId?: string | null
    sourceRequestId?: string | null
    translationGroupId?: string | null
    publishedAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BlogPostUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    locale?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    excerpt?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    featured?: BoolFieldUpdateOperationsInput | boolean
    seoTitle?: NullableStringFieldUpdateOperationsInput | string | null
    seoDescription?: NullableStringFieldUpdateOperationsInput | string | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    frontmatterJson?: NullableJsonNullValueInput | InputJsonValue
    mdxContent?: StringFieldUpdateOperationsInput | string
    sourceBriefId?: NullableStringFieldUpdateOperationsInput | string | null
    sourceRequestId?: NullableStringFieldUpdateOperationsInput | string | null
    translationGroupId?: NullableStringFieldUpdateOperationsInput | string | null
    publishedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlogPostUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    locale?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    excerpt?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    featured?: BoolFieldUpdateOperationsInput | boolean
    seoTitle?: NullableStringFieldUpdateOperationsInput | string | null
    seoDescription?: NullableStringFieldUpdateOperationsInput | string | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    frontmatterJson?: NullableJsonNullValueInput | InputJsonValue
    mdxContent?: StringFieldUpdateOperationsInput | string
    sourceBriefId?: NullableStringFieldUpdateOperationsInput | string | null
    sourceRequestId?: NullableStringFieldUpdateOperationsInput | string | null
    translationGroupId?: NullableStringFieldUpdateOperationsInput | string | null
    publishedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlogPostCreateManyInput = {
    id?: string
    slug: string
    locale: string
    title: string
    excerpt: string
    author: string
    category: string
    featured?: boolean
    seoTitle?: string | null
    seoDescription?: string | null
    coverImage?: string | null
    frontmatterJson?: NullableJsonNullValueInput | InputJsonValue
    mdxContent: string
    sourceBriefId?: string | null
    sourceRequestId?: string | null
    translationGroupId?: string | null
    publishedAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BlogPostUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    locale?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    excerpt?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    featured?: BoolFieldUpdateOperationsInput | boolean
    seoTitle?: NullableStringFieldUpdateOperationsInput | string | null
    seoDescription?: NullableStringFieldUpdateOperationsInput | string | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    frontmatterJson?: NullableJsonNullValueInput | InputJsonValue
    mdxContent?: StringFieldUpdateOperationsInput | string
    sourceBriefId?: NullableStringFieldUpdateOperationsInput | string | null
    sourceRequestId?: NullableStringFieldUpdateOperationsInput | string | null
    translationGroupId?: NullableStringFieldUpdateOperationsInput | string | null
    publishedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlogPostUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    locale?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    excerpt?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    featured?: BoolFieldUpdateOperationsInput | boolean
    seoTitle?: NullableStringFieldUpdateOperationsInput | string | null
    seoDescription?: NullableStringFieldUpdateOperationsInput | string | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    frontmatterJson?: NullableJsonNullValueInput | InputJsonValue
    mdxContent?: StringFieldUpdateOperationsInput | string
    sourceBriefId?: NullableStringFieldUpdateOperationsInput | string | null
    sourceRequestId?: NullableStringFieldUpdateOperationsInput | string | null
    translationGroupId?: NullableStringFieldUpdateOperationsInput | string | null
    publishedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type blogGenerationRunCreateInput = {
    id?: string
    requestId: string
    topic: string
    inputPayload?: NullableJsonNullValueInput | InputJsonValue
    status: string
    triggerRunId?: string | null
    retryCount?: number
    workflowStatus?: string | null
    error?: string | null
    durationMs?: number | null
    iterationCount?: number | null
    selectedDraftIndex?: number | null
    finalBlog?: string | null
    finalPolishApplied?: boolean | null
    finalPolishWarning?: string | null
    queuedAt?: Date | string | null
    startedAt?: Date | string | null
    heartbeatAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    completedAt?: Date | string | null
    user?: UserCreateNestedOneWithoutBlogRunsInput
    drafts?: blogDraftCreateNestedManyWithoutRunInput
    evaluations?: blogEvaluationCreateNestedManyWithoutRunInput
  }

  export type blogGenerationRunUncheckedCreateInput = {
    id?: string
    requestId: string
    userId?: string | null
    topic: string
    inputPayload?: NullableJsonNullValueInput | InputJsonValue
    status: string
    triggerRunId?: string | null
    retryCount?: number
    workflowStatus?: string | null
    error?: string | null
    durationMs?: number | null
    iterationCount?: number | null
    selectedDraftIndex?: number | null
    finalBlog?: string | null
    finalPolishApplied?: boolean | null
    finalPolishWarning?: string | null
    queuedAt?: Date | string | null
    startedAt?: Date | string | null
    heartbeatAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    completedAt?: Date | string | null
    drafts?: blogDraftUncheckedCreateNestedManyWithoutRunInput
    evaluations?: blogEvaluationUncheckedCreateNestedManyWithoutRunInput
  }

  export type blogGenerationRunUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    requestId?: StringFieldUpdateOperationsInput | string
    topic?: StringFieldUpdateOperationsInput | string
    inputPayload?: NullableJsonNullValueInput | InputJsonValue
    status?: StringFieldUpdateOperationsInput | string
    triggerRunId?: NullableStringFieldUpdateOperationsInput | string | null
    retryCount?: IntFieldUpdateOperationsInput | number
    workflowStatus?: NullableStringFieldUpdateOperationsInput | string | null
    error?: NullableStringFieldUpdateOperationsInput | string | null
    durationMs?: NullableIntFieldUpdateOperationsInput | number | null
    iterationCount?: NullableIntFieldUpdateOperationsInput | number | null
    selectedDraftIndex?: NullableIntFieldUpdateOperationsInput | number | null
    finalBlog?: NullableStringFieldUpdateOperationsInput | string | null
    finalPolishApplied?: NullableBoolFieldUpdateOperationsInput | boolean | null
    finalPolishWarning?: NullableStringFieldUpdateOperationsInput | string | null
    queuedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    heartbeatAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneWithoutBlogRunsNestedInput
    drafts?: blogDraftUpdateManyWithoutRunNestedInput
    evaluations?: blogEvaluationUpdateManyWithoutRunNestedInput
  }

  export type blogGenerationRunUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    requestId?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    topic?: StringFieldUpdateOperationsInput | string
    inputPayload?: NullableJsonNullValueInput | InputJsonValue
    status?: StringFieldUpdateOperationsInput | string
    triggerRunId?: NullableStringFieldUpdateOperationsInput | string | null
    retryCount?: IntFieldUpdateOperationsInput | number
    workflowStatus?: NullableStringFieldUpdateOperationsInput | string | null
    error?: NullableStringFieldUpdateOperationsInput | string | null
    durationMs?: NullableIntFieldUpdateOperationsInput | number | null
    iterationCount?: NullableIntFieldUpdateOperationsInput | number | null
    selectedDraftIndex?: NullableIntFieldUpdateOperationsInput | number | null
    finalBlog?: NullableStringFieldUpdateOperationsInput | string | null
    finalPolishApplied?: NullableBoolFieldUpdateOperationsInput | boolean | null
    finalPolishWarning?: NullableStringFieldUpdateOperationsInput | string | null
    queuedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    heartbeatAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    drafts?: blogDraftUncheckedUpdateManyWithoutRunNestedInput
    evaluations?: blogEvaluationUncheckedUpdateManyWithoutRunNestedInput
  }

  export type blogGenerationRunCreateManyInput = {
    id?: string
    requestId: string
    userId?: string | null
    topic: string
    inputPayload?: NullableJsonNullValueInput | InputJsonValue
    status: string
    triggerRunId?: string | null
    retryCount?: number
    workflowStatus?: string | null
    error?: string | null
    durationMs?: number | null
    iterationCount?: number | null
    selectedDraftIndex?: number | null
    finalBlog?: string | null
    finalPolishApplied?: boolean | null
    finalPolishWarning?: string | null
    queuedAt?: Date | string | null
    startedAt?: Date | string | null
    heartbeatAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    completedAt?: Date | string | null
  }

  export type blogGenerationRunUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    requestId?: StringFieldUpdateOperationsInput | string
    topic?: StringFieldUpdateOperationsInput | string
    inputPayload?: NullableJsonNullValueInput | InputJsonValue
    status?: StringFieldUpdateOperationsInput | string
    triggerRunId?: NullableStringFieldUpdateOperationsInput | string | null
    retryCount?: IntFieldUpdateOperationsInput | number
    workflowStatus?: NullableStringFieldUpdateOperationsInput | string | null
    error?: NullableStringFieldUpdateOperationsInput | string | null
    durationMs?: NullableIntFieldUpdateOperationsInput | number | null
    iterationCount?: NullableIntFieldUpdateOperationsInput | number | null
    selectedDraftIndex?: NullableIntFieldUpdateOperationsInput | number | null
    finalBlog?: NullableStringFieldUpdateOperationsInput | string | null
    finalPolishApplied?: NullableBoolFieldUpdateOperationsInput | boolean | null
    finalPolishWarning?: NullableStringFieldUpdateOperationsInput | string | null
    queuedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    heartbeatAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type blogGenerationRunUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    requestId?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    topic?: StringFieldUpdateOperationsInput | string
    inputPayload?: NullableJsonNullValueInput | InputJsonValue
    status?: StringFieldUpdateOperationsInput | string
    triggerRunId?: NullableStringFieldUpdateOperationsInput | string | null
    retryCount?: IntFieldUpdateOperationsInput | number
    workflowStatus?: NullableStringFieldUpdateOperationsInput | string | null
    error?: NullableStringFieldUpdateOperationsInput | string | null
    durationMs?: NullableIntFieldUpdateOperationsInput | number | null
    iterationCount?: NullableIntFieldUpdateOperationsInput | number | null
    selectedDraftIndex?: NullableIntFieldUpdateOperationsInput | number | null
    finalBlog?: NullableStringFieldUpdateOperationsInput | string | null
    finalPolishApplied?: NullableBoolFieldUpdateOperationsInput | boolean | null
    finalPolishWarning?: NullableStringFieldUpdateOperationsInput | string | null
    queuedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    heartbeatAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type blogDraftCreateInput = {
    id?: string
    draftIndex: number
    ideaIndex: number
    ideaTitle: string
    mode: string
    format: string
    content: string
    wordCountEstimate: number
    createdAt?: Date | string
    updatedAt?: Date | string
    run: blogGenerationRunCreateNestedOneWithoutDraftsInput
    evaluation?: blogEvaluationCreateNestedOneWithoutDraftInput
  }

  export type blogDraftUncheckedCreateInput = {
    id?: string
    runId: string
    draftIndex: number
    ideaIndex: number
    ideaTitle: string
    mode: string
    format: string
    content: string
    wordCountEstimate: number
    createdAt?: Date | string
    updatedAt?: Date | string
    evaluation?: blogEvaluationUncheckedCreateNestedOneWithoutDraftInput
  }

  export type blogDraftUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    draftIndex?: IntFieldUpdateOperationsInput | number
    ideaIndex?: IntFieldUpdateOperationsInput | number
    ideaTitle?: StringFieldUpdateOperationsInput | string
    mode?: StringFieldUpdateOperationsInput | string
    format?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    wordCountEstimate?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    run?: blogGenerationRunUpdateOneRequiredWithoutDraftsNestedInput
    evaluation?: blogEvaluationUpdateOneWithoutDraftNestedInput
  }

  export type blogDraftUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    runId?: StringFieldUpdateOperationsInput | string
    draftIndex?: IntFieldUpdateOperationsInput | number
    ideaIndex?: IntFieldUpdateOperationsInput | number
    ideaTitle?: StringFieldUpdateOperationsInput | string
    mode?: StringFieldUpdateOperationsInput | string
    format?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    wordCountEstimate?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    evaluation?: blogEvaluationUncheckedUpdateOneWithoutDraftNestedInput
  }

  export type blogDraftCreateManyInput = {
    id?: string
    runId: string
    draftIndex: number
    ideaIndex: number
    ideaTitle: string
    mode: string
    format: string
    content: string
    wordCountEstimate: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type blogDraftUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    draftIndex?: IntFieldUpdateOperationsInput | number
    ideaIndex?: IntFieldUpdateOperationsInput | number
    ideaTitle?: StringFieldUpdateOperationsInput | string
    mode?: StringFieldUpdateOperationsInput | string
    format?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    wordCountEstimate?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type blogDraftUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    runId?: StringFieldUpdateOperationsInput | string
    draftIndex?: IntFieldUpdateOperationsInput | number
    ideaIndex?: IntFieldUpdateOperationsInput | number
    ideaTitle?: StringFieldUpdateOperationsInput | string
    mode?: StringFieldUpdateOperationsInput | string
    format?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    wordCountEstimate?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type blogEvaluationCreateInput = {
    id?: string
    draftIndex: number
    score: number
    approved: boolean
    issues: JsonNullValueInput | InputJsonValue
    improvements: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    run: blogGenerationRunCreateNestedOneWithoutEvaluationsInput
    draft: blogDraftCreateNestedOneWithoutEvaluationInput
  }

  export type blogEvaluationUncheckedCreateInput = {
    id?: string
    runId: string
    draftId: string
    draftIndex: number
    score: number
    approved: boolean
    issues: JsonNullValueInput | InputJsonValue
    improvements: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type blogEvaluationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    draftIndex?: IntFieldUpdateOperationsInput | number
    score?: FloatFieldUpdateOperationsInput | number
    approved?: BoolFieldUpdateOperationsInput | boolean
    issues?: JsonNullValueInput | InputJsonValue
    improvements?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    run?: blogGenerationRunUpdateOneRequiredWithoutEvaluationsNestedInput
    draft?: blogDraftUpdateOneRequiredWithoutEvaluationNestedInput
  }

  export type blogEvaluationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    runId?: StringFieldUpdateOperationsInput | string
    draftId?: StringFieldUpdateOperationsInput | string
    draftIndex?: IntFieldUpdateOperationsInput | number
    score?: FloatFieldUpdateOperationsInput | number
    approved?: BoolFieldUpdateOperationsInput | boolean
    issues?: JsonNullValueInput | InputJsonValue
    improvements?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type blogEvaluationCreateManyInput = {
    id?: string
    runId: string
    draftId: string
    draftIndex: number
    score: number
    approved: boolean
    issues: JsonNullValueInput | InputJsonValue
    improvements: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type blogEvaluationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    draftIndex?: IntFieldUpdateOperationsInput | number
    score?: FloatFieldUpdateOperationsInput | number
    approved?: BoolFieldUpdateOperationsInput | boolean
    issues?: JsonNullValueInput | InputJsonValue
    improvements?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type blogEvaluationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    runId?: StringFieldUpdateOperationsInput | string
    draftId?: StringFieldUpdateOperationsInput | string
    draftIndex?: IntFieldUpdateOperationsInput | number
    score?: FloatFieldUpdateOperationsInput | number
    approved?: BoolFieldUpdateOperationsInput | boolean
    issues?: JsonNullValueInput | InputJsonValue
    improvements?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type SessionListRelationFilter = {
    every?: SessionWhereInput
    some?: SessionWhereInput
    none?: SessionWhereInput
  }

  export type AccountListRelationFilter = {
    every?: AccountWhereInput
    some?: AccountWhereInput
    none?: AccountWhereInput
  }

  export type BlogGenerationRunListRelationFilter = {
    every?: blogGenerationRunWhereInput
    some?: blogGenerationRunWhereInput
    none?: blogGenerationRunWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type SessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AccountOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type blogGenerationRunOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type SessionCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    token?: SortOrder
    expiresAt?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SessionMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    token?: SortOrder
    expiresAt?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SessionMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    token?: SortOrder
    expiresAt?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type AccountCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    accountId?: SortOrder
    providerId?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    accessTokenExpiresAt?: SortOrder
    refreshTokenExpiresAt?: SortOrder
    scope?: SortOrder
    idToken?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccountMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    accountId?: SortOrder
    providerId?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    accessTokenExpiresAt?: SortOrder
    refreshTokenExpiresAt?: SortOrder
    scope?: SortOrder
    idToken?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccountMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    accountId?: SortOrder
    providerId?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    accessTokenExpiresAt?: SortOrder
    refreshTokenExpiresAt?: SortOrder
    scope?: SortOrder
    idToken?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type VerificationCountOrderByAggregateInput = {
    id?: SortOrder
    identifier?: SortOrder
    value?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VerificationMaxOrderByAggregateInput = {
    id?: SortOrder
    identifier?: SortOrder
    value?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VerificationMinOrderByAggregateInput = {
    id?: SortOrder
    identifier?: SortOrder
    value?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type AiApiHitListRelationFilter = {
    every?: AiApiHitWhereInput
    some?: AiApiHitWhereInput
    none?: AiApiHitWhereInput
  }

  export type AiApiHitOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AiConversationCountOrderByAggregateInput = {
    id?: SortOrder
    conversationId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    apiHitCount?: SortOrder
  }

  export type AiConversationAvgOrderByAggregateInput = {
    apiHitCount?: SortOrder
  }

  export type AiConversationMaxOrderByAggregateInput = {
    id?: SortOrder
    conversationId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    apiHitCount?: SortOrder
  }

  export type AiConversationMinOrderByAggregateInput = {
    id?: SortOrder
    conversationId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    apiHitCount?: SortOrder
  }

  export type AiConversationSumOrderByAggregateInput = {
    apiHitCount?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type AiConversationScalarRelationFilter = {
    is?: AiConversationWhereInput
    isNot?: AiConversationWhereInput
  }

  export type AiApiHitCountOrderByAggregateInput = {
    id?: SortOrder
    route?: SortOrder
    createdAt?: SortOrder
    conversationId?: SortOrder
  }

  export type AiApiHitMaxOrderByAggregateInput = {
    id?: SortOrder
    route?: SortOrder
    createdAt?: SortOrder
    conversationId?: SortOrder
  }

  export type AiApiHitMinOrderByAggregateInput = {
    id?: SortOrder
    route?: SortOrder
    createdAt?: SortOrder
    conversationId?: SortOrder
  }

  export type SitePageViewCountOrderByAggregateInput = {
    id?: SortOrder
    pathname?: SortOrder
    visitorHash?: SortOrder
    createdAt?: SortOrder
  }

  export type SitePageViewMaxOrderByAggregateInput = {
    id?: SortOrder
    pathname?: SortOrder
    visitorHash?: SortOrder
    createdAt?: SortOrder
  }

  export type SitePageViewMinOrderByAggregateInput = {
    id?: SortOrder
    pathname?: SortOrder
    visitorHash?: SortOrder
    createdAt?: SortOrder
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type EnumBlogBriefStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.BlogBriefStatus | EnumBlogBriefStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BlogBriefStatus[] | ListEnumBlogBriefStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.BlogBriefStatus[] | ListEnumBlogBriefStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumBlogBriefStatusFilter<$PrismaModel> | $Enums.BlogBriefStatus
  }

  export type BlogDraftEditListRelationFilter = {
    every?: BlogDraftEditWhereInput
    some?: BlogDraftEditWhereInput
    none?: BlogDraftEditWhereInput
  }

  export type BlogDraftEditOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BlogBriefCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    topic?: SortOrder
    goal?: SortOrder
    audience?: SortOrder
    userContext?: SortOrder
    tone?: SortOrder
    keywords?: SortOrder
    includeServices?: SortOrder
    constraints?: SortOrder
    depth?: SortOrder
    backendRequestId?: SortOrder
    selectedDraftIndex?: SortOrder
    finalDraftContent?: SortOrder
    slug?: SortOrder
    locale?: SortOrder
    publishedAt?: SortOrder
    translationStatus?: SortOrder
    translationError?: SortOrder
    translationTriggerRunId?: SortOrder
    englishSlug?: SortOrder
    translationStartedAt?: SortOrder
    translationCompletedAt?: SortOrder
    generationError?: SortOrder
    idea?: SortOrder
    clientHints?: SortOrder
    category?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BlogBriefAvgOrderByAggregateInput = {
    selectedDraftIndex?: SortOrder
  }

  export type BlogBriefMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    topic?: SortOrder
    goal?: SortOrder
    audience?: SortOrder
    userContext?: SortOrder
    tone?: SortOrder
    depth?: SortOrder
    backendRequestId?: SortOrder
    selectedDraftIndex?: SortOrder
    finalDraftContent?: SortOrder
    slug?: SortOrder
    locale?: SortOrder
    publishedAt?: SortOrder
    translationStatus?: SortOrder
    translationError?: SortOrder
    translationTriggerRunId?: SortOrder
    englishSlug?: SortOrder
    translationStartedAt?: SortOrder
    translationCompletedAt?: SortOrder
    generationError?: SortOrder
    idea?: SortOrder
    clientHints?: SortOrder
    category?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BlogBriefMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    topic?: SortOrder
    goal?: SortOrder
    audience?: SortOrder
    userContext?: SortOrder
    tone?: SortOrder
    depth?: SortOrder
    backendRequestId?: SortOrder
    selectedDraftIndex?: SortOrder
    finalDraftContent?: SortOrder
    slug?: SortOrder
    locale?: SortOrder
    publishedAt?: SortOrder
    translationStatus?: SortOrder
    translationError?: SortOrder
    translationTriggerRunId?: SortOrder
    englishSlug?: SortOrder
    translationStartedAt?: SortOrder
    translationCompletedAt?: SortOrder
    generationError?: SortOrder
    idea?: SortOrder
    clientHints?: SortOrder
    category?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BlogBriefSumOrderByAggregateInput = {
    selectedDraftIndex?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type EnumBlogBriefStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BlogBriefStatus | EnumBlogBriefStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BlogBriefStatus[] | ListEnumBlogBriefStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.BlogBriefStatus[] | ListEnumBlogBriefStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumBlogBriefStatusWithAggregatesFilter<$PrismaModel> | $Enums.BlogBriefStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBlogBriefStatusFilter<$PrismaModel>
    _max?: NestedEnumBlogBriefStatusFilter<$PrismaModel>
  }

  export type BlogBriefScalarRelationFilter = {
    is?: BlogBriefWhereInput
    isNot?: BlogBriefWhereInput
  }

  export type BlogDraftEditBriefIdDraftIndexCompoundUniqueInput = {
    briefId: string
    draftIndex: number
  }

  export type BlogDraftEditCountOrderByAggregateInput = {
    id?: SortOrder
    briefId?: SortOrder
    draftIndex?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BlogDraftEditAvgOrderByAggregateInput = {
    draftIndex?: SortOrder
  }

  export type BlogDraftEditMaxOrderByAggregateInput = {
    id?: SortOrder
    briefId?: SortOrder
    draftIndex?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BlogDraftEditMinOrderByAggregateInput = {
    id?: SortOrder
    briefId?: SortOrder
    draftIndex?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BlogDraftEditSumOrderByAggregateInput = {
    draftIndex?: SortOrder
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type BlogPostLocaleSlugCompoundUniqueInput = {
    locale: string
    slug: string
  }

  export type BlogPostCountOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    locale?: SortOrder
    title?: SortOrder
    excerpt?: SortOrder
    author?: SortOrder
    category?: SortOrder
    featured?: SortOrder
    seoTitle?: SortOrder
    seoDescription?: SortOrder
    coverImage?: SortOrder
    frontmatterJson?: SortOrder
    mdxContent?: SortOrder
    sourceBriefId?: SortOrder
    sourceRequestId?: SortOrder
    translationGroupId?: SortOrder
    publishedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BlogPostMaxOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    locale?: SortOrder
    title?: SortOrder
    excerpt?: SortOrder
    author?: SortOrder
    category?: SortOrder
    featured?: SortOrder
    seoTitle?: SortOrder
    seoDescription?: SortOrder
    coverImage?: SortOrder
    mdxContent?: SortOrder
    sourceBriefId?: SortOrder
    sourceRequestId?: SortOrder
    translationGroupId?: SortOrder
    publishedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BlogPostMinOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    locale?: SortOrder
    title?: SortOrder
    excerpt?: SortOrder
    author?: SortOrder
    category?: SortOrder
    featured?: SortOrder
    seoTitle?: SortOrder
    seoDescription?: SortOrder
    coverImage?: SortOrder
    mdxContent?: SortOrder
    sourceBriefId?: SortOrder
    sourceRequestId?: SortOrder
    translationGroupId?: SortOrder
    publishedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type BlogDraftListRelationFilter = {
    every?: blogDraftWhereInput
    some?: blogDraftWhereInput
    none?: blogDraftWhereInput
  }

  export type BlogEvaluationListRelationFilter = {
    every?: blogEvaluationWhereInput
    some?: blogEvaluationWhereInput
    none?: blogEvaluationWhereInput
  }

  export type blogDraftOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type blogEvaluationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type blogGenerationRunCountOrderByAggregateInput = {
    id?: SortOrder
    requestId?: SortOrder
    userId?: SortOrder
    topic?: SortOrder
    inputPayload?: SortOrder
    status?: SortOrder
    triggerRunId?: SortOrder
    retryCount?: SortOrder
    workflowStatus?: SortOrder
    error?: SortOrder
    durationMs?: SortOrder
    iterationCount?: SortOrder
    selectedDraftIndex?: SortOrder
    finalBlog?: SortOrder
    finalPolishApplied?: SortOrder
    finalPolishWarning?: SortOrder
    queuedAt?: SortOrder
    startedAt?: SortOrder
    heartbeatAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    completedAt?: SortOrder
  }

  export type blogGenerationRunAvgOrderByAggregateInput = {
    retryCount?: SortOrder
    durationMs?: SortOrder
    iterationCount?: SortOrder
    selectedDraftIndex?: SortOrder
  }

  export type blogGenerationRunMaxOrderByAggregateInput = {
    id?: SortOrder
    requestId?: SortOrder
    userId?: SortOrder
    topic?: SortOrder
    status?: SortOrder
    triggerRunId?: SortOrder
    retryCount?: SortOrder
    workflowStatus?: SortOrder
    error?: SortOrder
    durationMs?: SortOrder
    iterationCount?: SortOrder
    selectedDraftIndex?: SortOrder
    finalBlog?: SortOrder
    finalPolishApplied?: SortOrder
    finalPolishWarning?: SortOrder
    queuedAt?: SortOrder
    startedAt?: SortOrder
    heartbeatAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    completedAt?: SortOrder
  }

  export type blogGenerationRunMinOrderByAggregateInput = {
    id?: SortOrder
    requestId?: SortOrder
    userId?: SortOrder
    topic?: SortOrder
    status?: SortOrder
    triggerRunId?: SortOrder
    retryCount?: SortOrder
    workflowStatus?: SortOrder
    error?: SortOrder
    durationMs?: SortOrder
    iterationCount?: SortOrder
    selectedDraftIndex?: SortOrder
    finalBlog?: SortOrder
    finalPolishApplied?: SortOrder
    finalPolishWarning?: SortOrder
    queuedAt?: SortOrder
    startedAt?: SortOrder
    heartbeatAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    completedAt?: SortOrder
  }

  export type blogGenerationRunSumOrderByAggregateInput = {
    retryCount?: SortOrder
    durationMs?: SortOrder
    iterationCount?: SortOrder
    selectedDraftIndex?: SortOrder
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type BlogGenerationRunScalarRelationFilter = {
    is?: blogGenerationRunWhereInput
    isNot?: blogGenerationRunWhereInput
  }

  export type BlogEvaluationNullableScalarRelationFilter = {
    is?: blogEvaluationWhereInput | null
    isNot?: blogEvaluationWhereInput | null
  }

  export type blogDraftRunIdDraftIndexCompoundUniqueInput = {
    runId: string
    draftIndex: number
  }

  export type blogDraftCountOrderByAggregateInput = {
    id?: SortOrder
    runId?: SortOrder
    draftIndex?: SortOrder
    ideaIndex?: SortOrder
    ideaTitle?: SortOrder
    mode?: SortOrder
    format?: SortOrder
    content?: SortOrder
    wordCountEstimate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type blogDraftAvgOrderByAggregateInput = {
    draftIndex?: SortOrder
    ideaIndex?: SortOrder
    wordCountEstimate?: SortOrder
  }

  export type blogDraftMaxOrderByAggregateInput = {
    id?: SortOrder
    runId?: SortOrder
    draftIndex?: SortOrder
    ideaIndex?: SortOrder
    ideaTitle?: SortOrder
    mode?: SortOrder
    format?: SortOrder
    content?: SortOrder
    wordCountEstimate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type blogDraftMinOrderByAggregateInput = {
    id?: SortOrder
    runId?: SortOrder
    draftIndex?: SortOrder
    ideaIndex?: SortOrder
    ideaTitle?: SortOrder
    mode?: SortOrder
    format?: SortOrder
    content?: SortOrder
    wordCountEstimate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type blogDraftSumOrderByAggregateInput = {
    draftIndex?: SortOrder
    ideaIndex?: SortOrder
    wordCountEstimate?: SortOrder
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type BlogDraftScalarRelationFilter = {
    is?: blogDraftWhereInput
    isNot?: blogDraftWhereInput
  }

  export type blogEvaluationCountOrderByAggregateInput = {
    id?: SortOrder
    runId?: SortOrder
    draftId?: SortOrder
    draftIndex?: SortOrder
    score?: SortOrder
    approved?: SortOrder
    issues?: SortOrder
    improvements?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type blogEvaluationAvgOrderByAggregateInput = {
    draftIndex?: SortOrder
    score?: SortOrder
  }

  export type blogEvaluationMaxOrderByAggregateInput = {
    id?: SortOrder
    runId?: SortOrder
    draftId?: SortOrder
    draftIndex?: SortOrder
    score?: SortOrder
    approved?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type blogEvaluationMinOrderByAggregateInput = {
    id?: SortOrder
    runId?: SortOrder
    draftId?: SortOrder
    draftIndex?: SortOrder
    score?: SortOrder
    approved?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type blogEvaluationSumOrderByAggregateInput = {
    draftIndex?: SortOrder
    score?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type SessionCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type AccountCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type blogGenerationRunCreateNestedManyWithoutUserInput = {
    create?: XOR<blogGenerationRunCreateWithoutUserInput, blogGenerationRunUncheckedCreateWithoutUserInput> | blogGenerationRunCreateWithoutUserInput[] | blogGenerationRunUncheckedCreateWithoutUserInput[]
    connectOrCreate?: blogGenerationRunCreateOrConnectWithoutUserInput | blogGenerationRunCreateOrConnectWithoutUserInput[]
    createMany?: blogGenerationRunCreateManyUserInputEnvelope
    connect?: blogGenerationRunWhereUniqueInput | blogGenerationRunWhereUniqueInput[]
  }

  export type SessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type AccountUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type blogGenerationRunUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<blogGenerationRunCreateWithoutUserInput, blogGenerationRunUncheckedCreateWithoutUserInput> | blogGenerationRunCreateWithoutUserInput[] | blogGenerationRunUncheckedCreateWithoutUserInput[]
    connectOrCreate?: blogGenerationRunCreateOrConnectWithoutUserInput | blogGenerationRunCreateOrConnectWithoutUserInput[]
    createMany?: blogGenerationRunCreateManyUserInputEnvelope
    connect?: blogGenerationRunWhereUniqueInput | blogGenerationRunWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type SessionUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type AccountUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type blogGenerationRunUpdateManyWithoutUserNestedInput = {
    create?: XOR<blogGenerationRunCreateWithoutUserInput, blogGenerationRunUncheckedCreateWithoutUserInput> | blogGenerationRunCreateWithoutUserInput[] | blogGenerationRunUncheckedCreateWithoutUserInput[]
    connectOrCreate?: blogGenerationRunCreateOrConnectWithoutUserInput | blogGenerationRunCreateOrConnectWithoutUserInput[]
    upsert?: blogGenerationRunUpsertWithWhereUniqueWithoutUserInput | blogGenerationRunUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: blogGenerationRunCreateManyUserInputEnvelope
    set?: blogGenerationRunWhereUniqueInput | blogGenerationRunWhereUniqueInput[]
    disconnect?: blogGenerationRunWhereUniqueInput | blogGenerationRunWhereUniqueInput[]
    delete?: blogGenerationRunWhereUniqueInput | blogGenerationRunWhereUniqueInput[]
    connect?: blogGenerationRunWhereUniqueInput | blogGenerationRunWhereUniqueInput[]
    update?: blogGenerationRunUpdateWithWhereUniqueWithoutUserInput | blogGenerationRunUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: blogGenerationRunUpdateManyWithWhereWithoutUserInput | blogGenerationRunUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: blogGenerationRunScalarWhereInput | blogGenerationRunScalarWhereInput[]
  }

  export type SessionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type AccountUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type blogGenerationRunUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<blogGenerationRunCreateWithoutUserInput, blogGenerationRunUncheckedCreateWithoutUserInput> | blogGenerationRunCreateWithoutUserInput[] | blogGenerationRunUncheckedCreateWithoutUserInput[]
    connectOrCreate?: blogGenerationRunCreateOrConnectWithoutUserInput | blogGenerationRunCreateOrConnectWithoutUserInput[]
    upsert?: blogGenerationRunUpsertWithWhereUniqueWithoutUserInput | blogGenerationRunUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: blogGenerationRunCreateManyUserInputEnvelope
    set?: blogGenerationRunWhereUniqueInput | blogGenerationRunWhereUniqueInput[]
    disconnect?: blogGenerationRunWhereUniqueInput | blogGenerationRunWhereUniqueInput[]
    delete?: blogGenerationRunWhereUniqueInput | blogGenerationRunWhereUniqueInput[]
    connect?: blogGenerationRunWhereUniqueInput | blogGenerationRunWhereUniqueInput[]
    update?: blogGenerationRunUpdateWithWhereUniqueWithoutUserInput | blogGenerationRunUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: blogGenerationRunUpdateManyWithWhereWithoutUserInput | blogGenerationRunUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: blogGenerationRunScalarWhereInput | blogGenerationRunScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutSessionsInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutSessionsNestedInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    upsert?: UserUpsertWithoutSessionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSessionsInput, UserUpdateWithoutSessionsInput>, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserCreateNestedOneWithoutAccountsInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    connect?: UserWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type UserUpdateOneRequiredWithoutAccountsNestedInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    upsert?: UserUpsertWithoutAccountsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAccountsInput, UserUpdateWithoutAccountsInput>, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type AiApiHitCreateNestedManyWithoutConversationInput = {
    create?: XOR<AiApiHitCreateWithoutConversationInput, AiApiHitUncheckedCreateWithoutConversationInput> | AiApiHitCreateWithoutConversationInput[] | AiApiHitUncheckedCreateWithoutConversationInput[]
    connectOrCreate?: AiApiHitCreateOrConnectWithoutConversationInput | AiApiHitCreateOrConnectWithoutConversationInput[]
    createMany?: AiApiHitCreateManyConversationInputEnvelope
    connect?: AiApiHitWhereUniqueInput | AiApiHitWhereUniqueInput[]
  }

  export type AiApiHitUncheckedCreateNestedManyWithoutConversationInput = {
    create?: XOR<AiApiHitCreateWithoutConversationInput, AiApiHitUncheckedCreateWithoutConversationInput> | AiApiHitCreateWithoutConversationInput[] | AiApiHitUncheckedCreateWithoutConversationInput[]
    connectOrCreate?: AiApiHitCreateOrConnectWithoutConversationInput | AiApiHitCreateOrConnectWithoutConversationInput[]
    createMany?: AiApiHitCreateManyConversationInputEnvelope
    connect?: AiApiHitWhereUniqueInput | AiApiHitWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type AiApiHitUpdateManyWithoutConversationNestedInput = {
    create?: XOR<AiApiHitCreateWithoutConversationInput, AiApiHitUncheckedCreateWithoutConversationInput> | AiApiHitCreateWithoutConversationInput[] | AiApiHitUncheckedCreateWithoutConversationInput[]
    connectOrCreate?: AiApiHitCreateOrConnectWithoutConversationInput | AiApiHitCreateOrConnectWithoutConversationInput[]
    upsert?: AiApiHitUpsertWithWhereUniqueWithoutConversationInput | AiApiHitUpsertWithWhereUniqueWithoutConversationInput[]
    createMany?: AiApiHitCreateManyConversationInputEnvelope
    set?: AiApiHitWhereUniqueInput | AiApiHitWhereUniqueInput[]
    disconnect?: AiApiHitWhereUniqueInput | AiApiHitWhereUniqueInput[]
    delete?: AiApiHitWhereUniqueInput | AiApiHitWhereUniqueInput[]
    connect?: AiApiHitWhereUniqueInput | AiApiHitWhereUniqueInput[]
    update?: AiApiHitUpdateWithWhereUniqueWithoutConversationInput | AiApiHitUpdateWithWhereUniqueWithoutConversationInput[]
    updateMany?: AiApiHitUpdateManyWithWhereWithoutConversationInput | AiApiHitUpdateManyWithWhereWithoutConversationInput[]
    deleteMany?: AiApiHitScalarWhereInput | AiApiHitScalarWhereInput[]
  }

  export type AiApiHitUncheckedUpdateManyWithoutConversationNestedInput = {
    create?: XOR<AiApiHitCreateWithoutConversationInput, AiApiHitUncheckedCreateWithoutConversationInput> | AiApiHitCreateWithoutConversationInput[] | AiApiHitUncheckedCreateWithoutConversationInput[]
    connectOrCreate?: AiApiHitCreateOrConnectWithoutConversationInput | AiApiHitCreateOrConnectWithoutConversationInput[]
    upsert?: AiApiHitUpsertWithWhereUniqueWithoutConversationInput | AiApiHitUpsertWithWhereUniqueWithoutConversationInput[]
    createMany?: AiApiHitCreateManyConversationInputEnvelope
    set?: AiApiHitWhereUniqueInput | AiApiHitWhereUniqueInput[]
    disconnect?: AiApiHitWhereUniqueInput | AiApiHitWhereUniqueInput[]
    delete?: AiApiHitWhereUniqueInput | AiApiHitWhereUniqueInput[]
    connect?: AiApiHitWhereUniqueInput | AiApiHitWhereUniqueInput[]
    update?: AiApiHitUpdateWithWhereUniqueWithoutConversationInput | AiApiHitUpdateWithWhereUniqueWithoutConversationInput[]
    updateMany?: AiApiHitUpdateManyWithWhereWithoutConversationInput | AiApiHitUpdateManyWithWhereWithoutConversationInput[]
    deleteMany?: AiApiHitScalarWhereInput | AiApiHitScalarWhereInput[]
  }

  export type AiConversationCreateNestedOneWithoutHitsInput = {
    create?: XOR<AiConversationCreateWithoutHitsInput, AiConversationUncheckedCreateWithoutHitsInput>
    connectOrCreate?: AiConversationCreateOrConnectWithoutHitsInput
    connect?: AiConversationWhereUniqueInput
  }

  export type AiConversationUpdateOneRequiredWithoutHitsNestedInput = {
    create?: XOR<AiConversationCreateWithoutHitsInput, AiConversationUncheckedCreateWithoutHitsInput>
    connectOrCreate?: AiConversationCreateOrConnectWithoutHitsInput
    upsert?: AiConversationUpsertWithoutHitsInput
    connect?: AiConversationWhereUniqueInput
    update?: XOR<XOR<AiConversationUpdateToOneWithWhereWithoutHitsInput, AiConversationUpdateWithoutHitsInput>, AiConversationUncheckedUpdateWithoutHitsInput>
  }

  export type BlogBriefCreatekeywordsInput = {
    set: string[]
  }

  export type BlogBriefCreateincludeServicesInput = {
    set: string[]
  }

  export type BlogBriefCreateconstraintsInput = {
    set: string[]
  }

  export type BlogDraftEditCreateNestedManyWithoutBriefInput = {
    create?: XOR<BlogDraftEditCreateWithoutBriefInput, BlogDraftEditUncheckedCreateWithoutBriefInput> | BlogDraftEditCreateWithoutBriefInput[] | BlogDraftEditUncheckedCreateWithoutBriefInput[]
    connectOrCreate?: BlogDraftEditCreateOrConnectWithoutBriefInput | BlogDraftEditCreateOrConnectWithoutBriefInput[]
    createMany?: BlogDraftEditCreateManyBriefInputEnvelope
    connect?: BlogDraftEditWhereUniqueInput | BlogDraftEditWhereUniqueInput[]
  }

  export type BlogDraftEditUncheckedCreateNestedManyWithoutBriefInput = {
    create?: XOR<BlogDraftEditCreateWithoutBriefInput, BlogDraftEditUncheckedCreateWithoutBriefInput> | BlogDraftEditCreateWithoutBriefInput[] | BlogDraftEditUncheckedCreateWithoutBriefInput[]
    connectOrCreate?: BlogDraftEditCreateOrConnectWithoutBriefInput | BlogDraftEditCreateOrConnectWithoutBriefInput[]
    createMany?: BlogDraftEditCreateManyBriefInputEnvelope
    connect?: BlogDraftEditWhereUniqueInput | BlogDraftEditWhereUniqueInput[]
  }

  export type BlogBriefUpdatekeywordsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type BlogBriefUpdateincludeServicesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type BlogBriefUpdateconstraintsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumBlogBriefStatusFieldUpdateOperationsInput = {
    set?: $Enums.BlogBriefStatus
  }

  export type BlogDraftEditUpdateManyWithoutBriefNestedInput = {
    create?: XOR<BlogDraftEditCreateWithoutBriefInput, BlogDraftEditUncheckedCreateWithoutBriefInput> | BlogDraftEditCreateWithoutBriefInput[] | BlogDraftEditUncheckedCreateWithoutBriefInput[]
    connectOrCreate?: BlogDraftEditCreateOrConnectWithoutBriefInput | BlogDraftEditCreateOrConnectWithoutBriefInput[]
    upsert?: BlogDraftEditUpsertWithWhereUniqueWithoutBriefInput | BlogDraftEditUpsertWithWhereUniqueWithoutBriefInput[]
    createMany?: BlogDraftEditCreateManyBriefInputEnvelope
    set?: BlogDraftEditWhereUniqueInput | BlogDraftEditWhereUniqueInput[]
    disconnect?: BlogDraftEditWhereUniqueInput | BlogDraftEditWhereUniqueInput[]
    delete?: BlogDraftEditWhereUniqueInput | BlogDraftEditWhereUniqueInput[]
    connect?: BlogDraftEditWhereUniqueInput | BlogDraftEditWhereUniqueInput[]
    update?: BlogDraftEditUpdateWithWhereUniqueWithoutBriefInput | BlogDraftEditUpdateWithWhereUniqueWithoutBriefInput[]
    updateMany?: BlogDraftEditUpdateManyWithWhereWithoutBriefInput | BlogDraftEditUpdateManyWithWhereWithoutBriefInput[]
    deleteMany?: BlogDraftEditScalarWhereInput | BlogDraftEditScalarWhereInput[]
  }

  export type BlogDraftEditUncheckedUpdateManyWithoutBriefNestedInput = {
    create?: XOR<BlogDraftEditCreateWithoutBriefInput, BlogDraftEditUncheckedCreateWithoutBriefInput> | BlogDraftEditCreateWithoutBriefInput[] | BlogDraftEditUncheckedCreateWithoutBriefInput[]
    connectOrCreate?: BlogDraftEditCreateOrConnectWithoutBriefInput | BlogDraftEditCreateOrConnectWithoutBriefInput[]
    upsert?: BlogDraftEditUpsertWithWhereUniqueWithoutBriefInput | BlogDraftEditUpsertWithWhereUniqueWithoutBriefInput[]
    createMany?: BlogDraftEditCreateManyBriefInputEnvelope
    set?: BlogDraftEditWhereUniqueInput | BlogDraftEditWhereUniqueInput[]
    disconnect?: BlogDraftEditWhereUniqueInput | BlogDraftEditWhereUniqueInput[]
    delete?: BlogDraftEditWhereUniqueInput | BlogDraftEditWhereUniqueInput[]
    connect?: BlogDraftEditWhereUniqueInput | BlogDraftEditWhereUniqueInput[]
    update?: BlogDraftEditUpdateWithWhereUniqueWithoutBriefInput | BlogDraftEditUpdateWithWhereUniqueWithoutBriefInput[]
    updateMany?: BlogDraftEditUpdateManyWithWhereWithoutBriefInput | BlogDraftEditUpdateManyWithWhereWithoutBriefInput[]
    deleteMany?: BlogDraftEditScalarWhereInput | BlogDraftEditScalarWhereInput[]
  }

  export type BlogBriefCreateNestedOneWithoutDraftEditsInput = {
    create?: XOR<BlogBriefCreateWithoutDraftEditsInput, BlogBriefUncheckedCreateWithoutDraftEditsInput>
    connectOrCreate?: BlogBriefCreateOrConnectWithoutDraftEditsInput
    connect?: BlogBriefWhereUniqueInput
  }

  export type BlogBriefUpdateOneRequiredWithoutDraftEditsNestedInput = {
    create?: XOR<BlogBriefCreateWithoutDraftEditsInput, BlogBriefUncheckedCreateWithoutDraftEditsInput>
    connectOrCreate?: BlogBriefCreateOrConnectWithoutDraftEditsInput
    upsert?: BlogBriefUpsertWithoutDraftEditsInput
    connect?: BlogBriefWhereUniqueInput
    update?: XOR<XOR<BlogBriefUpdateToOneWithWhereWithoutDraftEditsInput, BlogBriefUpdateWithoutDraftEditsInput>, BlogBriefUncheckedUpdateWithoutDraftEditsInput>
  }

  export type UserCreateNestedOneWithoutBlogRunsInput = {
    create?: XOR<UserCreateWithoutBlogRunsInput, UserUncheckedCreateWithoutBlogRunsInput>
    connectOrCreate?: UserCreateOrConnectWithoutBlogRunsInput
    connect?: UserWhereUniqueInput
  }

  export type blogDraftCreateNestedManyWithoutRunInput = {
    create?: XOR<blogDraftCreateWithoutRunInput, blogDraftUncheckedCreateWithoutRunInput> | blogDraftCreateWithoutRunInput[] | blogDraftUncheckedCreateWithoutRunInput[]
    connectOrCreate?: blogDraftCreateOrConnectWithoutRunInput | blogDraftCreateOrConnectWithoutRunInput[]
    createMany?: blogDraftCreateManyRunInputEnvelope
    connect?: blogDraftWhereUniqueInput | blogDraftWhereUniqueInput[]
  }

  export type blogEvaluationCreateNestedManyWithoutRunInput = {
    create?: XOR<blogEvaluationCreateWithoutRunInput, blogEvaluationUncheckedCreateWithoutRunInput> | blogEvaluationCreateWithoutRunInput[] | blogEvaluationUncheckedCreateWithoutRunInput[]
    connectOrCreate?: blogEvaluationCreateOrConnectWithoutRunInput | blogEvaluationCreateOrConnectWithoutRunInput[]
    createMany?: blogEvaluationCreateManyRunInputEnvelope
    connect?: blogEvaluationWhereUniqueInput | blogEvaluationWhereUniqueInput[]
  }

  export type blogDraftUncheckedCreateNestedManyWithoutRunInput = {
    create?: XOR<blogDraftCreateWithoutRunInput, blogDraftUncheckedCreateWithoutRunInput> | blogDraftCreateWithoutRunInput[] | blogDraftUncheckedCreateWithoutRunInput[]
    connectOrCreate?: blogDraftCreateOrConnectWithoutRunInput | blogDraftCreateOrConnectWithoutRunInput[]
    createMany?: blogDraftCreateManyRunInputEnvelope
    connect?: blogDraftWhereUniqueInput | blogDraftWhereUniqueInput[]
  }

  export type blogEvaluationUncheckedCreateNestedManyWithoutRunInput = {
    create?: XOR<blogEvaluationCreateWithoutRunInput, blogEvaluationUncheckedCreateWithoutRunInput> | blogEvaluationCreateWithoutRunInput[] | blogEvaluationUncheckedCreateWithoutRunInput[]
    connectOrCreate?: blogEvaluationCreateOrConnectWithoutRunInput | blogEvaluationCreateOrConnectWithoutRunInput[]
    createMany?: blogEvaluationCreateManyRunInputEnvelope
    connect?: blogEvaluationWhereUniqueInput | blogEvaluationWhereUniqueInput[]
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type UserUpdateOneWithoutBlogRunsNestedInput = {
    create?: XOR<UserCreateWithoutBlogRunsInput, UserUncheckedCreateWithoutBlogRunsInput>
    connectOrCreate?: UserCreateOrConnectWithoutBlogRunsInput
    upsert?: UserUpsertWithoutBlogRunsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutBlogRunsInput, UserUpdateWithoutBlogRunsInput>, UserUncheckedUpdateWithoutBlogRunsInput>
  }

  export type blogDraftUpdateManyWithoutRunNestedInput = {
    create?: XOR<blogDraftCreateWithoutRunInput, blogDraftUncheckedCreateWithoutRunInput> | blogDraftCreateWithoutRunInput[] | blogDraftUncheckedCreateWithoutRunInput[]
    connectOrCreate?: blogDraftCreateOrConnectWithoutRunInput | blogDraftCreateOrConnectWithoutRunInput[]
    upsert?: blogDraftUpsertWithWhereUniqueWithoutRunInput | blogDraftUpsertWithWhereUniqueWithoutRunInput[]
    createMany?: blogDraftCreateManyRunInputEnvelope
    set?: blogDraftWhereUniqueInput | blogDraftWhereUniqueInput[]
    disconnect?: blogDraftWhereUniqueInput | blogDraftWhereUniqueInput[]
    delete?: blogDraftWhereUniqueInput | blogDraftWhereUniqueInput[]
    connect?: blogDraftWhereUniqueInput | blogDraftWhereUniqueInput[]
    update?: blogDraftUpdateWithWhereUniqueWithoutRunInput | blogDraftUpdateWithWhereUniqueWithoutRunInput[]
    updateMany?: blogDraftUpdateManyWithWhereWithoutRunInput | blogDraftUpdateManyWithWhereWithoutRunInput[]
    deleteMany?: blogDraftScalarWhereInput | blogDraftScalarWhereInput[]
  }

  export type blogEvaluationUpdateManyWithoutRunNestedInput = {
    create?: XOR<blogEvaluationCreateWithoutRunInput, blogEvaluationUncheckedCreateWithoutRunInput> | blogEvaluationCreateWithoutRunInput[] | blogEvaluationUncheckedCreateWithoutRunInput[]
    connectOrCreate?: blogEvaluationCreateOrConnectWithoutRunInput | blogEvaluationCreateOrConnectWithoutRunInput[]
    upsert?: blogEvaluationUpsertWithWhereUniqueWithoutRunInput | blogEvaluationUpsertWithWhereUniqueWithoutRunInput[]
    createMany?: blogEvaluationCreateManyRunInputEnvelope
    set?: blogEvaluationWhereUniqueInput | blogEvaluationWhereUniqueInput[]
    disconnect?: blogEvaluationWhereUniqueInput | blogEvaluationWhereUniqueInput[]
    delete?: blogEvaluationWhereUniqueInput | blogEvaluationWhereUniqueInput[]
    connect?: blogEvaluationWhereUniqueInput | blogEvaluationWhereUniqueInput[]
    update?: blogEvaluationUpdateWithWhereUniqueWithoutRunInput | blogEvaluationUpdateWithWhereUniqueWithoutRunInput[]
    updateMany?: blogEvaluationUpdateManyWithWhereWithoutRunInput | blogEvaluationUpdateManyWithWhereWithoutRunInput[]
    deleteMany?: blogEvaluationScalarWhereInput | blogEvaluationScalarWhereInput[]
  }

  export type blogDraftUncheckedUpdateManyWithoutRunNestedInput = {
    create?: XOR<blogDraftCreateWithoutRunInput, blogDraftUncheckedCreateWithoutRunInput> | blogDraftCreateWithoutRunInput[] | blogDraftUncheckedCreateWithoutRunInput[]
    connectOrCreate?: blogDraftCreateOrConnectWithoutRunInput | blogDraftCreateOrConnectWithoutRunInput[]
    upsert?: blogDraftUpsertWithWhereUniqueWithoutRunInput | blogDraftUpsertWithWhereUniqueWithoutRunInput[]
    createMany?: blogDraftCreateManyRunInputEnvelope
    set?: blogDraftWhereUniqueInput | blogDraftWhereUniqueInput[]
    disconnect?: blogDraftWhereUniqueInput | blogDraftWhereUniqueInput[]
    delete?: blogDraftWhereUniqueInput | blogDraftWhereUniqueInput[]
    connect?: blogDraftWhereUniqueInput | blogDraftWhereUniqueInput[]
    update?: blogDraftUpdateWithWhereUniqueWithoutRunInput | blogDraftUpdateWithWhereUniqueWithoutRunInput[]
    updateMany?: blogDraftUpdateManyWithWhereWithoutRunInput | blogDraftUpdateManyWithWhereWithoutRunInput[]
    deleteMany?: blogDraftScalarWhereInput | blogDraftScalarWhereInput[]
  }

  export type blogEvaluationUncheckedUpdateManyWithoutRunNestedInput = {
    create?: XOR<blogEvaluationCreateWithoutRunInput, blogEvaluationUncheckedCreateWithoutRunInput> | blogEvaluationCreateWithoutRunInput[] | blogEvaluationUncheckedCreateWithoutRunInput[]
    connectOrCreate?: blogEvaluationCreateOrConnectWithoutRunInput | blogEvaluationCreateOrConnectWithoutRunInput[]
    upsert?: blogEvaluationUpsertWithWhereUniqueWithoutRunInput | blogEvaluationUpsertWithWhereUniqueWithoutRunInput[]
    createMany?: blogEvaluationCreateManyRunInputEnvelope
    set?: blogEvaluationWhereUniqueInput | blogEvaluationWhereUniqueInput[]
    disconnect?: blogEvaluationWhereUniqueInput | blogEvaluationWhereUniqueInput[]
    delete?: blogEvaluationWhereUniqueInput | blogEvaluationWhereUniqueInput[]
    connect?: blogEvaluationWhereUniqueInput | blogEvaluationWhereUniqueInput[]
    update?: blogEvaluationUpdateWithWhereUniqueWithoutRunInput | blogEvaluationUpdateWithWhereUniqueWithoutRunInput[]
    updateMany?: blogEvaluationUpdateManyWithWhereWithoutRunInput | blogEvaluationUpdateManyWithWhereWithoutRunInput[]
    deleteMany?: blogEvaluationScalarWhereInput | blogEvaluationScalarWhereInput[]
  }

  export type blogGenerationRunCreateNestedOneWithoutDraftsInput = {
    create?: XOR<blogGenerationRunCreateWithoutDraftsInput, blogGenerationRunUncheckedCreateWithoutDraftsInput>
    connectOrCreate?: blogGenerationRunCreateOrConnectWithoutDraftsInput
    connect?: blogGenerationRunWhereUniqueInput
  }

  export type blogEvaluationCreateNestedOneWithoutDraftInput = {
    create?: XOR<blogEvaluationCreateWithoutDraftInput, blogEvaluationUncheckedCreateWithoutDraftInput>
    connectOrCreate?: blogEvaluationCreateOrConnectWithoutDraftInput
    connect?: blogEvaluationWhereUniqueInput
  }

  export type blogEvaluationUncheckedCreateNestedOneWithoutDraftInput = {
    create?: XOR<blogEvaluationCreateWithoutDraftInput, blogEvaluationUncheckedCreateWithoutDraftInput>
    connectOrCreate?: blogEvaluationCreateOrConnectWithoutDraftInput
    connect?: blogEvaluationWhereUniqueInput
  }

  export type blogGenerationRunUpdateOneRequiredWithoutDraftsNestedInput = {
    create?: XOR<blogGenerationRunCreateWithoutDraftsInput, blogGenerationRunUncheckedCreateWithoutDraftsInput>
    connectOrCreate?: blogGenerationRunCreateOrConnectWithoutDraftsInput
    upsert?: blogGenerationRunUpsertWithoutDraftsInput
    connect?: blogGenerationRunWhereUniqueInput
    update?: XOR<XOR<blogGenerationRunUpdateToOneWithWhereWithoutDraftsInput, blogGenerationRunUpdateWithoutDraftsInput>, blogGenerationRunUncheckedUpdateWithoutDraftsInput>
  }

  export type blogEvaluationUpdateOneWithoutDraftNestedInput = {
    create?: XOR<blogEvaluationCreateWithoutDraftInput, blogEvaluationUncheckedCreateWithoutDraftInput>
    connectOrCreate?: blogEvaluationCreateOrConnectWithoutDraftInput
    upsert?: blogEvaluationUpsertWithoutDraftInput
    disconnect?: blogEvaluationWhereInput | boolean
    delete?: blogEvaluationWhereInput | boolean
    connect?: blogEvaluationWhereUniqueInput
    update?: XOR<XOR<blogEvaluationUpdateToOneWithWhereWithoutDraftInput, blogEvaluationUpdateWithoutDraftInput>, blogEvaluationUncheckedUpdateWithoutDraftInput>
  }

  export type blogEvaluationUncheckedUpdateOneWithoutDraftNestedInput = {
    create?: XOR<blogEvaluationCreateWithoutDraftInput, blogEvaluationUncheckedCreateWithoutDraftInput>
    connectOrCreate?: blogEvaluationCreateOrConnectWithoutDraftInput
    upsert?: blogEvaluationUpsertWithoutDraftInput
    disconnect?: blogEvaluationWhereInput | boolean
    delete?: blogEvaluationWhereInput | boolean
    connect?: blogEvaluationWhereUniqueInput
    update?: XOR<XOR<blogEvaluationUpdateToOneWithWhereWithoutDraftInput, blogEvaluationUpdateWithoutDraftInput>, blogEvaluationUncheckedUpdateWithoutDraftInput>
  }

  export type blogGenerationRunCreateNestedOneWithoutEvaluationsInput = {
    create?: XOR<blogGenerationRunCreateWithoutEvaluationsInput, blogGenerationRunUncheckedCreateWithoutEvaluationsInput>
    connectOrCreate?: blogGenerationRunCreateOrConnectWithoutEvaluationsInput
    connect?: blogGenerationRunWhereUniqueInput
  }

  export type blogDraftCreateNestedOneWithoutEvaluationInput = {
    create?: XOR<blogDraftCreateWithoutEvaluationInput, blogDraftUncheckedCreateWithoutEvaluationInput>
    connectOrCreate?: blogDraftCreateOrConnectWithoutEvaluationInput
    connect?: blogDraftWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type blogGenerationRunUpdateOneRequiredWithoutEvaluationsNestedInput = {
    create?: XOR<blogGenerationRunCreateWithoutEvaluationsInput, blogGenerationRunUncheckedCreateWithoutEvaluationsInput>
    connectOrCreate?: blogGenerationRunCreateOrConnectWithoutEvaluationsInput
    upsert?: blogGenerationRunUpsertWithoutEvaluationsInput
    connect?: blogGenerationRunWhereUniqueInput
    update?: XOR<XOR<blogGenerationRunUpdateToOneWithWhereWithoutEvaluationsInput, blogGenerationRunUpdateWithoutEvaluationsInput>, blogGenerationRunUncheckedUpdateWithoutEvaluationsInput>
  }

  export type blogDraftUpdateOneRequiredWithoutEvaluationNestedInput = {
    create?: XOR<blogDraftCreateWithoutEvaluationInput, blogDraftUncheckedCreateWithoutEvaluationInput>
    connectOrCreate?: blogDraftCreateOrConnectWithoutEvaluationInput
    upsert?: blogDraftUpsertWithoutEvaluationInput
    connect?: blogDraftWhereUniqueInput
    update?: XOR<XOR<blogDraftUpdateToOneWithWhereWithoutEvaluationInput, blogDraftUpdateWithoutEvaluationInput>, blogDraftUncheckedUpdateWithoutEvaluationInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumBlogBriefStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.BlogBriefStatus | EnumBlogBriefStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BlogBriefStatus[] | ListEnumBlogBriefStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.BlogBriefStatus[] | ListEnumBlogBriefStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumBlogBriefStatusFilter<$PrismaModel> | $Enums.BlogBriefStatus
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumBlogBriefStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BlogBriefStatus | EnumBlogBriefStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BlogBriefStatus[] | ListEnumBlogBriefStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.BlogBriefStatus[] | ListEnumBlogBriefStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumBlogBriefStatusWithAggregatesFilter<$PrismaModel> | $Enums.BlogBriefStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBlogBriefStatusFilter<$PrismaModel>
    _max?: NestedEnumBlogBriefStatusFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type SessionCreateWithoutUserInput = {
    id: string
    token: string
    expiresAt: Date | string
    ipAddress?: string | null
    userAgent?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SessionUncheckedCreateWithoutUserInput = {
    id: string
    token: string
    expiresAt: Date | string
    ipAddress?: string | null
    userAgent?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SessionCreateOrConnectWithoutUserInput = {
    where: SessionWhereUniqueInput
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionCreateManyUserInputEnvelope = {
    data: SessionCreateManyUserInput | SessionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type AccountCreateWithoutUserInput = {
    id: string
    accountId: string
    providerId: string
    accessToken?: string | null
    refreshToken?: string | null
    accessTokenExpiresAt?: Date | string | null
    refreshTokenExpiresAt?: Date | string | null
    scope?: string | null
    idToken?: string | null
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountUncheckedCreateWithoutUserInput = {
    id: string
    accountId: string
    providerId: string
    accessToken?: string | null
    refreshToken?: string | null
    accessTokenExpiresAt?: Date | string | null
    refreshTokenExpiresAt?: Date | string | null
    scope?: string | null
    idToken?: string | null
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountCreateOrConnectWithoutUserInput = {
    where: AccountWhereUniqueInput
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountCreateManyUserInputEnvelope = {
    data: AccountCreateManyUserInput | AccountCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type blogGenerationRunCreateWithoutUserInput = {
    id?: string
    requestId: string
    topic: string
    inputPayload?: NullableJsonNullValueInput | InputJsonValue
    status: string
    triggerRunId?: string | null
    retryCount?: number
    workflowStatus?: string | null
    error?: string | null
    durationMs?: number | null
    iterationCount?: number | null
    selectedDraftIndex?: number | null
    finalBlog?: string | null
    finalPolishApplied?: boolean | null
    finalPolishWarning?: string | null
    queuedAt?: Date | string | null
    startedAt?: Date | string | null
    heartbeatAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    completedAt?: Date | string | null
    drafts?: blogDraftCreateNestedManyWithoutRunInput
    evaluations?: blogEvaluationCreateNestedManyWithoutRunInput
  }

  export type blogGenerationRunUncheckedCreateWithoutUserInput = {
    id?: string
    requestId: string
    topic: string
    inputPayload?: NullableJsonNullValueInput | InputJsonValue
    status: string
    triggerRunId?: string | null
    retryCount?: number
    workflowStatus?: string | null
    error?: string | null
    durationMs?: number | null
    iterationCount?: number | null
    selectedDraftIndex?: number | null
    finalBlog?: string | null
    finalPolishApplied?: boolean | null
    finalPolishWarning?: string | null
    queuedAt?: Date | string | null
    startedAt?: Date | string | null
    heartbeatAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    completedAt?: Date | string | null
    drafts?: blogDraftUncheckedCreateNestedManyWithoutRunInput
    evaluations?: blogEvaluationUncheckedCreateNestedManyWithoutRunInput
  }

  export type blogGenerationRunCreateOrConnectWithoutUserInput = {
    where: blogGenerationRunWhereUniqueInput
    create: XOR<blogGenerationRunCreateWithoutUserInput, blogGenerationRunUncheckedCreateWithoutUserInput>
  }

  export type blogGenerationRunCreateManyUserInputEnvelope = {
    data: blogGenerationRunCreateManyUserInput | blogGenerationRunCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SessionUpsertWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    update: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionUpdateWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    data: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
  }

  export type SessionUpdateManyWithWhereWithoutUserInput = {
    where: SessionScalarWhereInput
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyWithoutUserInput>
  }

  export type SessionScalarWhereInput = {
    AND?: SessionScalarWhereInput | SessionScalarWhereInput[]
    OR?: SessionScalarWhereInput[]
    NOT?: SessionScalarWhereInput | SessionScalarWhereInput[]
    id?: StringFilter<"Session"> | string
    userId?: StringFilter<"Session"> | string
    token?: StringFilter<"Session"> | string
    expiresAt?: DateTimeFilter<"Session"> | Date | string
    ipAddress?: StringNullableFilter<"Session"> | string | null
    userAgent?: StringNullableFilter<"Session"> | string | null
    createdAt?: DateTimeFilter<"Session"> | Date | string
    updatedAt?: DateTimeFilter<"Session"> | Date | string
  }

  export type AccountUpsertWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    update: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountUpdateWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    data: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
  }

  export type AccountUpdateManyWithWhereWithoutUserInput = {
    where: AccountScalarWhereInput
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyWithoutUserInput>
  }

  export type AccountScalarWhereInput = {
    AND?: AccountScalarWhereInput | AccountScalarWhereInput[]
    OR?: AccountScalarWhereInput[]
    NOT?: AccountScalarWhereInput | AccountScalarWhereInput[]
    id?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    accountId?: StringFilter<"Account"> | string
    providerId?: StringFilter<"Account"> | string
    accessToken?: StringNullableFilter<"Account"> | string | null
    refreshToken?: StringNullableFilter<"Account"> | string | null
    accessTokenExpiresAt?: DateTimeNullableFilter<"Account"> | Date | string | null
    refreshTokenExpiresAt?: DateTimeNullableFilter<"Account"> | Date | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    idToken?: StringNullableFilter<"Account"> | string | null
    password?: StringNullableFilter<"Account"> | string | null
    createdAt?: DateTimeFilter<"Account"> | Date | string
    updatedAt?: DateTimeFilter<"Account"> | Date | string
  }

  export type blogGenerationRunUpsertWithWhereUniqueWithoutUserInput = {
    where: blogGenerationRunWhereUniqueInput
    update: XOR<blogGenerationRunUpdateWithoutUserInput, blogGenerationRunUncheckedUpdateWithoutUserInput>
    create: XOR<blogGenerationRunCreateWithoutUserInput, blogGenerationRunUncheckedCreateWithoutUserInput>
  }

  export type blogGenerationRunUpdateWithWhereUniqueWithoutUserInput = {
    where: blogGenerationRunWhereUniqueInput
    data: XOR<blogGenerationRunUpdateWithoutUserInput, blogGenerationRunUncheckedUpdateWithoutUserInput>
  }

  export type blogGenerationRunUpdateManyWithWhereWithoutUserInput = {
    where: blogGenerationRunScalarWhereInput
    data: XOR<blogGenerationRunUpdateManyMutationInput, blogGenerationRunUncheckedUpdateManyWithoutUserInput>
  }

  export type blogGenerationRunScalarWhereInput = {
    AND?: blogGenerationRunScalarWhereInput | blogGenerationRunScalarWhereInput[]
    OR?: blogGenerationRunScalarWhereInput[]
    NOT?: blogGenerationRunScalarWhereInput | blogGenerationRunScalarWhereInput[]
    id?: StringFilter<"blogGenerationRun"> | string
    requestId?: StringFilter<"blogGenerationRun"> | string
    userId?: StringNullableFilter<"blogGenerationRun"> | string | null
    topic?: StringFilter<"blogGenerationRun"> | string
    inputPayload?: JsonNullableFilter<"blogGenerationRun">
    status?: StringFilter<"blogGenerationRun"> | string
    triggerRunId?: StringNullableFilter<"blogGenerationRun"> | string | null
    retryCount?: IntFilter<"blogGenerationRun"> | number
    workflowStatus?: StringNullableFilter<"blogGenerationRun"> | string | null
    error?: StringNullableFilter<"blogGenerationRun"> | string | null
    durationMs?: IntNullableFilter<"blogGenerationRun"> | number | null
    iterationCount?: IntNullableFilter<"blogGenerationRun"> | number | null
    selectedDraftIndex?: IntNullableFilter<"blogGenerationRun"> | number | null
    finalBlog?: StringNullableFilter<"blogGenerationRun"> | string | null
    finalPolishApplied?: BoolNullableFilter<"blogGenerationRun"> | boolean | null
    finalPolishWarning?: StringNullableFilter<"blogGenerationRun"> | string | null
    queuedAt?: DateTimeNullableFilter<"blogGenerationRun"> | Date | string | null
    startedAt?: DateTimeNullableFilter<"blogGenerationRun"> | Date | string | null
    heartbeatAt?: DateTimeNullableFilter<"blogGenerationRun"> | Date | string | null
    createdAt?: DateTimeFilter<"blogGenerationRun"> | Date | string
    updatedAt?: DateTimeFilter<"blogGenerationRun"> | Date | string
    completedAt?: DateTimeNullableFilter<"blogGenerationRun"> | Date | string | null
  }

  export type UserCreateWithoutSessionsInput = {
    id: string
    name: string
    email: string
    emailVerified?: boolean
    image?: string | null
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
    blogRuns?: blogGenerationRunCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSessionsInput = {
    id: string
    name: string
    email: string
    emailVerified?: boolean
    image?: string | null
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    blogRuns?: blogGenerationRunUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSessionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
  }

  export type UserUpsertWithoutSessionsInput = {
    update: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSessionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
    blogRuns?: blogGenerationRunUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    blogRuns?: blogGenerationRunUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutAccountsInput = {
    id: string
    name: string
    email: string
    emailVerified?: boolean
    image?: string | null
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionCreateNestedManyWithoutUserInput
    blogRuns?: blogGenerationRunCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAccountsInput = {
    id: string
    name: string
    email: string
    emailVerified?: boolean
    image?: string | null
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    blogRuns?: blogGenerationRunUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAccountsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
  }

  export type UserUpsertWithoutAccountsInput = {
    update: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAccountsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type UserUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUpdateManyWithoutUserNestedInput
    blogRuns?: blogGenerationRunUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    blogRuns?: blogGenerationRunUncheckedUpdateManyWithoutUserNestedInput
  }

  export type AiApiHitCreateWithoutConversationInput = {
    id?: string
    route: string
    createdAt?: Date | string
  }

  export type AiApiHitUncheckedCreateWithoutConversationInput = {
    id?: string
    route: string
    createdAt?: Date | string
  }

  export type AiApiHitCreateOrConnectWithoutConversationInput = {
    where: AiApiHitWhereUniqueInput
    create: XOR<AiApiHitCreateWithoutConversationInput, AiApiHitUncheckedCreateWithoutConversationInput>
  }

  export type AiApiHitCreateManyConversationInputEnvelope = {
    data: AiApiHitCreateManyConversationInput | AiApiHitCreateManyConversationInput[]
    skipDuplicates?: boolean
  }

  export type AiApiHitUpsertWithWhereUniqueWithoutConversationInput = {
    where: AiApiHitWhereUniqueInput
    update: XOR<AiApiHitUpdateWithoutConversationInput, AiApiHitUncheckedUpdateWithoutConversationInput>
    create: XOR<AiApiHitCreateWithoutConversationInput, AiApiHitUncheckedCreateWithoutConversationInput>
  }

  export type AiApiHitUpdateWithWhereUniqueWithoutConversationInput = {
    where: AiApiHitWhereUniqueInput
    data: XOR<AiApiHitUpdateWithoutConversationInput, AiApiHitUncheckedUpdateWithoutConversationInput>
  }

  export type AiApiHitUpdateManyWithWhereWithoutConversationInput = {
    where: AiApiHitScalarWhereInput
    data: XOR<AiApiHitUpdateManyMutationInput, AiApiHitUncheckedUpdateManyWithoutConversationInput>
  }

  export type AiApiHitScalarWhereInput = {
    AND?: AiApiHitScalarWhereInput | AiApiHitScalarWhereInput[]
    OR?: AiApiHitScalarWhereInput[]
    NOT?: AiApiHitScalarWhereInput | AiApiHitScalarWhereInput[]
    id?: StringFilter<"AiApiHit"> | string
    route?: StringFilter<"AiApiHit"> | string
    createdAt?: DateTimeFilter<"AiApiHit"> | Date | string
    conversationId?: StringFilter<"AiApiHit"> | string
  }

  export type AiConversationCreateWithoutHitsInput = {
    id?: string
    conversationId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    apiHitCount?: number
  }

  export type AiConversationUncheckedCreateWithoutHitsInput = {
    id?: string
    conversationId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    apiHitCount?: number
  }

  export type AiConversationCreateOrConnectWithoutHitsInput = {
    where: AiConversationWhereUniqueInput
    create: XOR<AiConversationCreateWithoutHitsInput, AiConversationUncheckedCreateWithoutHitsInput>
  }

  export type AiConversationUpsertWithoutHitsInput = {
    update: XOR<AiConversationUpdateWithoutHitsInput, AiConversationUncheckedUpdateWithoutHitsInput>
    create: XOR<AiConversationCreateWithoutHitsInput, AiConversationUncheckedCreateWithoutHitsInput>
    where?: AiConversationWhereInput
  }

  export type AiConversationUpdateToOneWithWhereWithoutHitsInput = {
    where?: AiConversationWhereInput
    data: XOR<AiConversationUpdateWithoutHitsInput, AiConversationUncheckedUpdateWithoutHitsInput>
  }

  export type AiConversationUpdateWithoutHitsInput = {
    id?: StringFieldUpdateOperationsInput | string
    conversationId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    apiHitCount?: IntFieldUpdateOperationsInput | number
  }

  export type AiConversationUncheckedUpdateWithoutHitsInput = {
    id?: StringFieldUpdateOperationsInput | string
    conversationId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    apiHitCount?: IntFieldUpdateOperationsInput | number
  }

  export type BlogDraftEditCreateWithoutBriefInput = {
    id?: string
    draftIndex: number
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BlogDraftEditUncheckedCreateWithoutBriefInput = {
    id?: string
    draftIndex: number
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BlogDraftEditCreateOrConnectWithoutBriefInput = {
    where: BlogDraftEditWhereUniqueInput
    create: XOR<BlogDraftEditCreateWithoutBriefInput, BlogDraftEditUncheckedCreateWithoutBriefInput>
  }

  export type BlogDraftEditCreateManyBriefInputEnvelope = {
    data: BlogDraftEditCreateManyBriefInput | BlogDraftEditCreateManyBriefInput[]
    skipDuplicates?: boolean
  }

  export type BlogDraftEditUpsertWithWhereUniqueWithoutBriefInput = {
    where: BlogDraftEditWhereUniqueInput
    update: XOR<BlogDraftEditUpdateWithoutBriefInput, BlogDraftEditUncheckedUpdateWithoutBriefInput>
    create: XOR<BlogDraftEditCreateWithoutBriefInput, BlogDraftEditUncheckedCreateWithoutBriefInput>
  }

  export type BlogDraftEditUpdateWithWhereUniqueWithoutBriefInput = {
    where: BlogDraftEditWhereUniqueInput
    data: XOR<BlogDraftEditUpdateWithoutBriefInput, BlogDraftEditUncheckedUpdateWithoutBriefInput>
  }

  export type BlogDraftEditUpdateManyWithWhereWithoutBriefInput = {
    where: BlogDraftEditScalarWhereInput
    data: XOR<BlogDraftEditUpdateManyMutationInput, BlogDraftEditUncheckedUpdateManyWithoutBriefInput>
  }

  export type BlogDraftEditScalarWhereInput = {
    AND?: BlogDraftEditScalarWhereInput | BlogDraftEditScalarWhereInput[]
    OR?: BlogDraftEditScalarWhereInput[]
    NOT?: BlogDraftEditScalarWhereInput | BlogDraftEditScalarWhereInput[]
    id?: StringFilter<"BlogDraftEdit"> | string
    briefId?: StringFilter<"BlogDraftEdit"> | string
    draftIndex?: IntFilter<"BlogDraftEdit"> | number
    content?: StringFilter<"BlogDraftEdit"> | string
    createdAt?: DateTimeFilter<"BlogDraftEdit"> | Date | string
    updatedAt?: DateTimeFilter<"BlogDraftEdit"> | Date | string
  }

  export type BlogBriefCreateWithoutDraftEditsInput = {
    id?: string
    title?: string | null
    topic: string
    goal?: string
    audience?: string
    userContext?: string | null
    tone?: string | null
    keywords?: BlogBriefCreatekeywordsInput | string[]
    includeServices?: BlogBriefCreateincludeServicesInput | string[]
    constraints?: BlogBriefCreateconstraintsInput | string[]
    depth?: string | null
    backendRequestId?: string | null
    selectedDraftIndex?: number | null
    finalDraftContent?: string | null
    slug?: string | null
    locale?: string
    publishedAt?: Date | string | null
    translationStatus?: string
    translationError?: string | null
    translationTriggerRunId?: string | null
    englishSlug?: string | null
    translationStartedAt?: Date | string | null
    translationCompletedAt?: Date | string | null
    generationError?: string | null
    idea: string
    clientHints?: string | null
    category?: string | null
    status?: $Enums.BlogBriefStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BlogBriefUncheckedCreateWithoutDraftEditsInput = {
    id?: string
    title?: string | null
    topic: string
    goal?: string
    audience?: string
    userContext?: string | null
    tone?: string | null
    keywords?: BlogBriefCreatekeywordsInput | string[]
    includeServices?: BlogBriefCreateincludeServicesInput | string[]
    constraints?: BlogBriefCreateconstraintsInput | string[]
    depth?: string | null
    backendRequestId?: string | null
    selectedDraftIndex?: number | null
    finalDraftContent?: string | null
    slug?: string | null
    locale?: string
    publishedAt?: Date | string | null
    translationStatus?: string
    translationError?: string | null
    translationTriggerRunId?: string | null
    englishSlug?: string | null
    translationStartedAt?: Date | string | null
    translationCompletedAt?: Date | string | null
    generationError?: string | null
    idea: string
    clientHints?: string | null
    category?: string | null
    status?: $Enums.BlogBriefStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BlogBriefCreateOrConnectWithoutDraftEditsInput = {
    where: BlogBriefWhereUniqueInput
    create: XOR<BlogBriefCreateWithoutDraftEditsInput, BlogBriefUncheckedCreateWithoutDraftEditsInput>
  }

  export type BlogBriefUpsertWithoutDraftEditsInput = {
    update: XOR<BlogBriefUpdateWithoutDraftEditsInput, BlogBriefUncheckedUpdateWithoutDraftEditsInput>
    create: XOR<BlogBriefCreateWithoutDraftEditsInput, BlogBriefUncheckedCreateWithoutDraftEditsInput>
    where?: BlogBriefWhereInput
  }

  export type BlogBriefUpdateToOneWithWhereWithoutDraftEditsInput = {
    where?: BlogBriefWhereInput
    data: XOR<BlogBriefUpdateWithoutDraftEditsInput, BlogBriefUncheckedUpdateWithoutDraftEditsInput>
  }

  export type BlogBriefUpdateWithoutDraftEditsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    topic?: StringFieldUpdateOperationsInput | string
    goal?: StringFieldUpdateOperationsInput | string
    audience?: StringFieldUpdateOperationsInput | string
    userContext?: NullableStringFieldUpdateOperationsInput | string | null
    tone?: NullableStringFieldUpdateOperationsInput | string | null
    keywords?: BlogBriefUpdatekeywordsInput | string[]
    includeServices?: BlogBriefUpdateincludeServicesInput | string[]
    constraints?: BlogBriefUpdateconstraintsInput | string[]
    depth?: NullableStringFieldUpdateOperationsInput | string | null
    backendRequestId?: NullableStringFieldUpdateOperationsInput | string | null
    selectedDraftIndex?: NullableIntFieldUpdateOperationsInput | number | null
    finalDraftContent?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    locale?: StringFieldUpdateOperationsInput | string
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    translationStatus?: StringFieldUpdateOperationsInput | string
    translationError?: NullableStringFieldUpdateOperationsInput | string | null
    translationTriggerRunId?: NullableStringFieldUpdateOperationsInput | string | null
    englishSlug?: NullableStringFieldUpdateOperationsInput | string | null
    translationStartedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    translationCompletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    generationError?: NullableStringFieldUpdateOperationsInput | string | null
    idea?: StringFieldUpdateOperationsInput | string
    clientHints?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumBlogBriefStatusFieldUpdateOperationsInput | $Enums.BlogBriefStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlogBriefUncheckedUpdateWithoutDraftEditsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    topic?: StringFieldUpdateOperationsInput | string
    goal?: StringFieldUpdateOperationsInput | string
    audience?: StringFieldUpdateOperationsInput | string
    userContext?: NullableStringFieldUpdateOperationsInput | string | null
    tone?: NullableStringFieldUpdateOperationsInput | string | null
    keywords?: BlogBriefUpdatekeywordsInput | string[]
    includeServices?: BlogBriefUpdateincludeServicesInput | string[]
    constraints?: BlogBriefUpdateconstraintsInput | string[]
    depth?: NullableStringFieldUpdateOperationsInput | string | null
    backendRequestId?: NullableStringFieldUpdateOperationsInput | string | null
    selectedDraftIndex?: NullableIntFieldUpdateOperationsInput | number | null
    finalDraftContent?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    locale?: StringFieldUpdateOperationsInput | string
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    translationStatus?: StringFieldUpdateOperationsInput | string
    translationError?: NullableStringFieldUpdateOperationsInput | string | null
    translationTriggerRunId?: NullableStringFieldUpdateOperationsInput | string | null
    englishSlug?: NullableStringFieldUpdateOperationsInput | string | null
    translationStartedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    translationCompletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    generationError?: NullableStringFieldUpdateOperationsInput | string | null
    idea?: StringFieldUpdateOperationsInput | string
    clientHints?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumBlogBriefStatusFieldUpdateOperationsInput | $Enums.BlogBriefStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateWithoutBlogRunsInput = {
    id: string
    name: string
    email: string
    emailVerified?: boolean
    image?: string | null
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionCreateNestedManyWithoutUserInput
    accounts?: AccountCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutBlogRunsInput = {
    id: string
    name: string
    email: string
    emailVerified?: boolean
    image?: string | null
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutBlogRunsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBlogRunsInput, UserUncheckedCreateWithoutBlogRunsInput>
  }

  export type blogDraftCreateWithoutRunInput = {
    id?: string
    draftIndex: number
    ideaIndex: number
    ideaTitle: string
    mode: string
    format: string
    content: string
    wordCountEstimate: number
    createdAt?: Date | string
    updatedAt?: Date | string
    evaluation?: blogEvaluationCreateNestedOneWithoutDraftInput
  }

  export type blogDraftUncheckedCreateWithoutRunInput = {
    id?: string
    draftIndex: number
    ideaIndex: number
    ideaTitle: string
    mode: string
    format: string
    content: string
    wordCountEstimate: number
    createdAt?: Date | string
    updatedAt?: Date | string
    evaluation?: blogEvaluationUncheckedCreateNestedOneWithoutDraftInput
  }

  export type blogDraftCreateOrConnectWithoutRunInput = {
    where: blogDraftWhereUniqueInput
    create: XOR<blogDraftCreateWithoutRunInput, blogDraftUncheckedCreateWithoutRunInput>
  }

  export type blogDraftCreateManyRunInputEnvelope = {
    data: blogDraftCreateManyRunInput | blogDraftCreateManyRunInput[]
    skipDuplicates?: boolean
  }

  export type blogEvaluationCreateWithoutRunInput = {
    id?: string
    draftIndex: number
    score: number
    approved: boolean
    issues: JsonNullValueInput | InputJsonValue
    improvements: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    draft: blogDraftCreateNestedOneWithoutEvaluationInput
  }

  export type blogEvaluationUncheckedCreateWithoutRunInput = {
    id?: string
    draftId: string
    draftIndex: number
    score: number
    approved: boolean
    issues: JsonNullValueInput | InputJsonValue
    improvements: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type blogEvaluationCreateOrConnectWithoutRunInput = {
    where: blogEvaluationWhereUniqueInput
    create: XOR<blogEvaluationCreateWithoutRunInput, blogEvaluationUncheckedCreateWithoutRunInput>
  }

  export type blogEvaluationCreateManyRunInputEnvelope = {
    data: blogEvaluationCreateManyRunInput | blogEvaluationCreateManyRunInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutBlogRunsInput = {
    update: XOR<UserUpdateWithoutBlogRunsInput, UserUncheckedUpdateWithoutBlogRunsInput>
    create: XOR<UserCreateWithoutBlogRunsInput, UserUncheckedCreateWithoutBlogRunsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutBlogRunsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutBlogRunsInput, UserUncheckedUpdateWithoutBlogRunsInput>
  }

  export type UserUpdateWithoutBlogRunsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUpdateManyWithoutUserNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutBlogRunsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
  }

  export type blogDraftUpsertWithWhereUniqueWithoutRunInput = {
    where: blogDraftWhereUniqueInput
    update: XOR<blogDraftUpdateWithoutRunInput, blogDraftUncheckedUpdateWithoutRunInput>
    create: XOR<blogDraftCreateWithoutRunInput, blogDraftUncheckedCreateWithoutRunInput>
  }

  export type blogDraftUpdateWithWhereUniqueWithoutRunInput = {
    where: blogDraftWhereUniqueInput
    data: XOR<blogDraftUpdateWithoutRunInput, blogDraftUncheckedUpdateWithoutRunInput>
  }

  export type blogDraftUpdateManyWithWhereWithoutRunInput = {
    where: blogDraftScalarWhereInput
    data: XOR<blogDraftUpdateManyMutationInput, blogDraftUncheckedUpdateManyWithoutRunInput>
  }

  export type blogDraftScalarWhereInput = {
    AND?: blogDraftScalarWhereInput | blogDraftScalarWhereInput[]
    OR?: blogDraftScalarWhereInput[]
    NOT?: blogDraftScalarWhereInput | blogDraftScalarWhereInput[]
    id?: StringFilter<"blogDraft"> | string
    runId?: StringFilter<"blogDraft"> | string
    draftIndex?: IntFilter<"blogDraft"> | number
    ideaIndex?: IntFilter<"blogDraft"> | number
    ideaTitle?: StringFilter<"blogDraft"> | string
    mode?: StringFilter<"blogDraft"> | string
    format?: StringFilter<"blogDraft"> | string
    content?: StringFilter<"blogDraft"> | string
    wordCountEstimate?: IntFilter<"blogDraft"> | number
    createdAt?: DateTimeFilter<"blogDraft"> | Date | string
    updatedAt?: DateTimeFilter<"blogDraft"> | Date | string
  }

  export type blogEvaluationUpsertWithWhereUniqueWithoutRunInput = {
    where: blogEvaluationWhereUniqueInput
    update: XOR<blogEvaluationUpdateWithoutRunInput, blogEvaluationUncheckedUpdateWithoutRunInput>
    create: XOR<blogEvaluationCreateWithoutRunInput, blogEvaluationUncheckedCreateWithoutRunInput>
  }

  export type blogEvaluationUpdateWithWhereUniqueWithoutRunInput = {
    where: blogEvaluationWhereUniqueInput
    data: XOR<blogEvaluationUpdateWithoutRunInput, blogEvaluationUncheckedUpdateWithoutRunInput>
  }

  export type blogEvaluationUpdateManyWithWhereWithoutRunInput = {
    where: blogEvaluationScalarWhereInput
    data: XOR<blogEvaluationUpdateManyMutationInput, blogEvaluationUncheckedUpdateManyWithoutRunInput>
  }

  export type blogEvaluationScalarWhereInput = {
    AND?: blogEvaluationScalarWhereInput | blogEvaluationScalarWhereInput[]
    OR?: blogEvaluationScalarWhereInput[]
    NOT?: blogEvaluationScalarWhereInput | blogEvaluationScalarWhereInput[]
    id?: StringFilter<"blogEvaluation"> | string
    runId?: StringFilter<"blogEvaluation"> | string
    draftId?: StringFilter<"blogEvaluation"> | string
    draftIndex?: IntFilter<"blogEvaluation"> | number
    score?: FloatFilter<"blogEvaluation"> | number
    approved?: BoolFilter<"blogEvaluation"> | boolean
    issues?: JsonFilter<"blogEvaluation">
    improvements?: JsonFilter<"blogEvaluation">
    createdAt?: DateTimeFilter<"blogEvaluation"> | Date | string
    updatedAt?: DateTimeFilter<"blogEvaluation"> | Date | string
  }

  export type blogGenerationRunCreateWithoutDraftsInput = {
    id?: string
    requestId: string
    topic: string
    inputPayload?: NullableJsonNullValueInput | InputJsonValue
    status: string
    triggerRunId?: string | null
    retryCount?: number
    workflowStatus?: string | null
    error?: string | null
    durationMs?: number | null
    iterationCount?: number | null
    selectedDraftIndex?: number | null
    finalBlog?: string | null
    finalPolishApplied?: boolean | null
    finalPolishWarning?: string | null
    queuedAt?: Date | string | null
    startedAt?: Date | string | null
    heartbeatAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    completedAt?: Date | string | null
    user?: UserCreateNestedOneWithoutBlogRunsInput
    evaluations?: blogEvaluationCreateNestedManyWithoutRunInput
  }

  export type blogGenerationRunUncheckedCreateWithoutDraftsInput = {
    id?: string
    requestId: string
    userId?: string | null
    topic: string
    inputPayload?: NullableJsonNullValueInput | InputJsonValue
    status: string
    triggerRunId?: string | null
    retryCount?: number
    workflowStatus?: string | null
    error?: string | null
    durationMs?: number | null
    iterationCount?: number | null
    selectedDraftIndex?: number | null
    finalBlog?: string | null
    finalPolishApplied?: boolean | null
    finalPolishWarning?: string | null
    queuedAt?: Date | string | null
    startedAt?: Date | string | null
    heartbeatAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    completedAt?: Date | string | null
    evaluations?: blogEvaluationUncheckedCreateNestedManyWithoutRunInput
  }

  export type blogGenerationRunCreateOrConnectWithoutDraftsInput = {
    where: blogGenerationRunWhereUniqueInput
    create: XOR<blogGenerationRunCreateWithoutDraftsInput, blogGenerationRunUncheckedCreateWithoutDraftsInput>
  }

  export type blogEvaluationCreateWithoutDraftInput = {
    id?: string
    draftIndex: number
    score: number
    approved: boolean
    issues: JsonNullValueInput | InputJsonValue
    improvements: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    run: blogGenerationRunCreateNestedOneWithoutEvaluationsInput
  }

  export type blogEvaluationUncheckedCreateWithoutDraftInput = {
    id?: string
    runId: string
    draftIndex: number
    score: number
    approved: boolean
    issues: JsonNullValueInput | InputJsonValue
    improvements: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type blogEvaluationCreateOrConnectWithoutDraftInput = {
    where: blogEvaluationWhereUniqueInput
    create: XOR<blogEvaluationCreateWithoutDraftInput, blogEvaluationUncheckedCreateWithoutDraftInput>
  }

  export type blogGenerationRunUpsertWithoutDraftsInput = {
    update: XOR<blogGenerationRunUpdateWithoutDraftsInput, blogGenerationRunUncheckedUpdateWithoutDraftsInput>
    create: XOR<blogGenerationRunCreateWithoutDraftsInput, blogGenerationRunUncheckedCreateWithoutDraftsInput>
    where?: blogGenerationRunWhereInput
  }

  export type blogGenerationRunUpdateToOneWithWhereWithoutDraftsInput = {
    where?: blogGenerationRunWhereInput
    data: XOR<blogGenerationRunUpdateWithoutDraftsInput, blogGenerationRunUncheckedUpdateWithoutDraftsInput>
  }

  export type blogGenerationRunUpdateWithoutDraftsInput = {
    id?: StringFieldUpdateOperationsInput | string
    requestId?: StringFieldUpdateOperationsInput | string
    topic?: StringFieldUpdateOperationsInput | string
    inputPayload?: NullableJsonNullValueInput | InputJsonValue
    status?: StringFieldUpdateOperationsInput | string
    triggerRunId?: NullableStringFieldUpdateOperationsInput | string | null
    retryCount?: IntFieldUpdateOperationsInput | number
    workflowStatus?: NullableStringFieldUpdateOperationsInput | string | null
    error?: NullableStringFieldUpdateOperationsInput | string | null
    durationMs?: NullableIntFieldUpdateOperationsInput | number | null
    iterationCount?: NullableIntFieldUpdateOperationsInput | number | null
    selectedDraftIndex?: NullableIntFieldUpdateOperationsInput | number | null
    finalBlog?: NullableStringFieldUpdateOperationsInput | string | null
    finalPolishApplied?: NullableBoolFieldUpdateOperationsInput | boolean | null
    finalPolishWarning?: NullableStringFieldUpdateOperationsInput | string | null
    queuedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    heartbeatAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneWithoutBlogRunsNestedInput
    evaluations?: blogEvaluationUpdateManyWithoutRunNestedInput
  }

  export type blogGenerationRunUncheckedUpdateWithoutDraftsInput = {
    id?: StringFieldUpdateOperationsInput | string
    requestId?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    topic?: StringFieldUpdateOperationsInput | string
    inputPayload?: NullableJsonNullValueInput | InputJsonValue
    status?: StringFieldUpdateOperationsInput | string
    triggerRunId?: NullableStringFieldUpdateOperationsInput | string | null
    retryCount?: IntFieldUpdateOperationsInput | number
    workflowStatus?: NullableStringFieldUpdateOperationsInput | string | null
    error?: NullableStringFieldUpdateOperationsInput | string | null
    durationMs?: NullableIntFieldUpdateOperationsInput | number | null
    iterationCount?: NullableIntFieldUpdateOperationsInput | number | null
    selectedDraftIndex?: NullableIntFieldUpdateOperationsInput | number | null
    finalBlog?: NullableStringFieldUpdateOperationsInput | string | null
    finalPolishApplied?: NullableBoolFieldUpdateOperationsInput | boolean | null
    finalPolishWarning?: NullableStringFieldUpdateOperationsInput | string | null
    queuedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    heartbeatAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    evaluations?: blogEvaluationUncheckedUpdateManyWithoutRunNestedInput
  }

  export type blogEvaluationUpsertWithoutDraftInput = {
    update: XOR<blogEvaluationUpdateWithoutDraftInput, blogEvaluationUncheckedUpdateWithoutDraftInput>
    create: XOR<blogEvaluationCreateWithoutDraftInput, blogEvaluationUncheckedCreateWithoutDraftInput>
    where?: blogEvaluationWhereInput
  }

  export type blogEvaluationUpdateToOneWithWhereWithoutDraftInput = {
    where?: blogEvaluationWhereInput
    data: XOR<blogEvaluationUpdateWithoutDraftInput, blogEvaluationUncheckedUpdateWithoutDraftInput>
  }

  export type blogEvaluationUpdateWithoutDraftInput = {
    id?: StringFieldUpdateOperationsInput | string
    draftIndex?: IntFieldUpdateOperationsInput | number
    score?: FloatFieldUpdateOperationsInput | number
    approved?: BoolFieldUpdateOperationsInput | boolean
    issues?: JsonNullValueInput | InputJsonValue
    improvements?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    run?: blogGenerationRunUpdateOneRequiredWithoutEvaluationsNestedInput
  }

  export type blogEvaluationUncheckedUpdateWithoutDraftInput = {
    id?: StringFieldUpdateOperationsInput | string
    runId?: StringFieldUpdateOperationsInput | string
    draftIndex?: IntFieldUpdateOperationsInput | number
    score?: FloatFieldUpdateOperationsInput | number
    approved?: BoolFieldUpdateOperationsInput | boolean
    issues?: JsonNullValueInput | InputJsonValue
    improvements?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type blogGenerationRunCreateWithoutEvaluationsInput = {
    id?: string
    requestId: string
    topic: string
    inputPayload?: NullableJsonNullValueInput | InputJsonValue
    status: string
    triggerRunId?: string | null
    retryCount?: number
    workflowStatus?: string | null
    error?: string | null
    durationMs?: number | null
    iterationCount?: number | null
    selectedDraftIndex?: number | null
    finalBlog?: string | null
    finalPolishApplied?: boolean | null
    finalPolishWarning?: string | null
    queuedAt?: Date | string | null
    startedAt?: Date | string | null
    heartbeatAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    completedAt?: Date | string | null
    user?: UserCreateNestedOneWithoutBlogRunsInput
    drafts?: blogDraftCreateNestedManyWithoutRunInput
  }

  export type blogGenerationRunUncheckedCreateWithoutEvaluationsInput = {
    id?: string
    requestId: string
    userId?: string | null
    topic: string
    inputPayload?: NullableJsonNullValueInput | InputJsonValue
    status: string
    triggerRunId?: string | null
    retryCount?: number
    workflowStatus?: string | null
    error?: string | null
    durationMs?: number | null
    iterationCount?: number | null
    selectedDraftIndex?: number | null
    finalBlog?: string | null
    finalPolishApplied?: boolean | null
    finalPolishWarning?: string | null
    queuedAt?: Date | string | null
    startedAt?: Date | string | null
    heartbeatAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    completedAt?: Date | string | null
    drafts?: blogDraftUncheckedCreateNestedManyWithoutRunInput
  }

  export type blogGenerationRunCreateOrConnectWithoutEvaluationsInput = {
    where: blogGenerationRunWhereUniqueInput
    create: XOR<blogGenerationRunCreateWithoutEvaluationsInput, blogGenerationRunUncheckedCreateWithoutEvaluationsInput>
  }

  export type blogDraftCreateWithoutEvaluationInput = {
    id?: string
    draftIndex: number
    ideaIndex: number
    ideaTitle: string
    mode: string
    format: string
    content: string
    wordCountEstimate: number
    createdAt?: Date | string
    updatedAt?: Date | string
    run: blogGenerationRunCreateNestedOneWithoutDraftsInput
  }

  export type blogDraftUncheckedCreateWithoutEvaluationInput = {
    id?: string
    runId: string
    draftIndex: number
    ideaIndex: number
    ideaTitle: string
    mode: string
    format: string
    content: string
    wordCountEstimate: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type blogDraftCreateOrConnectWithoutEvaluationInput = {
    where: blogDraftWhereUniqueInput
    create: XOR<blogDraftCreateWithoutEvaluationInput, blogDraftUncheckedCreateWithoutEvaluationInput>
  }

  export type blogGenerationRunUpsertWithoutEvaluationsInput = {
    update: XOR<blogGenerationRunUpdateWithoutEvaluationsInput, blogGenerationRunUncheckedUpdateWithoutEvaluationsInput>
    create: XOR<blogGenerationRunCreateWithoutEvaluationsInput, blogGenerationRunUncheckedCreateWithoutEvaluationsInput>
    where?: blogGenerationRunWhereInput
  }

  export type blogGenerationRunUpdateToOneWithWhereWithoutEvaluationsInput = {
    where?: blogGenerationRunWhereInput
    data: XOR<blogGenerationRunUpdateWithoutEvaluationsInput, blogGenerationRunUncheckedUpdateWithoutEvaluationsInput>
  }

  export type blogGenerationRunUpdateWithoutEvaluationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    requestId?: StringFieldUpdateOperationsInput | string
    topic?: StringFieldUpdateOperationsInput | string
    inputPayload?: NullableJsonNullValueInput | InputJsonValue
    status?: StringFieldUpdateOperationsInput | string
    triggerRunId?: NullableStringFieldUpdateOperationsInput | string | null
    retryCount?: IntFieldUpdateOperationsInput | number
    workflowStatus?: NullableStringFieldUpdateOperationsInput | string | null
    error?: NullableStringFieldUpdateOperationsInput | string | null
    durationMs?: NullableIntFieldUpdateOperationsInput | number | null
    iterationCount?: NullableIntFieldUpdateOperationsInput | number | null
    selectedDraftIndex?: NullableIntFieldUpdateOperationsInput | number | null
    finalBlog?: NullableStringFieldUpdateOperationsInput | string | null
    finalPolishApplied?: NullableBoolFieldUpdateOperationsInput | boolean | null
    finalPolishWarning?: NullableStringFieldUpdateOperationsInput | string | null
    queuedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    heartbeatAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneWithoutBlogRunsNestedInput
    drafts?: blogDraftUpdateManyWithoutRunNestedInput
  }

  export type blogGenerationRunUncheckedUpdateWithoutEvaluationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    requestId?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    topic?: StringFieldUpdateOperationsInput | string
    inputPayload?: NullableJsonNullValueInput | InputJsonValue
    status?: StringFieldUpdateOperationsInput | string
    triggerRunId?: NullableStringFieldUpdateOperationsInput | string | null
    retryCount?: IntFieldUpdateOperationsInput | number
    workflowStatus?: NullableStringFieldUpdateOperationsInput | string | null
    error?: NullableStringFieldUpdateOperationsInput | string | null
    durationMs?: NullableIntFieldUpdateOperationsInput | number | null
    iterationCount?: NullableIntFieldUpdateOperationsInput | number | null
    selectedDraftIndex?: NullableIntFieldUpdateOperationsInput | number | null
    finalBlog?: NullableStringFieldUpdateOperationsInput | string | null
    finalPolishApplied?: NullableBoolFieldUpdateOperationsInput | boolean | null
    finalPolishWarning?: NullableStringFieldUpdateOperationsInput | string | null
    queuedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    heartbeatAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    drafts?: blogDraftUncheckedUpdateManyWithoutRunNestedInput
  }

  export type blogDraftUpsertWithoutEvaluationInput = {
    update: XOR<blogDraftUpdateWithoutEvaluationInput, blogDraftUncheckedUpdateWithoutEvaluationInput>
    create: XOR<blogDraftCreateWithoutEvaluationInput, blogDraftUncheckedCreateWithoutEvaluationInput>
    where?: blogDraftWhereInput
  }

  export type blogDraftUpdateToOneWithWhereWithoutEvaluationInput = {
    where?: blogDraftWhereInput
    data: XOR<blogDraftUpdateWithoutEvaluationInput, blogDraftUncheckedUpdateWithoutEvaluationInput>
  }

  export type blogDraftUpdateWithoutEvaluationInput = {
    id?: StringFieldUpdateOperationsInput | string
    draftIndex?: IntFieldUpdateOperationsInput | number
    ideaIndex?: IntFieldUpdateOperationsInput | number
    ideaTitle?: StringFieldUpdateOperationsInput | string
    mode?: StringFieldUpdateOperationsInput | string
    format?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    wordCountEstimate?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    run?: blogGenerationRunUpdateOneRequiredWithoutDraftsNestedInput
  }

  export type blogDraftUncheckedUpdateWithoutEvaluationInput = {
    id?: StringFieldUpdateOperationsInput | string
    runId?: StringFieldUpdateOperationsInput | string
    draftIndex?: IntFieldUpdateOperationsInput | number
    ideaIndex?: IntFieldUpdateOperationsInput | number
    ideaTitle?: StringFieldUpdateOperationsInput | string
    mode?: StringFieldUpdateOperationsInput | string
    format?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    wordCountEstimate?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateManyUserInput = {
    id: string
    token: string
    expiresAt: Date | string
    ipAddress?: string | null
    userAgent?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountCreateManyUserInput = {
    id: string
    accountId: string
    providerId: string
    accessToken?: string | null
    refreshToken?: string | null
    accessTokenExpiresAt?: Date | string | null
    refreshTokenExpiresAt?: Date | string | null
    scope?: string | null
    idToken?: string | null
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type blogGenerationRunCreateManyUserInput = {
    id?: string
    requestId: string
    topic: string
    inputPayload?: NullableJsonNullValueInput | InputJsonValue
    status: string
    triggerRunId?: string | null
    retryCount?: number
    workflowStatus?: string | null
    error?: string | null
    durationMs?: number | null
    iterationCount?: number | null
    selectedDraftIndex?: number | null
    finalBlog?: string | null
    finalPolishApplied?: boolean | null
    finalPolishWarning?: string | null
    queuedAt?: Date | string | null
    startedAt?: Date | string | null
    heartbeatAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    completedAt?: Date | string | null
  }

  export type SessionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type blogGenerationRunUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    requestId?: StringFieldUpdateOperationsInput | string
    topic?: StringFieldUpdateOperationsInput | string
    inputPayload?: NullableJsonNullValueInput | InputJsonValue
    status?: StringFieldUpdateOperationsInput | string
    triggerRunId?: NullableStringFieldUpdateOperationsInput | string | null
    retryCount?: IntFieldUpdateOperationsInput | number
    workflowStatus?: NullableStringFieldUpdateOperationsInput | string | null
    error?: NullableStringFieldUpdateOperationsInput | string | null
    durationMs?: NullableIntFieldUpdateOperationsInput | number | null
    iterationCount?: NullableIntFieldUpdateOperationsInput | number | null
    selectedDraftIndex?: NullableIntFieldUpdateOperationsInput | number | null
    finalBlog?: NullableStringFieldUpdateOperationsInput | string | null
    finalPolishApplied?: NullableBoolFieldUpdateOperationsInput | boolean | null
    finalPolishWarning?: NullableStringFieldUpdateOperationsInput | string | null
    queuedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    heartbeatAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    drafts?: blogDraftUpdateManyWithoutRunNestedInput
    evaluations?: blogEvaluationUpdateManyWithoutRunNestedInput
  }

  export type blogGenerationRunUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    requestId?: StringFieldUpdateOperationsInput | string
    topic?: StringFieldUpdateOperationsInput | string
    inputPayload?: NullableJsonNullValueInput | InputJsonValue
    status?: StringFieldUpdateOperationsInput | string
    triggerRunId?: NullableStringFieldUpdateOperationsInput | string | null
    retryCount?: IntFieldUpdateOperationsInput | number
    workflowStatus?: NullableStringFieldUpdateOperationsInput | string | null
    error?: NullableStringFieldUpdateOperationsInput | string | null
    durationMs?: NullableIntFieldUpdateOperationsInput | number | null
    iterationCount?: NullableIntFieldUpdateOperationsInput | number | null
    selectedDraftIndex?: NullableIntFieldUpdateOperationsInput | number | null
    finalBlog?: NullableStringFieldUpdateOperationsInput | string | null
    finalPolishApplied?: NullableBoolFieldUpdateOperationsInput | boolean | null
    finalPolishWarning?: NullableStringFieldUpdateOperationsInput | string | null
    queuedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    heartbeatAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    drafts?: blogDraftUncheckedUpdateManyWithoutRunNestedInput
    evaluations?: blogEvaluationUncheckedUpdateManyWithoutRunNestedInput
  }

  export type blogGenerationRunUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    requestId?: StringFieldUpdateOperationsInput | string
    topic?: StringFieldUpdateOperationsInput | string
    inputPayload?: NullableJsonNullValueInput | InputJsonValue
    status?: StringFieldUpdateOperationsInput | string
    triggerRunId?: NullableStringFieldUpdateOperationsInput | string | null
    retryCount?: IntFieldUpdateOperationsInput | number
    workflowStatus?: NullableStringFieldUpdateOperationsInput | string | null
    error?: NullableStringFieldUpdateOperationsInput | string | null
    durationMs?: NullableIntFieldUpdateOperationsInput | number | null
    iterationCount?: NullableIntFieldUpdateOperationsInput | number | null
    selectedDraftIndex?: NullableIntFieldUpdateOperationsInput | number | null
    finalBlog?: NullableStringFieldUpdateOperationsInput | string | null
    finalPolishApplied?: NullableBoolFieldUpdateOperationsInput | boolean | null
    finalPolishWarning?: NullableStringFieldUpdateOperationsInput | string | null
    queuedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    heartbeatAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AiApiHitCreateManyConversationInput = {
    id?: string
    route: string
    createdAt?: Date | string
  }

  export type AiApiHitUpdateWithoutConversationInput = {
    id?: StringFieldUpdateOperationsInput | string
    route?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AiApiHitUncheckedUpdateWithoutConversationInput = {
    id?: StringFieldUpdateOperationsInput | string
    route?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AiApiHitUncheckedUpdateManyWithoutConversationInput = {
    id?: StringFieldUpdateOperationsInput | string
    route?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlogDraftEditCreateManyBriefInput = {
    id?: string
    draftIndex: number
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BlogDraftEditUpdateWithoutBriefInput = {
    id?: StringFieldUpdateOperationsInput | string
    draftIndex?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlogDraftEditUncheckedUpdateWithoutBriefInput = {
    id?: StringFieldUpdateOperationsInput | string
    draftIndex?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlogDraftEditUncheckedUpdateManyWithoutBriefInput = {
    id?: StringFieldUpdateOperationsInput | string
    draftIndex?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type blogDraftCreateManyRunInput = {
    id?: string
    draftIndex: number
    ideaIndex: number
    ideaTitle: string
    mode: string
    format: string
    content: string
    wordCountEstimate: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type blogEvaluationCreateManyRunInput = {
    id?: string
    draftId: string
    draftIndex: number
    score: number
    approved: boolean
    issues: JsonNullValueInput | InputJsonValue
    improvements: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type blogDraftUpdateWithoutRunInput = {
    id?: StringFieldUpdateOperationsInput | string
    draftIndex?: IntFieldUpdateOperationsInput | number
    ideaIndex?: IntFieldUpdateOperationsInput | number
    ideaTitle?: StringFieldUpdateOperationsInput | string
    mode?: StringFieldUpdateOperationsInput | string
    format?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    wordCountEstimate?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    evaluation?: blogEvaluationUpdateOneWithoutDraftNestedInput
  }

  export type blogDraftUncheckedUpdateWithoutRunInput = {
    id?: StringFieldUpdateOperationsInput | string
    draftIndex?: IntFieldUpdateOperationsInput | number
    ideaIndex?: IntFieldUpdateOperationsInput | number
    ideaTitle?: StringFieldUpdateOperationsInput | string
    mode?: StringFieldUpdateOperationsInput | string
    format?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    wordCountEstimate?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    evaluation?: blogEvaluationUncheckedUpdateOneWithoutDraftNestedInput
  }

  export type blogDraftUncheckedUpdateManyWithoutRunInput = {
    id?: StringFieldUpdateOperationsInput | string
    draftIndex?: IntFieldUpdateOperationsInput | number
    ideaIndex?: IntFieldUpdateOperationsInput | number
    ideaTitle?: StringFieldUpdateOperationsInput | string
    mode?: StringFieldUpdateOperationsInput | string
    format?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    wordCountEstimate?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type blogEvaluationUpdateWithoutRunInput = {
    id?: StringFieldUpdateOperationsInput | string
    draftIndex?: IntFieldUpdateOperationsInput | number
    score?: FloatFieldUpdateOperationsInput | number
    approved?: BoolFieldUpdateOperationsInput | boolean
    issues?: JsonNullValueInput | InputJsonValue
    improvements?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    draft?: blogDraftUpdateOneRequiredWithoutEvaluationNestedInput
  }

  export type blogEvaluationUncheckedUpdateWithoutRunInput = {
    id?: StringFieldUpdateOperationsInput | string
    draftId?: StringFieldUpdateOperationsInput | string
    draftIndex?: IntFieldUpdateOperationsInput | number
    score?: FloatFieldUpdateOperationsInput | number
    approved?: BoolFieldUpdateOperationsInput | boolean
    issues?: JsonNullValueInput | InputJsonValue
    improvements?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type blogEvaluationUncheckedUpdateManyWithoutRunInput = {
    id?: StringFieldUpdateOperationsInput | string
    draftId?: StringFieldUpdateOperationsInput | string
    draftIndex?: IntFieldUpdateOperationsInput | number
    score?: FloatFieldUpdateOperationsInput | number
    approved?: BoolFieldUpdateOperationsInput | boolean
    issues?: JsonNullValueInput | InputJsonValue
    improvements?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}