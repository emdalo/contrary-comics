export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M20,30 Q20,10 40,10 H160 Q180,10 180,30 V130 Q180,150 160,150 H80 L55,175 L55,150 H40 Q20,150 20,130 Z"
        fill="none"
        stroke="var(--color-forest)"
        strokeWidth="8"
      />
      <path d="M80,70 A30,30 0 1,1 80,130" fill="none" stroke="var(--color-teal)" strokeWidth="12" />
      <g transform="translate(120,100) scale(-1,1) translate(-120,-100)">
        <path d="M80,70 A30,30 0 1,1 80,130" fill="none" stroke="var(--color-teal)" strokeWidth="12" />
      </g>
      <polyline
        points="100,40 115,70 95,70 110,100"
        fill="none"
        stroke="var(--color-forest)"
        strokeWidth="6"
      />
    </svg>
  );
}
