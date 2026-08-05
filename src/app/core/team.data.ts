import { Worker } from './models/worker';

/** Company-wide contact address. */
const CONTACT_EMAIL = 'nile.tech.africa.development@gmail.com';

/**
 * The team. No backend — this is the single source of truth, served from memory.
 * History is ordered most-recent first so the timeline reads top (now) to bottom (start).
 */
export const TEAM: readonly Worker[] = [
  {
    id: 'dominic-atari-obiala',
    name: 'Dominic Atari Obiala',
    role: 'Founder · Software Architect',
    tagline: 'From a spreadsheet in Kakuma to software architecture.',
    location: 'Lincoln, NE, USA',
    initials: 'DO',
    image: 'img/dominic1.jpg',
    accent: 'violet',
    bio: "Dominic's path into software started with a spreadsheet in a refugee camp. From Kakuma to Lincoln, Nebraska, he went from tracking a food business in Excel to shipping real products — and now leads architecture at Nile Tech, designing the IDesign way in C# and building across Java, Angular, and Ionic.",
    focus: ['C#', 'IDesign method', 'Java', 'HTML / CSS / JS', 'TypeScript', 'Angular', 'Ionic'],
    email: CONTACT_EMAIL,
    links: [
      { label: 'GitHub', href: 'https://github.com/' },
      { label: 'LinkedIn', href: 'https://www.linkedin.com/' },
    ],
    history: [
      {
        year: '2026 – now',
        title: 'Founder & Software Architect',
        org: 'Nile Tech Solutions',
        description:
          'Designs systems for a living now — the same instinct that started with a spreadsheet in Kakuma, applied with the IDesign method in C# and built across Java, Angular, and Ionic.',
        kind: 'milestone',
        current: true,
      },
      {
        year: '2026',
        title: 'Pathways Program Graduate',
        org: "Doane University · partner with: Don't Panic Labs",
        description:
          'Twenty weeks that turned a self-taught builder into an engineer. He showed up, did the work, and walked out ready to make a team better.',
        kind: 'education',
      },
      {
        year: '2025',
        title: 'Building Anchovy',
        org: 'TMCO',
        description:
          "Diane, TMCO's CEO, backed him to join the development team in Anchovy — a mobile app for saving and organizing recipes. His first real product, made for real people.",
        kind: 'role',
      },
      {
        year: '2024',
        title: 'Java & Spring Boot',
        org: 'Southeast Community College · Lincoln, NE',
        description:
          'Enrolled at SCC and got serious about software — learning Java and writing his first Spring Boot applications.',
        kind: 'education',
      },
      {
        year: '2023',
        title: 'A fresh start in the United States',
        org: 'Lincoln, Nebraska',
        description:
          'Arriving in the US, he made a decision: no more working around problems in a spreadsheet. It was time to build real software.',
        kind: 'milestone',
      },
      {
        year: 'Until 2023',
        title: 'Bamba Chakula shop owner',
        org: 'Kakuma Refugee Camp, Kenya',
        description:
          'Ran a Bamba Chakula food business in the camp. As customer records piled up, he taught himself to keep track of it all in Microsoft Excel — the first time technology solved a real problem for him. The spark.',
        kind: 'milestone',
      },
    ],
  },
  {
    id: 'george-isaac-gum',
    name: 'George Isaac Gum',
    role: 'Co-founder · Business & Growth',
    tagline: 'Turns hardship into opportunity — for whole communities.',
    location: 'Juba, South Sudan',
    initials: 'GG',
    image: 'img/George.jpeg',
    accent: 'teal',
    bio: 'George is a South Sudanese entrepreneur and community leader — Founder and CEO of Gradaid, a microfinance initiative backing university students and young entrepreneurs across South Sudan. His journey began in Kakuma Refugee Camp, where he turned hardship into organizations that empower others through finance, education, and enterprise. He brings that same builder\'s instinct to Nile Tech\'s growth.',
    focus: [
      'Entrepreneurship',
      'Microfinance',
      'Partnerships',
      'Community mobilization',
      'Youth development',
      'Business operations',
    ],
    email: CONTACT_EMAIL,
    links: [
      { label: 'LinkedIn', href: 'https://www.linkedin.com/' },
      { label: 'X', href: 'https://x.com/' },
    ],
    history: [
      {
        year: 'Now',
        title: 'Co-founder & Business Lead',
        org: 'Nile Tech Solutions',
        description:
          "Brings an entrepreneur's instinct to the studio — partnerships, positioning, and turning engineering work into a business clients invest in.",
        kind: 'milestone',
        current: true,
      },
      {
        year: 'Now',
        title: 'Founder & CEO',
        org: 'Gradaid Organization',
        description:
          'Leads a youth-focused microfinance initiative expanding financial inclusion — loans, business support, and entrepreneurial opportunities for university students and young entrepreneurs across South Sudan.',
        kind: 'role',
      },
      {
        year: 'Now',
        title: 'Senior Advisor',
        org: 'South Sudan National Youth Union',
        description:
          'Advises on youth development and national engagement, and represents South Sudanese youth at national and international conferences.',
        kind: 'role',
      },
      {
        year: 'Now',
        title: 'Building Telesuk',
        org: 'Telesuk',
        description:
          "Building South Sudan's most trusted digital marketplace — verified vehicles, property, and services on one platform, run on customer-first and zero-fraud policies.",
        kind: 'milestone',
      },
      {
        year: 'Earlier',
        title: 'Keeping Juba Clean and Green',
        org: 'Gradaid Organization',
        description:
          'Mobilized more than 300 young volunteers for city clean-ups and tree planting — recognized by SSBC and by the Ministries of Youth and Environment, Juba City Council, and the Council of States.',
        kind: 'milestone',
      },
      {
        year: 'Earlier',
        title: 'Diploma in Software Engineering (Mobile Application Design)',
        org: 'RVIS Institution',
        description:
          'Paired his business education with the technology to build digital products himself.',
        kind: 'education',
      },
      {
        year: 'Earlier',
        title: 'Bachelor of Business Administration',
        org: 'Mount Kenya University',
        description: 'Where the business thinking behind everything since took shape.',
        kind: 'education',
      },
      {
        year: 'The start',
        title: 'Where it began',
        org: 'Kakuma Refugee Camp, Kenya',
        description:
          'Turned personal hardship into opportunity — building his first organizations around education, sports, business development, and leadership, and the resilience that still drives him.',
        kind: 'milestone',
      },
      {
        year: '1999',
        title: 'Born',
        org: 'South Sudan',
        description: 'Born on 28 December 1999 — the beginning of the throughline.',
        kind: 'milestone',
      },
    ],
  },
  {
    id: 'amara-nwosu',
    name: 'Amara Nwosu',
    role: 'Senior Backend Engineer',
    tagline: 'Keeps the systems underneath honest.',
    location: 'Remote · Lagos, NG',
    initials: 'AN',
    image: 'img/Amara.jpg',
    accent: 'violet',
    bio: 'Amara owns the services and schemas that everything else depends on. She likes the unglamorous work — migrations, indexes, and error paths — because that is where products quietly succeed or fail.',
    focus: ['Node.js', 'Python', 'Postgres', 'APIs', 'Observability'],
    email: CONTACT_EMAIL,
    links: [
      { label: 'GitHub', href: 'https://github.com/' },
      { label: 'LinkedIn', href: 'https://www.linkedin.com/' },
    ],
    history: [
      {
        year: '2022 – now',
        title: 'Senior Backend Engineer',
        org: 'Nile Tech Solutions',
        description:
          'Builds and hardens the platform layer across client projects — the APIs, jobs, and data models that carry the load.',
        kind: 'role',
        current: true,
      },
      {
        year: '2019 – 2022',
        title: 'Backend Engineer',
        org: 'Paystack',
        description:
          'Shipped payments and reconciliation services at scale, where correctness and uptime were the whole job.',
        kind: 'role',
      },
      {
        year: '2017 – 2019',
        title: 'Software Engineer',
        org: 'Andela',
        description:
          'Worked across a rotation of client teams — a fast way to learn how many different ways a codebase can go wrong.',
        kind: 'role',
      },
      {
        year: '2017',
        title: 'B.Sc. Software Engineering',
        org: 'University of Lagos',
        description: 'Started on the backend and never really left.',
        kind: 'education',
      },
    ],
  },
];
