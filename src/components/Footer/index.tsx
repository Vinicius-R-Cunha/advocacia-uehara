import styled from "styled-components";
import navButtonsArray from "../../data/navButtons";
import { Link } from "react-scroll";

export default function Footer() {
  return (
    <Container>
      {navButtonsArray.map((button) => {
        return (
          <NavButton
            key={button.name}
            to={button.to}
            smooth={true}
            offset={0}
            duration={800}
          >
            {button.name}
          </NavButton>
        );
      })}
    </Container>
  );
}

const Container = styled.footer`
  width: 100%;

  padding: 15px 0;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: #f3f3f3;

  @media (min-width: 850px) {
    padding: 30px 0;

    flex-direction: row;
    gap: 30px;
  }
`;

const NavButton = styled(Link)`
  font-family: Frank Ruhl Libre;
  font-weight: 700;
  font-size: 18px;
  letter-spacing: 1.4px;
  line-height: 35px;
  color: #000000;

  display: block;

  cursor: pointer;

  @media (min-width: 850px) {
    font-size: 20px;
  }
`;
