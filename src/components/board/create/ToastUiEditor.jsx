import React from "react";

// Toast 에디터
import { Editor } from "@toast-ui/react-editor";
import "@toast-ui/editor/dist/toastui-editor.css";
import styled from "styled-components";

function ToastUiEditor(props) {
  const textRef = React.createRef();
  console.log(textRef);
  const handleChangeInput = () => {
    props.setEditorState(textRef.current.getInstance().getMarkdown());
  };
  return (
    <EditorContainer>
      <Editor
        ref={textRef}
        placeholder="내용을 입력해주세요."
        initialValue={props.editorState} // 최초값 설정
        onChange={handleChangeInput} // 내용 변경 시 실행될 함수
        previewStyle="vertical" // 미리보기 스타일 지정
        height="70vh" // 에디터 창 높이
        initialEditType="markdown" // 초기 입력모드 설정(디폴트 markdown)
        toolbarItems={[
          // 툴바 옵션 설정
          ["heading", "bold", "italic", "strike"],
          ["hr", "quote"],
          ["ul", "ol", "task", "indent", "outdent"],
          ["table", "image", "link"],
          ["code", "codeblock"],
        ]}
      ></Editor>
    </EditorContainer>
  );
}

const EditorContainer = styled.div`
  width: 80%;
  margin: 0 auto;
`;
export default ToastUiEditor;
