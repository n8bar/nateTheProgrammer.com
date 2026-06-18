// A small right-pointing triangle with softened corners, in the brand gold —
// a designed accent rather than a text glyph. Decorative.
export default function Arrow({ className = '' }: { className?: string }) {
  return (
    <svg
      className={`arrow${className ? ` ${className}` : ''}`}
      viewBox="0 0 12 14"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M3 2.5 10 7 3 11.5Z"
        fill="#ffd166"
        stroke="#ffd166"
        strokeWidth="2.4"
        strokeLinejoin="round"
      />
    </svg>
  );
}
