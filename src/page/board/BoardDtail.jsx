import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { getAuth } from "firebase/auth";
import DetailHeader from "../../components/board/dtail/DetailHeader.jsx";
import DetailBody from "../../components/board/dtail/DetailBody.jsx";
import DetailComment from "../../components/board/dtail/DetailComment.jsx";
import DetailBoardBTN from "../../components/board/dtail/DetailBoardBTN.jsx";
import { useQuery } from "@tanstack/react-query";
import { firebaseDetailBoard } from "../../apis/board/board.js";
function BoardDtail() {
  const ref = useParams();
  const userId = getAuth().currentUser.uid;

  const btnControlData = {
    delete: { btnType: "삭제하기", ref },
    update: { btnType: "수정하기", ref },
  };

  const { data: detailBoardData } = useQuery({
    queryKey: ["detailBoardData", ref],
    queryFn: () => firebaseDetailBoard(ref),
    enabled: !!ref,
  });
  return (
    <>
      {detailBoardData?.map((data) => {
        return (
          <>
            <DetailHeader data={data} key={data.docId} />

            <DetailComment />
          </>
        );
      })}
    </>
    // <div>
    //   <DetailHeader Data={detailBoardData} key={detailBoardData.docId} />
    //   <DetailBody Data={detailBoardData} key={detailBoardData.docId} />
    //   {detailBoardData.uid === userId ? (
    //     <BtnBox>
    //       <DetailBoardBTN
    //         btnControlData={btnControlData.delete}
    //         key={btnControlData.delete.btnType}
    //       />
    //       <DetailBoardBTN
    //         btnControlData={btnControlData.update}
    //         key={btnControlData.update.id}
    //       />
    //     </BtnBox>
    //   ) : null}

    //   <DetailComment docCreateId={detailBoardData.uid} />
    // </div>
  );
}

const BtnBox = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: flex-end;
`;
export default BoardDtail;
