'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';

const NAV_ITEMS = [
  { href: '/', label: 'Home' },
  { href: '/skills', label: 'Skills' },
  { href: '/experience', label: 'Experience' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/references', label: 'References' },
  { href: '/certifications', label: 'Certifications' },
  { href: '/education', label: 'Education' },
  { href: '/blog', label: 'Blog' },
  { href: '/playground', label: 'Playground' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement | null>(null);
  const toggleRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (!menuOpen) {
      document.body.style.overflow = '';
      return;
    }

    const previousActive = document.activeElement as HTMLElement | null;
    document.body.style.overflow = 'hidden';

    const focusFirst = () => {
      const first = panelRef.current?.querySelector<HTMLElement>('a, button');
      first?.focus();
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        setMenuOpen(false);
        return;
      }

      if (event.key !== 'Tab') return;

      const focusable = panelRef.current?.querySelectorAll<HTMLElement>('a, button');
      if (!focusable || focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      const active = document.activeElement as HTMLElement | null;

      if (event.shiftKey && active === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && active === last) {
        event.preventDefault();
        first.focus();
      }
    };

    focusFirst();
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
      if (previousActive) {
        previousActive.focus();
      } else {
        toggleRef.current?.focus();
      }
    };
  }, [menuOpen]);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link href="/" className="brand">
          <span className="brand-mark">◎</span>
          <span className="brand-text">NateTheProgrammer</span>
        </Link>

        <nav className="nav-desktop" aria-label="Primary">
          <ul className="nav-list">
            {NAV_ITEMS.map((item) => {
              const isActive = item.href === '/' ? pathname === '/' : pathname.startsWith(item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="nav-link"
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <button
          ref={toggleRef}
          type="button"
          className="nav-toggle"
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="sr-only">Toggle navigation</span>
          <span aria-hidden className="nav-toggle-bar" />
          <span aria-hidden className="nav-toggle-bar" />
        </button>
      </div>

      {menuOpen ? (
        <div className="nav-overlay" role="presentation">
          <button
            type="button"
            className="nav-backdrop"
            aria-label="Close navigation"
            onClick={() => setMenuOpen(false)}
          />
          <div
            id="mobile-nav"
            ref={panelRef}
            className="nav-panel"
            role="dialog"
            aria-modal="true"
            aria-label="Site navigation"
          >
            <div className="nav-panel-header">
              <span className="eyebrow">Navigate</span>
              <button type="button" className="nav-close" onClick={() => setMenuOpen(false)}>
                Close
              </button>
            </div>
            <ul className="nav-panel-list">
              {NAV_ITEMS.map((item) => {
                const isActive = item.href === '/' ? pathname === '/' : pathname.startsWith(item.href);
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="nav-panel-link"
                      aria-current={isActive ? 'page' : undefined}
                      onClick={() => setMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      ) : null}
    </header>
  );
}
