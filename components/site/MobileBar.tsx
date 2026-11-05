import { content } from "@/content";

export function MobileBar() {
  const { contact } = content;
  return (
    <div
      data-section="mobiele-balk"
      className="no-print fixed inset-x-0 bottom-0 z-40 flex border-t-2 border-brand lg:hidden"
    >
      <a
        href={contact.phoneHref}
        data-cta="bellen"
        className="inline-flex min-h-12 flex-1 items-center justify-center bg-paper text-[1.0625rem] font-semibold text-brand"
        aria-label={`Bellen, ${contact.phoneDisplay}`}
      >
        Bellen
      </a>
      <a
        href="/contact"
        data-cta="offerte"
        className="inline-flex min-h-12 flex-1 items-center justify-center bg-brand text-[1.0625rem] font-semibold text-brand-fg"
      >
        Afspraak
      </a>
    </div>
  );
}
