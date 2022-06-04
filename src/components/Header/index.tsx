import styled from "styled-components";
import { HiOutlineMenu } from "react-icons/hi";

export default function Header() {
  return (
    <Container>
      <Logo>
        Advocacia
        <br />
        Uehara
      </Logo>
      <HiOutlineMenu className="menu-icon" />
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 80px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  box-sizing: border-box;
  padding: 0 20px;

  background-color: #2c2c2c;

  .menu-icon {
    font-size: 30px;
    color: #e0a067;
  }
`;

const Logo = styled.p`
  font-family: Playball;
  font-size: 30px;
  text-align: center;

  color: #e0a067;
`;
