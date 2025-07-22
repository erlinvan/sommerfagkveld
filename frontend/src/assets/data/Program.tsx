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
    id: "rec5",
    fields: {
      tittel: "Gjør hverdagen enklere med Raycast",
      rom: "Hovedøya",
      tid_fra: "16:30",
      foredragsholder: "Vemund Lund",
      varighet: 15,
      beskrivelse:
        "Lyst til å gjøre hverdagen litt enklere? I dette foredraget får du smarte triks og enkle grep som kan spare deg for både tid og frustrasjon.",
      kategorier: ["Produktivitet"],
    },
  },
  {
    id: "rec6",
    fields: {
      tittel: "Pause",
      rom: "Kantina",
      tid_fra: "17:05",
      foredragsholder: "",
      varighet: 5,
      beskrivelse: "",
      kategorier: [],
    },
  },

  {
    id: "rec6",
    fields: {
      tittel:
        "Hvordan skaper vi fremtidens digitale løsinger - og hvordan kommer de til å se ut?",
      rom: "Kantina",
      tid_fra: "17:10",
      foredragsholder: "Markus Lavoll Gundersrud",
      varighet: 15,
      beskrivelse: `Den teknologiske utviklingen går raskere enn noen gang. AI sitt inntog utfordrer både hvordan vi jobber og løsningene vi skaper. Hvordan ser fremtiden ut for morgendagens utviklere og designere?`,
      kategorier: ["AI", "Design"],
    },
  },
  {
    id: "rec7",
    fields: {
      tittel: "Vet vi egentlig om det vi lager funker? 🔍",
      rom: "Kantina",
      tid_fra: "17:10",
      foredragsholder: "Elena Snellingen",
      varighet: 15,
      beskrivelse: `Som utviklere og designere ønsker vi å lage løsninger som skaper verdi – ikke bare leverer funksjonalitet. Men hvordan vet vi om det faktisk fungerer? Ofte går vi rett fra idé til implementering uten å være tydelige på hva vi prøver å oppnå, eller hvordan vi skal måle effekt. Da mister vi muligheten til å lære – og risikerer å bygge videre på antakelser fremfor innsikt.I dette foredraget får du en praktisk introduksjon til hvordan hypotesedrevet utvikling kan hjelpe team med å teste ideer, lære raskere og jobbe mer målrettet🙌`,
      kategorier: ["Produktuvikling"],
    },
  },
  {
    id: "rec8",
    fields: {
      tittel:
        "Én kodebase, flere nettsider: Slik bygde vi Frontend as a Service",
      rom: "Hovedøya",
      tid_fra: "17:10",
      foredragsholder: "Sandra Lekve, Christian Scheie Hein",
      varighet: 15,
      beskrivelse:
        "Tre nye nettsider, én felles frontend og et teknisk løft som fikk både utviklere og redaktører til å juble! Vi bygde en skalerbar plattform, lanserte på rekordtid – og fikset en helt ny side på bare én uke. Dette er historien om hvordan vi tok sjansen, gønna på og leverte (uten å miste nattesøvnen)! 🚀",
      kategorier: ["Frontend", "CMS"],
    },
  },
  {
    id: "rec9",
    fields: {
      tittel: "Vi sa ikke nei til drømmebestillingen. Vi sa: vent litt.",
      rom: "Hovedøya",
      tid_fra: "17:10",
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
    id: "rec10",
    fields: {
      tittel: "Pause",
      tid_fra: "17:40",
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
      foredragsholder:
        "Kristin Håberg, Sofie Tjønneland Urhaug, Ida Guldbrandsøy",
      varighet: 30,
      beskrivelse:
        "Hvordan markerer man egentlig 25 år som Bekk? Man lager selvfølgelig sin helt egne festival! I Vrådal – midt i Telemark, mellom fjorder og fjell – tok vi fag, håndverk, tradisjon og musikk, og blandet det med moderne vri og ekte Bekk-ånd. Vi skal fortelle om hvordan vi laget jubileumet vårt; fra idémyldring, konseptutvikling og gjennomføring- og hvorfor vi mener ting blir best når det lages av bekkere fra bunnen av",
      kategorier: [],
    },
  },
  {
    id: "rec15",
    fields: {
      tid_fra: "18:30",
      tittel: "Topp 5 (av 5) retroer vi har hatt i sommer",
      beskrivelse: `Vi gir en rask intro til retroene vi har hatt i sommer og rater de!`,
      foredragsholder: "Sander Slinning, Sindre Halleraker, Erica Yang ",
      varighet: 0,
      rom: "Kantina",
      kategorier: [],
    },
  },
  {
    id: "rec16",
    fields: {
      tid_fra: "18:30",
      tittel: "ChatSSB",
      beskrivelse: `Et forsøk på å få en forskningsbachelor inn i prod`,
      foredragsholder: "Elias Trana, Trygve Jørgensen",
      varighet: 0,
      rom: "Kantina",
      kategorier: [],
    },
  },
  {
    id: "rec17",
    fields: {
      tid_fra: "18:30",
      tittel: "En lyntale om klipping og deling av konsertøyeblikk",
      beskrivelse: `Musikkbransjen handler ikke bare om musikk lenger, artister må også være influensere. Det vil de helst slippe. Hvordan kan vi lage et verktøy i VIERLIVE som lar fansen dele konsertøyeblikk, så artistene kan fokusere på det de faktisk brenner for?`,
      foredragsholder: "Dina Louise Bahr Bugge, Sara Sandhaug",
      varighet: 0,
      rom: "Kantina",
      kategorier: [],
    },
  },
  {
    id: "rec18",
    fields: {
      tid_fra: "18:30",
      tittel: "1 år på havet, min seiltur over atlanteren",
      beskrivelse: `Jeg skal snakke om seilturen min over atlanterhavet, og om hvordan det er å leve leve i en båt i 1 år.`,
      foredragsholder: "Ole Thomas Petrusson",
      varighet: 0,
      rom: "Kantina",
      kategorier: [],
    },
  },
  {
    id: "rec19",
    fields: {
      tid_fra: "18:30",
      tittel: "Tegn ideene dine!",
      beskrivelse: `Vi presenterer litt om tegning som verktøy i idémyldring, basert på erfaringene fra et prosjekt med Nordnorsk Design- og Arkitektursenter.`,
      foredragsholder:
        "Catherine Coates Tvete, Frida Staxrud, Jenny Meen Johansen",
      varighet: 0,
      rom: "Kantina",
      kategorier: [],
    },
  },
  {
    id: "rec13",
    fields: {
      tid_fra: "19:00",
      tittel: "Mat",
      beskrivelse: "Vi får servert digg mat fra Ugly Duckling",
      foredragsholder: "Ugly duckling",
      varighet: 60,
      rom: "Kantina",
      kategorier: [],
    },
  },
  {
    id: "rec14",
    fields: {
      tid_fra: "20:00",
      tittel: "Kreativ kveld",
      beskrivelse: `Kreativ kveld sparker i gang for fullt! Her møter du på flere ulike stands, workshops og aktiviteter.`,
      foredragsholder: "",
      varighet: 0,
      rom: "Hele skuret",
      kategorier: [],
    },
  },
];
