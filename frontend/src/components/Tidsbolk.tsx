import { EventType } from "../types";
import { Blokk } from "./Blokk.tsx";
import styled from "styled-components";
import { Props } from "../pages/Program.tsx";

export function Tidsbolk({ eventList }: Props) {
  const blokkDict: { [key: string]: EventType[] } = {};

  eventList.forEach((event) => {
    const id = event.rom;
    if (blokkDict[id]) {
      blokkDict[id].push(event);
    } else {
      blokkDict[id] = [event];
    }
  });

  const sortedBlokkList: [string, EventType[]][] = Object.entries(
    blokkDict
  ).sort(([a], [b]) => a.localeCompare(b));

  return sortedBlokkList.map((blokkObj: [string, EventType[]]) => (
    <div key={`${blokkObj[1][0].tittel}`}>
      <StyledBlokk>
        <div className={"horizontal-line-top"}></div>
        <StyledRom>{blokkObj[1][0].rom}</StyledRom>
        <Blokk eventList={blokkObj[1]} />
        <div className={"horizontal-line-bottom"}></div>
      </StyledBlokk>
      <br />
    </div>
  ));
}

const StyledBlokk = styled.div`
  border-left: 6px solid var(--blokk-color);
  padding-bottom: 5px;
  padding-left: 10px;
  padding-top: 20px;
  position: relative;
  text-align: left;

  .horizontal-line-bottom {
    background-color: var(--blokk-color);
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    height: 3px;
    width: 5%;
  }
  .horizontal-line-top {
    background-color: var(--blokk-color);
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 3px;
    width: 5%;
  }
`;

const StyledRom = styled.div`
  color: var(--rom-color);
`;
