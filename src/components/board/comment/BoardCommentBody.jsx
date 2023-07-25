import { getAuth } from "firebase/auth";
import React, { useEffect } from "react";
import styled from "styled-components";
import { firestore } from "../../../apis/firebaseService";
import {
  doc,
  deleteDoc,
  query,
  collection,
  getDocs,
  where,
} from "firebase/firestore";
import { useNavigate } from "react-router-dom";
function BoardCommentBody(props) {
  const userId = getAuth().currentUser.uid;
  const navigate = useNavigate();
  const year = props.Data.createdAt.toDate().getFullYear().toString();
  const month = props.Data.createdAt.toDate().getMonth() + 1;
  const date = props.Data.createdAt.toDate().getDate().toString();

  const commentDelete = async () => {
    await deleteDoc(doc(firestore, "comments", props.commentRef));
    props.getCommentData();
  };

  return (
    <>
      <CommentInfoBox>
        <CommentWriter>{props.Data.userName}</CommentWriter>
        <CommentDate>
          {year.slice(2) + "." + month.toString() + "." + date}
        </CommentDate>
      </CommentInfoBox>
      <CommentBody>{props.Data.comment}</CommentBody>
      {userId == props.Data.userId ? (
        <CommentDeleteUpdateBox>
          <CommentDeleteBTN onClick={commentDelete}>삭제하기</CommentDeleteBTN>
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
