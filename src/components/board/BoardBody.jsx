import React from "react";
import styled from "styled-components";
function BoardBody() {
  return (
    <Tbody>
      <Tr>
        <Td>1</Td>
        <Td>리엑트 useEffect에 대해서</Td>
        <Td>배성완</Td>
        <Td>23.07.05</Td>
        <Td>0</Td>
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
export default BoardBody;
