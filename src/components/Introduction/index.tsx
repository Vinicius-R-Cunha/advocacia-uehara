import styled from "styled-components";
import background from "../../assets/background.jpeg";
import { BsWhatsapp } from "react-icons/bs";

export default function Introduction() {
  return (
    <Container>
      <BackgroundImage src={background} alt="" />
      <BackgroundDarkness />

      <Title>Escritório de Advocacia Especializado</Title>
      <Description>Criminalista • Cível • Família</Description>
      <Button>
        <BsWhatsapp className="phone-icon" />
        Chame no WhatsApp
      </Button>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 90px 0;

  position: relative;
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
  font-size: 25px;
  letter-spacing: 2px;
  line-height: 28px;
  text-align: center;
  color: #d8cca3;

  margin-bottom: 15px;

  z-index: 0;
`;

const Description = styled.p`
  width: 80%;

  font-size: 16px;
  letter-spacing: 1.4px;
  line-height: 19px;
  text-align: center;
  color: #e1e1e1;

  z-index: 0;
`;

const Button = styled.button`
  all: unset;

  width: 240px;
  height: 49px;

  font-size: 16px;
  font-weight: 700;
  letter-spacing: 0.2px;
  color: #ffffff;

  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: 25px;
  gap: 5px;

  background-color: #1db954;
  border-radius: 6px;

  z-index: 0;

  .phone-icon {
    font-size: 25px;

    margin-right: 1px;
    margin-bottom: 2px;
  }
`;
