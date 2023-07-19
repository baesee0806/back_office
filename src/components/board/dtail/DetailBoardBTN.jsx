import React from "react";
import { firestore } from "../../../apis/firebaseService";
import { doc, deleteDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
// delete, update
function DetailBoardBTN(props) {
  const navigate = useNavigate();
  const text = props.btnControlData.btnType;
  const deleteBTN = async () => {
    await deleteDoc(doc(firestore, "board", props.btnControlData.ref.id));
  };
  const onClickHandler = () => {
    if (text === "삭제하기") {
      deleteBTN();
      navigate("/board");
    }
    if (text === "수정하기") {
      console.log("수정하기");
    }
  };
  return (
    <>
      {text === "삭제하기" ? (
        <DeleteBTN onClick={onClickHandler}>{text}</DeleteBTN>
      ) : (
        <UpdateBTN onClick={onClickHandler}>{text}</UpdateBTN>
      )}
    </>
  );
}

const DeleteBTN = styled.button`
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
const UpdateBTN = styled.button`
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
export default DetailBoardBTN;
