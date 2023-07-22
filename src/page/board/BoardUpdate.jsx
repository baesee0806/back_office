import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useGetDetailBoardData } from "../../hooks/useGetDetailBoardData.js";
import UpdateToastUiEditor from "../../components/board/update/UpdateToastUiEditor.jsx";
import styled from "styled-components";
function BoardUpdate() {
  const ref = useParams();
  const [detailData, setDetailData] = useState([]);
  const [editorState, setEditorState] = useState("");
  const [title, setTitle] = useState(detailData.title);

  useEffect(() => {
    useGetDetailBoardData(ref, setDetailData);
  }, []);

  const handleChangeInput = (e) => {
    setTitle(e.target.value);
  };

  return (
    <div>
      <UpdateTitleBox>
        <UpdateTitleInput
          type="text"
          value={title}
          onChange={(e) => {
            handleChangeInput(e);
          }}
        />
      </UpdateTitleBox>
      <UpdateToastUiEditorBox>
        <UpdateToastUiEditor
          editorState={editorState}
          setEditorState={setEditorState}
        />
      </UpdateToastUiEditorBox>
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
