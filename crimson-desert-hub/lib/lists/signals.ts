export interface SignalDefinition {
  key: string;
  description: string;
  trigger: string;
  severity: "low" | "medium" | "high" | "critical";
  meaning: string;
  communicate: string;
}

export const SIGNAL_DEFINITIONS: SignalDefinition[] = [
  {
    key: "steam_player_spike",
    description: "Steam player count change",
    trigger: "> 30% change vs 7-day baseline in a 3-hour window",
    severity: "medium",
    meaning:
      "Either a patch, a major event, or a viral moment. Investigate before alerting.",
    communicate: "Internal dashboard first; external only with context.",
  },
  {
    key: "patch_dropped",
    description: "Official patch notes published",
    trigger: "New official RSS or Steam news item classified as 'patch'",
    severity: "high",
    meaning:
      "The community wants immediate, accurate analysis. Prioritize patch-analysis job.",
    communicate: "Homepage banner + push to subscribers once analysis is ready.",
  },
  {
    key: "dev_communication",
    description: "Pearl Abyss dev or CM public post",
    trigger: "New post from official or semi-official handles",
    severity: "high",
    meaning:
      "Often signals upcoming changes. Korean posts get translated within the hour.",
    communicate: "Homepage top-stories; flag Korean-origin posts.",
  },
  {
    key: "subreddit_velocity_spike",
    description: "Subreddit post velocity spike",
    trigger: "Post rate > 3x trailing 24-hour average for > 1 hour",
    severity: "medium",
    meaning:
      "Something happened. Usually drama, exploit discovery, or a balance reaction.",
    communicate: "Investigate before posting. Editorial voice required.",
  },
  {
    key: "korean_sentiment_shift",
    description: "Korean community sentiment shift",
    trigger:
      "Translated Korean community posts show coordinated criticism or praise",
    severity: "medium",
    meaning:
      "Korean community reactions often lead English community reactions by 24-48h.",
    communicate: "Briefing-style post with translated excerpts.",
  },
  {
    key: "build_meta_consolidation",
    description: "Build meta consolidating or opening up",
    trigger:
      "Top creator build videos converge on or diverge from a single setup",
    severity: "low",
    meaning: "Meta shift. Update build tier lists.",
    communicate: "Scheduled build tier list update; no push alert.",
  },
  {
    key: "nexus_mod_release",
    description: "Major Nexus Mods release",
    trigger: "High-download or flagged mod goes live",
    severity: "low",
    meaning: "Community priorities signal (e.g., character creation mods).",
    communicate: "Weekly roundup only.",
  },
];
