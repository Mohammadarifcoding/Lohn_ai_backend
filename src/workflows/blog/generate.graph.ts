import { END, START, StateGraph } from "@langchain/langgraph";
import type { BlogInput } from "../../types/blog/blog.js";
import {
  BlogAgentStateSchema,
  type BlogAgentState,
} from "../../types/blog/workflow.js";
import requirmentAnalysisAgent from "../../agents/requirment_analysis.js";
import researchPlannerAgent from "../../agents/research_planner.js";
import researchPlanValidatorAgent from "../../agents/research_plan_validator.js";
import researchAgent from "../../agents/research_agent.js";
import ideaGenerationAgent from "../../agents/idea_generation.js";
import writingAgent from "../../agents/writing_agent.js";
import evaluationAgent from "../../agents/evaluation_agent.js";
import finalEvaluationAgent from "../../agents/final_evaluation_agent.js";

// The research pipeline is intentionally split into planning -> validation -> retrieval.
// This order prevents expensive web search from running on low-quality or duplicate queries.
const generateBlogGraph = new StateGraph(BlogAgentStateSchema)
  .addNode("requirement_analysis", requirmentAnalysisAgent)
  .addNode("research_planner", researchPlannerAgent)
  .addNode("research_plan_validator", researchPlanValidatorAgent)
  .addNode("research_retrieval", researchAgent)
  .addNode("idea_generation", ideaGenerationAgent)
  .addNode("writing_agent", writingAgent)
  .addNode("evaluation_agent", evaluationAgent)
  .addNode("final_evaluation_agent", finalEvaluationAgent)
  .addEdge(START, "requirement_analysis")
  .addEdge("requirement_analysis", "research_planner")
  .addEdge("research_planner", "research_plan_validator")
  .addEdge("research_plan_validator", "research_retrieval")
  .addEdge("research_retrieval", "idea_generation")
  .addEdge("idea_generation", "writing_agent")
  .addEdge("writing_agent", "evaluation_agent")
  .addEdge("evaluation_agent", "final_evaluation_agent")
  .addEdge("final_evaluation_agent", END)
  .compile({
    name: "blog_generate_v6",
    description:
      "Requirement analysis + research + idea + writing + evaluation + final decision workflow",
  });

export async function runGenerateBlogGraph(
  userInput: BlogInput
): Promise<BlogAgentState> {
  const initialState: BlogAgentState = {
    user_input: userInput,
    iteration_count: 0,
    max_iterations: 6,
    logs: [],
  };

  const result = await generateBlogGraph.invoke(initialState);
  return BlogAgentStateSchema.parse(result);
}
