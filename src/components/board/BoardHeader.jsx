import React from "react";
import styled from "styled-components";

function BoardHeader() {
  return (
    <Thead>
      <Tr>
        <Th>번호</Th>
        <Th>제목</Th>
        <Th>작성자</Th>
        <Th>등록일</Th>
        <Th>조회</Th>
      </Tr>
    </Thead>
  );
}
const Thead = styled.thead`
  width: 100%;
  height: 50px;
`;
const Tr = styled.tr`
  width: 100%;
  text-align: center;
`;
const Th = styled.th`
  border-bottom: 1px solid #000;
`;
export default BoardHeader;
