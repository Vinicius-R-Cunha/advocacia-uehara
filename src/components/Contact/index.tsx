import { BsFillTelephoneFill } from "react-icons/bs";
import styled from "styled-components";

export default function Contact() {
  return (
    <Container>
      <Title>Atendimento por Telefone</Title>
      <Description>Clique no botão e entre em contato agora mesmo.</Description>
      <Button>
        <BsFillTelephoneFill className="phone-icon" />
        (11) 94236-9346
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

  padding: 22px 0;

  background-color: #2c2c2c;
`;

const Title = styled.p`
  width: 80%;

  font-family: Frank Ruhl Libre;
  font-weight: 700;
  font-size: 25px;
  letter-spacing: 2px;
  line-height: 28px;
  text-align: center;
  color: #ffffff;

  margin-bottom: 15px;
`;

const Description = styled.p`
  width: 80%;

  font-size: 16px;
  letter-spacing: 1px;
  line-height: 18px;
  text-align: center;
  color: #ffffff;
`;

const Button = styled.button`
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

  .phone-icon {
    font-size: 18px;
  }
`;
