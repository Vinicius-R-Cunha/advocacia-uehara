import styled from "styled-components";

export default function InputsForm() {
  return (
    <Container>
      <Title>Entre em contato:</Title>
      <Input type="text" placeholder="Nome" />
      <Input type="text" placeholder="E-mail" />
      <Input type="text" placeholder="Telefone" />
      <Textarea placeholder="Mensagem"></Textarea>
      <Button>Enviar mensagem</Button>
    </Container>
  );
}

const Container = styled.form`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 45px 0 50px 0;

  gap: 18px;

  background-color: black;
`;

const Title = styled.p`
  font-family: Frank Ruhl Libre;
  font-weight: 700;
  font-size: 27px;
  letter-spacing: 2px;
  line-height: 28px;
  text-align: center;
  color: #ffffff;

  margin-bottom: 8px;
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

  width: 68%;
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

  .phone-icon {
    font-size: 18px;
  }
`;
