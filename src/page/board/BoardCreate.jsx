import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import ToastUiEditor from "../../components/board/create/ToastUiEditor.jsx";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { firebaseAddBoard } from "../../apis/board/board.js";
import { useRecoilValue } from "recoil";
import { boardDataNumber } from "../../recoil/atoms.js";
function BoardCreate() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const boardDataNum = useRecoilValue(boardDataNumber);
  const [title, setTitle] = useState("");
  const [editorState, setEditorState] = useState("");
  const boardData = {
    title: title,
    content: editorState,
    docNumber: boardDataNum,
  };
  const addMutation = useMutation((data) => firebaseAddBoard(data), {
    onSuccess: () => {
      queryClient.invalidateQueries("firebaseGetBoards");
      navigate("/board");
    },
  });

  return (
    <BoardCreateContainer>
      <TitleBox>
        <Title
          type="text"
          value={title}
          placeholder="제목을 입력해주세요."
          onChange={(e) => {
            setTitle(e.target.value);
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
        <CreateBTN
          onClick={() => {
            addMutation.mutate(boardData);
          }}
        >
          작성완료
        </CreateBTN>
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
