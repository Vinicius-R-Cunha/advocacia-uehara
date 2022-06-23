import styled from "styled-components";
import navButtonsArray from "../../data/navButtons";

export default function NavButtonsMobile() {
  return (
    <Container>
      {navButtonsArray.map((button) => {
        return <NavButton key={button.name}>{button.name}</NavButton>;
      })}
    </Container>
  );
}

const Container = styled.nav`
  width: 100%;

  position: absolute;
  top: 90px;
`;

const NavButton = styled.p`
  font-family: Frank Ruhl Libre;
  font-weight: 700;
  font-size: 16px;
  letter-spacing: 2px;
  line-height: 18px;
  color: #000000;

  padding: 15px 0 15px 15px;
  background-color: #ffffff;

  cursor: pointer;

  :hover {
    background-color: red;
  }
`;
