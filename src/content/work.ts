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
  image?: { src: string; alt: string; width: number; height: number };
  order: number;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: 'colorado-city-fuel',
    title: 'Municipal Fuel Metering & Billing',
    tagline:
      'On a system billing six figures a month, found and fixed a recurring error that was giving away about a day’s fuel every month.',
    context: 'Town of Colorado City, AZ — Public Works',
    status: 'In production 2021–2025 (legacy system, mostly retired 2025)',
    problem:
      'The town’s Public Works department metered and billed fuel for multiple government fleets — police, fire, the school district, and its own crews. The system that ran it had been inherited half-built, was undocumented, and was quietly losing money.',
    built:
      'I took ownership of an undocumented codebase and brought it to a dependable production state: finished the billing system and built the monthly accounts-receivable and weekly department/client reports I was asked to deliver, repaired access control (department-leader roles and PIN handling), and found two MSSQL servers replicating to each other as a workaround — one taking pump readings, the other running the site and billing — then pointed both at a single source of truth and re-provided the redundancy deliberately with scheduled backups. Along the way I discovered and fixed a recurring billing error that had been costing the town money.',
    outcome:
      'Served as the fuel metering-and-billing system of record across multiple municipal fleets in two cities (Colorado City, AZ and Hildale, UT). On a system billing six figures a month, a recurring error had been quietly giving away about a day’s fuel each month since 2014 — until it was caught.',
    role: 'Sole developer — inherited the system in 2021 and owned it end to end.',
    tech: ['PHP', 'MSSQL', 'Apache', 'Windows stack'],
    image: {
      src: '/work/colorado-city-fuel.png',
      alt: 'Colorado City Fuel Distribution Manager — diesel and gasoline tank-level gauges',
      width: 1707,
      height: 1579,
    },
    order: 5,
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
    image: {
      src: '/work/ticker-automotive.png',
      alt: 'Ticker Automotive website — About Us page with shop photo, services nav, and contact details',
      width: 2440,
      height: 1579,
    },
    order: 3,
  },
  {
    slug: 'blackcloud-menu',
    title: 'Black Cloud — Drive-Thru Menu Board',
    tagline:
      'A fast, glanceable drive-thru menu board and back-office — catalog and image management with user roles, built end to end and run for two years.',
    context: 'Drive-thru smoke/vape/gift shop — Colorado City, AZ',
    status: 'In production ~2 years (retired)',
    problem:
      'The hard part was layout. Off-the-shelf autofit gave the owners the worst of both — dead space and text too small to read at a glance.',
    built:
      'A self-sizing drive-thru menu board (portrait, 1080×1920): custom client-side logic re-optimizes the layout live — every product as large and legible as the screen allows, no wasted space. Real optimization, not shrink-to-fit. Plus a back-office: product CRUD with image crop/scale, visibility flags, and role-based users.',
    outcome:
      'It ran the drive-thru daily for about two years — staff kept the menu current themselves, and it just worked.',
    role: 'Sole developer — built end to end.',
    tech: ['PHP', 'JavaScript', 'MariaDB', 'Apache'],
    image: {
      src: '/work/blackcloud-menu.png',
      alt: 'Black Cloud drive-thru menu display (1080×1920 portrait)',
      width: 1080,
      height: 1920,
    },
    order: 4,
  },
  {
    slug: 'cryptozing',
    title: 'CryptoZing — Custody-Safe Bitcoin Invoicing',
    tagline:
      'A custody-safe, watch-only Bitcoin invoicing app — USD invoices, a unique Bitcoin address per invoice, and automatic on-chain payment tracking.',
    context: 'Self-initiated product',
    status: 'Live',
    problem:
      'Accepting Bitcoin payments usually costs you your keys or your hours: hand a processor custody for automation, or keep custody and reconcile every payment by hand.',
    built:
      'A BTC-native invoicing app: issue invoices in USD, derive a unique Bitcoin address per invoice, share public links and QR codes, and monitor on-chain payments (partial payments, confirmations, automatic status) — all watch-only, never holding private keys or seed phrases. Built spec-first around explicit fund-safety invariants.',
    outcome:
      'Every invoice gets its own receive address, so each payment is matched to its payer automatically — no guessing who paid what. Payments in the mempool show as pending, then flip to paid once the network confirms — underpayments and overpayments flagged on the spot. And the bar it’s built to: zero funds lost, ever — programmatically guaranteed.',
    role: 'Sole developer.',
    tech: ['PHP', 'Laravel', 'Docker', 'Bitcoin'],
    links: [
      { label: 'Live preview', href: 'https://cryptozing.app', external: true },
      { label: 'Source', href: 'https://github.com/n8bar/CryptoZing', external: true },
    ],
    image: {
      src: '/work/cryptozing.png',
      alt: 'CryptoZing landing page — Bitcoin invoicing with on-chain payment tracking and self-custody messaging',
      width: 1774,
      height: 1450,
    },
    order: 1,
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
    image: {
      src: '/work/termiweb.png',
      alt: 'TermiWeb in a phone browser — a live PowerShell session with on-screen terminal control keys above the mobile keyboard',
      width: 720,
      height: 1600,
    },
    order: 2,
  },
];

export function getCaseStudies(): CaseStudy[] {
  return [...caseStudies].sort((a, b) => a.order - b.order);
}

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((s) => s.slug === slug);
}
