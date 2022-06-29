import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import styled from "styled-components";

export default function Socials() {
  return (
    <Container>
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

  @media (min-width: 1000px) {
    display: none;
  }
`;

const SocialDiv = styled.div`
  width: 90%;

  display: flex;
  justify-content: flex-start;

  align-items: center;

  gap: 2px;

  .phone-icon {
    font-size: 35px;
    color: #c37127;
  }

  .email-icon {
    font-size: 45px;
    color: #c37127;
  }

  @media (min-width: 426px) {
    justify-content: center;
  }

  @media (min-width: 500px) {
    .phone-icon {
      font-size: 39px;
    }

    .email-icon {
      font-size: 49px;
    }
  }

  @media (min-width: 1000px) {
    width: auto;

    flex-direction: row;
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
  color: #c37127;

  @media (min-width: 500px) {
    font-size: 20px;
  }
`;
