import type { Metadata } from "next";
import Image from "next/image";
import { content, faq } from "@/content";
import { ContactForm } from "@/components/site/ContactForm";
import { PageHeader } from "@/components/site/PageHeader";
import { Shell } from "@/components/site/Shell";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Plan een vrijblijvend gesprek met Claassen Hoveniers in Eerbeek. Bel 0313 655 237 of mail hermanclaassen@online.nl.",
};

export default function ContactPage() {
  const { company, contact } = content;
  return (
    <Shell>
      <div className="mx-auto grid w-full max-w-6xl items-start gap-12 px-5 pt-12 pb-8 md:pt-16 lg:grid-cols-2">
        <header data-section="hero">
          <PageHeader
            bare
            label="Contact"
            title="Plan een vrijblijvend gesprek"
            lede="Bel ons, of gebruik het formulier. We starten met een oriënterend gesprek en een werkbezoek bij u thuis of bij het bedrijfspand."
          />
          <div className="mt-6">
            <p>
              <a
                href={contact.phoneHref}
                data-cta="bellen"
                className="inline-flex min-h-11 items-center border-b-[3px] border-brand font-display text-[clamp(2rem,4vw,3rem)] leading-none"
              >
                {contact.phoneDisplay}
              </a>
            </p>
            <p className="mt-4 max-w-xl">
              Of mail{" "}
              <a href={`mailto:${contact.email}`} data-cta="mailen" className="link">
                {contact.email}
              </a>
              .
            </p>
            <h2 className="mt-8 text-2xl">Wat u kunt noemen</h2>
            <ul className="plan-list mt-3 max-w-xl">
              <li>Of het om onderhoud, advies, een offerte, bomen of openbaar groen gaat.</li>
              <li>Het adres van de tuin of het terrein, als u dat al wilt delen.</li>
              <li>Wat er moet blijven, en wat u het liefst anders ziet.</li>
              <li>Of u alleen een schets wilt, of ook de aanleg.</li>
            </ul>
            <p className="mt-4 max-w-xl">
              Daarna plannen we het gesprek en een werkbezoek. U zit nergens aan vast.
            </p>
          </div>
        </header>
        <section data-section="formulier" className="relative bg-paper px-5 py-6 sm:px-7 sm:py-8">
          <span className="absolute top-0 right-0 h-3.5 w-3.5 bg-accent" aria-hidden />
          <h2 className="text-3xl">Stuur een bericht</h2>
          <p className="mt-3 mb-6">
            Vul het formulier in. Op deze conceptsite wordt het niet verzonden. Bellen of mailen kan altijd.
          </p>
          <ContactForm />
        </section>
      </div>

      <section data-section="faq" className="mx-auto w-full max-w-6xl px-5 py-12 md:py-16">
        <h2 className="text-[clamp(1.9rem,3.4vw,2.6rem)]">Vragen</h2>
        <div className="mt-6 max-w-3xl border-t border-brand/25">
          {faq.map((item) => (
            <article key={item.q} className="border-b border-brand/25 py-5">
              <h3 className="text-2xl leading-snug">{item.q}</h3>
              <p className="mt-2">{item.a}</p>
            </article>
          ))}
        </div>
      </section>

      <section data-section="contact" className="border-t border-brand/20 py-14">
        <div className="mx-auto grid w-full max-w-6xl items-center gap-10 px-5 lg:grid-cols-[minmax(0,28rem)_1fr]">
          <figure className="photo-frame w-full max-w-xl">
            <Image
              src="/img/hero/tuin-1.jpg"
              alt="Bedrijfswagen van Hoveniersbedrijf Claassen"
              width={960}
              height={720}
              sizes="(min-width: 1024px) 448px, 100vw"
              style={{ width: "100%", height: "auto" }}
            />
            <figcaption>De wagen van het bedrijf.</figcaption>
          </figure>
          <div>
            <h2 className="text-3xl">Hier vindt u ons</h2>
            <address className="mt-4 not-italic">
              {company.legalName}
              <br />
              {contact.street}
              <br />
              {contact.postalCode} {contact.city}
            </address>
            <p className="mt-4">
              <a href={contact.phoneHref} data-cta="bellen" className="link whitespace-nowrap">
                {contact.phoneDisplay}
              </a>
            </p>
            <p className="mt-2">
              <a href={`mailto:${contact.email}`} data-cta="mailen" className="link">
                {contact.email}
              </a>
            </p>
            <p className="mt-2">KvK {contact.kvk}</p>
            <p className="mt-4">
              <a href={contact.mapsHref} className="link" target="_blank" rel="noopener noreferrer">
                Route in Google Maps
                <span className="sr-only"> (opent in een nieuw venster)</span>
              </a>
            </p>
          </div>
        </div>
      </section>
    </Shell>
  );
}
