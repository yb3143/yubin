import styled from "styled-components";
import { OutSmlBtn } from "./OutlinedSmlBtn";

const ArrowBtn = () => {
  return (
    <>
      <ArrowButton>
        <img src="icon/left.svg" alt="left" />
      </ArrowButton>
      <ArrowButton>
        <img src="icon/right.svg" alt="right" />
      </ArrowButton>
    </>
  );
};

export const ArrowButton = styled(OutSmlBtn)`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;

export default ArrowBtn;
