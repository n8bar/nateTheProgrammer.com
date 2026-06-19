// Home page content + supporting proof (skills, testimonials). In-repo and stable.
// Testimonials are real, pulled from the prior site's references page.

export type SkillGroup = { label: string; items: string[] };
export type Testimonial = { quote: string; name: string; title: string };

export const hero = {
  eyebrow: 'Software Engineer',
  headline: 'Whatever your software needs to do, I’ve probably built it.',
  proof: 'Billing a town’s fuel, powering a drive-thru’s menu, curing a vibe-coder’s boredom.',
  subhead:
    'I’m Nate Barlow — sixteen-plus years designing, building, and shipping full-stack systems end to end: municipal infrastructure, retail point-of-sale, business sites, and my own products. Making software efficient, effective, and easy.',
};

export const skills: SkillGroup[] = [
  { label: 'Languages', items: ['PHP', 'JavaScript / TypeScript', 'C#', 'SQL'] },
  {
    label: 'Frameworks',
    items: ['Laravel', 'Phoenix (Elixir)', 'Next.js / React', 'Node.js', 'WordPress'],
  },
  { label: 'Data', items: ['PostgreSQL', 'MySQL / MariaDB', 'MSSQL'] },
  { label: 'Platform & tooling', items: ['Docker', 'Linux', 'Git', 'REST APIs & integrations'] },
];

// Verbatim (or faithfully trimmed) from real recommendations.
export const testimonials: Testimonial[] = [
  {
    quote: 'Should the need arise, I would hire him again.',
    name: 'Mark Davis',
    title: 'CEO, MEP Tech',
  },
  {
    quote: 'Super directable and easy to work with — very highly recommend him for any team.',
    name: 'Joseph S. Bistline',
    title: 'Manager, Regal Electric',
  },
  {
    quote: 'Nate has shown the ability to focus and give his full energy to the task at hand.',
    name: 'Jason Black',
    title: 'Manager, Creek Code',
  },
  {
    quote:
      'He grew in his skills quite a lot since he started, and was able to learn to work with our complex system.',
    name: 'Aaron Timpson',
    title: 'V.P. Operations, Conversion Technologies',
  },
];

export type Education = { school: string; credential: string; period: string };
// `status` is a uniform "Earned <year>" — past tense, consistent across all certs, and never
// overclaims current certification (true whether or not a given cert has since lapsed).
export type Certification = { name: string; issuer: string; status: string };

export const education: Education[] = [
  { school: 'Western Governors University', credential: 'B.S., Software Development', period: '2019 – 2021' },
];

export const certifications: Certification[] = [
  { name: 'CJIS Security Awareness', issuer: 'FBI CJIS', status: 'Earned 2021' },
  { name: 'ITIL Foundation', issuer: 'Axelos', status: 'Earned 2020' },
  { name: 'Software Development Fundamentals (MTA)', issuer: 'Microsoft', status: 'Earned 2018' },
  { name: 'Site Development Associate', issuer: 'CIW', status: 'Earned 2019' },
  { name: 'CompTIA A+', issuer: 'CompTIA', status: 'Earned 2019' },
];
