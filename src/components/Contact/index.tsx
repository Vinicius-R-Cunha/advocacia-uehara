import { BsFillTelephoneFill } from "react-icons/bs";
import background from "../../assets/background.jpeg";
import styled from "styled-components";
import { ContainerNameProp } from "../../types";

export default function Contact() {
  return (
    <Container name="contact">
      <BackgroundImage src={background} alt="" />
      <BackgroundDarkness />

      <Title>Atendimento por Telefone</Title>
      <Description>Clique no botão e entre em contato agora mesmo.</Description>
      <Button href="tel:11942369346">
        <BsFillTelephoneFill className="phone-icon" />
        (11) 94236-9346
      </Button>
    </Container>
  );
}

const Container = styled.div<ContainerNameProp>`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 22px 0;

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
  width: 80%;

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
  letter-spacing: 1px;
  line-height: 18px;
  text-align: center;
  color: #e1e1e1;

  z-index: 0;
`;

const Button = styled.a`
  all: unset;

  width: 210px;
  height: 49px;

  font-size: 16px;
  font-weight: 700;
  letter-spacing: 0.2px;
  color: #ffffff;

  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: 20px;
  gap: 5px;

  background-color: #e0a067;
  border-radius: 6px;

  z-index: 0;

  .phone-icon {
    font-size: 18px;
  }
`;
