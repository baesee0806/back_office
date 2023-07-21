import React, { useEffect, useRef } from "react";
import { Editor } from "@toast-ui/react-editor";
import "@toast-ui/editor/dist/toastui-editor.css";
function UpdateToastUiEditor(props) {
  const textRef = useRef();
  const handleChangeInput = () => {
    props.setEditorState(textRef.current.getInstance().getMarkdown());
  };
  useEffect(() => {}, []);
  return (
    <div>
      <Editor
        ref={textRef}
        initialValue={props.editorState} // 최초값 설정
        onChange={handleChangeInput} // 내용 변경 시 실행될 함수
        previewStyle="vertical" // 미리보기 스타일 지정
        height="700px" // 에디터 창 높이
        initialEditType="markdown" // 초기 입력모드 설정(디폴트 markdown)
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
  );
}

export default UpdateToastUiEditor;
