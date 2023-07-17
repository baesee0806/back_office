import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { firestore } from "../apis/firebaseService.js";
import { collection, onSnapshot } from "firebase/firestore";
function BoardDtail() {
  const ref = useParams();
  const [dtailBoardData, setDtailBoardData] = useState([]);
  const getDtailBoardData = async () => {
    const q = collection(firestore, "board");
    const querySnapshot = await onSnapshot(q, (querySnapshot) => {
      querySnapshot.forEach((doc) => {
        if (doc.id === ref.id) {
          setDtailBoardData(doc.data());
        }
      });
    });
  };
  useEffect(() => {
    getDtailBoardData();
  }, []);
  console.log(dtailBoardData);
  return <div>BoardDtail</div>;
}

export default BoardDtail;
