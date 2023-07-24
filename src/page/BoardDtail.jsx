import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { getAuth } from "firebase/auth";
import DetailHeader from "../components/board/dtail/DetailHeader.jsx";
import DetailBody from "../components/board/dtail/DetailBody.jsx";
import DetailComment from "../components/board/dtail/DetailComment.jsx";
import DetailBoardBTN from "../components/board/dtail/DetailBoardBTN.jsx";
import { useGetDetailBoardData } from "../hooks/useGetDetailBoardData.js";
function BoardDtail() {
  const ref = useParams();
  const userId = getAuth().currentUser.uid;
  const [detailBoardData, setDetailBoardData] = useState([]);
  const btnControlData = {
    delete: { btnType: "삭제하기", ref },
    update: { btnType: "수정하기", ref },
  };

  useEffect(() => {
    useGetDetailBoardData(ref, setDetailBoardData);
  }, []);

  return (
    <div>
      <DetailHeader Data={detailBoardData} key={detailBoardData.btnType} />
      <DetailBody Data={detailBoardData} key={detailBoardData.btnType} />
      {detailBoardData.uid === userId ? (
        <BtnBox>
          <DetailBoardBTN
            btnControlData={btnControlData.delete}
            key={btnControlData.delete.btnType}
          />
          <DetailBoardBTN
            btnControlData={btnControlData.update}
            key={btnControlData.update.id}
          />
        </BtnBox>
      ) : null}
      <DetailComment docCreateId={detailBoardData.uid} />
    </div>
  );
}

const BtnBox = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: flex-end;
`;
export default BoardDtail;
