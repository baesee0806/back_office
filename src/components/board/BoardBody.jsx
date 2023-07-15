import React from "react";
import styled from "styled-components";

function BoardBody(props) {
  console.log(props);
  return (
    <Tbody>
      <Tr>
        <Td>{"##"}</Td>
        <Td>{props.item.title}</Td>
        <Td>{props.item.userName}</Td>
        <Td>{"***"}</Td>
        <Td>{"##"}</Td>
      </Tr>
    </Tbody>
  );
}
const Tbody = styled.tbody`
  width: 100%;
  height: 35px;
`;
const Tr = styled.tr`
  width: 100%;
  text-align: center;
`;
const Td = styled.td`
  border-bottom: 1px solid #000;
`;
export default React.memo(BoardBody);
