import { EventType } from "../types.ts";
import { useState } from "react";
import styled from "styled-components";

type Props = {
  event: EventType;
};

export function Event({ event }: Props): JSX.Element {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <>
      <div
        onClick={() => {
          setOpen(!open);
        }}
      >
        <StyledRow>
          <StyledTittel>{event.tittel}</StyledTittel>
          {event.varighet > 0 && (
            <div id={"right"}>
              <StyledVarighet className={"body-text"}>
                {event.varighet} min
              </StyledVarighet>
            </div>
          )}
        </StyledRow>
        <StyledForedragHolder className={"body-text"}>
          {event.foredragsholder}
        </StyledForedragHolder>
        <CategoryContainer className="body-text-caption">
          {event.kategoriList.map((kategori: string) => (
            <Category key={`${event.id}-${kategori}`}>{kategori}</Category>
          ))}
        </CategoryContainer>
        {open && (
          <StyledBeskrivelse className="description-body-text">
            {event.beskrivelse}
          </StyledBeskrivelse>
        )}
      </div>
    </>
  );
}

const StyledRow = styled.div`
  display: flex;
  align-items: center;
  #right {
    flex: 1;
  }
`;

const StyledVarighet = styled.p`
  margin-top: 3%;
  margin-bottom: 0%;
  text-align: right;
`;

const StyledTittel = styled.h3`
  max-width: 80%;
  margin-bottom: 0%;
  margin-top: 3%;
`;

const StyledForedragHolder = styled.div`
  margin-top: 1%;
  margin-bottom: 10px;
  max-width: 85%;
`;

const StyledBeskrivelse = styled.div`
  max-width: 80%;
  transform-origin: top center;
  animation: growDown 300ms ease-in-out forwards;
  white-space: pre-line;

  @keyframes growDown {
    0% {
      transform: scaleY(0);
    }
    50% {
      transform: scaleY(1.05);
    }
    100% {
      transform: scaleY(1);
    }
  }
`;

const CategoryContainer = styled.div`
  display: flex;
`;

const Category = styled.p`
  padding: 3px 8px 2px 8px;
  border: 1px solid var(--text-color);
  border-bottom-left-radius: 10px 50%;
  border-top-left-radius: 10px 50%;
  border-bottom-right-radius: 10px 50%;
  border-top-right-radius: 10px 50%;
  margin: 0 10px 16px 0;
`;
