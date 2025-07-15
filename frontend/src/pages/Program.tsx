import { EventType } from "../types";
import { Tidsbolk } from "../components/Tidsbolk.tsx";
import styled from "styled-components";

export type Props = {
  eventList: EventType[];
};

export function Program({ eventList }: Props) {
  const tidsbolkDict: { [key: string]: EventType[] } = {};

  eventList.forEach((event) => {
    const id = event.tidFra;
    if (tidsbolkDict[id]) {
      tidsbolkDict[id].push(event);
    } else {
      tidsbolkDict[id] = [event];
    }
  });

  return (
    <>
      <StyledProgram>
        {Object.values(tidsbolkDict).map((groupedEventList: EventType[]) => (
          <StyledTidsBolk key={groupedEventList[0].tidFra}>
            <h3 className="tidoverskrift">{groupedEventList[0].tidFra}</h3>
            <Tidsbolk eventList={groupedEventList} />
          </StyledTidsBolk>
        ))}
      </StyledProgram>
    </>
  );
}

//styling av tidsbolk
const StyledTidsBolk = styled.div`
  width: 100%;
  height: 90%;

  .tidoverskrift {
    text-align: left;
  }
`;

const StyledProgram = styled.div`
  max-width: 650px;
  display: flex;
  flex-direction: column;
  margin: 2rem auto;
`;
