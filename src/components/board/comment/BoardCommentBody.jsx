import { getAuth } from "firebase/auth";
import React, { useEffect } from "react";
import styled from "styled-components";
function BoardCommentBody(props) {
  const userId = getAuth().currentUser.uid;

  return (
    <>
      <CommentInfoBox>
        <CommentWriter>작성자</CommentWriter>
        <CommentDate>작성일</CommentDate>
      </CommentInfoBox>
      <CommentBody>content</CommentBody>
      {userId == props.Data.userId ? (
        <CommentDeleteUpdateBox>
          <CommentDeleteBTN>삭제하기</CommentDeleteBTN>
          <CommentUpdateBTN>수정하기</CommentUpdateBTN>
        </CommentDeleteUpdateBox>
      ) : null}
    </>
  );
}
const CommentInfoBox = styled.div`
  display: flex;
  margin-top: 25px;
  margin-bottom: 1.5rem;
`;
const CommentWriter = styled.div`
  margin-left: 14px;
  margin-right: 5rem;
`;
const CommentDate = styled.div`
  margin-right: 5rem;
`;
const CommentBody = styled.div`
  width: 100%;
  margin-left: 14px;
  min-height: 50px;
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
export default BoardCommentBody;
