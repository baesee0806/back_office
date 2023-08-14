import React, { useState } from "react";
import styled from "styled-components";
import { useDateChange } from "../../../hooks/useDateChange";
import { getAuth } from "firebase/auth";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import {
  firebaseDeleteComment,
  firebaseUpdateComment,
} from "../../../apis/board/board";

function BoardCommentBody({ item }) {
  const [updateState, setUpdateState] = useState(false);
  const [updateComment, setUpdateComment] = useState(item.comment);
  const updateData = {
    docId: item.id,
    comment: updateComment,
  };
  const queryClient = useQueryClient();
  const docUserId = item.userId;
  const userId = getAuth().currentUser.uid;
  const date = useDateChange(item.createdAt, 5);

  const deleteMutation = useMutation(
    (data) => {
      firebaseDeleteComment(data);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries("firebaseGetComments");
      },
    }
  );

  const updateMutation = useMutation(
    (data) => {
      firebaseUpdateComment(data);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries("firebaseGetComments");
        setUpdateComment(item.comment);
      },
    }
  );
  return (
    <CommentBodyContainer>
      <CommentUerInfoBox>
        <CommentUserId>{item.userName}</CommentUserId>
        <CommentDate>{date}</CommentDate>
        {userId == docUserId ? (
          <div>
            <Btn
              onClick={() => {
                deleteMutation.mutate(item);
              }}
            >
              삭제
            </Btn>
            <Btn onClick={() => setUpdateState(!updateState)}>수정</Btn>
          </div>
        ) : null}
      </CommentUerInfoBox>
      {updateState ? (
        <UpdateCommetContainer>
          <UpdateCommentInput
            type="text"
            value={updateComment}
            onChange={(e) => {
              setUpdateComment(e.target.value);
            }}
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                updateMutation.mutate(updateData);
                setUpdateState(!updateState);
              }
            }}
          />
          <UpdateBtnArea>
            <Btn
              onClick={() => {
                updateMutation.mutate(updateData);
                setUpdateState(!updateState);
              }}
            >
              수정
            </Btn>
            <Btn onClick={() => setUpdateState(!updateState)}>취소</Btn>
          </UpdateBtnArea>
        </UpdateCommetContainer>
      ) : (
        <CommentContent>{item.comment}</CommentContent>
      )}
    </CommentBodyContainer>
  );
}
const CommentBodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 80px;
  margin-top: 20px;
  border-bottom: 1px solid #c6c8ca;
`;
const CommentUerInfoBox = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 10px;
`;
const CommentUserId = styled.div`
  font-size: 20px;
  margin-right: 8px;
  margin-left: 10px;
`;
const CommentDate = styled.div`
  font-size: 16px;
  margin-right: 10px;
`;
const CommentContent = styled.div`
  font-size: 16px;
  margin-top: 10px;
  margin-left: 10px;
  margin-bottom: 10px;
`;
const UpdateCommetContainer = styled.div`
  display: flex;
  align-items: center;

  font-size: 16px;
  margin-top: 10px;
  margin-left: 10px;
  margin-bottom: 10px;
`;
const UpdateCommentInput = styled.input`
  width: 50%;
  height: 30px;
  border: 1px solid #c6c8ca;
  border-radius: 5px;
  outline: none;
  padding-left: 10px;
`;
const UpdateBtnArea = styled.div`
  margin-left: 10px;
`;
const Btn = styled.button`
  width: 40px;
  height: 30px;
  background-color: white;
  border: none;
  margin-right: 10px;
  &:hover {
    color: #609aea;
    transition: 0.3s;
  }
  cursor: pointer;
`;
export default BoardCommentBody;
