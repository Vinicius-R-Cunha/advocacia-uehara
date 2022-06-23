import { useEffect, useState } from "react";
import styled from "styled-components";
import areasArray, { areasArrayInterface } from "../../data/actingAreas";
import { ContainerNameProp } from "../../types";
import ReadMore from "../ReadMore";

export default function ActingAreas() {
  const [actingAreasArray, setActingAreasArray] = useState([] as any[]);
  const [scrollX, setScrollX] = useState(0);

  useEffect(() => {
    setActingAreasArray(addReadMoreIsOpenKey(areasArray));
  }, []);

  function addReadMoreIsOpenKey(array: areasArrayInterface[]) {
    return array.map((obj) => ({ ...obj, readMoreIsOpen: false }));
  }

  function readMoreSelection(area: any, open: boolean) {
    setActingAreasArray(() => {
      for (let i = 0; i < actingAreasArray.length; i++) {
        if (actingAreasArray[i].name === area.name) {
          actingAreasArray[i].readMoreIsOpen = open;
        }
      }
      return [...actingAreasArray];
    });
  }

  return (
    <Container name="actingAreas">
      <Title>Áreas de atuação</Title>

      <Areas
        style={{
          marginLeft: scrollX,
          transition: "all ease 0.9s",
        }}
      >
        {actingAreasArray.map((area: any) => {
          return (
            <Area key={area.name}>
              <Image src={area.src} alt="" />
              <BackgroundDarkness />

              {area.readMoreIsOpen && (
                <ReadMore area={area} readMoreSelection={readMoreSelection} />
              )}

              <Name>{area.name}</Name>
              <Info onClick={() => readMoreSelection(area, true)}>
                Ler sobre
              </Info>
            </Area>
          );
        })}
      </Areas>
    </Container>
  );
}

const Container = styled.div<ContainerNameProp>`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 30px 0 90px 0;

  background-color: #ffffff;
`;

const Title = styled.p`
  width: 80%;

  font-family: Frank Ruhl Libre;
  font-weight: 700;
  font-size: 28px;
  letter-spacing: 2px;
  line-height: 28px;
  text-align: center;
  color: #c37127;

  @media (min-width: 850px) {
    font-size: 33px;
    padding: 15px 0;
  }
`;

const Areas = styled.div`
  width: 90%;

  position: relative;

  @media (min-width: 426px) {
    width: 390px;
  }

  @media (min-width: 850px) {
    width: 100%;

    display: grid;
    justify-content: center;
    grid-template-columns: 390px 390px;
    column-gap: 4%;
    row-gap: 15px;
  }

  @media (min-width: 1669px) {
    grid-template-columns: 390px 390px 390px 390px;
    column-gap: 33px;
  }
`;

const Area = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 28px;

  flex: 0 0 auto;

  position: relative;

  border-radius: 6px;
  box-shadow: 0 4px 45px -19px rgba(0, 0, 0, 0.5);

  @media (min-width: 1270px) {
    width: 390px;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 340px;

  object-fit: cover;

  border-radius: 6px 6px 0 0;
`;

const BackgroundDarkness = styled.div`
  width: 100%;
  height: 340px;

  background-color: rgba(0, 0, 0, 0.1);

  position: absolute;
  top: 0;
  left: 0;

  z-index: 0;
`;

const Name = styled.p`
  width: 90%;
  height: 86px;

  font-family: Frank Ruhl Libre;
  font-weight: 700;
  font-size: 22px;
  letter-spacing: 2px;
  line-height: 28px;
  text-align: center;
  color: #c37127;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Info = styled.div`
  all: unset;

  width: 100px;
  height: 35px;

  font-family: Roboto;
  font-size: 17px;
  font-weight: 700;
  letter-spacing: 1px;
  color: #ffffff;

  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: 10px;
  gap: 5px;

  background-color: #e0a067;
  border-radius: 6px;

  position: absolute;
  bottom: 101px;
  left: 15px;

  z-index: 0;

  cursor: pointer;
`;
