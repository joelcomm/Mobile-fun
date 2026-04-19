import { askJSON } from "@/lib/anthropic/client";
import { RELEVANCE_CLASSIFIER_PROMPT } from "@/lib/anthropic/prompts";
import type { RelevanceCategory } from "@/lib/supabase/types";

export interface RelevanceResult {
  relevant: boolean;
  relevance_score: number;
  category: RelevanceCategory;
  signal_strength: "high" | "medium" | "low";
  reasoning: string;
}

export async function classifyRelevance(input: {
  title: string;
  url: string;
  snippet: string;
}): Promise<RelevanceResult> {
  const user = `TITLE: ${input.title}
URL: ${input.url}
SNIPPET: ${input.snippet.slice(0, 800)}`;
  return askJSON<RelevanceResult>({
    system: RELEVANCE_CLASSIFIER_PROMPT,
    user,
    model: "haiku",
    maxTokens: 500,
  });
}
