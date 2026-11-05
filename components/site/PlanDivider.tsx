export function PlanDivider() {
  return (
    <div className="mx-auto w-full max-w-6xl px-5 py-2" aria-hidden>
      <svg viewBox="0 0 960 40" className="h-8 w-full text-brand" fill="none">
        <path d="M0 20H960" stroke="currentColor" strokeWidth="1" />
        <rect x="8" y="8" width="64" height="24" stroke="currentColor" strokeWidth="1.5" />
        <rect x="84" y="12" width="16" height="16" fill="currentColor" />
        <rect x="106" y="12" width="16" height="16" fill="currentColor" />
        <rect x="390" y="6" width="160" height="28" stroke="currentColor" strokeWidth="1.5" />
        <path d="M406 20H534" stroke="currentColor" strokeWidth="1" />
        <rect x="780" y="10" width="40" height="20" stroke="currentColor" strokeWidth="1.5" />
        <rect x="828" y="10" width="40" height="20" stroke="currentColor" strokeWidth="1.5" />
        <rect x="876" y="10" width="40" height="20" fill="currentColor" />
      </svg>
    </div>
  );
}
