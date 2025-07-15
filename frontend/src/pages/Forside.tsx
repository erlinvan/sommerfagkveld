import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { useState } from "react";

const ImageWithTextOverlay = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoad = () => {
    setIsLoading(false);
  };

  const blurAnimatedStyle = {
    filter: isLoading ? "opacity(0)" : "opacity(1)",
    transition: "filter 6s",
  };

  return (
    <Container>
      <StyledImage
        style={blurAnimatedStyle}
        src="/logosommerfagkveld.svg"
        alt="Sommerfagkveld"
        onLoad={handleLoad}
      />
    </Container>
  );
};

export function Forside() {
  return (
    <ForsideContainer>
      <LogoContainer>
        <ImageWithTextOverlay />
        <StyledText href="https://ny-skjer.bekk.no/arrangementer/d49601ce-4cab-458d-90a8-dd9edb3d829f">
          Meld deg på her!
        </StyledText>
      </LogoContainer>
      <ProgramButton
        to={"/program"}
        activeclassname="active"
        className={"body-text"}
      >
        <p>Program</p>
        <StyledImg src="/sirkelmedpil.svg" alt="pil" />
      </ProgramButton>
    </ForsideContainer>
  );
}

const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const StyledText = styled.a`
  font-size: 3rem;
  font-weight: bold;
  text-align: center;
  margin: 0;
`;

const ProgramButton = styled(NavLink)<{ activeclassname: string }>`
  display: flex;
  gap: 1rem;
  align-self: end;
  text-decoration: none;
  max-width: 10rem;

  &:hover,
  &:focus {
    text-decoration: underline;
    font-weight: bold;
  }
`;

const ForsideContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  margin-bottom: 2rem;

  @media (min-width: 830px) {
    margin-bottom: 5rem;
  }
`;

const Container = styled.div`
  display: flex;
  align-self: center;
  align-items: center;
  height: calc(100vh - 20rem);
`;

const StyledImage = styled.img`
  filter: opacity(0);

  max-width: 80vw;
  max-height: 100%;

  @media (min-width: 830px) {
    max-height: 70vh;
  }

  @media (min-width: 1600px) {
    max-height: 100vh;
  }
`;

const StyledImg = styled.img`
  max-width: 90vw;
  margin-left: 0 auto;
`;
