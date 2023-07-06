import React from "react";
import styled from "styled-components";
import Nav from "../components/navbar/Nav.jsx";

function Board() {
  return (
    <BoradLayout>
      <Table>
        <Thead>
          <Tr>
            <Th>번호</Th>
            <Th>제목</Th>
            <Th>작성자</Th>
            <Th>등록일</Th>
            <Th>조회</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>1</Td>
            <Td>리엑트 useEffect에 대해서</Td>
            <Td>배성완</Td>
            <Td>23.07.05</Td>
            <Td>0</Td>
          </Tr>
        </Tbody>
      </Table>
    </BoradLayout>
  );
}
const BoradLayout = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
const Table = styled.table`
  width: 100%;
`;
const Thead = styled.thead`
  width: 100%;
  height: 50px;
`;
const Th = styled.th`
  border-bottom: 1px solid #000;
`;
const Tbody = styled.tbody`
  width: 100%;
  height: 35px;
`;
const Td = styled.td`
  border-bottom: 1px solid #000;
`;

const Tr = styled.tr`
  width: 100%;
  text-align: center;
`;

export default Board;
