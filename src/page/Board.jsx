import React, { useEffect, useState } from "react";
import styled from "styled-components";
import BoardHeader from "../components/board/BoardHeader.jsx";
import BoardBody from "../components/board/BoardBody.jsx";
import BoardCreateBTN from "../components/board/BoardCreateBTN.jsx";
import { firestore } from "../apis/firebaseService.js";
import { collection, getDocs, onSnapshot } from "firebase/firestore";

function Board() {
  const [data, setData] = useState([]);
  const firebaseGetBoardData = () => {
    onSnapshot(collection(firestore, "board"), (snapshot) => {
      const temp = [];
      snapshot.forEach((doc) => {
        temp.push(doc.data());
      });
      setData(temp);
    });
  };
  useEffect(() => {
    firebaseGetBoardData();
  }, []);
  return (
    <>
      <BoradLayout>
        <Table>
          <BoardHeader />
          {data.map((item, value) => {
            return <BoardBody item={item} key={value} />;
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

export default Board;
