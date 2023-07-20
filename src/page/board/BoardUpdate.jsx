import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useGetDetailBoardData } from "../../hooks/useGetDetailBoardData.js";
import UpdateToastUiEditor from "../../components/board/update/UpdateToastUiEditor.jsx";

function BoardUpdate() {
  const ref = useParams();
  const [detailData, setDetailData] = useState([]);
  const [editorState, setEditorState] = useState("");
  const textRef = React.useRef();
  const content = detailData.content;
  useEffect(() => {
    useGetDetailBoardData(ref, setDetailData);
  }, []);

  return (
    <div>
      <div>
        <input type="text" />
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
