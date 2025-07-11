import "./App.css";
import { PraktiskInfo } from "./pages/PraktiskInfo";
import { Navbar } from "./components/Navbar";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Program } from "./pages/Program.tsx";
import styled from "styled-components";
import useData from "./hooks/useData.ts";
import { Forside } from "./pages/Forside.tsx";
import { Kart } from "./pages/Kart.tsx";
import { EventType, AirtableRecordType, FetchDataType } from "./types.ts";
import { mockAirtableRecords } from "./assets/data/Progam.tsx";

const mapEvents = (data: AirtableRecordType[]): EventType[] => {
  return data.map(
    (item: AirtableRecordType): EventType => ({
      id: item.id,
      tittel: item.fields.tittel ? item.fields.tittel : "Tittel mangler",
      rom: item.fields.rom ? item.fields.rom : "",
      tidFra: item.fields.tid_fra,
      foredragsholder: item.fields.foredragsholder
        ? item.fields.foredragsholder
        : "",
      varighet: item.fields.varighet ? item.fields.varighet : 0,
      beskrivelse: item.fields.beskrivelse ? item.fields.beskrivelse : "",
      kategoriList: item.fields.kategorier
        ? item.fields.kategorier.sort((a, b) => a.localeCompare(b))
        : [],
    })
  );
};

function App() {
  const foredrag: FetchDataType = useData("foredrag");
  const arraySrcs = ["/logo.png", "/sirkelmedkryss.svg", "/sirkelmedpil.svg"];
  console.log(foredrag);

  return (
    <>
      <>
        {arraySrcs.map((e) => (
          <img key={e} src={e} style={{ display: "none" }} />
        ))}
        <BrowserRouter basename="/">
          <Navbar />
          <Routes>
            <Route path="/" element={<Forside />}></Route>
            <Route path="/praktiskinfo" element={<PraktiskInfo />}></Route>
            <Route
              path="/program/foredrag"
              element={
                <StyledProgram>
                  <Program eventList={mapEvents(mockAirtableRecords)} />
                </StyledProgram>
              }
            ></Route>
            <Route path="/kart" element={<Kart />}></Route>

            {/* Redirects */}
            <Route
              path="/program"
              element={<Navigate to="/program/foredrag" replace />}
            ></Route>
            <Route path="*" element={<Navigate to="/" replace />}></Route>
          </Routes>
        </BrowserRouter>
      </>
    </>
  );
}

export default App;

const StyledProgram = styled.div`
  height: 90%;
`;
