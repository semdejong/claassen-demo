import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { audiences, content, services } from "@/content";
import { CtaBand } from "@/components/site/CtaBand";
import { PageHeader } from "@/components/site/PageHeader";
import { Shell } from "@/components/site/Shell";
import { LimeRule, Tuinbord } from "@/components/site/Tuinbord";

export const metadata: Metadata = {
  title: "Over ons",
  description:
    "Hoveniersbedrijf Claassen V.O.F. werkt sinds 1985 vanuit Eerbeek aan tuinen en openbaar groen.",
};

export default function OverOnsPage() {
  const { company, contact } = content;
  return (
    <Shell>
      <PageHeader
        label="Over ons"
        title="Hoveniers vanuit Eerbeek, sinds 1985"
        lede={`${company.legalName} legt tuinen en hoogwaardig openbaar groen aan, en onderhoudt het. Al ${company.experience}, vanaf de Heerweg.`}
      />
      <section data-section="over-ons" className="mx-auto grid w-full max-w-6xl items-start gap-10 px-5 py-10 lg:grid-cols-[minmax(0,22rem)_1fr]">
        <figure className="photo-frame order-2 w-full max-w-[22rem] lg:order-1">
          <Image
            src="/img/hero/eerbeek.jpg"
            alt="Mensen van Hoveniersbedrijf Claassen bij de bedrijfswagen in Eerbeek"
            width={640}
            height={480}
            sizes="352px"
            style={{ width: "100%", height: "auto" }}
          />
          <figcaption>Op het erf in Eerbeek.</figcaption>
        </figure>
        <div className="copy order-1 max-w-2xl lg:order-2">
          <p>
            Wat in {company.founded} begon, is nog steeds een hoveniersbedrijf aan de {contact.street} in{" "}
            {company.city}, {company.region}. We tekenen, leggen aan, onderhouden en verzorgen bomen. Dat zit onder
            één dak, voor de tuin bij huis en voor openbaar groen.
          </p>
          <p>
            Kwaliteit staat voorop, samen met betaalbaarheid. We zoeken een aanpak die bij uw wensen past, zonder de
            tuin onnodig duur te maken in de aanleg of in het onderhoud daarna. Een tuin die u niet kunt bijhouden,
            is geen goed plan.
          </p>
          <p>
            Daarom beginnen we niet met een catalogus. Eerst een vrijblijvend gesprek, daarna een werkbezoek. Op het
            adres zien we of een idee ook past bij het huis, het pand en de sfeer eromheen.
          </p>
          <p>
            Voor een afspraak of een vraag kunt u terecht bij {company.contactName}, via{" "}
            <a href={contact.phoneHref} data-cta="bellen" className="link whitespace-nowrap">
              {contact.phoneDisplay}
            </a>{" "}
            of{" "}
            <a href={`mailto:${contact.email}`} data-cta="mailen" className="link">
              {contact.email}
            </a>
            .
          </p>
        </div>
      </section>

      <section data-section="lijnen" className="border-y border-brand/20 bg-muted py-14">
        <div className="mx-auto w-full max-w-6xl px-5">
          <Tuinbord>Onder één dak</Tuinbord>
          <h2 className="mt-4 max-w-xl text-[clamp(1.8rem,3vw,2.4rem)] leading-tight">
            Vijf lijnen, hetzelfde bedrijf
          </h2>
          <LimeRule />
          <ul className="mt-8 border-b border-brand/25 bg-paper">
            {services.map((service) => (
              <li key={service.href} className="border-t border-brand/25">
                <Link href={service.href} className="grid gap-1 px-5 py-4 md:grid-cols-[16rem_1fr] md:items-center">
                  <span className="font-display text-2xl">{service.legend}</span>
                  <span>{service.summary}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section data-section="voor-wie" className="mx-auto w-full max-w-6xl px-5 py-14">
        <h2 className="text-[clamp(1.8rem,3vw,2.4rem)] leading-tight">Voor wie we werken</h2>
        <p className="mt-3 max-w-2xl">
          Dezelfde vakkennis, een andere plek. We maken geen onderscheid in zorgvuldigheid tussen een achtertuin en
          een terrein.
        </p>
        <ul className="mt-8 grid gap-px bg-brand/20 sm:grid-cols-2 lg:grid-cols-5">
          {audiences.map((item) => (
            <li key={item.title} className="bg-paper p-4">
              <h3 className="text-xl leading-tight">{item.title}</h3>
              <span className="mt-3 block h-1 w-8 bg-accent" aria-hidden />
              <p className="mt-3 text-[1.0625rem]">{item.text}</p>
            </li>
          ))}
        </ul>
      </section>

      <section data-section="wagen" className="mx-auto grid w-full max-w-6xl items-center gap-8 px-5 pb-14 lg:grid-cols-2">
        <figure className="photo-frame w-full">
          <Image
            src="/img/hero/tuin-2.jpg"
            alt="Bedrijfswagen van Hoveniersbedrijf Claassen"
            width={960}
            height={720}
            sizes="(min-width: 1024px) 560px, 100vw"
            style={{ width: "100%", height: "auto" }}
          />
          <figcaption>Onderweg vanuit Eerbeek.</figcaption>
        </figure>
        <div>
          <h2 className="text-3xl">Vanuit de Heerweg</h2>
          <p className="mt-3 max-w-xl">
            Het bedrijf staat aan de {contact.street} in {contact.city}. Van daaruit rijden we naar tuinen en naar
            groen bij bedrijven, instellingen, zorgcentra en gemeenten.
          </p>
          <p className="mt-4">
            <Link href="/werkwijze" className="link">
              Zo werken we
            </Link>
          </p>
        </div>
      </section>

      <section data-section="gegevens" className="border-t border-brand/20">
        <div className="mx-auto w-full max-w-6xl px-5 py-12">
          <h2 className="text-3xl">Gegevens</h2>
          <dl className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <dt className="font-semibold">Bedrijf</dt>
              <dd className="mt-1">{company.legalName}</dd>
            </div>
            <div>
              <dt className="font-semibold">Sinds</dt>
              <dd className="mt-1">{company.founded}</dd>
            </div>
            <div>
              <dt className="font-semibold">Adres</dt>
              <dd className="mt-1">
                {contact.street}
                <br />
                {contact.postalCode} {contact.city}
              </dd>
            </div>
            <div>
              <dt className="font-semibold">KvK</dt>
              <dd className="mt-1">{contact.kvk}</dd>
            </div>
          </dl>
        </div>
      </section>
      <CtaBand />
    </Shell>
  );
}
