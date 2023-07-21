import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useGetDetailBoardData } from "../../hooks/useGetDetailBoardData.js";
import UpdateToastUiEditor from "../../components/board/update/UpdateToastUiEditor.jsx";

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
      <div>
        <input
          type="text"
          value={title}
          onChange={(e) => {
            handleChangeInput(e);
          }}
        />
      </div>
      <div>
        <UpdateToastUiEditor
          editorState={editorState}
          setEditorState={setEditorState}
        />
      </div>
    </div>
  );
}

export default React.memo(BoardUpdate);
