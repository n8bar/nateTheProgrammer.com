import './globals.css';
import type { Metadata } from 'next';
import { JetBrains_Mono, Saira_Semi_Condensed } from 'next/font/google';

const saira = Saira_Semi_Condensed({
  subsets: ['latin'],
  variable: '--font-saira',
  display: 'swap',
});

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'NateTheProgrammer',
  description: 'Resume site + internet playground for NateTheProgrammer.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${saira.variable} ${jetbrains.variable}`}>
      <body>{children}</body>
    </html>
  );
}
