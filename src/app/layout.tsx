import './globals.css';
import type { Metadata } from 'next';
import localFont from 'next/font/local';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// Self-hosted (latin) so builds never depend on a network fetch to Google Fonts.
const saira = localFont({
  src: [
    { path: './fonts/saira-300.woff2', weight: '300', style: 'normal' },
    { path: './fonts/saira-400.woff2', weight: '400', style: 'normal' },
    { path: './fonts/saira-500.woff2', weight: '500', style: 'normal' },
    { path: './fonts/saira-600.woff2', weight: '600', style: 'normal' },
    { path: './fonts/saira-700.woff2', weight: '700', style: 'normal' },
  ],
  variable: '--font-saira',
  display: 'swap',
});

const jetbrains = localFont({
  src: [
    { path: './fonts/jetbrains-400.woff2', weight: '400', style: 'normal' },
    { path: './fonts/jetbrains-500.woff2', weight: '500', style: 'normal' },
    { path: './fonts/jetbrains-600.woff2', weight: '600', style: 'normal' },
  ],
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
      <body>
        <a className="skip-link" href="#content">
          Skip to content
        </a>
        <Header />
        <main id="content" className="site-main">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
