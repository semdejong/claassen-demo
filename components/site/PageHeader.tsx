import { LimeRule, Tuinbord } from "@/components/site/Tuinbord";

export function PageHeader({
  label,
  title,
  lede,
  bare = false,
}: {
  label: string;
  title: string;
  lede: string;
  bare?: boolean;
}) {
  const body = (
    <>
      <Tuinbord>{label}</Tuinbord>
      <h1 className="mt-5 max-w-3xl text-[clamp(2.15rem,4.6vw,3.45rem)] leading-[1.08]">{title}</h1>
      <LimeRule />
      <p className="mt-5 max-w-2xl text-lg leading-relaxed">{lede}</p>
    </>
  );
  if (bare) return body;
  return (
    <header data-section="hero" className="mx-auto w-full max-w-6xl px-5 pt-12 pb-4 md:pt-16">
      {body}
    </header>
  );
}
