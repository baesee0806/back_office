import React from "react";
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
    <CommentContainer key={ref.id}>
      <CommentCreateBox docNumber={commentData?.length} key={ref.id} />
      {commentData?.map((item) => {
        return <BoardCommentBody item={item} key={item.id} />;
      })}
    </CommentContainer>
  );
}

const CommentContainer = styled.div`
  width: 80%;
  margin: 25px auto 15px auto;
`;

export default DetailComment;
