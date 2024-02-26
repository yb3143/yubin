import styled from "styled-components";
import { SmlButton } from "./PrimarySmlBtn";

const SecondaryBtn = () => {
  return <ScdButton>ScdBtn</ScdButton>;
};

const ScdButton = styled(SmlButton)`
  border: 1px solid #9935ff;
  background: #ffffff;
  color: #861dee;

  &:hover {
    background: #f8f0ff;
  }
  &:focus {
    border: 1px solid #6e0ad1;
    background: #ffffff;
  }
`;

export default SecondaryBtn;
