import Image from "next/image";
import Link from "next/link";
import { content, projectImages, seasons, services, steps } from "@/content";
import { CtaBand } from "@/components/site/CtaBand";
import { LimeRule, Tuinbord } from "@/components/site/Tuinbord";
import { PlanDivider } from "@/components/site/PlanDivider";
import { ProjectGrid } from "@/components/site/ProjectGrid";
import { Shell } from "@/components/site/Shell";

const facts = [
  "Sinds 1985",
  "Eerbeek",
  "Ontwerp, aanleg, onderhoud en boomverzorging",
] as const;

const boomKort = [
  "Snoeien van monumentale bomen en fruitbomen",
  "Inventarisatie en boomveiligheidscontrole",
  "Kapvergunning, kappen en verwijderen",
  "Versnipperen en stobben wegfrezen",
];

export function HomePage() {
  const { company, contact } = content;
  return (
    <Shell>
      <section data-section="hero" className="rise">
        <div className="mx-auto grid w-full max-w-6xl items-center gap-8 px-5 pt-8 pb-24 md:gap-10 md:py-20 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,22rem)]">
          <div className="flex flex-col">
            <Tuinbord>Eerbeek</Tuinbord>
            <h1 className="mt-4 max-w-3xl text-[clamp(2rem,4.8vw,3.65rem)] leading-[1.08] md:mt-5">
              Tuinen en openbaar groen vanuit Eerbeek, sinds {company.founded}.
            </h1>
            <LimeRule />
            <p className="order-2 mt-4 max-w-xl text-lg leading-relaxed md:order-none md:mt-6">
              We ontwerpen, leggen aan en onderhouden, voor particulieren en voor bedrijven, instellingen,
              zorgcentra en gemeenten. Dat doen we al {company.experience}, met een werkbezoek op het adres zelf.
            </p>
            <div className="order-1 mt-5 flex flex-col gap-3 sm:flex-row sm:flex-wrap md:order-none md:mt-8">
              <Link href="/contact" data-cta="offerte" className="btn inline-flex btn-primary w-full sm:w-auto">
                Afspraak maken
              </Link>
              <Link href="/projecten" className="btn inline-flex btn-line w-full sm:w-auto">
                Bekijk projecten
              </Link>
            </div>
          </div>
          <figure className="photo-frame mx-auto w-full max-w-[22rem]">
            <Image
              src="/img/hero/werk-1.jpg"
              alt="Grondwerk voor een gazon door Claassen Hoveniers"
              width={720}
              height={960}
              priority
              sizes="352px"
              className="hero-shot"
              style={{ width: "100%" }}
            />
          </figure>
        </div>
      </section>

      <section data-section="vertrouwen" className="border-y border-brand/25 bg-muted">
        <ul className="mx-auto grid w-full max-w-6xl sm:grid-cols-3">
          {facts.map((fact) => (
            <li
              key={fact}
              className="flex items-start gap-3 px-5 py-4 text-[1.0625rem] sm:border-l sm:border-brand/30 sm:first:border-l-0"
            >
              <span className="mt-[0.45rem] h-2.5 w-2.5 shrink-0 bg-brand" aria-hidden />
              {fact}
            </li>
          ))}
        </ul>
      </section>

      <section id="diensten" data-section="diensten" className="raster scroll-mt-28 py-16 md:py-24">
        <div className="mx-auto w-full max-w-6xl px-5">
          <div className="relative bg-paper px-5 py-8 sm:px-8 sm:py-10 md:px-10">
            <span className="absolute top-0 right-0 h-3.5 w-3.5 bg-accent" aria-hidden />
            <Tuinbord>Diensten</Tuinbord>
            <h2 className="mt-5 max-w-2xl text-[clamp(1.9rem,3.4vw,2.7rem)] leading-tight">Wat we voor u doen</h2>
            <LimeRule />
            <p className="mt-5 max-w-2xl text-lg leading-relaxed">
              Ontwerp, aanleg, onderhoud en boomverzorging zitten bij ons onder één dak. Vijf lijnen, elk met een
              eigen pagina.
            </p>
            <div className="mt-8 border-b border-brand/25">
              {services.map((service) => (
                <Link
                  key={service.href}
                  href={service.href}
                  className="grid grid-cols-[auto_1fr] items-start gap-4 border-t border-brand/25 py-5 hover:bg-muted sm:grid-cols-[auto_1fr_auto]"
                >
                  <span className="mt-[0.7rem] h-3 w-3 shrink-0 bg-brand" aria-hidden />
                  <span>
                    <span className="block font-display text-[1.7rem] leading-tight">{service.legend}</span>
                    <span className="mt-1 block max-w-xl">{service.summary}</span>
                  </span>
                  <span aria-hidden className="mt-2 hidden text-brand sm:block">
                    →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section data-section="projecten" className="py-16 md:py-24">
        <div className="mx-auto w-full max-w-6xl px-5">
          <Tuinbord>Projecten</Tuinbord>
          <h2 className="mt-5 text-[clamp(1.9rem,3.4vw,2.7rem)] leading-tight">Uitgevoerd werk</h2>
          <LimeRule />
          <p className="mt-5 max-w-2xl text-lg leading-relaxed">
            Een greep uit ons werk. De volledige reeks staat op de projectpagina, zonder titel of plaatsnaam.
          </p>
          <div className="mt-8 bg-muted p-1">
            <ProjectGrid images={projectImages.slice(0, 12)} linkToPage />
          </div>
          <p className="mt-6">
            <Link href="/projecten" className="btn inline-flex btn-line">
              Alle projecten
            </Link>
          </p>
        </div>
      </section>

      <PlanDivider />

      <section data-section="werkwijze" className="py-12 md:py-20">
        <div className="mx-auto grid w-full max-w-6xl gap-10 px-5 lg:grid-cols-[minmax(0,22rem)_1fr]">
          <div>
            <Tuinbord>Werkwijze</Tuinbord>
            <h2 className="mt-5 text-[clamp(1.9rem,3.4vw,2.7rem)] leading-tight">Van gesprek tot aanleg</h2>
            <LimeRule />
            <p className="mt-5 text-lg leading-relaxed">
              We tekenen niet alleen vanaf de keukentafel. Eerst praten, dan kijken op het adres, dan een schets,
              dan de aanleg.
            </p>
            <p className="mt-6">
              <Link href="/werkwijze" className="link">
                Lees de werkwijze
              </Link>
            </p>
          </div>
          <ol className="process">
            {steps.map((step) => (
              <li key={step.title}>
                <h3 className="text-[1.7rem] leading-tight">{step.title}</h3>
                <p className="mt-2">{step.short}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section data-section="doelgroepen" className="pb-16 md:pb-24">
        <div className="mx-auto w-full max-w-6xl px-5">
          <h2 className="max-w-2xl text-[clamp(1.9rem,3.4vw,2.7rem)] leading-tight">
            Voor de tuin bij huis en voor openbaar groen
          </h2>
          <LimeRule />
          <div className="mt-8 grid border border-brand/30 md:grid-cols-2">
            <div className="bg-paper p-6 md:p-8">
              <h3 className="text-3xl">Particulieren</h3>
              <p className="mt-3">
                Een tuin bij uw woning: van de eerste schets tot de aanleg, en daarna het onderhoud. Vijver, terras,
                gazon, beplanting, schutting of overkapping.
              </p>
              <p className="mt-4">
                <Link href="/tuinaanleg" className="link inline-flex min-h-11 items-center">
                  Meer over tuinaanleg
                </Link>
              </p>
            </div>
            <div className="border-t border-brand/30 bg-muted p-6 md:border-t-0 md:border-l md:p-8">
              <h3 className="text-3xl">Bedrijven en gemeenten</h3>
              <p className="mt-3">
                Ook bedrijven, instellingen, zorgcentra en gemeenten kunnen bij ons terecht. We leggen hoogwaardig
                openbaar groen aan en houden het bij.
              </p>
              <p className="mt-4">
                <Link href="/openbaar-groen" className="link inline-flex min-h-11 items-center">
                  Meer over openbaar groen
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section data-section="seizoenen" className="raster border-y border-brand/20 py-14 md:py-16">
        <div className="mx-auto w-full max-w-6xl px-5">
          <Tuinbord>Seizoen</Tuinbord>
          <h2 className="mt-4 max-w-xl text-[clamp(1.8rem,3vw,2.5rem)] leading-tight">Het jaar rond bijhouden</h2>
          <p className="mt-3 max-w-2xl">
            Onderhoud volgt de tuin. We werken met de beurten die het seizoen vraagt, niet met een vaste folder.
          </p>
          <ol className="mt-8 grid gap-px bg-brand/25 sm:grid-cols-2 lg:grid-cols-4">
            {seasons.map((season, index) => (
              <li key={season.label} className="bg-paper p-5">
                <h3 className="text-2xl">{season.label}</h3>
                <span
                  className={`mt-3 block h-1 bg-accent ${["w-8", "w-12", "w-16", "w-10"][index]}`}
                  aria-hidden
                />
                <p className="mt-3">{season.text}</p>
              </li>
            ))}
          </ol>
          <p className="mt-6">
            <Link href="/onderhoud" className="link">
              Alles over onderhoud
            </Link>
          </p>
        </div>
      </section>

      <section data-section="boomverzorging" className="band relative bg-brand text-brand-fg">
        <span className="absolute top-0 right-0 h-4 w-4 bg-accent" aria-hidden />
        <div className="mx-auto w-full max-w-6xl px-5 py-16 md:py-20">
          <Tuinbord onGreen>Bomen</Tuinbord>
          <h2 className="mt-6 max-w-2xl text-[clamp(1.9rem,3.4vw,2.7rem)] leading-tight">
            Snoeien, veiligheid, kap en stobben
          </h2>
          <LimeRule />
          <p className="mt-4 max-w-2xl text-lg leading-relaxed">
            Boomverzorging hoort bij het bedrijf. We hebben het materieel en de kennis in huis om een boom te
            snoeien, te controleren of te verwijderen.
          </p>
          <ul className="mt-8 grid gap-x-10 sm:grid-cols-2">
            {boomKort.map((item) => (
              <li key={item} className="flex items-start gap-3 border-t border-paper/30 py-3">
                <span className="mt-2 h-2 w-2 shrink-0 bg-accent" aria-hidden />
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-6">
            <Link href="/boomverzorging" className="btn inline-flex btn-paper">
              Naar boomverzorging
            </Link>
          </p>
        </div>
      </section>

      <section data-section="over-ons" className="py-16 md:py-24">
        <div className="mx-auto grid w-full max-w-6xl items-center gap-10 px-5 lg:grid-cols-[minmax(0,22rem)_1fr]">
          <div className="lg:col-start-2">
            <Tuinbord>Over ons</Tuinbord>
            <h2 className="mt-5 text-[clamp(1.9rem,3.4vw,2.7rem)] leading-tight">
              Al {company.experience} vanuit Eerbeek
            </h2>
            <LimeRule />
            <p className="mt-5 max-w-xl text-lg leading-relaxed">
              {company.legalName} werkt sinds {company.founded} aan de Heerweg in Eerbeek. Kwaliteit en
              betaalbaarheid houden we bij elkaar: een tuin die klopt, en die u daarna kunt bijhouden.
            </p>
            <p className="mt-6">
              <Link href="/over-ons" className="link inline-flex min-h-11 items-center">
                Meer over ons
              </Link>
            </p>
          </div>
          <figure className="photo-frame w-full max-w-[22rem] lg:col-start-1 lg:row-start-1">
            <Image
              src="/img/hero/eerbeek.jpg"
              alt="Mensen van Hoveniersbedrijf Claassen bij de bedrijfswagen in Eerbeek"
              width={640}
              height={480}
              sizes="352px"
              style={{ width: "100%", height: "auto" }}
            />
            <figcaption>In Eerbeek.</figcaption>
          </figure>
        </div>
      </section>

      <PlanDivider />
      <CtaBand />

      <section id="contact" data-section="contact" className="py-16 md:py-20">
        <div className="mx-auto w-full max-w-6xl px-5">
          <Tuinbord>Route</Tuinbord>
          <h2 className="mt-5 text-[clamp(1.9rem,3.4vw,2.7rem)] leading-tight">Contact en route</h2>
          <LimeRule />
          <div className="mt-8 grid gap-8 border-t border-brand/25 pt-6 md:grid-cols-3">
            <div>
              <h3 className="text-2xl">Adres</h3>
              <address className="mt-2 not-italic">
                {company.legalName}
                <br />
                {contact.street}
                <br />
                {contact.postalCode} {contact.city}
              </address>
              <p className="mt-3">
                <a href={contact.mapsHref} className="link" target="_blank" rel="noopener noreferrer">
                  Route in Google Maps
                  <span className="sr-only"> (opent in een nieuw venster)</span>
                </a>
              </p>
            </div>
            <div>
              <h3 className="text-2xl">Bellen en mailen</h3>
              <p className="mt-2">
                <a href={contact.phoneHref} data-cta="bellen" className="link whitespace-nowrap">
                  {contact.phoneDisplay}
                </a>
              </p>
              <p className="mt-2">
                <a href={`mailto:${contact.email}`} data-cta="mailen" className="link">
                  {contact.email}
                </a>
              </p>
            </div>
            <div>
              <h3 className="text-2xl">Inschrijving</h3>
              <p className="mt-2">KvK {contact.kvk}</p>
              <p className="mt-4">
                <Link href="/contact" data-cta="offerte" className="link inline-flex min-h-11 items-center">
                  Naar het formulier
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </Shell>
  );
}
