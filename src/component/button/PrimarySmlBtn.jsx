import styled from "styled-components";
import { Button } from "./PrimaryBtn";

const PrimarySmlBtn = () => {
  return <SmlButton>smlButton</SmlButton>;
};

export const SmlButton = styled(Button)`
  width: 122px;
  height: 40px;
  padding: 7px 16px;
  border-radius: 6px;
  font-size: 16px;
  font-weight: 400;
`;

export default PrimarySmlBtn;
