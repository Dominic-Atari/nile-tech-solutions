/** A shipped, live project shown in the Work section. */
export interface Project {
  /** Stable key / slug. */
  id: string;
  name: string;
  /** One-line summary shown on the card. */
  summary: string;
  /** Tech stack tags. */
  tech: string[];
  /** Live, deployed URL — opens in a new tab. */
  liveUrl: string;
  /** Public source repository. */
  repoUrl?: string;
  /** Optional caveat shown in muted text, e.g. an upstream API limitation. */
  note?: string;
  /** Biases the card accent, matching the team gradient system. */
  accent: 'violet' | 'teal';
}
