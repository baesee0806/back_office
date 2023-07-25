import React, { useEffect, useState } from "react";
import styled from "styled-components";
import BoardCommentBody from "../comment/BoardCommentBody.jsx";
import { getAuth } from "firebase/auth";
import { firestore } from "../../../apis/firebaseService.js";
import { useParams } from "react-router-dom";
import { addDoc, collection, getDocs, where, query } from "firebase/firestore";
import CommentCreateBox from "../comment/CommentCreateBox.jsx";
function DetailComment(props) {
  const ref = useParams();
  const [commentData, setCommentData] = useState([]);
  const [commentCreateState, setCommentCreateState] = useState(false);

  const CreateHandleState = () => {
    setCommentCreateState(!commentCreateState);
  };

  // 데이터를 불러오는건 여기서 하는게 맞는거 같다. 이코드는 유지

  const getCommentData = async () => {
    const temp = [];
    const refId = ref.id;
    const q = query(
      collection(firestore, "comments"),
      where("docId", "==", refId)
    );
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      temp.push(doc);
    });
    setCommentData(temp);
  };
  useEffect(() => {
    getCommentData();
  }, []);
  return (
    <CommentContainer>
      <CommentUnerLine />
      <CommentCreateBTN onClick={CreateHandleState}>댓글 달기</CommentCreateBTN>
      {commentCreateState && (
        <CommentCreateBox
          commentData={commentData}
          getCommentData={getCommentData}
          CreateHandleState={CreateHandleState}
        />
      )}
      {commentData &&
        commentData.map((data) => {
          return (
            <BoardCommentBody
              Data={data.data()}
              commentRef={data.id}
              key={data.id}
              getCommentData={getCommentData}
            />
          );
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
const CommentUnerLine = styled.hr`
  width: 100%;
  border: 1px solid #e9ecef;
`;

export default DetailComment;
