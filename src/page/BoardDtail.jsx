import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { firestore } from "../apis/firebaseService.js";
import { collection, onSnapshot } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import DetailHeader from "../components/board/dtail/DetailHeader.jsx";
import DetailBody from "../components/board/dtail/DetailBody.jsx";
import DetailComment from "../components/board/dtail/DetailComment.jsx";
function BoardDtail() {
  const ref = useParams();
  const userId = getAuth().currentUser.uid;
  const [detailBoardData, setDetailBoardData] = useState([]);
  const getDtailBoardData = async () => {
    const q = collection(firestore, "board");
    const querySnapshot = await onSnapshot(q, (querySnapshot) => {
      querySnapshot.forEach((doc) => {
        if (doc.id === ref.id) {
          setDetailBoardData(doc.data());
        }
      });
    });
  };
  useEffect(() => {
    getDtailBoardData();
  }, []);

  return (
    <div>
      <DetailHeader Data={detailBoardData} key={detailBoardData.id} />
      <DetailBody Data={detailBoardData} key={detailBoardData.id} />
      <DetailComment />
      {detailBoardData.uid === userId ? (
        <div>
          <button>삭제하기</button>
          <button>수정하기</button>
        </div>
      ) : null}
    </div>
  );
}

export default BoardDtail;
