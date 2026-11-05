/**
 * Bedrijfsgegevens van Claassen Hoveniers.
 * Kleuren komen uit het logo; teksten gebruiken hun eigen vaktaal.
 */
export const content = {
  slug: "claassen-demo",

  company: {
    name: "Claassen Hoveniers",
    legalName: "Hoveniersbedrijf Claassen V.O.F.",
    tagline: "Tuinen en openbaar groen vanuit Eerbeek, sinds 1985",
    description:
      "Hoveniersbedrijf Claassen in Eerbeek. Sinds 1985 tuinaanleg, tuinontwerp, onderhoud, boomverzorging en openbaar groen.",
    logo: "/logo.png",
    city: "Eerbeek",
    region: "Gelderland",
    founded: "1985",
    experience: "ruim 40 jaar",
    contactName: "Herman Claassen",
  },

  colors: {
    primary: "#0E5C38",
    primaryRich: "#107040",
    primaryForeground: "#F4F0E6",
    accent: "#A0E060",
    background: "#F4F0E6",
    foreground: "#1A1F1A",
    muted: "#E4EBD9",
    paper: "#FFFCF6",
  },

  seo: {
    title: "Claassen Hoveniers · Tuinen en openbaar groen in Eerbeek",
    description:
      "Hoveniersbedrijf Claassen in Eerbeek. Sinds 1985 tuinaanleg, tuinontwerp, onderhoud, boomverzorging en openbaar groen. Bel 0313 655 237.",
    lang: "nl",
  },

  contact: {
    phoneDisplay: "0313 655 237",
    phoneHref: "tel:+31313655237",
    email: "hermanclaassen@online.nl",
    street: "Heerweg 2",
    postalCode: "6961 KD",
    city: "Eerbeek",
    kvk: "08042488",
    mapsHref:
      "https://www.google.com/maps/search/?api=1&query=Heerweg%202%2C%206961%20KD%20Eerbeek",
    facebook: "https://www.facebook.com/hoveniersbedrijfclaassen/",
    vhg: "/img/vhg-logo.png",
  },

  nav: [
    { label: "Diensten", href: "/#diensten" },
    { label: "Projecten", href: "/projecten" },
    { label: "Werkwijze", href: "/werkwijze" },
    { label: "Over ons", href: "/over-ons" },
    { label: "Contact", href: "/contact" },
  ],

  subjects: [
    "Onderhoud",
    "Tuinadvies",
    "Offerte",
    "Boomverzorging",
    "Openbaar groen",
    "Anders",
  ],
} as const;

export type ServiceItem = { title: string; text: string };

export type ServiceGroup = { label: string; items: ServiceItem[] };

export type Service = {
  slug: string;
  href: string;
  legend: string;
  title: string;
  summary: string;
  description: string;
  lead: string;
  paragraphs: string[];
  aside: string;
  groups: ServiceGroup[];
  photoFrom: number;
};

export const services: Service[] = [
  {
    slug: "tuinaanleg",
    href: "/tuinaanleg",
    legend: "Tuinaanleg",
    title: "Tuinaanleg",
    summary: "Vijvers, bestrating, gazon, beplanting, metselwerk en timmerwerk.",
    description:
      "Tuinaanleg vanuit Eerbeek: vijvers, bestrating, gazon, beplanting, metselwerk en timmerwerk. Claassen Hoveniers, sinds 1985.",
    lead: "Een tuin aanleggen is vakwerk. We doen het grondwerk, de verharding, het groen en het timmerwerk, zodat het geheel klopt.",
    paragraphs: [
      "Claassen Hoveniers werkt vanuit Eerbeek voor particulieren en voor bedrijven. De sfeer van het huis en de omgeving nemen we mee vanaf het werkbezoek.",
      "Een aanleg is meer dan een lijst losse klussen. Grond, water, verharding, metselwerk, hout en beplanting moeten samen één tuin worden.",
      "Liever eerst een schets? Dat kan. We beginnen met een vrijblijvend oriënterend gesprek. Alleen een ontwerp, zonder aanleg, kan ook.",
    ],
    aside:
      "We starten met een gesprek en een werkbezoek. Op het adres zien we de grond, het huis en hoe de tuin gebruikt wordt.",
    photoFrom: 0,
    groups: [
      {
        label: "Grond en water",
        items: [
          { title: "Grondwerk", text: "Spitten, riolering en graafwerk. De tuin krijgt eerst een basis waar de rest op kan staan." },
          { title: "Bodemanalyse", text: "Voor bemesting of grondverbetering, voordat er geplant of een gazon gelegd wordt." },
          { title: "Vijvers", text: "Aanleg van vijvers en zwemvijvers, inclusief het metselwerk dat bij een vijverrand hoort." },
          { title: "Gazon", text: "Nieuw gazon, afgestemd op hoe u het stuk wilt gebruiken." },
        ],
      },
      {
        label: "Verharding en bouw",
        items: [
          { title: "Bestrating", text: "Terrassen, paden en andere verhardingen. We brengen de soorten aan die bij het ontwerp passen." },
          { title: "Metselwerk", text: "Muurtjes, trappen en het metselwerk aan vijvers." },
          { title: "Timmerwerk", text: "Vlonders, pergola's en overkappingen." },
          { title: "Erfafscheiding", text: "Schuttingen, hagen, erfafscheidingen en hekwerken." },
        ],
      },
      {
        label: "Beplanting",
        items: [
          { title: "Plantvakken", text: "Beplanting leveren en aanbrengen, passend bij licht, grond en de sfeer van het huis." },
        ],
      },
    ],
  },
  {
    slug: "tuinontwerp",
    href: "/tuinontwerp",
    legend: "Tuinontwerp",
    title: "Tuinontwerp",
    summary: "Een schets die past bij het huis, de omgeving en hoe u buiten leeft.",
    description:
      "Tuinontwerp in Eerbeek, afgestemd op architectuur en leefstijl. Inclusief werkbezoek. Claassen Hoveniers.",
    lead: "Een ontwerp zien we als een proces. Kennis, creativiteit en gevoel voor ruimte en sfeer bepalen het resultaat.",
    paragraphs: [
      "We starten met uw wensen. Daarna volgt een werkbezoek, want de sfeer van de omgeving is alleen ter plaatse te zien. Het schetsontwerp stemmen we af op de architectuur en op uw leefstijl.",
      "Overleg hoort bij het tekenen. Een plan is pas af als u het herkent: de plek om te zitten, de route naar de deur, het groen dat blijft.",
      "In het plan kunnen een vijver, bestrating, gazon, beplanting, metselwerk en timmerwerk een plek krijgen. De aanleg doen we desgewenst zelf. Alleen een ontwerp kan ook. Legt u zelf aan, dan kunnen we de uitvoering begeleiden.",
    ],
    aside:
      "U hoeft niet met een uitgewerkt idee te komen. Vertel hoe u buiten leeft. Wij kijken daarna op het adres of dat ook past.",
    photoFrom: 6,
    groups: [
      {
        label: "Het gesprek",
        items: [
          { title: "Wensen", text: "We inventariseren wat u wilt houden, wat weg mag en hoe u de tuin gebruikt." },
          { title: "Werkbezoek", text: "Bij u thuis of bij het bedrijfspand. Alleen daar is de sfeer van de omgeving te zien." },
        ],
      },
      {
        label: "Het plan",
        items: [
          { title: "Schets", text: "Een schetsontwerp in harmonie met de architectuur en met uw leefstijl." },
          { title: "Onderdelen", text: "Beplanting, verharding, water en bouwkundige delen krijgen een plek in hetzelfde plan." },
          { title: "Daarna", text: "Wij leggen aan, of we begeleiden de uitvoering als u die zelf doet." },
        ],
      },
    ],
  },
  {
    slug: "onderhoud",
    href: "/onderhoud",
    legend: "Service en onderhoud",
    title: "Service en tuinonderhoud",
    summary: "Bemesten, maaien, snoeien, bladruimen en de voor- en najaarsbeurt.",
    description:
      "Tuinonderhoud voor particulieren, bedrijven, instellingen, zorgcentra en gemeenten. Claassen Hoveniers, Eerbeek.",
    lead: "Regelmatig onderhoud houdt een tuin gezond. Is de tuin eenmaal op orde, dan is het bijhouden door een vakman overzichtelijk werk.",
    paragraphs: [
      "We onderhouden particuliere tuinen, terreinen van bedrijven en instellingen, zorgcentra en gemeentelijk groen.",
      "Is de tuin eenmaal op orde, dan houdt een vakman hem bij: maaien, snoeien, blad en de beurt in het voor- en najaar. In een vakantieperiode kunnen we dat overnemen.",
      "Voor snoei, controle en kap van bomen gaat u naar boomverzorging. Dat werk doen we zelf.",
    ],
    aside:
      "Zeg welk groen het is en of u een vaste ronde wilt of een voor- en najaarsbeurt. We kijken het terrein na op een werkbezoek.",
    photoFrom: 12,
    groups: [
      {
        label: "Gazon en verharding",
        items: [
          { title: "Gazon", text: "Beluchten, maaien, onkruidbestrijding, verticuteren en zaaien." },
          { title: "Bemesten", text: "Van gazon en borders, zodat de groei niet na één seizoen stilvalt." },
          { title: "Verharding", text: "Onkruidbestrijding op paden en terrassen. Grondwerk of bestrating waar de tuin dat nodig heeft." },
        ],
      },
      {
        label: "Snoei",
        items: [
          { title: "Heggen", text: "Knippen en snoeien van heggen en hagen." },
          { title: "Plant en hout", text: "Snoeien van vaste planten, heesters, fruitbomen en bomen." },
        ],
      },
      {
        label: "Seizoen",
        items: [
          { title: "Voor- en najaar", text: "Een beurt aan het begin en aan het eind van het groeiseizoen." },
          { title: "Blad", text: "Gevallen blad ruimen, zodat gazon en vakken weer vrij liggen." },
          { title: "Vakantie", text: "Onderhoud in de weken dat u er niet bent." },
        ],
      },
    ],
  },
  {
    slug: "boomverzorging",
    href: "/boomverzorging",
    legend: "Boomverzorging",
    title: "Boomverzorging",
    summary: "Snoei, veiligheid, kap en het wegfrezen van stobben.",
    description:
      "Boomverzorging in Eerbeek: snoei, boomveiligheidscontrole, kapvergunning, kappen en stobben frezen. Claassen Hoveniers.",
    lead: "Elke boom heeft onderhoud nodig om gezond te blijven. Snoeien en verzorgen doen we met het materieel en de kennis die daarbij horen.",
    paragraphs: [
      "Het onderhoud aan bomen is een vak apart. We komen langs, kijken naar de boom en de plek, en bespreken wat nodig is. Snoeien, controleren en kappen doen we met het materieel dat daarbij hoort.",
      "Een kapvergunning vragen we voor u aan wanneer de gemeente dat vraagt. Na de kap kunnen we versnipperen en de stob frezen, zodat de plek weer bruikbaar is.",
      "Monumentale bomen en fruitbomen snoeien we ook. Een boom verplanten kan, als de boom en de nieuwe plek dat toelaten.",
    ],
    aside:
      "Bel of mail als een boom te groot wordt, dood hout draagt of weg moet. We kijken ter plaatse voordat we snoeien of kappen.",
    photoFrom: 16,
    groups: [
      {
        label: "Snoei en advies",
        items: [
          { title: "Snoei", text: "Begeleidingssnoei, en snoei van monumentale bomen en fruitbomen." },
          { title: "Bemesting", text: "Bemestingsadvies, afgestemd op de boom en de standplaats." },
          { title: "Ziekten en plagen", text: "Bestrijden wat de boom aantast, nadat we hebben gezien wat het is." },
          { title: "Verplanten", text: "Een boom verplaatsen naar een plek waar hij verder kan." },
        ],
      },
      {
        label: "Veiligheid en kap",
        items: [
          { title: "Controle", text: "Inventarisatie en boomveiligheidscontrole." },
          { title: "Vergunning", text: "De aanvraag van een kapvergunning, als de gemeente die vraagt." },
          { title: "Kappen", text: "Bomen verwijderen of kappen." },
          { title: "Na de kap", text: "Versnipperen van het hout en wegfrezen van de boomstobbe." },
        ],
      },
    ],
  },
  {
    slug: "openbaar-groen",
    href: "/openbaar-groen",
    legend: "Openbaar groen",
    title: "Openbaar groen",
    summary: "Aanleg en onderhoud voor bedrijven, instellingen, zorgcentra en gemeenten.",
    description:
      "Hoogwaardig openbaar groen voor bedrijven, instellingen, zorgcentra en gemeenten. Aanleg en onderhoud vanuit Eerbeek.",
    lead: "Naast tuinen bij huis leggen we hoogwaardig openbaar groen aan en houden we het bij.",
    paragraphs: [
      "Opdrachtgevers zijn bedrijven, instellingen, zorgcentra en gemeenten. Het groen bij een pand, op een terrein of in de openbare ruimte vraagt dezelfde vakkennis als een tuin: bodem, beplanting, gazon, snoei en de seizoenen.",
      "Het werk sluit aan op onze andere lijnen. Ontwerp, aanleg, onderhoud en boomverzorging zitten onder één dak, ook als de opdrachtgever geen particulier is.",
      "Ook hier beginnen we met een gesprek en een werkbezoek op het adres, zodat het groen past bij de plek en bij het gebruik.",
    ],
    aside:
      "Een terrein bij een bedrijf, een instelling, een zorgcentrum of een gemeente begint bij ons hetzelfde: eerst kijken, dan een plan of een onderhoudsronde.",
    photoFrom: 3,
    groups: [
      {
        label: "Aanleg",
        items: [
          { title: "Groen en gazon", text: "Aanleg en herstel van plantvakken en gazons." },
          { title: "Beplanting", text: "Beplanting leveren en aanbrengen." },
          { title: "Grond en steen", text: "Bestrating en ander grondwerk waar het terrein dat nodig heeft." },
        ],
      },
      {
        label: "Bijhouden",
        items: [
          { title: "Snoei", text: "Hagen, heesters en bomen." },
          { title: "Verharding", text: "Onkruidbestrijding op paden en pleinen." },
          { title: "Blad", text: "Bladruimen in het najaar." },
          { title: "Seizoen", text: "Voor- en najaarsbeurten, en onderhoud in vakantieperiodes." },
        ],
      },
    ],
  },
];

export function getService(slug: string) {
  const service = services.find((item) => item.slug === slug);
  if (!service) {
    throw new Error(`Onbekende dienst: ${slug}`);
  }
  return service;
}

export const steps = [
  {
    title: "Oriënterend gesprek",
    short: "We inventariseren uw wensen en ideeën. Het gesprek is vrijblijvend.",
    long: "We beginnen met een gesprek. Uw wensen en ideeën zetten we op een rij: hoe u buiten wilt zitten, wat er moet blijven en wat er weg kan. Het mag een tuin bij huis zijn of groen bij een bedrijf. U zit nergens aan vast.",
    focus: "Hoe de plek gebruikt wordt, en wat u per se wilt houden.",
  },
  {
    title: "Werkbezoek",
    short: "We komen bij u thuis of bij het bedrijfspand. Daar zien we de sfeer van de omgeving.",
    long: "Daarna komen we langs, bij u thuis of bij het bedrijfspand. Alleen op het adres zelf is de sfeer van de omgeving te zien: het licht, de buren, de gevel, de grond. Die sfeer nemen we mee in het ontwerp. Een tekening vanaf de keukentafel slaat die stap over.",
    focus: "Ligging, huis of pand, en de sfeer die er al is.",
  },
  {
    title: "Schetsontwerp",
    short: "Het schetsontwerp stemmen we af op de architectuur en op uw leefstijl.",
    long: "We maken een schetsontwerp in harmonie met de architectuur en met uw leefstijl. Overleg hoort daarbij. U moet het plan herkennen voordat er geschept of geplant wordt. In de schets komen beplanting, verharding en bouwkundige delen samen.",
    focus: "Of het plan past bij de architectuur en bij hoe u buiten leeft.",
  },
  {
    title: "Uitwerking en aanleg",
    short: "We werken het plan uit en leggen de tuin of het groen aan.",
    long: "Klopt de schets, dan werken we het plan uit en leggen we aan: grond, verharding, metselwerk, hout en groen. Wilt u alleen het ontwerp, dan begeleiden we de uitvoering desgewenst. Onderhoud kan daarna bij ons blijven, in een vaste ronde of als voor- en najaarsbeurt.",
    focus: "Of de tuin na de aanleg ook bij te houden blijft.",
  },
] as const;

export const seasons = [
  {
    label: "Voorjaar",
    text: "Bemesten, verticuteren, zaaien en de voorjaarsbeurt. Heggen en heesters krijgen hun snoei.",
  },
  {
    label: "Zomer",
    text: "Maaien, heggen knippen en onkruid bijhouden, zodat het groen in de zomer niet dichtgroeit.",
  },
  {
    label: "Najaar",
    text: "Bladruimen en de najaarsbeurt, zodat gazon en plantvakken weer vrij liggen.",
  },
  {
    label: "Tussendoor",
    text: "Borders, verhardingen en bomen vragen ook buiten die twee beurten om een keer extra.",
  },
] as const;

export const audiences = [
  { title: "Particulieren", text: "De tuin bij uw woning: ontwerp, aanleg en het onderhoud daarna." },
  { title: "Bedrijven", text: "Groen en verharding bij het bedrijfspand, van aanleg tot de seizoensbeurt." },
  { title: "Instellingen", text: "Groen bij een instelling, van plantvak tot de voor- en najaarsbeurt." },
  { title: "Zorgcentra", text: "De buitenruimte bij een zorgcentrum, aangelegd en bijgehouden." },
  { title: "Gemeenten", text: "Hoogwaardig openbaar groen: aanleg, snoei, blad en de voor- en najaarsbeurt." },
] as const;

export const faq = [
  {
    q: "Hoe verloopt een eerste gesprek?",
    a: "We starten met een vrijblijvend oriënterend gesprek. Daarin inventariseren we uw wensen en ideeën. Daarna komen we langs voor een werkbezoek, bij u thuis of bij het bedrijfspand. Op het adres zelf zien we de sfeer van de omgeving. Die sfeer nemen we mee in het schetsontwerp.",
  },
  {
    q: "Werken jullie ook voor bedrijven en gemeenten?",
    a: "Ja. We werken voor particulieren, bedrijven, instellingen, zorgcentra en gemeenten. Naast tuinen bij huis verzorgen we hoogwaardig openbaar groen.",
  },
  {
    q: "Doen jullie ook boomverzorging en kap?",
    a: "Ja. We snoeien bomen, doen een boomveiligheidscontrole, vragen een kapvergunning aan, kappen en frezen stobben weg. Ook verplanten, versnipperen en bemestingsadvies horen daarbij.",
  },
  {
    q: "Kunnen jullie ontwerp én aanleg doen?",
    a: "Ja. We maken het schetsontwerp en voeren de aanleg uit. Alleen een ontwerp kan ook. Desgewenst begeleiden we de uitvoering als u die zelf doet.",
  },
] as const;

export type ProjectImage = {
  id: string;
  src: string;
  alt: string;
  width: number;
  height: number;
};

export const projectImages: ProjectImage[] = Array.from({ length: 22 }, (_, index) => {
  const nr = String(index + 1).padStart(2, "0");
  return {
    id: `project-${nr}`,
    src: `/img/projecten/project-${nr}.png`,
    alt: "Project",
    width: 320,
    height: 213,
  };
});

export const servicePaths = services.map((service) => service.href);
