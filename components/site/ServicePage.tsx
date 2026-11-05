import Link from "next/link";
import { projectImages, services, type Service } from "@/content";
import { CtaBand } from "@/components/site/CtaBand";
import { PageHeader } from "@/components/site/PageHeader";
import { PlanDivider } from "@/components/site/PlanDivider";
import { ProjectGrid } from "@/components/site/ProjectGrid";
import { Shell } from "@/components/site/Shell";
import { LimeRule, Tuinbord } from "@/components/site/Tuinbord";

function photosFor(start: number) {
  return Array.from({ length: 8 }, (_, index) => projectImages[(start + index) % projectImages.length]);
}

export function ServicePage({ service }: { service: Service }) {
  const others = services.filter((item) => item.slug !== service.slug);
  return (
    <Shell>
      <PageHeader label="Diensten" title={service.title} lede={service.lead} />

      <section data-section="aanbod" className="mx-auto grid w-full max-w-6xl gap-10 px-5 py-10 md:py-14 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,20rem)]">
        <div className="copy max-w-2xl">
          {service.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <p className="mt-6">
            <Link href="/werkwijze" className="link">
              Lees hoe een opdracht verloopt
            </Link>
          </p>
        </div>
        <aside className="relative h-fit bg-paper px-5 py-6 sm:px-6">
          <span className="absolute top-0 right-0 h-3.5 w-3.5 bg-accent" aria-hidden />
          <Tuinbord>Werkblad</Tuinbord>
          <p className="mt-4">{service.aside}</p>
          <p className="mt-4">
            <Link href="/contact" data-cta="offerte" className="link inline-flex min-h-11 items-center">
              Vrijblijvend gesprek
            </Link>
          </p>
        </aside>
      </section>

      <section data-section="plan" className="raster py-14 md:py-20">
        <div className="mx-auto w-full max-w-6xl px-5">
          <div className="bg-paper px-5 py-8 sm:px-8 md:px-10">
            <h2 className="text-[clamp(1.8rem,3vw,2.4rem)] leading-tight">Wat er in het werk zit</h2>
            <LimeRule />
            <div className="mt-10 grid gap-12">
              {service.groups.map((group) => (
                <div key={group.label}>
                  <h3 className="flex items-center gap-3 text-2xl">
                    <span className="h-3 w-3 bg-brand" aria-hidden />
                    {group.label}
                  </h3>
                  <ul className="mt-4 border-b border-brand/20">
                    {group.items.map((item) => (
                      <li key={item.title} className="grid gap-1 border-t border-brand/20 py-4 md:grid-cols-[minmax(12rem,17rem)_1fr] md:items-baseline md:gap-8">
                        <span className="font-semibold">{item.title}</span>
                        <span>{item.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section data-section="beelden" className="mx-auto w-full max-w-6xl px-5 py-14 md:py-16">
        <Tuinbord>Beelden</Tuinbord>
        <h2 className="mt-4 text-[clamp(1.8rem,3vw,2.4rem)] leading-tight">Uit ons werk</h2>
        <p className="mt-3 max-w-2xl">
          Een paar beelden uit de reeks. Ze horen niet bij één benoemde klus of plaats. De hele reeks staat bij de
          projecten.
        </p>
        <div className="mt-6 bg-muted p-1">
          <ProjectGrid images={photosFor(service.photoFrom)} linkToPage />
        </div>
        <p className="mt-5">
          <Link href="/projecten" className="link">
            Alle projecten
          </Link>
        </p>
      </section>

      <PlanDivider />

      <nav aria-label="Andere diensten" data-section="andere-diensten" className="mx-auto w-full max-w-6xl px-5 py-12">
        <h2 className="text-3xl">Ook onder dit dak</h2>
        <ul className="mt-6 border-b border-brand/20">
          {others.map((item) => (
            <li key={item.href} className="border-t border-brand/20">
              <Link href={item.href} className="grid gap-1 py-4 md:grid-cols-[16rem_1fr_auto] md:items-center md:gap-6">
                <span className="font-display text-2xl">{item.legend}</span>
                <span>{item.summary}</span>
                <span aria-hidden className="hidden text-brand md:block">
                  →
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <CtaBand />
    </Shell>
  );
}
