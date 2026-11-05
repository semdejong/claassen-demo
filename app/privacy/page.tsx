import type { Metadata } from "next";
import { content } from "@/content";
import { PageHeader } from "@/components/site/PageHeader";
import { Shell } from "@/components/site/Shell";

export const metadata: Metadata = {
  title: "Privacy",
  description: "Privacyverklaring van Hoveniersbedrijf Claassen V.O.F. in Eerbeek.",
};

export default function PrivacyPage() {
  const { company, contact } = content;
  return (
    <Shell>
      <PageHeader
        label="Privacy"
        title="Privacy"
        lede={`${company.legalName} is gevestigd aan de ${contact.street}, ${contact.postalCode} ${contact.city}.`}
      />
      <section data-section="privacy" className="mx-auto w-full max-w-6xl px-5 py-8 pb-20">
        <div className="relative max-w-3xl bg-paper px-5 py-8 sm:px-8">
          <span className="absolute top-0 right-0 h-3.5 w-3.5 bg-accent" aria-hidden />
          <dl className="grid gap-6">
            <div className="grid gap-1 border-t border-brand/20 pt-4">
              <dt className="font-display text-2xl">Formulier</dt>
              <dd>
                Deze website is een concept. Het contactformulier verstuurt uw gegevens niet en slaat ze niet op. Wat
                u invult bij naam, adres, postcode, e-mail, telefoon of bericht blijft in uw browser en komt niet bij
                ons aan.
              </dd>
            </div>
            <div className="grid gap-1 border-t border-brand/20 pt-4">
              <dt className="font-display text-2xl">Bellen en mailen</dt>
              <dd>
                Wilt u een afspraak of een offerte, bel{" "}
                <a href={contact.phoneHref} data-cta="bellen" className="link whitespace-nowrap">
                  {contact.phoneDisplay}
                </a>{" "}
                of mail{" "}
                <a href={`mailto:${contact.email}`} data-cta="mailen" className="link">
                  {contact.email}
                </a>
                . In een gesprek of een e-mail vragen we alleen wat nodig is om de tuin of het terrein te begrijpen:
                wie u bent, waar het werk is, en wat u wilt. Die gegevens gebruiken we om u te antwoorden over het
                werk waar u om vraagt.
              </dd>
            </div>
            <div className="grid gap-1 border-t border-b border-brand/20 py-4">
              <dt className="font-display text-2xl">Cookies</dt>
              <dd>
                Bezoeken aan deze conceptsite worden cookieloos geteld. Er worden geen volgcookies geplaatst. KvK{" "}
                {contact.kvk}.
              </dd>
            </div>
          </dl>
        </div>
      </section>
    </Shell>
  );
}
