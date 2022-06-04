import styled from "styled-components";
import { HiOutlineMenu } from "react-icons/hi";
import logo from "../../assets/logo.png";

export default function Header() {
  return (
    <Container>
      <img className="logo" src={logo} alt="" />
      <Logo>
        Uehara
        <br />
        Advocacia
      </Logo>
      <HiOutlineMenu className="menu-icon" />
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 80px;

  display: flex;
  justify-content: center;
  align-items: center;

  box-sizing: border-box;
  padding: 0 20px;

  gap: 10px;

  background-color: #ffffff;
  /* background-color: #2c2c2c; */

  position: relative;

  .menu-icon {
    font-size: 30px;
    color: #e0a067;

    position: absolute;
    right: 15px;
  }

  .logo {
    height: 65px;
  }
`;

const Logo = styled.p`
  font-family: Playball;
  font-size: 30px;
  text-align: center;

  color: #c37127;
`;
