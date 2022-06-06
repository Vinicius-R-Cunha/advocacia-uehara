import styled from "styled-components";

export default function WhoWeAre() {
  return (
    <Container>
      <Title>Quem somos</Title>
      <Description>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel tenetur
        sequi est dolorem, labore ducimus?
      </Description>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: #2c2c2c;
`;

const Title = styled.p`
  padding: 20px 0;

  font-family: Frank Ruhl Libre;
  font-weight: 700;
  font-size: 28px;
  letter-spacing: 2px;
  line-height: 28px;
  color: #c37127;
`;

const Description = styled.p`
  width: 80%;

  font-size: 16px;
  letter-spacing: 1px;
  line-height: 18px;
  text-align: justify;
  color: grey;

  padding-bottom: 30px;
`;
