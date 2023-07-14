import React from "react";
import styled from "styled-components";
import BoardHeader from "../components/board/BoardHeader.jsx";
import BoardBody from "../components/board/BoardBody.jsx";
import BoardCreateBTN from "../components/board/BoardCreateBTN.jsx";

function Board() {
  return (
    <>
      <BoradLayout>
        <Table>
          <BoardHeader />
          <BoardBody />
        </Table>
      </BoradLayout>
      <BoardCreateBTN />
    </>
  );
}
const BoradLayout = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  margin: 25px auto 0 auto;
`;
const Table = styled.table`
  width: 100%;
`;

export default Board;
