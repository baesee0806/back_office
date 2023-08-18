import React, { useState } from "react";
import styled from "styled-components";
import { IoSend } from "react-icons/io5";
import { useParams } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { firebaseAddComment } from "../../../apis/board/board.js";
function CommentCreateBox({ docNumber }) {
  const [comment, setComment] = useState("");
  const queryClient = useQueryClient();
  const ref = useParams();
  const data = {
    ref: ref,
    comment: comment,
    docNumber,
  };
  const addCommentMutation = useMutation(
    (data) => {
      firebaseAddComment(data);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries("firebaseGetComments");
        setComment("");
      },
    }
  );

  return (
    <CommentCreateContainer>
      <CommentCreateInput
        type="text"
        placeholder="댓글을 입력해주세요."
        value={comment}
        onChange={(e) => {
          setComment(e.target.value);
        }}
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            addCommentMutation.mutate(data);
          }
        }}
      />
      <CommentCreateBtn
        onClick={() => {
          addCommentMutation.mutate(data);
        }}
      >
        <IoSend />
      </CommentCreateBtn>
    </CommentCreateContainer>
  );
}
const CommentCreateContainer = styled.div`
  border: 1px solid black;
  border-radius: 5px;
  width: 100%;
  height: 120px;
  display: flex;
  margin-top: 15px;
`;
const CommentCreateInput = styled.input`
  width: 100%;
  border: none;
  border-radius: 5px;
  outline: none;
  ::placeholder {
    padding-left: 1px;
  }
  :focus {
    border: none;
  }
  padding-left: 20px;
  font-size: 16px;
`;
const CommentCreateBtn = styled.button`
  border: none;
  border-radius: 5px;
  font-size: 20px;
  cursor: pointer;
  background-color: white;
  &:hover {
    color: #609aea;
    transition: 0.2s;
  }
  width: 50px;
  height: 30px;
  position: relative;
  right: 5px;
  top: 50%;
  transform: translateY(-50%);
`;
export default React.memo(CommentCreateBox);
