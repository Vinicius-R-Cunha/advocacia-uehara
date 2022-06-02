import styled from "styled-components";

export default function Contact() {
  return (
    <Container>
      <Title>Atendimento por Telefone</Title>
      <Description>Clique no botão e entre em contato agora mesmo.</Description>
      <Button>(11) 94236-9346</Button>
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

  font-size: 24px;
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

  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;

  margin-top: 20px;

  background-color: red;
  border-radius: 40px;
`;
