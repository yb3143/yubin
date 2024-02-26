import styled from "styled-components";
import ArrowBtn from "./Button/ArrowBtn";
import DeleteBtn from "./Button/DeleteBtn";
import OutlinedBtn from "./Button/OutlinedBtn";
import OutlinedSmlBtn from "./Button/OutlinedSmlBtn";
import OutlinedXSBtn from "./Button/OutlineXXSBtn";
import OutlinedXXSBtn from "./Button/OutlineXXSBtn";
import PrimaryBtn from "./Button/PrimaryBtn";
import PrimarySmlBtn from "./Button/PrimarySmlBtn";
import SecondaryBtn from "./Button/SecondaryBtn";

const ProjectButton = () => {
  return (
    <Box>
      <ArrowBtn />
      <DeleteBtn />
      <OutlinedBtn />
      <OutlinedSmlBtn />
      <OutlinedXSBtn />
      <OutlinedXXSBtn />
      <PlusBtn />
      <PrimaryBtn />
      <PrimarySmlBtn />
      <SecondaryBtn />
      <ToggleBtn />
    </Box>
  );
};

const Box = styled.span`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  gap: 10px;
`;

export default ProjectButton;
