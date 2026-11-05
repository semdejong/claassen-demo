import Image from "next/image";
import Link from "next/link";
import { content } from "@/content";

export function Footer() {
  const { company, contact, nav } = content;
  return (
    <footer data-section="footer" className="mt-auto">
      <div className="relative h-1.5 bg-brand" aria-hidden>
        <span className="absolute top-0 right-0 h-full w-8 bg-accent" />
      </div>
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-5 py-12 md:grid-cols-3">
        <div>
          <Image
            src={company.logo}
            alt=""
            width={906}
            height={395}
            style={{ width: "auto", height: "3rem" }}
          />
          <p className="mt-4 font-display text-2xl leading-tight">{company.legalName}</p>
          <p className="mt-2">
            {contact.street}
            <br />
            {contact.postalCode} {contact.city}
          </p>
          <p className="mt-2">KvK {contact.kvk}</p>
        </div>

        <nav aria-label="Footer">
          <ul className="grid gap-1">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  data-cta={item.href === "/contact" ? "offerte" : undefined}
                  className="inline-flex min-h-11 items-center hover:text-brand"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/privacy" className="inline-flex min-h-11 items-center hover:text-brand">
                Privacy
              </Link>
            </li>
          </ul>
        </nav>

        <div>
          <p>
            <a href={contact.phoneHref} data-cta="bellen" className="link whitespace-nowrap">
              {contact.phoneDisplay}
            </a>
          </p>
          <p className="mt-2">
            <a href={`mailto:${contact.email}`} data-cta="mailen" className="link">
              {contact.email}
            </a>
          </p>
          <p className="mt-4">
            <a href={contact.facebook} className="link" target="_blank" rel="noopener noreferrer">
              Facebook
              <span className="sr-only"> (opent in een nieuw venster)</span>
            </a>
          </p>
          <Image
            src={contact.vhg}
            alt="VHG branchevereniging"
            width={200}
            height={175}
            className="mt-6"
            style={{ width: "auto", height: "4.5rem" }}
          />
          <p className="mt-6">
            <a href="https://sleads.nl" target="_blank" rel="noopener noreferrer" className="link">
              Concept door Sleads
            </a>
          </p>
        </div>
      </div>
      <div className="h-6" aria-hidden />
    </footer>
  );
}
