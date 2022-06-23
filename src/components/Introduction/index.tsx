import styled from "styled-components";
import background from "../../assets/background.jpeg";
import { BsWhatsapp } from "react-icons/bs";
import Header from "../Header";
import { ContainerNameProp } from "../../types";

export default function Introduction({ openWhatsApp }: any) {
  return (
    <Container name="home">
      <Header />

      <BackgroundImage src={background} alt="" />
      <BackgroundDarkness />

      <InsideContainer>
        <Title>Escritório de Advocacia Especializado</Title>
        <Description>Criminalista • Civil • Família</Description>
        <Button onClick={openWhatsApp}>
          Entre em contato
          <BsWhatsapp className="phone-icon" />
        </Button>
      </InsideContainer>
    </Container>
  );
}

const Container = styled.div<ContainerNameProp>`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 190px 0 65px 0;

  position: relative;

  @media (min-width: 800px) {
    padding: 400px 0 205px 0;
  }
`;

const InsideContainer = styled.div`
  width: 90%;
  max-width: 1300px;

  display: flex;
  flex-direction: column;

  z-index: 0;

  @media (min-width: 800px) {
    box-sizing: border-box;
  }
`;

const BackgroundImage = styled.img`
  width: 100%;
  height: 100%;

  object-fit: cover;

  position: absolute;
  top: 0;
  left: 0;

  z-index: -3;
`;

const BackgroundDarkness = styled.div`
  width: 100%;
  height: 100%;

  background-color: rgba(0, 0, 0, 0.76);

  position: absolute;
  top: 0;
  left: 0;

  z-index: 0;
`;

const Title = styled.p`
  width: 90%;

  font-family: Frank Ruhl Libre;
  font-weight: 700;
  font-size: 24.1px;
  letter-spacing: 2px;
  line-height: 28px;
  color: #d8cca3;

  margin-bottom: 15px;

  z-index: 0;

  @media (min-width: 800px) {
    font-size: 30px;
  }

  @media (min-width: 1250px) {
    font-size: 40px;

    margin-bottom: 25px;
  }
`;

const Description = styled.p`
  width: 90%;

  font-size: 16px;
  letter-spacing: 1.4px;
  line-height: 19px;
  color: #e1e1e1;

  z-index: 0;

  @media (min-width: 800px) {
    font-size: 19px;
  }

  @media (min-width: 1250px) {
    font-size: 22px;
  }
`;

const Button = styled.button`
  all: unset;

  width: 230px;
  height: 49px;

  font-size: 16px;
  font-weight: 700;
  letter-spacing: 0.2px;
  color: #ffffff;

  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: 30px;
  gap: 5px;

  background-color: #e0a067;
  border-radius: 6px;

  z-index: 0;

  .phone-icon {
    font-size: 21px;

    margin-left: 3px;
    margin-bottom: 2px;
  }

  @media (min-width: 800px) {
    width: 260px;
    height: 57px;

    font-size: 19px;
  }

  @media (min-width: 1250px) {
    margin-top: 40px;
  }
`;
