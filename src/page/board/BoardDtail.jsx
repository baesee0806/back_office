import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import DetailHeader from "../../components/board/dtail/DetailHeader.jsx";
import DetailComment from "../../components/board/dtail/DetailComment.jsx";
import { useQuery } from "@tanstack/react-query";
import { firebaseDetailBoard } from "../../apis/board/board.js";
function BoardDtail() {
  const ref = useParams();

  const { data: detailBoardData } = useQuery({
    queryKey: ["detailBoardData", ref],
    queryFn: () => firebaseDetailBoard(ref),
    enabled: !!ref,
  });
  return (
    <>
      {detailBoardData?.map((data) => {
        return (
          <div key={data.id}>
            <DetailHeader data={data} />
            <DetailComment />
          </div>
        );
      })}
    </>
  );
}

const BtnBox = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: flex-end;
`;
export default BoardDtail;
