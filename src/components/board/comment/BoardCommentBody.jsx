import { getAuth } from "firebase/auth";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { firestore } from "../../../apis/firebaseService";
import { doc, deleteDoc, updateDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
function BoardCommentBody(props) {
  const userId = getAuth().currentUser.uid;
  const navigate = useNavigate();
  // Date
  const year = props.Data.createdAt.toDate().getFullYear().toString();
  const month = props.Data.createdAt.toDate().getMonth() + 1;
  const date = props.Data.createdAt.toDate().getDate().toString();
  // Delete
  const commentDelete = async () => {
    await deleteDoc(doc(firestore, "comments", props.commentRef));
    props.getCommentData();
  };
  // Update
  const [commentUpdateState, setCommentUpdateState] = useState(false);
  const [commentUpdateText, setCommentUpdateText] = useState(
    props.Data.comment
  );
  const commentUpdate = async () => {
    await updateDoc(doc(firestore, "comments", props.commentRef), {
      comment: commentUpdateText,
      createdAt: new Date(),
    });
    setCommentUpdateState(!commentUpdateState);
    props.getCommentData();
  };
  return (
    <>
      {commentUpdateState ? (
        <CommentUpdateContainer>
          <CommentUpdateInput
            type="text"
            placeholder="댓글을 입력해주세요."
            value={commentUpdateText}
            onChange={(e) => {
              setCommentUpdateText(e.target.value);
            }}
          />
          <CommentUpdateBtnBox>
            <CommentUpdateBtn onClick={commentUpdate}>수정</CommentUpdateBtn>
            <CommentUpdateCancelBtn
              onClick={() => {
                setCommentUpdateState(!commentUpdateState);
              }}
            >
              취소
            </CommentUpdateCancelBtn>
          </CommentUpdateBtnBox>
        </CommentUpdateContainer>
      ) : (
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
              <CommentDeleteBTN onClick={commentDelete}>삭제</CommentDeleteBTN>
              <CommentUpdateBTN
                onClick={() => {
                  setCommentUpdateState(!commentUpdateState);
                }}
              >
                수정
              </CommentUpdateBTN>
            </CommentDeleteUpdateBox>
          ) : null}
        </>
      )}
    </>
  );
}
// 댓글
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
// 수정
const CommentUpdateContainer = styled.div`
  border: 1px solid black;
  border-radius: 5px;
  width: 100%;
  height: 120px;
  display: flex;
  justify-content: space-around;
  margin-top: 15px;
`;
const CommentUpdateInput = styled.input`
  width: 90%;
  border: none;
  border-radius: 5px;
  ::placeholder {
    padding-left: 1px;
  }
  :focus {
    outline: none;
  }
  padding-left: 20px;
  font-size: 16px;
`;
const CommentUpdateBtnBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const CommentUpdateBtn = styled.button`
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  padding: 5px 10px;
  background-color: white;
  &:hover {
    background-color: #0c1222;
    color: white;
    transition: 0.5s;
  }
  width: 100px;
  height: 50%;
`;
const CommentUpdateCancelBtn = styled.button`
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  padding: 5px 10px;
  background-color: white;
  &:hover {
    background-color: #0c1222;
    color: white;
    transition: 0.5s;
  }
  width: 100px;
  height: 50%;
`;

export default BoardCommentBody;
