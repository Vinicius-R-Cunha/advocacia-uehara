import background from "../../assets/background_inputs.avif";
import styled from "styled-components";
import { ContainerNameProp } from "../../types";

export default function InputsForm() {
  function handleSubmit(e: React.MouseEvent) {
    e.preventDefault();
  }

  return (
    <Container name="sendMessage">
      <BackgroundImage src={background} alt="" />
      <BackgroundDarkness />

      <Title>Entre em contato:</Title>
      <Input type="text" placeholder="Nome" />
      <Input type="text" placeholder="E-mail" />
      <Input type="text" placeholder="Telefone" />
      <Textarea placeholder="Mensagem"></Textarea>
      <Button onClick={(e) => handleSubmit(e)}>Enviar mensagem</Button>
    </Container>
  );
}

const Container = styled.form<ContainerNameProp>`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 45px 0 50px 0;

  gap: 18px;

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

  background-color: rgba(0, 0, 0, 0.55);

  position: absolute;
  top: 0;
  left: 0;

  z-index: 0;
`;

const Title = styled.p`
  font-family: Frank Ruhl Libre;
  font-weight: 700;
  font-size: 29px;
  letter-spacing: 2px;
  line-height: 28px;
  text-align: center;
  color: #d5c79a;

  margin-bottom: 8px;

  z-index: 0;
`;

const Input = styled.input`
  all: unset;

  width: 88%;
  height: 45px;

  font-weight: 400;
  font-size: 17px;
  letter-spacing: 1px;
  line-height: 28px;
  color: #000000;
  text-indent: 12px;

  border-radius: 6px;

  background-color: #ffffff;

  z-index: 0;
  ::placeholder {
    font-weight: 700;
    color: rgba(0, 0, 0, 0.4);
  }
`;

const Textarea = styled.textarea`
  width: 88%;
  height: 130px;

  font-weight: 400;
  font-size: 15.5px;
  letter-spacing: 0.5px;
  line-height: 28px;
  color: #000000;

  box-sizing: border-box;
  padding: 8px 9px 8px 13px;

  resize: none;

  border-radius: 6px;

  background-color: #ffffff;

  z-index: 0;

  :focus {
    outline: none;
  }

  ::placeholder {
    font-weight: 700;
    color: rgba(0, 0, 0, 0.4);
  }
`;

const Button = styled.button`
  all: unset;

  width: 55%;
  height: 49px;

  font-size: 17px;
  font-weight: 700;
  letter-spacing: 1px;
  color: #ffffff;

  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: 10px;
  gap: 5px;

  background-color: #e0a067;
  border-radius: 6px;

  z-index: 0;

  .phone-icon {
    font-size: 18px;
  }
`;
