import styled from "styled-components";
import { ContainerNameProp } from "../../types";

export default function WhoWeAre() {
  return (
    <Container name="whoWeAre">
      <Title>Quem somos</Title>
      <Description>
        <Paragraph>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel tenetur
          sequi est dolorem, labore ducimus? Lorem ipsum dolor sit amet,
        </Paragraph>

        <Paragraph>
          consectetur adipisicing elit. Inventore libero voluptatibus dicta
          minus, facilis ipsa aspernatur numquam cumque mollitia consectetur non
          error. Nostrum, velit quis.
        </Paragraph>
        <Paragraph>
          consectetur adipisicing elit. Inventore libero voluptatibus dicta
          minus, facilis ipsa aspernatur numquam cumque mollitia consectetur non
          error. Nostrum, velit quis.
        </Paragraph>
      </Description>
    </Container>
  );
}

const Container = styled.div<ContainerNameProp>`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: #ffffff;

  padding-bottom: 25px;
`;

const Title = styled.p`
  font-family: Frank Ruhl Libre;
  font-weight: 700;
  font-size: 28px;
  letter-spacing: 2px;
  line-height: 28px;
  color: #c37127;

  padding: 25px 0;

  @media (min-width: 800px) {
    font-size: 35px;

    padding: 45px 0;
  }
`;

const Description = styled.div`
  width: 80%;
  max-width: 1200px;

  font-size: 16px;
  letter-spacing: 1px;
  line-height: 18px;
  text-align: justify;
  color: grey;

  padding-bottom: 20px;

  @media (min-width: 800px) {
    font-size: 20px;
    line-height: 22px;
  }
`;

const Paragraph = styled.p`
  margin-bottom: 20px;
`;
