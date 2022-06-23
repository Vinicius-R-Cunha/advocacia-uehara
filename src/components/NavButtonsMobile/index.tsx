import styled from "styled-components";
import openDropDown from "../../animations/openDropDown";
import navButtonsArray from "../../data/navButtons";
import { Link } from "react-scroll";

interface Props {
  menuIsOpen: boolean;
}

export default function NavButtonsMobile({ menuIsOpen, setMenuIsOpen }: any) {
  return (
    <Container menuIsOpen={menuIsOpen}>
      {navButtonsArray.map((button) => {
        return (
          <NavButton
            key={button.name}
            to={button.to}
            smooth={true}
            offset={0}
            duration={800}
            onClick={() => setMenuIsOpen(false)}
          >
            {button.name}
          </NavButton>
        );
      })}
    </Container>
  );
}

const Container = styled.nav<Props>`
  width: 100%;

  display: ${(props) => (props.menuIsOpen ? "block" : "none")};

  animation: ${openDropDown} 250ms ease-in-out forwards;
  transform-origin: top center;

  position: absolute;
  top: 90px;

  @media (min-width: 850px) {
    top: 145px;
  }

  @media (min-width: 1125px) {
    display: none;
  }
`;

const NavButton = styled(Link)`
  font-family: Frank Ruhl Libre;
  font-weight: 700;
  font-size: 16px;
  letter-spacing: 2px;
  line-height: 18px;
  color: #000000;

  padding: 15px 0 15px 15px;
  background-color: #ffffff;

  display: block;

  cursor: pointer;
`;
