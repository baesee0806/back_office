import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useGetDetailBoardData } from "../../hooks/useGetDetailBoardData.js";
import UpdateToastUiEditor from "../../components/board/update/UpdateToastUiEditor.jsx";
import styled from "styled-components";
import { firestore } from "../../apis/firebaseService.js";
import { collection, onSnapshot, doc, updateDoc } from "firebase/firestore";
import { useMutation, useQuery } from "@tanstack/react-query";
import {
  firebaseGetUpdateBoard,
  firebaseUpdateBoard,
} from "../../apis/board/board.js";
function BoardUpdate() {
  const navigate = useNavigate();
  const ref = useParams();
  const [editorState, setEditorState] = useState("");
  const [title, setTitle] = useState("");
  const updateDatas = {
    title: title,
    content: editorState,
    ref: ref.id,
  };
  const { data: updateGetData } = useQuery({
    queryKey: ["updateGetData"],
    queryFn: () => firebaseGetUpdateBoard(ref),
    onSuccess: (item) => {
      item.map((data) => {
        setTitle(data.title);
        setEditorState(data.content);
      });
    },
  });
  const updateData = async () => {
    const q = doc(firestore, "board", ref.id);
    const querySnapshot = await updateDoc(q, {
      title: title,
      content: editorState,
    });
    navigate("/board");
  };
  const updateMutation = useMutation((data) => firebaseUpdateBoard(data), {
    onSuccess: () => {
      navigate("/board");
    },
  });
  const handleChangeInput = (e) => {
    setTitle(e.target.value);
  };

  return (
    <div>
      {title && (
        <UpdateTitleBox>
          <UpdateTitleInput
            type="text"
            value={title}
            onChange={(e) => {
              handleChangeInput(e);
            }}
          />
        </UpdateTitleBox>
      )}

      {editorState && (
        <UpdateToastUiEditorBox>
          <UpdateToastUiEditor
            editorState={editorState}
            setEditorState={setEditorState}
          />
        </UpdateToastUiEditorBox>
      )}
      <UpdateBTNBox>
        <UpdateBTN
          onClick={() => {
            updateMutation.mutate(updateDatas);
          }}
        >
          수정하기
        </UpdateBTN>
        <CancelBTN
          onClick={() => {
            navigate("/board");
          }}
        >
          취소
        </CancelBTN>
      </UpdateBTNBox>
    </div>
  );
}
const UpdateTitleBox = styled.div`
  width: 70%;
  margin: 25px auto 25px auto;
`;
const UpdateTitleInput = styled.input`
  width: 100%;
  height: 30px;
  font-size: 20px;
  color: #191f28;
`;

const UpdateToastUiEditorBox = styled.div`
  width: 100%;
  margin: 0 auto;
`;

const UpdateBTNBox = styled.div`
  width: 70%;
  margin: 15px auto 15px auto;
  display: flex;
  justify-content: center;
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
  margin-right: 10px;
`;

const CancelBTN = styled.button`
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
export default React.memo(BoardUpdate);
