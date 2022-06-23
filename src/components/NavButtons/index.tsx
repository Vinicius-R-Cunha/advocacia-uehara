import { Link } from "react-scroll";
import styled from "styled-components";
import navButtonsArray from "../../data/navButtons";

export default function NavButtons() {
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

const Container = styled.div`
  display: none;

  gap: 30px;

  position: absolute;
  right: 0;
  z-index: 1;

  @media (min-width: 1125px) {
    display: flex;
  }

  @media (min-width: 1380px) {
    gap: 45px;
  }
`;

const NavButton = styled(Link)`
  font-family: Frank Ruhl Libre;
  font-weight: 700;
  font-size: 18px;
  letter-spacing: 1px;
  line-height: 18px;
  color: #ffffff;

  display: block;

  cursor: pointer;
`;
