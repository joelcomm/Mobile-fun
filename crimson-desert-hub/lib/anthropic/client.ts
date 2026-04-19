import Anthropic from "@anthropic-ai/sdk";

let cached: Anthropic | null = null;

export function anthropic(): Anthropic {
  if (cached) return cached;
  if (!process.env.ANTHROPIC_API_KEY) {
    throw new Error("ANTHROPIC_API_KEY is not set");
  }
  cached = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });
  return cached;
}

export const MODELS = {
  sonnet: "claude-sonnet-4-6",
  haiku: "claude-haiku-4-5",
} as const;

export async function askJSON<T>(opts: {
  system: string;
  user: string;
  model?: keyof typeof MODELS;
  maxTokens?: number;
}): Promise<T> {
  const model = MODELS[opts.model ?? "sonnet"];
  const res = await anthropic().messages.create({
    model,
    max_tokens: opts.maxTokens ?? 4096,
    system: opts.system,
    messages: [{ role: "user", content: opts.user }],
  });
  const text = res.content
    .map((c) => (c.type === "text" ? c.text : ""))
    .join("\n")
    .trim();
  const jsonStart = text.indexOf("{");
  const jsonEnd = text.lastIndexOf("}");
  if (jsonStart === -1 || jsonEnd === -1) {
    throw new Error(`No JSON found in model response: ${text.slice(0, 200)}`);
  }
  const payload = text.slice(jsonStart, jsonEnd + 1);
  return JSON.parse(payload) as T;
}
