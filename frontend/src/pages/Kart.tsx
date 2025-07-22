import { styled } from "styled-components";

export function Kart() {
  return (
    <div>
      <StyledImg src="kart.svg" alt="kart" />
    </div>
  );
}

const StyledImg = styled.img`
  max-width: 100%;
  margin: 0 auto;
`;
