import { Worker } from './models/worker';

/**
 * The team. No backend — this is the single source of truth, served from memory.
 * History is ordered most-recent first so the timeline reads top (now) to bottom (start).
 */
export const TEAM: readonly Worker[] = [
  {
    id: 'mara-lindqvist',
    name: 'Mara Lindqvist',
    role: 'Founder · Principal Engineer',
    tagline: 'Turns tangled systems into straight lines.',
    location: 'Stockholm, SE',
    initials: 'ML',
    accent: 'violet',
    bio: 'Mara builds the parts of a product that have to stay standing at 3am — payment flows, data pipelines, the schema everything else leans on. She started Line to do that work without the layers in between.',
    focus: ['Distributed systems', 'TypeScript', 'Go', 'Postgres', 'Platform design'],
    email: 'mara@linetech.solutions',
    links: [
      { label: 'GitHub', href: 'https://github.com/' },
      { label: 'LinkedIn', href: 'https://www.linkedin.com/' },
    ],
    history: [
      {
        year: '2023 – now',
        title: 'Founder & Principal Engineer',
        org: 'Line Tech Solutions',
        description: 'Founded the studio to ship production systems for a handful of clients at a time, end to end, with no hand-offs.',
        kind: 'milestone',
        current: true,
      },
      {
        year: '2020 – 2023',
        title: 'Staff Engineer',
        org: 'Northgate Payments',
        description: 'Owned the ledger and settlement platform through a 30× volume increase. Led the migration off a monolith without a single day of downtime.',
        kind: 'role',
      },
      {
        year: '2017 – 2020',
        title: 'Senior Backend Engineer',
        org: 'Spotify',
        description: 'Worked on the data platform behind personalization — the pipelines that turned billions of plays into something the product could read in milliseconds.',
        kind: 'role',
      },
      {
        year: '2014 – 2017',
        title: 'Software Engineer',
        org: 'Klarna',
        description: 'Cut her teeth on risk and checkout services where a wrong number meant real money. Learned to write code that fails loudly, not quietly.',
        kind: 'role',
      },
      {
        year: '2014',
        title: 'M.Sc. Computer Science',
        org: 'KTH Royal Institute of Technology',
        description: 'Thesis on fault-tolerant stream processing. First line of the throughline.',
        kind: 'education',
      },
    ],
  },
  {
    id: 'diego-ferrante',
    name: 'Diego Ferrante',
    role: 'Co-founder · Design Engineer',
    tagline: 'Lives on the line between design and code.',
    location: 'Lisbon, PT',
    initials: 'DF',
    accent: 'teal',
    bio: 'Diego makes the product you actually touch — interfaces that feel obvious in the hand and hold up under real use. He treats a design system like an API: small, consistent, and hard to misuse.',
    focus: ['Design systems', 'Angular', 'Motion', 'Accessibility', 'Prototyping'],
    email: 'diego@linetech.solutions',
    links: [
      { label: 'GitHub', href: 'https://github.com/' },
      { label: 'Dribbble', href: 'https://dribbble.com/' },
    ],
    history: [
      {
        year: '2023 – now',
        title: 'Co-founder & Design Engineer',
        org: 'Line Tech Solutions',
        description: 'Leads everything the client sees — from the first prototype to the shipped front end — and keeps the two in sync.',
        kind: 'milestone',
        current: true,
      },
      {
        year: '2021 – 2023',
        title: 'Design Systems Lead',
        org: 'Cobalt Health',
        description: 'Built the component library and tokens used across six product teams. Shipped a full theming layer and cut UI review time roughly in half.',
        kind: 'role',
      },
      {
        year: '2018 – 2021',
        title: 'Product Engineer',
        org: 'Fathom (SaaS)',
        description: 'The third engineer. Owned the front end from a blank repo to a product used daily by thousands of teams.',
        kind: 'role',
      },
      {
        year: '2015 – 2018',
        title: 'Frontend Developer',
        org: 'Studio Verso',
        description: 'Built interactive sites for brands who cared about the last 10%. Learned that motion is a language, not decoration.',
        kind: 'role',
      },
      {
        year: '2015',
        title: 'B.A. Interaction Design',
        org: 'University of the Arts London',
        description: 'Where the design half of design engineer came from.',
        kind: 'education',
      },
    ],
  },
];
