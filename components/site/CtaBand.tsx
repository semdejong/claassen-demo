import Link from "next/link";
import { content } from "@/content";
import { LimeRule, Tuinbord } from "@/components/site/Tuinbord";

export function CtaBand({
  title = "Vrijblijvend oriënterend gesprek",
  text = "Bel ons of vraag een afspraak aan. We komen langs voor een werkbezoek. U zit nergens aan vast.",
}: {
  title?: string;
  text?: string;
}) {
  const { contact } = content;
  return (
    <section data-section="cta" className="bg-muted">
      <div className="mx-auto w-full max-w-6xl px-5 py-16 md:py-20">
        <Tuinbord>Afspraak</Tuinbord>
        <h2 className="mt-5 max-w-2xl text-[clamp(1.9rem,3.4vw,2.7rem)] leading-tight">{title}</h2>
        <LimeRule />
        <p className="mt-5 max-w-xl text-lg leading-relaxed">{text}</p>
        <p className="mt-6">
          <a
            href={contact.phoneHref}
            data-cta="bellen"
            className="inline-flex min-h-11 items-center border-b-[3px] border-brand font-display text-[clamp(2rem,4vw,3rem)] leading-none text-foreground"
          >
            {contact.phoneDisplay}
          </a>
        </p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <a href={contact.phoneHref} data-cta="bellen" className="btn inline-flex btn-primary w-full sm:w-auto">
            Bel {contact.phoneDisplay}
          </a>
          <Link href="/contact" data-cta="offerte" className="btn inline-flex btn-line w-full sm:w-auto">
            Afspraak maken
          </Link>
        </div>
        <p className="mt-4">
          <a href={`mailto:${contact.email}`} data-cta="mailen" className="link">
            {contact.email}
          </a>
        </p>
      </div>
    </section>
  );
}
