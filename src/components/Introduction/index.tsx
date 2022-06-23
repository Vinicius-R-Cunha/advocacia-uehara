import styled from "styled-components";
import background from "../../assets/background.jpeg";
import { BsWhatsapp } from "react-icons/bs";
import { HiOutlineMenu } from "react-icons/hi";
import logo from "../../assets/logo.png";

export default function Introduction() {
  return (
    <Container>
      <Header>
        <img src={logo} alt="" />
        <Logo>
          Uehara
          <br />
          Advocacia
        </Logo>
        <HiOutlineMenu className="menu-icon" />
      </Header>

      <BackgroundImage src={background} alt="" />
      <BackgroundDarkness />

      <InsideContainer>
        <Title>Escritório de Advocacia Especializado</Title>
        <Description>Criminalista • Civil • Família</Description>
        <Button>
          Entre em contato
          <BsWhatsapp className="phone-icon" />
        </Button>
      </InsideContainer>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 190px 0 65px 0;

  position: relative;
`;

const Header = styled.header`
  width: 90%;

  color: #e5b081;

  display: flex;
  align-items: center;

  box-sizing: border-box;
  padding: 18px 0;

  gap: 10px;

  position: absolute;
  top: 0;

  z-index: 1;

  img {
    height: 65px;

    border-radius: 50%;
  }

  .menu-icon {
    font-size: 32px;

    position: absolute;
    right: 0px;
  }
`;

const Logo = styled.p`
  font-family: Playball;
  font-size: 30px;
  text-align: center;

  text-align: left;

  margin-left: 5px;
`;

const InsideContainer = styled.div`
  width: 90%;

  margin-left: 10px;

  display: flex;
  flex-direction: column;

  z-index: 0;
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
  font-size: 24.1px;
  letter-spacing: 2px;
  line-height: 28px;
  color: #d8cca3;

  margin-bottom: 15px;

  z-index: 0;
`;

const Description = styled.p`
  width: 90%;

  font-size: 16px;
  letter-spacing: 1.4px;
  line-height: 19px;
  color: #e1e1e1;

  z-index: 0;
`;

const Button = styled.button`
  all: unset;

  width: 230px;
  height: 49px;

  font-size: 16px;
  font-weight: 700;
  letter-spacing: 0.2px;
  color: #ffffff;

  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: 30px;
  gap: 5px;

  background-color: #e0a067;
  border-radius: 6px;

  z-index: 0;

  .phone-icon {
    font-size: 21px;

    margin-left: 3px;
    margin-bottom: 2px;
  }
`;
