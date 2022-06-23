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
`;

const Title = styled.p`
  padding: 25px 0;

  font-family: Frank Ruhl Libre;
  font-weight: 700;
  font-size: 28px;
  letter-spacing: 2px;
  line-height: 28px;
  color: #c37127;
`;

const Description = styled.div`
  width: 80%;

  font-size: 16px;
  letter-spacing: 1px;
  line-height: 18px;
  text-align: justify;
  color: grey;

  padding-bottom: 20px;
`;

const Paragraph = styled.p`
  margin-bottom: 20px;
`;
