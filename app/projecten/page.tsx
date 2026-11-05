import type { Metadata } from "next";
import Link from "next/link";
import { content, projectImages } from "@/content";
import { CtaBand } from "@/components/site/CtaBand";
import { PageHeader } from "@/components/site/PageHeader";
import { ProjectGrid } from "@/components/site/ProjectGrid";
import { Shell } from "@/components/site/Shell";
import { Tuinbord } from "@/components/site/Tuinbord";

export const metadata: Metadata = {
  title: "Projecten",
  description: "Foto's van tuinen en groen, uitgevoerd door Claassen Hoveniers in Eerbeek.",
};

const looks = [
  { title: "Gazon en vakken", text: "Strakke grasvlakken, borders en plantvakken tegen een gevel of een haag." },
  { title: "Terras en hout", text: "Verharding, vlonders, pergola's en een plek om te zitten." },
  { title: "Groen eromheen", text: "Hagen, heesters en bomen die de tuin of het terrein begrenzen." },
];

export default function ProjectenPage() {
  const { contact } = content;
  const first = projectImages.slice(0, 8);
  const rest = projectImages.slice(8);
  return (
    <Shell>
      <PageHeader
        label="Projecten"
        title="Uit ons werk"
        lede="Beelden van tuinen en groen die we hebben gemaakt. Zonder titel of plaatsnaam: de foto mag voor zich spreken. Herkent u een sfeer, dan praten we graag over uw eigen adres."
      />

      <section data-section="leeswijzer" className="mx-auto w-full max-w-6xl px-5 pb-6">
        <ul className="grid border border-brand/25 sm:grid-cols-3">
          {looks.map((item, index) => (
            <li key={item.title} className={index > 0 ? "border-t border-brand/25 p-5 sm:border-t-0 sm:border-l" : "p-5"}>
              <h2 className="text-2xl">{item.title}</h2>
              <p className="mt-2">{item.text}</p>
            </li>
          ))}
        </ul>
      </section>

      <section data-section="projecten" className="mx-auto w-full max-w-6xl px-5 py-6">
        <div className="bg-muted p-1">
          <ProjectGrid images={first} />
        </div>
      </section>

      <section data-section="sfeer" className="raster py-12">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 bg-paper px-5 py-8 sm:px-8 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <Tuinbord>Uw adres</Tuinbord>
            <h2 className="mt-4 text-[clamp(1.8rem,3vw,2.4rem)] leading-tight">Een foto is geen ontwerp</h2>
            <p className="mt-3">
              Wat u hier ziet, stond op een andere plek. Voor uw tuin of terrein komen we langs. Alleen daar is te
              zien wat past.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link href="/contact" data-cta="offerte" className="btn inline-flex btn-primary">
              Afspraak maken
            </Link>
            <a href={contact.phoneHref} data-cta="bellen" className="btn inline-flex btn-line">
              Bel {contact.phoneDisplay}
            </a>
          </div>
        </div>
      </section>

      <section data-section="vervolg" className="mx-auto w-full max-w-6xl px-5 py-8 pb-16">
        <div className="bg-muted p-1">
          <ProjectGrid images={rest} />
        </div>
      </section>
      <CtaBand />
    </Shell>
  );
}
