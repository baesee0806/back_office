import React from "react";
import styled from "styled-components";
import { FaPencilAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
function BoardCreateBTN() {
  const navigate = useNavigate();
  return (
    <CreateNavigateBTN
      onClick={() => {
        navigate("/board/create");
      }}
    >
      <FaPencilAlt />
    </CreateNavigateBTN>
  );
}
const CreateNavigateBTN = styled.button`
  position: fixed;
  bottom: 50px;
  right: 50px;
  border: none;
  font-size: 30px;
  cursor: pointer;
  background-color: inherit;
`;
export default BoardCreateBTN;
