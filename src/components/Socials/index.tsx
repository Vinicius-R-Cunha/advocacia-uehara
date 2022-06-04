import { BsWhatsapp, BsInstagram } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import styled from "styled-components";

export default function Socials() {
  return (
    <Container>
      <SocialDiv>
        <Social>
          <BsWhatsapp />
        </Social>
        <Description>(11) 94236-9346</Description>
      </SocialDiv>
      <SocialDiv>
        <Social>
          <MdEmail />
        </Social>
        <Description>tamy_uehara@hotmail.com</Description>
      </SocialDiv>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 35px 0;

  gap: 20px;

  background-color: #ffffff;
`;

const SocialDiv = styled.div`
  width: 90%;

  display: flex;
  align-items: center;

  gap: 15px;
`;

const Social = styled.div`
  width: 50px;
  height: 50px;

  font-size: 23px;
  color: #ffffff;

  display: flex;
  justify-content: center;
  align-items: center;

  margin-left: 15px;

  background-color: #c37127;

  border-radius: 16px;
`;

const Description = styled.p`
  font-family: Frank Ruhl Libre;
  font-weight: 700;
  font-size: 17px;
  letter-spacing: 1px;
  line-height: 28px;
  text-align: center;
  color: #c37127;
`;
