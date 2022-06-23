import styled from "styled-components";
import { IoClose } from "react-icons/io5";

export default function ReadMore({ area, readMoreSelection }: any) {
  return (
    <Container>
      <IoClose
        className="close-icon"
        onClick={() => readMoreSelection(area, false)}
      />
      <Description>{area.description}</Description>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 340px;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: rgba(0, 0, 0, 0.8);

  position: absolute;
  z-index: 1;

  .close-icon {
    font-size: 40px;
    color: #f1f1f1;

    position: absolute;
    top: 10px;
    right: 10px;

    z-index: 1;

    cursor: pointer;
  }
`;

const Description = styled.p`
  width: 83%;

  font-size: 17px;
  letter-spacing: 1px;
  line-height: 25px;
  text-align: justify;
  color: #f1f1f1;
`;
