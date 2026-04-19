import { askJSON } from "@/lib/anthropic/client";
import { KOREAN_TRANSLATION_PROMPT } from "@/lib/anthropic/prompts";

export interface Translation {
  translation: string;
  nuance_flags: { korean: string; english: string; note: string }[];
  confidence: "high" | "medium" | "low";
}

export async function translateKorean(koreanText: string): Promise<Translation> {
  return askJSON<Translation>({
    system: KOREAN_TRANSLATION_PROMPT,
    user: koreanText,
    model: "sonnet",
    maxTokens: 3000,
  });
}
