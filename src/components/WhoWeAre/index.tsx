import styled from "styled-components";
import { ContainerNameProp } from "../../types";
import img from "../../assets/background.jpeg";

export default function WhoWeAre() {
  return (
    <Container name="whoWeAre">
      <Title>Quem somos</Title>

      <DescriptionImage>
        <Description>
          <Paragraph>
            Escritório de advocacia, com atuação especializada nas áreas do
            Direito Criminal, Direito de Família e Direito Civil, comprometido
            em atender as necessidades do cliente de forma individualizada,
            íntegra e transparente.
          </Paragraph>
          <Paragraph>
            Atendimento personalizado, com o compromisso e determinação de
            entregar resultados e soluções jurídicas estratégicas e seguras, a
            fim de resguardar os direitos dos nossos clientes.
          </Paragraph>
        </Description>

        <Image src={img} />
      </DescriptionImage>
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

const DescriptionImage = styled.div`
  width: 90%;
  max-width: 1100px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  gap: 10px;

  padding-bottom: 20px;

  @media (min-width: 900px) {
    flex-direction: row;

    gap: 40px;
  }
`;

const Description = styled.div`
  width: 100%;

  font-size: 16px;
  letter-spacing: 1px;
  line-height: 19px;
  text-align: justify;
  color: grey;

  @media (min-width: 800px) {
    font-size: 20px;
  }
`;

const Paragraph = styled.p`
  text-indent: 30px;

  margin-bottom: 20px;

  @media (min-width: 800px) {
    line-height: 25px;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 300px;

  object-fit: cover;

  @media (min-width: 900px) {
    width: 900px;
  }
`;
