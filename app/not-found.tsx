import Link from "next/link";
import { content } from "@/content";
import { Shell } from "@/components/site/Shell";
import { LimeRule, Tuinbord } from "@/components/site/Tuinbord";

export default function NotFound() {
  const { contact } = content;
  return (
    <Shell>
      <section data-section="niet-gevonden" className="mx-auto w-full max-w-6xl px-5 py-16 md:py-24">
        <Tuinbord>Pagina</Tuinbord>
        <h1 className="mt-5 text-[clamp(2.15rem,4.6vw,3.4rem)] leading-tight">Deze pagina bestaat niet</h1>
        <LimeRule />
        <p className="mt-4 max-w-xl text-lg">
          Het adres klopt niet. Ga terug naar de homepage, of bel {contact.phoneDisplay}.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link href="/" className="btn inline-flex btn-primary w-full sm:w-auto">
            Naar de homepage
          </Link>
          <a href={contact.phoneHref} data-cta="bellen" className="btn inline-flex btn-line w-full sm:w-auto">
            Bellen
          </a>
        </div>
      </section>
    </Shell>
  );
}
