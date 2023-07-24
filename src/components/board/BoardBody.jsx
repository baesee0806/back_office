import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

function BoardBody(props) {
  const navigate = useNavigate();
  const data = props.item.data();
  const docRef = props.docRef;
  return (
    <Tbody
      onClick={() => {
        navigate(`/board/${docRef}`);
      }}
    >
      <Tr>
        <Td>{"##"}</Td>
        <Td>{data.title}</Td>
        <Td>{data.userName}</Td>
        <Td>{"***"}</Td>
        <Td>{"##"}</Td>
      </Tr>
    </Tbody>
  );
}
const Tbody = styled.tbody`
  width: 100%;
  height: 35px;
  cursor: pointer;
`;
const Tr = styled.tr`
  width: 100%;
  text-align: center;
`;
const Td = styled.td`
  border-bottom: 1px solid #000;
`;
export default React.memo(BoardBody);
