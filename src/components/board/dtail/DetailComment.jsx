import React from "react";
import styled from "styled-components";
import BoardCommentBody from "../comment/BoardCommentBody.jsx";
import { getAuth } from "firebase/auth";
function DetailComment(props) {
  const userId = getAuth().currentUser.uid;
  return (
    <CommentContainer>
      <CommentUnerLine />
      <CommentCreateBTN>댓글 달기</CommentCreateBTN>
      <BoardCommentBody />

      {userId === props.docCreateId ? (
        <CommentDeleteUpdateBox>
          <CommentDeleteBTN>삭제하기</CommentDeleteBTN>
          <CommentUpdateBTN>수정하기</CommentUpdateBTN>
        </CommentDeleteUpdateBox>
      ) : null}
    </CommentContainer>
  );
}

const CommentContainer = styled.div`
  width: 80%;
  margin: 25px auto 15px auto;
`;
const CommentCreateBox = styled.div`
  display: flex;
  justify-content: flex-end;
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
const CommentUnerLine = styled.hr`
  width: 100%;
  border: 1px solid #e9ecef;
`;
const CommentDeleteUpdateBox = styled.div`
  display: flex;
  justify-content: flex-end;
`;
const CommentDeleteBTN = styled.button`
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
  margin-right: 10px;
`;
const CommentUpdateBTN = styled.button`
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
