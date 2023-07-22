import React, { useState } from "react";
import styled from "styled-components";
import { firestore } from "../apis/firebaseService.js";
import { getAuth } from "firebase/auth";
import { collection, addDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import ToastUiEditor from "../components/board/create/ToastUiEditor.jsx";
function BoardCreate() {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [editorState, setEditorState] = useState("");

  const AddData = async () => {
    const uid = getAuth().currentUser.uid;
    const userName = getAuth().currentUser.displayName;
    const docRef = await addDoc(collection(firestore, "board"), {
      title: title,
      content: editorState,
      uid: uid,
      userName: userName,
      createdAt: new Date(),
    });
    navigate("/board");
  };

  const onChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  return (
    <BoardCreateContainer>
      <TitleBox>
        <Title
          type="text"
          value={title}
          placeholder="제목을 입력해주세요."
          onChange={(e) => {
            onChangeTitle(e);
          }}
        />
      </TitleBox>
      <div>
        <ToastUiEditor
          editorState={editorState}
          setEditorState={setEditorState}
        />
      </div>
      <CreateBTNBox>
        <CreateBTN onClick={AddData}>작성완료</CreateBTN>
        <CancelBTN>취소</CancelBTN>
      </CreateBTNBox>
    </BoardCreateContainer>
  );
}
const BoardCreateContainer = styled.div``;

const TitleBox = styled.div`
  width: 70%;
  margin: 20px auto 20px auto;
`;

const Title = styled.input`
  width: 100%;
  height: 30px;
  font-size: 20px;
  color: #191f28;
`;
const CreateBTNBox = styled.div`
  width: 70%;
  margin: 0 auto 15px auto;
  display: flex;
  justify-content: center;
`;
const CreateBTN = styled.button`
  width: 80px;
  height: 30px;
  margin-right: 10px;

  background-color: #191f28;
  border: none;
  border-radius: 5px;
  color: white;
  cursor: pointer;
`;
const CancelBTN = styled.button`
  width: 50px;
  height: 30px;

  cursor: pointer;
`;
export default BoardCreate;
