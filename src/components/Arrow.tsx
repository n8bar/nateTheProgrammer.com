// A small right-pointing triangle with softened corners, in the brand gold —
// a designed accent rather than a text glyph. Decorative. `dir` rotates it.
type Dir = 'right' | 'left' | 'up' | 'up-right';

export default function Arrow({
  dir = 'right',
  className = '',
}: {
  dir?: Dir;
  className?: string;
}) {
  const dirClass = dir === 'right' ? '' : ` arrow--${dir}`;
  return (
    <svg
      className={`arrow${dirClass}${className ? ` ${className}` : ''}`}
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
