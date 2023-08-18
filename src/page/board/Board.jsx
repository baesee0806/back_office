import React from "react";
import styled from "styled-components";
import BoardHeader from "../../components/board/BoardHeader.jsx";
import BoardBody from "../../components/board/BoardBody.jsx";
import BoardCreateBTN from "../../components/board/BoardCreateBTN.jsx";
import { useQuery } from "@tanstack/react-query";
import { firebaseGetBoards } from "../../apis/board/board.js";
function Board() {
  const { data: boardData } = useQuery({
    queryKey: ["boardData"],
    queryFn: firebaseGetBoards,
  });

  return (
    <>
      <BoradLayout>
        <Table>
          <BoardHeader />
          {boardData?.map((item, index) => {
            return (
              <BoardBody
                index={index}
                item={item}
                key={item.id}
                view={item.view}
              />
            );
          })}
        </Table>
      </BoradLayout>
      {/* pagenation area */}
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
  border-collapse: collapse;
  border-spacing: 0;
  border: 1px solid #000;
`;

export default React.memo(Board);
