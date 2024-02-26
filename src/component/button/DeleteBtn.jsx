import styled from "styled-components";
import { OutSmlBtn } from "./OutlinedSmlBtn";

const DeleteBtn = () => {
  return (
    <DeleteButton>
      <img src="icon/Delete.svg" alt="Delete" />
    </DeleteButton>
  );
};

const DeleteButton = styled(OutSmlBtn)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 36px;
  height: 36px;
  padding: 6px;
`;

export default DeleteBtn;
