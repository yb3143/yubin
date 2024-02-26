import styled from "styled-components";
import { OutlineButton } from "./OutlinedBtn";

const OutlinedSmlBtn = () => {
  return <OutSmlBtn>Btn 40</OutSmlBtn>;
};

export const OutSmlBtn = styled(OutlineButton)`
  width: 122px;
  height: 40px;
  padding: 8px 16px;
  border-radius: 6px;
  font-size: 16px;
  font-weight: 400;
`;

export default OutlinedSmlBtn;
