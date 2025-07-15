import { AirtableRecordType } from "../../types";

export const mockAirtableRecords: AirtableRecordType[] = [
  {
    id: "rec1",
    fields: {
      tittel: "Felles intro",
      rom: "Kantina",
      tid_fra: "16:25",
      foredragsholder: "Andreas Bøstrand",
      varighet: 5,
      beskrivelse: "",
      kategorier: [],
    },
  },
  {
    id: "rec2",
    fields: {
      tittel: "Hvordan være en leder",
      rom: "Kantina",
      tid_fra: "16:30",
      foredragsholder: "Thea Svenkerud Rydjord",
      varighet: 15,
      beskrivelse: "",
      kategorier: ["Ledelse"],
    },
  },
  {
    id: "rec3",
    fields: {
      tittel: "Kreativitet kan omsettes til data",
      rom: "Kantina",
      tid_fra: "16:30",
      foredragsholder: "Hanna Sendstad",
      varighet: 20,
      beskrivelse: `
Har du noen gang hatt en dag hvor alt flyter? Ideene strømmer på, arbeidet føles lett, og kreativiteten blomstrer. Og så har du kanskje opplevd det motsatte – en dag hvor alt føles tungt, motivasjonen er borte, og du helst vil gi opp. Hva er det egentlig som gjør at vi svinger slik?

Arbeidslivsforsker Theresa Amabile gjennomførte et omfattende forskningsprosjekt på to av verdens ledende selskaper innen innovasjon. Hun lot de ansatte skrive daglige dagboknotater for å avdekke hvordan indre motivasjon, stress og følelser påvirker kreativiteten – og hva som gjorde dem så suksessfulle. Men mens forskningen pågår, går det ene selskapet konkurs. Hva skjedde?

I dette foredraget får du svaret – sammen med innsikt fra min egen masteroppgave. I løpet av et halvt år sporet jeg mitt eget stress, motivasjon og følelser for å forstå hvordan jeg som enkeltindivid kan påvirke min egen kreativitet. Jeg deler resultatene fra denne datainnsamlingen, og gir deg konkrete tips til hvordan du kan bruke lignende metoder for å styrke din egen motivasjon og kreativitet – både på jobb og i hverdagen.`,
      kategorier: ["Design", "Data"],
    },
  },
  {
    id: "rec4",
    fields: {
      tittel: "Devhacks",
      rom: "Hovedøya",
      tid_fra: "16:30",
      foredragsholder: "Vemund Lund",
      varighet: 15,
      beskrivelse: "",
      kategorier: ["DevEx"],
    },
  },
  {
    id: "rec5",
    fields: {
      tittel: "Språkmodeller i praksis",
      rom: "Hovedøya",
      tid_fra: "16:30",
      foredragsholder: "Fredrik Wilhelm Butler Wang, Frimann Bergvik Garmann",
      varighet: 15,
      beskrivelse: `Det er mye snakk om språkmodeller om dagen, men hvordan fungerer dette egentlig? Hos Utdanningsdirektoratet har vi utviklet et saksbehandlingssystem (spennende ikke sant) ved hjelp av språkmodeller, og i denne presentasjonen skal vi snakke om hvordan dette prosjektet utviklet seg, samt vise hvordan man kan anvende språkmodeller i praksis.`,
      kategorier: ["AI"],
    },
  },
  {
    id: "rec6",
    fields: {
      tittel: "Pause",
      rom: "Kantina",
      tid_fra: "17:00",
      foredragsholder: "",
      varighet: 5,
      beskrivelse: "An event focusing on Vue.js ecosystem.",
      kategorier: [],
    },
  },

  {
    id: "rec6",
    fields: {
      tittel: "Vet vi egentlig om det vi lager funker? 🔍",
      rom: "Kantina",
      tid_fra: "17:05",
      foredragsholder: "Elena Snellingen",
      varighet: 15,
      beskrivelse: `Som utviklere og designere ønsker vi å lage løsninger som skaper verdi – ikke bare leverer funksjonalitet. Men hvordan vet vi om det faktisk fungerer? Ofte går vi rett fra idé til implementering uten å være tydelige på hva vi prøver å oppnå, eller hvordan vi skal måle effekt. Da mister vi muligheten til å lære – og risikerer å bygge videre på antakelser fremfor innsikt.I dette foredraget får du en praktisk introduksjon til hvordan hypotesedrevet utvikling kan hjelpe team med å teste ideer, lære raskere og jobbe mer målrettet🙌`,
      kategorier: ["Produktuvikling"],
    },
  },
  {
    id: "rec7",
    fields: {
      tittel:
        "Hvordan skaper vi fremtidens digitale løsinger - og hvordan kommer de til å se ut?",
      rom: "Kantina",
      tid_fra: "17:05",
      foredragsholder: "Markus Lavoll Gundersrud",
      varighet: 15,
      beskrivelse: `Den teknologiske utviklingen går raskere enn noen gang. AI sitt inntog utfordrer både hvordan vi jobber og løsningene vi skaper. Hvordan ser fremtiden ut for morgendagens utviklere og designere?`,
      kategorier: ["AI", "Design"],
    },
  },
  {
    id: "rec8",
    fields: {
      tittel: "Vi sa ikke nei til drømmebestillingen. Vi sa: vent litt.",
      rom: "Hovedøya",
      tid_fra: "17:05",
      foredragsholder: "Kristoffer Æsøy",
      varighet: 15,
      beskrivelse: `Av og til får du alt du kan drømme om rett i fanget.
Et tydelig ønske om at du skal bygge et nytt produkt. Det krever ny og spennende teknologi, og du har lyst til å jobbe med det. Kanskje har du til og med lyst til å bruke det selv!

Men så gnager en liten usikkerhet: Er dette egentlig det rette å lage, med den tiden og de ressursene vi har?

Bli med på eventyret der vi gjorde vårt beste for å stikke kjepper i hjulene for drømmebestillingen, og endte opp med å bygge den likevel. 😎`,
      kategorier: ["Produktuvikling", "Måling"],
    },
  },
  {
    id: "rec9",
    fields: {
      tittel:
        "Én kodebase, flere nettsider: Slik bygde vi Frontend as a Service",
      rom: "Hovedøya",
      tid_fra: "17:05",
      foredragsholder: "Sandra Lekve, Christian Scheie Hein",
      varighet: 15,
      beskrivelse:
        "Tre nye nettsider, én felles frontend og et teknisk løft som fikk både utviklere og redaktører til å juble! Vi bygde en skalerbar plattform, lanserte på rekordtid – og fikset en helt ny side på bare én uke. Dette er historien om hvordan vi tok sjansen, gønna på og leverte (uten å miste nattesøvnen)! 🚀",
      kategorier: ["Frontend", "CMS"],
    },
  },
  {
    id: "rec10",
    fields: {
      tittel: "Pause",
      tid_fra: "17:35",
      varighet: 25,
      beskrivelse: "",
      kategorier: [],
      foredragsholder: "",
      rom: "",
    },
  },
  {
    id: "rec11",
    fields: {
      tittel: "Rotfest- best fra bunnen av",
      rom: "Kantina",
      tid_fra: "18:00",
      foredragsholder: "Kristin Håberg",
      varighet: 30,
      beskrivelse:
        "Hvordan markerer man egentlig 25 år som Bekk? Man lager selvfølgelig sin helt egne festival! I Vrådal – midt i Telemark, mellom fjorder og fjell – tok vi fag, håndverk, tradisjon og musikk, og blandet det med moderne vri og ekte Bekk-ånd. Vi skal fortelle om hvordan vi laget jubileumet vårt; fra idémyldring, konseptutvikling og gjennomføring- og hvorfor vi mener ting blir best når det lages av bekkere fra bunnen av",
      kategorier: [],
    },
  },
  {
    id: "rec12",
    fields: {
      tittel: "Lyntaler",
      rom: "Kantina",
      tid_fra: "18:30",
      foredragsholder: "Sommerjobbere",
      varighet: 30,
      beskrivelse: "Lyntaler med sommerjobbere",
      kategorier: [],
    },
  },
];
