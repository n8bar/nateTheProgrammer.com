// IT roles, fresh-rewritten and results-framed (LinkedIn export is reference only).
// Per the content decisions: IT-only; Tricom = Web Application Developer role; Red Oak = I.T.

export type Role = {
  company: string;
  title: string;
  period: string;
  location?: string;
  summary: string;
  highlights?: string[];
  related?: { label: string; href: string };
};

export const roles: Role[] = [
  {
    company: 'Town of Colorado City, AZ',
    title: 'Technology Consultant',
    period: '2020 – Present',
    location: 'Colorado City, AZ',
    summary: 'Ongoing software and technology support for a municipal government and its departments.',
    highlights: [
      'Maintain and extend the production systems the town runs on — including its fuel metering-and-billing platform serving multiple government fleets.',
      'Work across the stack and into legacy databases and access control, on systems people depend on daily.',
    ],
    related: { label: 'Read the fuel system case study', href: '/work/colorado-city-fuel' },
  },
  {
    company: 'Hildale City, UT',
    title: 'Technology Consultant',
    period: '2020 – 2023',
    location: 'Hildale, UT',
    summary:
      'Development and IT support for a neighboring municipality, often alongside the same systems serving Colorado City.',
  },
  {
    company: 'NateTheProgrammer.com',
    title: 'Independent Software Developer',
    period: '2018 – Present',
    location: 'Colorado City, AZ',
    summary: 'Self-directed product and client work, owned end to end.',
    highlights: [
      'Design, build, and ship full-stack products — including CryptoZing (custody-safe Bitcoin invoicing) and TermiWeb (an open-source browser terminal).',
      'Own everything from architecture and UX through Docker-based deployment and maintenance.',
    ],
    related: { label: 'See the work', href: '/work' },
  },
  {
    company: 'PlusOne Company',
    title: 'Jr. Software Developer',
    period: '2017 – 2018',
    location: 'Hildale, UT',
    summary: 'Part of a team building SaaS sales- and conversion-tracking products for call centers.',
    highlights: [
      'Built internal features for a comprehensive conversion-tracking and reporting platform.',
      'Developed external sites and custom WordPress plugins, and contributed to RESTful API integrations.',
    ],
  },
  {
    company: 'Creek Code',
    title: 'Technology Consultant',
    period: '2016 – 2017',
    location: 'Hildale, UT',
    summary: 'Independent technology consulting for small-business clients.',
    highlights: [
      'Delivered custom software and websites alongside on-site and remote IT support.',
      'Handled networking, telecom, security, and surveillance work.',
    ],
  },
  {
    company: 'MEP Tech Inc',
    title: 'Mobile Application Developer',
    period: '2015 – 2016',
    location: 'Hildale, UT',
    summary: 'Built mobile applications as the company’s mobile developer.',
  },
  {
    company: 'Red Oak LLC',
    title: 'I.T.',
    period: '2014 – 2015',
    location: 'Mesa, AZ',
    summary: 'Information technology support and systems work.',
  },
  {
    company: 'Tricom Communications Services',
    title: 'Web Application Developer',
    period: '2009 – 2014',
    location: 'Las Vegas, NV',
    summary: 'Built and maintained the company’s custom operations platform.',
    highlights: [
      'Designed and maintained a single in-house web app that combined estimating, project management and scheduling, a time clock, and inventory control.',
      'Replaced a patchwork of separate tools with one system the business ran on.',
    ],
  },
];
