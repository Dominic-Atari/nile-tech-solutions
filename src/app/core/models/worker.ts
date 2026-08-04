/** A single point on a worker's career throughline. */
export type HistoryKind = 'education' | 'role' | 'milestone';

export interface HistoryEntry {
  /** Displayed on the timeline axis, e.g. "2023" or "2020 – 2023". */
  year: string;
  /** Role, degree, or achievement. */
  title: string;
  /** Company or institution. */
  org: string;
  /** One or two sentences on what happened here. */
  description: string;
  kind: HistoryKind;
  /** Marks the "now" node — the top of the line. */
  current?: boolean;
}

export interface WorkerLink {
  label: string;
  href: string;
}

export interface Worker {
  /** URL slug, e.g. "mara-lindqvist". */
  id: string;
  name: string;
  role: string;
  /** Short line shown next to the name. */
  tagline: string;
  location: string;
  /** Monogram shown in the gradient avatar when there is no photo. */
  initials: string;
  /**
   * Optional profile photo. Use a base-href-relative path (no leading slash),
   * e.g. `img/dominic.jpg`, so it resolves on both root and sub-path hosting.
   * When absent, the initials monogram is shown instead.
   */
  image?: string;
  bio: string;
  /** Skill / focus tags. */
  focus: string[];
  email: string;
  links: WorkerLink[];
  /** Biases the duotone gradient toward one end for a subtle per-person identity. */
  accent: 'violet' | 'teal';
  /** Career history, ordered most-recent first. */
  history: HistoryEntry[];
}
