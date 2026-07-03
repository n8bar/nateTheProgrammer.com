// Roles, fresh-rewritten and results-framed (LinkedIn export is reference only).
// Red Oak wears its dual hat (Plumbing Estimator / I.T.) honestly; the platform thread ties Tricom → Red Oak.

export type Role = {
  company: string;
  title: string;
  period: string;
  location?: string;
  summary: string;
  highlights?: string[];
  links?: { label: string; href: string }[];
  related?: { label: string; href: string };
};

export const roles: Role[] = [
  {
    company: 'Town of Colorado City, AZ',
    title: 'Technology Consultant',
    period: '2020 – Present',
    location: 'Colorado City, AZ',
    summary: 'Ongoing software development and technology implementation for a municipal government and its departments.',
    highlights: [
      'Maintain and extend the town’s software and DevOps.',
      'Also co-own the town’s wider technology, including its physical security.',
      'Ran the same for the town’s neighbor, Hildale, through 2023: a separate contract, largely on infrastructure the two cities shared under an intergovernmental agreement.',
    ],
    related: { label: 'Read the fuel system case study', href: '/work/colorado-city-fuel' },
  },
  {
    company: 'CyberCreek.us',
    title: 'Independent Software Developer / Founder',
    period: '2018 – Present',
    location: 'Colorado City, AZ',
    summary: 'Self-directed projects and client work.',
    highlights: [
      'Design, build, and ship full-stack products, including CryptoZing and TermiWeb.',
      'See each project through, from architecture and UX to deployment and maintenance.',
    ],
    links: [
      { label: 'CryptoZing', href: '/work/cryptozing' },
      { label: 'TermiWeb', href: '/work/termiweb' },
    ],
    related: { label: 'See the work', href: '/work' },
  },
  {
    company: 'PlusOne Company',
    title: 'Jr. Software Developer',
    period: '2017 – 2018',
    location: 'Hildale, UT',
    summary: 'Part of a team building a SaaS platform for call centers.',
    highlights: [
      'Built product features and the logic behind them.',
      'Developed external sites and custom WordPress plugins.',
      'Worked both sides of REST APIs: writing endpoints and consuming them.',
    ],
  },
  {
    company: 'Creek Code',
    title: 'Technology Consultant',
    period: '2016 – 2017',
    location: 'Hildale, UT',
    summary: 'Technology consulting for small-business clients.',
    highlights: [
      'Delivered custom software and websites alongside on-site and remote IT support.',
      'Installed and serviced networking, telecom, security, and surveillance.',
    ],
  },
  {
    company: 'MEP Tech Inc',
    title: 'R&D Software Developer',
    period: '2015 – 2016',
    location: 'Hildale, UT',
    summary: 'Projected touch-screen technology: any surface becomes the display.',
    highlights: [
      'Prototyped the core product: cameras read finger touches on the projected surface and relayed them to the OS as native input.',
      'Built across Android, Linux, and Windows, plus some augmented virtuality work.',
    ],
  },
  {
    company: 'Red Oak LLC',
    title: 'Plumbing Estimator / I.T.',
    period: '2014 – 2015',
    location: 'Mesa, AZ',
    summary: 'A year-plus estimating commercial plumbing at the family firm, where the software work found me anyway.',
    highlights: [
      'Brought along the operations platform I’d built at Tricom, adapting it for Red Oak.',
      'Learned estimating from the inside: the discipline my own software had served for years.',
    ],
  },
  {
    company: 'Tricom Communications Services',
    title: 'Web Application Developer',
    period: '2009 – 2014',
    location: 'Las Vegas, NV',
    summary: 'Built and maintained the company’s custom operations platform.',
    highlights: [
      'Replaced a patchwork of tools with one system the business ran on: estimating, project management and scheduling, a time clock, and inventory control.',
      'Built it mostly solo, while doubling as half the IT department.',
      'The platform outlived the role: adapted for deployments at Red Oak, Creek Code, and one more company as late as 2023.',
    ],
  },
];
