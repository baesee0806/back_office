import React, { useEffect, useState } from "react";
import styled from "styled-components";
import BoardCommentBody from "../comment/BoardCommentBody.jsx";
import { getAuth } from "firebase/auth";
import { firestore } from "../../../apis/firebaseService.js";
import { useParams } from "react-router-dom";
import { addDoc, collection, getDocs, where, query } from "firebase/firestore";
function DetailComment(props) {
  const userId = getAuth().currentUser.uid;
  const ref = useParams();
  const [commentData, setCommentData] = useState([]);

  const commetCreateModalStateBtn = () => {
    props.setCommentCreateModalState(!props.commentCreateModalState);
  };
  // add comment 할수있는 새로운 공간이 필요
  // comment를 추가 했을때 commentData를 다시 불러와야함
  // 댓글을 달을때 모달창이 나오게 만들을까?
  const AddCommentData = async () => {
    const userName = getAuth().currentUser.displayName;
    const docRef = await addDoc(collection(firestore, "comments"), {
      userId: userId,
      userName: userName,
      comment: "댓글",
      docId: ref.id,
      createdAt: new Date(),
      docNumber: commentData.length + 1,
    });
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
      temp.push(doc.data());
    });
    setCommentData(temp);
  };

  useEffect(() => {
    getCommentData();
  }, []);

  return (
    <CommentContainer>
      <CommentUnerLine />
      <CommentCreateBTN onClick={commetCreateModalStateBtn}>
        댓글 달기
      </CommentCreateBTN>
      {commentData &&
        commentData.map((data) => {
          return <BoardCommentBody Data={data} key={data.id} />;
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
