import styled from "styled-components";
import { Button } from "./PrimaryBtn";

const OutlinedBtn = () => {
  return <OutlineButton>GrayBtn 56</OutlineButton>;
};

export const OutlineButton = styled(Button)`
  width: 192px;
  border: 1px solid #cccccc;
  color: #181818;
  background: #ffffff;

  &:hover {
    background: #f6f6f6;
    border: 1px solid #cccccc;
  }
  &:focus {
    background: #ffffff;
    border: 1px solid #555555;
  }
`;

export default OutlinedBtn;
