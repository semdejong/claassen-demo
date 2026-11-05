/** Subtiele badge: markeert de site als concept van Sleads. Niet verwijderen in demo's. */
export default function SleadsBadge() {
  return (
    <a
      href="https://sleads.nl"
      target="_blank"
      rel="noopener"
      aria-label="Concept door Sleads – bekijk sleads.nl"
      className="no-print mt-4 mb-24 ml-5 inline-flex min-h-11 w-fit items-center gap-2 border border-brand/25 bg-paper px-3 text-[0.8125rem] font-medium text-foreground lg:mt-2 lg:mb-8 lg:ml-[max(1.25rem,calc((100%-72rem)/2+1.25rem))] print:hidden"
    >
      <span className="h-2 w-2 bg-accent" aria-hidden />
      Concept door <span className="font-semibold">Sleads</span>
    </a>
  );
}
