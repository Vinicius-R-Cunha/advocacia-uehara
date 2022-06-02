import Contact from "./components/Contact";
import InputsForm from "./components/InputsForm";
import Socials from "./components/Socials";
import { BsWhatsapp } from "react-icons/bs";
import "./styles/reset.css";
import "./styles/index.css";
import styled from "styled-components";

export default function App() {
  return (
    <>
      <Contact />
      <InputsForm />
      <Socials />
      <WhatsIcon
        onClick={() =>
          window.open(
            `https://api.whatsapp.com/send?phone=5511942369346`,
            "_blank"
          )
        }
      >
        <BsWhatsapp />
      </WhatsIcon>
    </>
  );
}

const WhatsIcon = styled.div`
  width: 50px;
  height: 50px;

  font-size: 23px;
  color: #ffffff;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #0ba360;

  border-radius: 50%;

  box-shadow: -2px 5px 25px #033821;

  position: fixed;
  bottom: 15px;
  left: 15px;

  z-index: 2;
`;
