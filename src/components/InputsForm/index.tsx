import background from "../../assets/background_inputs.jpg";
import styled from "styled-components";
import { ContainerNameProp } from "../../types";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { useState } from "react";
import { toast } from "react-toastify";
import emailjs from "@emailjs/browser";

export interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export default function InputsForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  } as FormData);

  function handleSubmit(e: React.MouseEvent) {
    e.preventDefault();
    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.message
    ) {
      return toast.error("Preencha todos os campos!", {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }

    emailjs
      .send(
        process.env.REACT_APP_SERVICE_ID as string,
        process.env.REACT_APP_TEMPLATE_ID as string,
        formData as any,
        process.env.REACT_APP_PUBLIC_KEY as string
      )
      .then(
        (result) => {
          toast.success("Mensagem enviada!", {
            position: "bottom-left",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          setFormData({ name: "", email: "", phone: "", message: "" });
        },
        (error) => {
          console.log(error.text);
          setFormData({ name: "", email: "", phone: "", message: "" });
        }
      );
  }

  function handleFormData(e: React.ChangeEvent) {
    var element = e.target as HTMLInputElement;
    setFormData({ ...formData, [element.name]: element.value });
  }

  return (
    <Container name="sendMessage">
      <BackgroundImage src={background} alt="" />
      <BackgroundDarkness />

      <Title>Entre em contato:</Title>

      <FormSocials>
        <Form>
          <Input
            name="name"
            type="text"
            placeholder="Nome"
            onChange={(e) => handleFormData(e)}
            value={formData.name}
          />
          <Input
            name="email"
            type="text"
            placeholder="E-mail"
            onChange={(e) => handleFormData(e)}
            value={formData.email}
          />
          <Input
            name="phone"
            type="text"
            placeholder="Telefone"
            onChange={(e) => handleFormData(e)}
            value={formData.phone}
          />
          <Textarea
            name="message"
            placeholder="Mensagem"
            onChange={(e) => handleFormData(e)}
            value={formData.message}
          ></Textarea>
          <Button onClick={(e) => handleSubmit(e)}>Enviar mensagem</Button>
        </Form>

        <Socials>
          <SocialDiv>
            <Social>
              <BsFillTelephoneFill className="phone-icon" />
            </Social>
            <Description>(11) 94236-9346</Description>
          </SocialDiv>
          <SocialDiv>
            <Social>
              <MdEmail className="email-icon" />
            </Social>
            <Description>tamy_uehara@hotmail.com</Description>
          </SocialDiv>
        </Socials>
      </FormSocials>
    </Container>
  );
}

const Container = styled.div<ContainerNameProp>`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 45px 0 50px 0;

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

  background-color: rgba(0, 0, 0, 0.65);

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
  text-align: center;
  color: #d5c79a;

  margin-bottom: 38px;

  z-index: 0;

  @media (min-width: 800px) {
    font-size: 34px;
  }
`;

const FormSocials = styled.div`
  width: 100%;
  max-width: 900px;

  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 1000px) {
    justify-content: space-between;
  }
`;

const Form = styled.form`
  width: 88%;
  max-width: 500px;

  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 18px;

  z-index: 0;
`;

const Input = styled.input`
  all: unset;

  width: 100%;
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
  width: 100%;
  height: 130px;

  font-weight: 400;
  font-size: 17px;
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

  width: 60%;
  max-width: 220px;
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

  cursor: pointer;

  .phone-icon {
    font-size: 18px;
  }

  @media (min-width: 800px) {
    height: 55px;

    font-size: 20px;
  }
`;

const Socials = styled.div`
  display: none;

  padding: 35px 0;

  margin-bottom: 100px;

  gap: 40px;

  z-index: 0;

  @media (min-width: 1000px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
`;

const SocialDiv = styled.div`
  width: auto;

  display: flex;
  justify-content: flex-start;

  align-items: center;

  gap: 2px;

  .phone-icon {
    font-size: 39px;
    color: #d5c79a;
  }

  .email-icon {
    font-size: 49px;
    color: #d5c79a;
  }
`;

const Social = styled.div`
  width: 70px;

  display: flex;
  justify-content: center;
`;

const Description = styled.p`
  font-family: Frank Ruhl Libre;
  font-weight: 700;
  font-size: 17px;
  letter-spacing: 1px;
  line-height: 28px;
  text-align: center;
  color: #d5c79a;

  @media (min-width: 500px) {
    font-size: 20px;
  }
`;
