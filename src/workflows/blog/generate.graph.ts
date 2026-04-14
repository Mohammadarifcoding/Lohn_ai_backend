import { END, START, StateGraph } from "@langchain/langgraph";
import type { BlogInput } from "../../types/blog/blog.js";
import {
  BlogAgentStateSchema,
  type BlogAgentState,
} from "../../types/blog/workflow.js";
import requirmentAnalysisAgent from "../../agents/requirment_analysis.js";
import researchPlannerAgent from "../../agents/research_planner.js";

const generateBlogGraph = new StateGraph(BlogAgentStateSchema)
  .addNode("requirement_analysis", requirmentAnalysisAgent)
  .addNode("research_planner", researchPlannerAgent)
  .addEdge(START, "requirement_analysis")
  .addEdge("requirement_analysis", "research_planner")
  .addEdge("research_planner", END)
  .compile({
    name: "blog_generate_v1",
    description: "Requirement analysis + research planner workflow",
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
