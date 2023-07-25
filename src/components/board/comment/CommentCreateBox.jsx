import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { getAuth } from "firebase/auth";
import { firestore } from "../../../apis/firebaseService.js";
import { addDoc, collection } from "firebase/firestore";
import { useParams } from "react-router-dom";
function CommentCreateBox(props) {
  const [comment, setComment] = useState("");
  const userId = getAuth().currentUser.uid;
  const ref = useParams();
  const AddCommentData = async () => {
    const userName = getAuth().currentUser.displayName;
    const docRef = await addDoc(collection(firestore, "comments"), {
      userId: userId,
      userName: userName,
      comment: comment,
      docId: ref.id,
      createdAt: new Date(),
      docNumber: props.commentData.length + 1,
    });
    setComment("");
    props.CreateHandleState();
  };

  return (
    <CommentCreateContainer>
      <CommentCreateInput
        type="text"
        placeholder="댓글을 입력해주세요."
        value={comment}
        onChange={(e) => {
          setComment(e.target.value);
        }}
      />
      <CommentCreateBtn
        onClick={() => {
          AddCommentData();
          props.getCommentData();
        }}
      >
        추가
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
const CommentCreateBtn = styled.button`
  border: none;
  border-radius: 5px;
  font-size: 18px;
  cursor: pointer;
  padding: 5px 10px;
  background-color: white;
  &:hover {
    background-color: #0c1222;
    color: white;
    transition: 0.5s;
  }
  width: 10%;
`;
export default React.memo(CommentCreateBox);
