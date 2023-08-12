import React, { useEffect, useState } from "react";
import styled from "styled-components";
import BoardCommentBody from "../comment/BoardCommentBody.jsx";
import { useParams } from "react-router-dom";
import CommentCreateBox from "../comment/CommentCreateBox.jsx";
import { useQuery } from "@tanstack/react-query";
import { firebaseGetComments } from "../../../apis/board/board.js";
function DetailComment() {
  const ref = useParams();

  const { data: commentData } = useQuery({
    queryKey: ["commentData", ref],
    queryFn: () => firebaseGetComments(ref),
    enabled: !!ref,
  });
  return (
    <CommentContainer>
      <CommentCreateBox data={commentData[0]} key={commentData[0].docId} />
      {commentData?.map((item) => {
        return <BoardCommentBody item={item} key={item.docId} />;
      })}
    </CommentContainer>
  );
}

const CommentContainer = styled.div`
  width: 80%;
  margin: 25px auto 15px auto;
`;

const CommentCreateBTN = styled.button`
  border: none;
  border-radius: 5px;
  font-size: 14px;
  cursor: pointer;
  padding: 5px 10px;
  background-color: white;
  &:hover {
    background-color: #0c1222;
    color: white;
    padding: 5px 10px;
    transition: 0.5s;
  }
`;

export default DetailComment;
