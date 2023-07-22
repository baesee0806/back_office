import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { useGetDetailBoardData } from "../../hooks/useGetDetailBoardData.js";
import UpdateToastUiEditor from "../../components/board/update/UpdateToastUiEditor.jsx";
import styled from "styled-components";
import { firestore } from "../../apis/firebaseService.js";
import { collection, onSnapshot } from "firebase/firestore";
function BoardUpdate() {
  useEffect(() => {
    getData().then((res) => {});
  }, []);
  const ref = useParams();
  const [editorState, setEditorState] = useState("");
  const [title, setTitle] = useState("");

  const getData = async () => {
    const q = collection(firestore, "board");
    const querySnapshot = await onSnapshot(q, (querySnapshot) => {
      querySnapshot.forEach((doc) => {
        if (doc.id === ref.id) {
          setTitle(doc.data().title);
          setEditorState(doc.data().content);
        }
      });
    });
  };
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
        <button>수정하기</button>
        <button>취소</button>
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
  justify-content: flex-end;
`;
export default React.memo(BoardUpdate);
