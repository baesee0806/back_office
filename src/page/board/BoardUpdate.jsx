import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useGetDetailBoardData } from "../../hooks/useGetDetailBoardData.js";
import { Editor } from "@toast-ui/react-editor";
import "@toast-ui/editor/dist/toastui-editor.css";
function BoardUpdate() {
  const ref = useParams();
  const textRef = React.useRef();
  const [detailData, setDetailData] = useState([]);
  console.log(detailData);

  const [editorState, setEditorState] = useState("");
  const handleChangeInput = () => {
    setEditorState(textRef.current.getInstance().getMarkdown());
  };
  useEffect(() => {
    useGetDetailBoardData(ref, setDetailData);
  }, []);
  return (
    <div>
      <div>
        <input type="text" />
      </div>
      <div>
        <Editor
          ref={textRef}
          previewStyle="vertical"
          initialValue={editorState} // 최초값 설정
          onChange={handleChangeInput}
          height="700px"
          initialEditType="markdown"
          toolbarItems={[
            // 툴바 옵션 설정
            ["heading", "bold", "italic", "strike"],
            ["hr", "quote"],
            ["ul", "ol", "task", "indent", "outdent"],
            ["table", "image", "link"],
            ["code", "codeblock"],
          ]}
        />
      </div>
    </div>
  );
}

export default React.memo(BoardUpdate);
