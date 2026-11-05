"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import Link from "next/link";
import { content } from "@/content";

type Field = HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement;

function applyValidity(field: Field) {
  field.setCustomValidity("");
  if (field.validity.valid) return;
  if (field.validity.valueMissing) {
    if (field instanceof HTMLSelectElement) {
      field.setCustomValidity("Kies een onderwerp.");
    } else if (field instanceof HTMLInputElement && field.type === "checkbox") {
      field.setCustomValidity("Vink de privacyverklaring aan om verder te gaan.");
    } else {
      field.setCustomValidity("Vul dit veld in.");
    }
    return;
  }
  if (field.validity.typeMismatch && field instanceof HTMLInputElement && field.type === "email") {
    field.setCustomValidity("Vul een geldig e-mailadres in.");
    return;
  }
  field.setCustomValidity("Controleer dit veld.");
}

export function ContactForm() {
  const { contact, subjects } = content;
  const [sent, setSent] = useState(false);
  const noticeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (sent) noticeRef.current?.focus();
  }, [sent]);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const fields = Array.from(form.elements).filter((element): element is Field => {
      return element instanceof HTMLInputElement || element instanceof HTMLTextAreaElement || element instanceof HTMLSelectElement;
    });
    let firstInvalid: Field | null = null;
    for (const field of fields) {
      if (field.type === "submit") continue;
      applyValidity(field);
      if (!field.validity.valid && !firstInvalid) firstInvalid = field;
    }
    if (firstInvalid) {
      firstInvalid.reportValidity();
      firstInvalid.focus();
      return;
    }
    setSent(true);
  }

  return (
    <div>
      <div aria-live="polite">
        {sent ? (
          <div ref={noticeRef} tabIndex={-1} role="status" className="notice mb-6">
            <p className="font-display text-2xl leading-tight">Bericht niet verzonden</p>
            <p className="mt-2">
              Dit is een conceptsite. Het formulier verstuurt niets en slaat niets op. Bel{" "}
              <a href={contact.phoneHref} data-cta="bellen" className="link whitespace-nowrap">
                {contact.phoneDisplay}
              </a>{" "}
              of mail{" "}
              <a href={`mailto:${contact.email}`} data-cta="mailen" className="link">
                {contact.email}
              </a>{" "}
              voor een vrijblijvend gesprek.
            </p>
          </div>
        ) : null}
      </div>

      <form method="post" action="/contact" noValidate onSubmit={onSubmit} className="grid gap-5">
        <div className="grid gap-1.5">
          <label htmlFor="naam" className="font-semibold">
            Naam of bedrijf (verplicht)
          </label>
          <input id="naam" name="naam" type="text" autoComplete="name" required className="field" />
        </div>
        <div className="grid gap-1.5">
          <label htmlFor="adres" className="font-semibold">
            Adres
          </label>
          <input id="adres" name="adres" type="text" autoComplete="street-address" className="field" />
        </div>
        <div className="grid gap-1.5">
          <label htmlFor="postcode" className="font-semibold">
            Postcode en plaats
          </label>
          <input id="postcode" name="postcode" type="text" autoComplete="postal-code" className="field" />
        </div>
        <div className="grid gap-1.5">
          <label htmlFor="email" className="font-semibold">
            E-mail (verplicht)
          </label>
          <input id="email" name="email" type="email" autoComplete="email" required className="field" />
        </div>
        <div className="grid gap-1.5">
          <label htmlFor="telefoon" className="font-semibold">
            Telefoon (verplicht)
          </label>
          <input id="telefoon" name="telefoon" type="tel" autoComplete="tel" required className="field" />
        </div>
        <div className="grid gap-1.5">
          <label htmlFor="onderwerp" className="font-semibold">
            Onderwerp (verplicht)
          </label>
          <select id="onderwerp" name="onderwerp" required defaultValue="" className="field">
            <option value="">Kies een onderwerp</option>
            {subjects.map((subject) => (
              <option key={subject} value={subject}>
                {subject}
              </option>
            ))}
          </select>
        </div>
        <div className="grid gap-1.5">
          <label htmlFor="bericht" className="font-semibold">
            Bericht (verplicht)
          </label>
          <textarea id="bericht" name="bericht" required className="field" />
        </div>
        <div className="flex min-h-11 items-start gap-3">
          <input id="privacy" name="privacy" type="checkbox" required className="mt-1" />
          <span>
            <label htmlFor="privacy">Ik heb de privacyverklaring gelezen. (verplicht)</label>
            <span className="mt-1 block">
              <Link href="/privacy" className="link" target="_blank" rel="noopener noreferrer">
                Lees de privacyverklaring
                <span className="sr-only"> (opent in een nieuw venster)</span>
              </Link>
            </span>
          </span>
        </div>
        <button type="submit" className="btn inline-flex btn-primary w-full sm:w-auto">
          Verstuur bericht
        </button>
      </form>
    </div>
  );
}
