# Ping

Site: https://ping-bekk.vercel.app/

## Innholdsfortegnelse

- [Ping](#ping)
  - [🥞 Stack](#🥞-stack)
- [🛠️ Oppsett av prosjekt](#🛠️-oppsett-av-prosjekt)
  - [Klon repo til prosjektet](#klon-repo-til-prosjektet)
  - [Oppsett av miljøvariabler](#oppsette-av-miløvariabler)
  - [Kjøring](#kjøring)
- [🎨 Hvordan gjøre endringer](#🎨-hvordan-gjøre-endringer)
  - [Endre styling til nettsiden](#endre-styling-til-nettsiden)
    - [Bytte farger på nettsiden](#bytte-farger-på-nettsiden)
    - [Bytte font](#bytte-font)
  - [Bytte logo + navn](#bytte-logo--navn)
  - [Bytte kart](#bytte-kart)
- [☁️ Bruk av Airtable](#☁️-bruk-av-airtable)

## 🥞 Stack

- Framework - [Reactjs v18.2](https://react.dev/)
- Build System - [Vite v4.3](https://vitejs.dev/)
- Language - [TypeScript](https://www.typescriptlang.org/)
- Hosting - [Vercel](https://vercel.com/)
- Styling - [Styled Components v6.0](https://styled-components.com/)


# 🛠️ Oppsett av prosjekt

## Klon repo til prosjektet:

```
git clone https://github.com/bekk/sommerprosjekt-ping.git
```

## Oppsette av miløvariabler:

Oprett en .env fil og legg til: 

VITE_AIRTABLE_API_KEY="apikey"

Opprett .env.dev og legg til:  
   
* VITE_AIRTABLE_BASE_ID="mybaseid-testdata"

Opprett en .env.prod fil og legg til:

* VITE_AIRTABLE_BASE_ID="mybaseid"

## Kjøring

 ```
npm i
```
For å kjøre dev:
 ```
npm run dev
```
For å kjøre prod:
 ```
npm run prod
```

# 🎨 Hvordan gjøre endringer
Gjør disse endringene for å tilpasse siden slik du ønsker. 
Nettisden inkluderer en  "Praktisk info side", "Programside" og "Kartside"

## Endre styling til nettsiden
### Bytte farger på nettsiden:
I [App.css](./frontend/src/App.css), ligger fargene for nettsiden. Rediger fargekodene for å endre farger på nettsiden, dette gjøres i :root funksjonen, se bilde under.
Fargekodene som kan endres er vist under: 
  - Bakgrunn for siden: —background-color: #1F1F1F;
  - Farge på hoved-teksten: —text-color: #F8F8F8;
  - Spesialfarge: —blokk-color: #D4FF26;
  - Farge på rom i program: —rom-color: #A6A6A6;

![Alt text](assets/color-codes.jpg?raw=true "Fargekoder")


### Bytte font:
For å endre fonten til nettsiden legg til ønskede fonter i "assets" mappen, og legg til path til filene i [App.css](./frontend/src/App.css) filen. 

  ```
  @font-face {
  font-family: 'FONT NAME';
  src: url('./assets/path_to_file.woff2') format('woff2'),
       url('./assets/path_to_file.woff') format('woff'),
       url('./assets/path_to_file.ttf') format('truetype');
  }

```

## Bytte logo + navn:
Inne i [public](./frontend/public/Deform0505-negativ-2.png) bytt ut bilde av logoen i ønsket format. 
I [Forside.tsx](./frontend/src/pages/Forside.tsx), skriv navn på arrangement mellom <LOGO> taggene. 


## Bytte kart: 
Inne i [public](./frontend/public/Kart.png)  bytte ut bilde av kartet i ønsket format. 



**Legg til ønsket informasjon i praktisk info** 

Skriv inn den ønsket informasjonen som skal vises i praktisk info. Dette gjør du ved å legge til informasjonen i description taggen inne i [PraktiskInfo.tsx](./frontend/src/pages/PraktiskInfo.tsx), se bilde under.

![Alt text](assets/description-info.jpg?raw=true "decritption")



# ☁️ Bruk av [Airtable](https://airtable.com/)
Inne i airtable er det definert to tabeller, en med data for foredrag og en med data for stands. Under finnes en forklaring av hvilke felter som er inkludert i tabellene, og hvordan du kan legge til et ny record.

**Legge til et nytt foredrag:**
1. Legg til tittel på foredrag i **tittel** kolonne
2. Velg rom foredraget skal holdes i **rom** kolonne
3. Skriv ned start-tiden for foredraget med kolon i **tid_fra** kolonne
4. Skriv navn på foredragsholder i **foredragsholder** kolonne
5. Skriv nevn varigheten på foredraget i **varighet** kolonne
6. Skriv ned beskrivelse for foredrag  **foredrag** kolonne
7. Velg **alle** de relevante kategoriene i **"kategori"** kolonne


**For å legge til et rom som skal brukes:**
  1. Trykk på feltet i rom-kolonne
  2.  Skriv inn romnavn
  3.  Trykk på "add option"

**For å legge til en ny kategori:**
  1. Trykk på feltet i kategori-kolonne
  2.  Skriv inn navn på kategorien
  3.  Trykk på "add option"

**Legge til i stands:**
1. Legg til tittel på stand i "tittel" kolonne
2. Velg rom foredraget skal holdes i"rom" kolonne
3. Skriv ned start-tiden for foredraget med kolon i "tid_fra" kolonne
4. Skriv navn på foredragsholder i "foredragsholder" kolonne
5. Skriv nevn varigheten på foredraget i "varighet" kolonne

