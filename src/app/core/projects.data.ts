import { Project } from './models/project';

/**
 * Shipped work shown on the home page. Every entry is deployed and live —
 * real URLs, no placeholders.
 */
export const PROJECTS: readonly Project[] = [
  {
    id: 'met-museum-explorer',
    name: 'Met Museum Explorer',
    summary:
      'Browses the Metropolitan Museum of Art Open Access collection — rotating exhibitions, artwork detail and measurements, and search by culture, straight from the public API.',
    tech: ['TypeScript', 'Met Museum API', 'GitHub Pages'],
    liveUrl: 'https://dominic-atari.github.io/met-museum-explorer/',
    repoUrl: 'https://github.com/Dominic-Atari/met-museum-explorer',
    accent: 'violet',
  },
  {
    id: 'reddit-api-viewer',
    name: 'Reddit API Viewer',
    summary:
      'Pulls recent posts from a chosen subreddit and surfaces politics headlines, degrading gracefully when the upstream API declines an anonymous request.',
    tech: ['TypeScript', 'Reddit API', 'GitHub Pages'],
    liveUrl: 'https://dominic-atari.github.io/reddit-api-viewer/',
    repoUrl: 'https://github.com/Dominic-Atari/reddit-api-viewer',
    note: 'Reddit now requires OAuth for anonymous browser access, so live data may be rate-limited or blocked.',
    accent: 'teal',
  },
];
