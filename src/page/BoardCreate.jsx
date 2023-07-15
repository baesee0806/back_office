import React, { useEffect, useState } from "react";
import Draft_Editor from "../components/board/Draft_Editor.jsx";
import { EditorState } from "draft-js";
import styled from "styled-components";
import { firestore } from "../apis/firebaseService.js";
import { getAuth } from "firebase/auth";
import { collection, addDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
function BoardCreate() {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  const AddData = async () => {
    const uid = getAuth().currentUser.uid;
    const userName = getAuth().currentUser.displayName;
    const docRef = await addDoc(collection(firestore, "board"), {
      title: title,
      content: editorState.getCurrentContent().getPlainText(),
      uid: uid,
      userName: userName,
      createdAt: new Date(),
    });
    navigate("/board");
  };

  const onChangeTitle = (e) => {
    setTitle(e.target.value);
  };
  const onEditorStateChange = (editorState) => {
    // editorState에 값 설정
    setEditorState(editorState);
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
        <Draft_Editor
          editorState={editorState}
          onEditorStateChange={onEditorStateChange}
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
