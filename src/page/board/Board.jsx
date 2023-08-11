import React, { useEffect, useState } from "react";
import styled from "styled-components";
import BoardHeader from "../../components/board/BoardHeader.jsx";
import BoardBody from "../../components/board/BoardBody.jsx";
import BoardCreateBTN from "../../components/board/BoardCreateBTN.jsx";
import { firestore } from "../../apis/firebaseService.js";
import { collection, onSnapshot } from "firebase/firestore";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { firebaseGetBoards } from "../../apis/board/board.js";
function Board() {
  const [data, setData] = useState([]);

  const firebaseGetBoardData = () => {
    onSnapshot(collection(firestore, "board"), (snapshot) => {
      const temp = [];

      snapshot.forEach((doc) => {
        temp.push(doc);
      });
      setData(temp);
    });
  };

  useEffect(() => {
    firebaseGetBoardData();
  }, []);

  const { data: boardData } = useQuery({
    queryKey: ["boardData"],
    queryFn: firebaseGetBoards,
  });

  return (
    <>
      <BoradLayout>
        <Table>
          <BoardHeader />
          {/* {data.map((item) => {
            return <BoardBody item={item} key={item.id} docRef={item.id} />;
          })} */}
          {boardData?.map((item) => {
            return <BoardBody item={item} key={item.docId} view={item.view} />;
          })}
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

export default React.memo(Board);
