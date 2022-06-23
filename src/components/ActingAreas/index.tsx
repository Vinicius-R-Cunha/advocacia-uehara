import styled from "styled-components";
import areasArray from "../../data/actingAreas";

export default function ActingAreas() {
  return (
    <Container>
      <Title>Áreas de atuação</Title>

      {areasArray.map((area) => {
        return (
          <Area key={area.id}>
            <Image src={area.src} alt="" />
            <BackgroundDarkness />

            <Name>{area.name}</Name>
            <Info>Ler sobre</Info>
          </Area>
        );
      })}
    </Container>
  );
}

const Container = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 30px 0;

  background-color: #ffffff;

  gap: 28px;
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
`;

const Area = styled.div`
  width: 90%;

  display: flex;
  flex-direction: column;
  align-items: center;

  border-radius: 6px;
  box-shadow: 0 4px 45px -19px rgba(0, 0, 0, 0.5);

  position: relative;
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
`;
