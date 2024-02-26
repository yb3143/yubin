import styled from "styled-components";
import { OutSmlBtn } from "./OutlinedSmlBtn";

const OutlinedXSBtn = () => {
  return <OutXSBtn>Btn 36</OutXSBtn>;
};

const OutXSBtn = styled(OutSmlBtn)`
  height: 36px;
  padding: 6px 16px;
  font-weight: 400;
`;

export default OutlinedXSBtn;
