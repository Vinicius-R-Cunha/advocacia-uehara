import styled from "styled-components";
import navButtonsArray from "../../data/navButtons";

export default function Footer() {
  return (
    <Container>
      {navButtonsArray.map((button) => {
        return <NavButton key={button.name}>{button.name}</NavButton>;
      })}
    </Container>
  );
}

const Container = styled.footer`
  width: 100%;

  padding: 30px 0;

  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: #f3f3f3;
`;

const NavButton = styled.p`
  font-size: 18px;
  line-height: 30px;
  letter-spacing: 1.4px;
`;
