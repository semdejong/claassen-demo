"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { content, servicePaths } from "@/content";

function isCurrent(href: string, pathname: string) {
  if (href.startsWith("/#")) return servicePaths.includes(pathname);
  return pathname === href;
}

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const { company, contact, nav } = content;

  useEffect(() => {
    if (!open) return;
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    function onPointer(event: PointerEvent) {
      const target = event.target as Node;
      const menu = document.getElementById("mobiel-menu");
      const button = document.getElementById("menu-knop");
      if (menu?.contains(target) || button?.contains(target)) return;
      setOpen(false);
    }
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onPointer);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onPointer);
    };
  }, [open]);

  return (
    <header data-section="header" className="sticky top-0 z-40 border-b border-brand/20 bg-background">
      <div className="relative h-1.5 bg-brand" aria-hidden>
        <span className="absolute top-0 left-0 h-full w-8 bg-accent" />
      </div>
      <div className="mx-auto flex w-full max-w-6xl flex-nowrap items-center gap-2 px-4 py-2.5 sm:gap-4 sm:px-5">
        <Link href="/" className="mr-auto inline-flex shrink-0 items-center">
          <Image
            src={company.logo}
            alt={company.name}
            width={906}
            height={395}
            priority
            style={{ width: "auto", height: "2.75rem" }}
          />
        </Link>

        <nav className="hidden items-center gap-x-4 lg:flex" aria-label="Hoofdmenu">
          {nav.map((item) => {
            const current = isCurrent(item.href, pathname);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={current ? "page" : undefined}
                data-cta={item.href === "/contact" ? "offerte" : undefined}
                className={`relative inline-flex min-h-11 items-center text-[1.0625rem] ${
                  current ? "font-semibold text-brand" : "hover:text-brand"
                }`}
              >
                {item.label}
                {current ? <span className="absolute inset-x-0 bottom-1.5 h-0.5 bg-accent" aria-hidden /> : null}
              </Link>
            );
          })}
        </nav>

        <a
          href={contact.phoneHref}
          data-cta="bellen"
          className="inline-flex min-h-11 shrink-0 items-center px-2 font-semibold text-brand sm:px-3"
        >
          <span className="sm:hidden">Bel</span>
          <span className="hidden whitespace-nowrap sm:inline">{contact.phoneDisplay}</span>
        </a>

        <Link href="/contact" data-cta="offerte" className="nav-cta btn btn-primary hidden shrink-0 lg:inline-flex">
          Afspraak maken
        </Link>

        <button
          id="menu-knop"
          type="button"
          className="inline-flex min-h-11 min-w-11 items-center justify-center gap-2 px-2 font-semibold lg:hidden"
          aria-expanded={open}
          aria-controls="mobiel-menu"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="flex flex-col gap-1" aria-hidden>
            <span className="block h-0.5 w-5 bg-brand" />
            <span className="block h-0.5 w-5 bg-brand" />
            <span className="block h-0.5 w-3 bg-accent" />
          </span>
          {open ? "Sluit" : "Menu"}
        </button>
      </div>

      <nav
        id="mobiel-menu"
        aria-label="Mobiel menu"
        hidden={!open}
        className="border-t border-brand/20 bg-background lg:hidden"
      >
        <ul className="mx-auto w-full max-w-6xl px-4 py-2 sm:px-5">
          {nav.map((item) => (
            <li key={item.href} className="border-b border-brand/15">
              <Link
                href={item.href}
                data-cta={item.href === "/contact" ? "offerte" : undefined}
                aria-current={isCurrent(item.href, pathname) ? "page" : undefined}
                className="flex min-h-12 items-center font-semibold"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
