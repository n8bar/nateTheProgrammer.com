// Case studies for /work. In-repo (not Ghost): a small, curated, rarely-changing
// proof set where full control of the layout matters. See docs/DesignSpec.md.

export type CaseLink = { label: string; href: string; external?: boolean };

export type CaseStudy = {
  slug: string;
  title: string;
  tagline: string;
  context: string;
  status: string;
  problem: string;
  built: string;
  outcome: string;
  role: string;
  tech: string[];
  links?: CaseLink[];
  image?: { src: string; alt: string };
  order: number;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: 'colorado-city-fuel',
    title: 'Municipal Fuel Metering & Billing',
    tagline:
      'On a fuel program billing six figures a month, found and fixed a recurring error that was giving away about a day’s fuel every month.',
    context: 'Town of Colorado City, AZ — Public Works',
    status: 'In production 2021–2025 (legacy system, largely retired 2025)',
    problem:
      'The town’s Public Works department metered and billed fuel for multiple government fleets — police, fire, the school district, and its own crews. The system that ran it had been inherited half-built, was undocumented, and was quietly losing money.',
    built:
      'I took ownership of an undocumented codebase and brought it to a dependable production state: finished and customized the billing and reporting, repaired access control (department-leader roles and PIN handling), and consolidated two MSSQL servers that were awkwardly replicating to each other — one ingesting pump readings, the other running limited billing reports — into one workable setup. Along the way I discovered and fixed a recurring billing error that had been costing the town money.',
    outcome:
      'Served as the fuel metering-and-billing system of record across multiple municipal fleets in two cities (Colorado City, AZ and Hildale, UT). On a program billing six figures a month, the fix stopped a recurring error that had effectively been giving away about a day’s fuel each month.',
    role: 'Sole developer — inherited the system in 2021 and owned it end to end.',
    tech: ['PHP', 'MSSQL', 'Apache', 'Windows stack'],
    image: {
      src: '/work/colorado-city-fuel.png',
      alt: 'Colorado City Fuel Distribution Manager — diesel and gasoline tank-level gauges',
    },
    order: 1,
  },
  {
    slug: 'ticker-automotive',
    title: 'Ticker Automotive — Rebuild & Migration',
    tagline:
      'Rebuilt an auto shop’s website and moved it off a locked-in site builder onto hosting they own — saving about $10k a year.',
    context: 'Ticker Automotive (client)',
    status: 'Live in production',
    problem:
      'The shop was locked into a proprietary hosted site-builder: limited control over their own site, and a hefty recurring cost.',
    built:
      'I rebuilt the full multi-page site — services (tires, oil change, AC, wheel alignment), appointments, reviews, careers, and contact — and migrated it off the builder onto hosting the client owns and controls. I build and maintain it, with a Dockerized copy for development.',
    outcome:
      'Live in production at tickerautomotive.com on the client’s own hosting. The move freed them from vendor lock-in and cut roughly $10,000 a year in recurring cost.',
    role: 'Sole developer — build, migration, and ongoing maintenance.',
    tech: ['PHP', 'JavaScript', 'CSS', 'Docker'],
    links: [
      { label: 'Live site', href: 'https://tickerautomotive.com', external: true },
      { label: 'Source', href: 'https://github.com/n8bar/TICKERAUTOMOTIVE', external: true },
    ],
    order: 2,
  },
  {
    slug: 'blackcloud-menu',
    title: 'Black Cloud — Drive-Thru Menu Board',
    tagline:
      'A fast, glanceable drive-thru menu board and back-office — catalog and image management with user roles, built end to end and run for two years.',
    context: 'Drive-thru smoke/vape/gift shop — Colorado City, AZ',
    status: 'In production ~2 years (retired)',
    problem:
      'A drive-thru needs a large, glanceable product menu for fast service, plus a back office to keep products, images, and staff current.',
    built:
      'A self-sizing drive-thru menu board: a portrait 1080×1920 display that auto-fits product names and prices for split-second reads, backed by a management interface (product CRUD with image upload/crop/scale and visibility flags) and user management with roles and permissions.',
    outcome:
      'Ran a live drive-thru daily for about two years before the shop retired it — a menu staff could keep current themselves, on a system built and maintained end to end.',
    role: 'Sole developer — built end to end.',
    tech: ['PHP', 'JavaScript', 'MariaDB', 'Apache'],
    image: { src: '/work/blackcloud-menu.png', alt: 'Black Cloud drive-thru menu display (1080×1920 portrait)' },
    order: 3,
  },
  {
    slug: 'cryptozing',
    title: 'CryptoZing — Custody-Safe Bitcoin Invoicing',
    tagline:
      'A custody-safe, watch-only Bitcoin invoicing app — automatic on-chain payment tracking without ever holding your keys.',
    context: 'Self-initiated product',
    status: 'Release candidate — public beta approaching',
    problem:
      'Bitcoin invoicing forces a bad trade-off: tools that automate payment tracking tend to take custody of funds or risk misattributing payments, while staying safe means manual, error-prone checking.',
    built:
      'A BTC-native, self-hosted invoicing app: issue invoices in USD, derive a unique Bitcoin address per invoice, share public links and QR codes, and monitor on-chain payments (partial payments, confirmations, automatic status) — all watch-only, never holding private keys or seed phrases. Built spec-first around explicit fund-safety invariants.',
    outcome:
      'Built like money software — custody-safe by design and developed with a disciplined, spec-first, milestone-driven process. Deployed as a live preview, with public beta approaching.',
    role: 'Sole developer.',
    tech: ['PHP', 'Laravel', 'Docker', 'Bitcoin (watch-only)'],
    links: [
      { label: 'Live preview', href: 'https://cryptozing.app', external: true },
      { label: 'Source', href: 'https://github.com/n8bar/CryptoZing', external: true },
    ],
    order: 4,
  },
  {
    slug: 'termiweb',
    title: 'TermiWeb — Browser Terminal for Windows',
    tagline:
      'An open-source browser terminal that keeps a live Windows shell within reach across devices — shipped with an honest, documented trust model.',
    context: 'Open-source (MIT)',
    status: 'Live · open-source',
    problem:
      'Power users want a live shell within reach when they step away from the desk — without remoting the whole desktop.',
    built:
      'A browser-first shared terminal for a Windows host: the same live shell follows you across devices, with a packaged Windows run surface (setup, start, stop, restart, uninstall, and optional before-sign-in auto-start), mobile controls and clipboard support, and sessions that survive restarts. Constraints are documented honestly — trusted-network-first, with multi-user auth and TLS called out as not yet shipped.',
    outcome:
      'Shipped open-source with a public site and download. Demonstrates terminal/pty internals, Windows packaging, and security judgment — documenting the trust model rather than overselling it.',
    role: 'Sole developer.',
    tech: ['TypeScript', 'xterm.js', 'node-pty', 'Express', 'Vite', 'PowerShell'],
    links: [
      { label: 'Live site', href: 'https://termiweb.com', external: true },
      { label: 'Source', href: 'https://github.com/n8bar/TermiWeb', external: true },
    ],
    order: 5,
  },
];

export function getCaseStudies(): CaseStudy[] {
  return [...caseStudies].sort((a, b) => a.order - b.order);
}

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((s) => s.slug === slug);
}
