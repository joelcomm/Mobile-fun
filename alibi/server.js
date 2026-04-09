import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import Anthropic from '@anthropic-ai/sdk';

const app = express();
app.use(cors());
app.use(express.json());

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

app.post('/api/puzzle', async (req, res) => {
  try {
    const message = await client.messages.create({
      model: 'claude-sonnet-4-20250514',
      max_tokens: 1024,
      system: 'You are a puzzle generator. Respond ONLY with raw valid JSON — no markdown, no backticks, no explanation.',
      messages: [
        {
          role: 'user',
          content: `Generate one Alibi puzzle. Rules:
- Exactly 9 words (common English nouns/adjectives, no proper nouns)
- 8 words each belong to exactly ONE category
- 1 word is the CULPRIT — it belongs to ALL categories
- Use exactly 3 or 4 categories, each with exactly 3 members (2 regulars + culprit)
- Categories based on meaning only — not spelling, letters, or wordplay
- Culprit should feel like a satisfying "aha" not obvious, not a stretch

Return this exact JSON shape:
{
  "words": ["WORD1",...,"WORD9"],
  "culprit": "WORDX",
  "categories": [
    { "name": "Category label", "members": ["WORD1","WORD2","CULPRIT"] }
  ],
  "culprit_explanation": "One sentence why the culprit fits every category."
}`
        }
      ]
    });

    const text = message.content[0].text;
    const puzzle = JSON.parse(text);
    res.json(puzzle);
  } catch (err) {
    console.error('Puzzle generation error:', err.message);
    res.status(500).json({ error: 'Failed to generate puzzle' });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Alibi API server running on port ${PORT}`);
});
