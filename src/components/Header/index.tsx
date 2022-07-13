import styled from "styled-components";
import { HiOutlineMenu } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import logo from "../../assets/logo.png";
import NavButtonsMobile from "../NavButtonsMobile";
import { useState } from "react";
import NavButtons from "../NavButtons";

export default function Header() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  return (
    <Container>
      <NavButtonsMobile menuIsOpen={menuIsOpen} setMenuIsOpen={setMenuIsOpen} />

      <InsideContainer>
        <Image src={logo} alt="" />

        {menuIsOpen ? (
          <IoClose onClick={() => setMenuIsOpen(false)} className="menu-icon" />
        ) : (
          <HiOutlineMenu
            onClick={() => setMenuIsOpen(true)}
            className="menu-icon"
          />
        )}
        <NavButtons />
      </InsideContainer>
    </Container>
  );
}

const Container = styled.header`
  width: 100%;

  color: #e5b081;

  display: flex;
  justify-content: center;

  box-sizing: border-box;
  padding: 18px 0;

  gap: 10px;

  position: absolute;
  top: 0;

  z-index: 1;

  @media (min-width: 850px) {
    padding: 40px 0;
  }
`;

const InsideContainer = styled.div`
  width: 90%;

  display: flex;
  align-items: center;

  position: relative;

  .menu-icon {
    font-size: 32px;

    position: absolute;
    right: 0px;
  }

  @media (min-width: 850px) {
    width: 90%;
    max-width: 1300px;

    .menu-icon {
      font-size: 40px;
    }
  }

  @media (min-width: 1125px) {
    .menu-icon {
      display: none;
    }
  }
`;

const Image = styled.img`
  height: 65px;

  @media (min-width: 850px) {
    height: 85px;
  }
`;
