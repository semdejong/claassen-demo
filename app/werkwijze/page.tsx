import type { Metadata } from "next";
import Link from "next/link";
import { steps } from "@/content";
import { CtaBand } from "@/components/site/CtaBand";
import { PageHeader } from "@/components/site/PageHeader";
import { Shell } from "@/components/site/Shell";
import { Tuinbord } from "@/components/site/Tuinbord";

export const metadata: Metadata = {
  title: "Werkwijze",
  description:
    "Van oriënterend gesprek en werkbezoek tot schets en aanleg. Zo werkt Claassen Hoveniers in Eerbeek.",
};

const prepare = [
  "Hoe u de tuin of het terrein gebruikt: zitten, spelen, parkeren, werken.",
  "Wat moet blijven, en wat weg mag.",
  "Of het om een woning gaat of om een bedrijf, instelling, zorgcentrum of gemeente.",
  "Of u een ontwerp én de aanleg wilt, of alleen de schets.",
];

export default function WerkwijzePage() {
  return (
    <Shell>
      <PageHeader
        label="Werkwijze"
        title="Eerst kijken, dan tekenen, dan aanleggen"
        lede="Een tuin of een stuk groen moet passen bij de plek. Daarom komen we langs voordat er een schets op tafel ligt. Het gesprek is vrijblijvend."
      />

      <section data-section="werkwijze" className="mx-auto w-full max-w-6xl px-5 py-8">
        <ol className="grid gap-4">
          {steps.map((step, index) => (
            <li
              key={step.title}
              className={index % 2 === 0 ? "border border-brand/25 bg-paper px-5 py-7 sm:px-8" : "border border-brand/25 bg-muted px-5 py-7 sm:px-8"}
            >
              <div className="grid gap-4 lg:grid-cols-[16rem_1fr]">
                <h2 className="text-[1.8rem] leading-tight">{step.title}</h2>
                <div>
                  <p className="max-w-2xl">{step.long}</p>
                  <p className="mt-4 border-t border-brand/20 pt-3">
                    <span className="font-semibold">Waar we op letten. </span>
                    {step.focus}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section data-section="voorbereiding" className="raster py-14 md:py-16">
        <div className="mx-auto grid w-full max-w-6xl gap-8 px-5 lg:grid-cols-[minmax(0,20rem)_1fr] lg:items-start">
          <div>
            <Tuinbord>Vooraf</Tuinbord>
            <h2 className="mt-4 text-[clamp(1.8rem,3vw,2.4rem)] leading-tight">Handig om alvast te bedenken</h2>
          </div>
          <ul className="border-b border-brand/25 bg-paper">
            {prepare.map((item) => (
              <li key={item} className="border-t border-brand/25 px-5 py-4">
                {item}
              </li>
            ))}
          </ul>
        </div>
        <p className="mx-auto mt-8 w-full max-w-6xl px-5">
          Alleen een ontwerp kan ook.{" "}
          <Link href="/tuinontwerp" className="link">
            Meer over tuinontwerp
          </Link>
          . De aanleg zelf staat bij{" "}
          <Link href="/tuinaanleg" className="link">
            tuinaanleg
          </Link>
          .
        </p>
      </section>
      <CtaBand
        title="Het gesprek is vrijblijvend"
        text="Bel of schrijf ons. We plannen een oriënterend gesprek en daarna een werkbezoek. U zit nergens aan vast."
      />
    </Shell>
  );
}
