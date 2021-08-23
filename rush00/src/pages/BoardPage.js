import React, { useRef } from "react";
import "@toast-ui/editor/dist/toastui-editor.css";
import { Editor } from "@toast-ui/react-editor";
import styled from "styled-components";

const BoardStyled = styled.div`
  padding: 30px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  .uploadButton {
    width: 80px;
    text-align: center;
    border: 1px solid #343a3f;
    border-radius: 20px;
    padding: 6px 10px;
    font-weight: 600;
    margin: 40px 0;
    :hover {
      background-color: #343a3f;
      color: #fff;
    }
  }
`;

function BoardPage() {
  const editorRef = useRef();

  const handleClick = () => {
    const editor = editorRef.current.getInstance();
    console.log(editor.getMarkdown());
  };

  return (
    <BoardStyled>
      <Editor
        ref={editorRef}
        hideModeSwitch={true}
        placeholder="마크다운 형식으로 입력해 주세요"
        previewStyle="vertical"
        previewHighlight={false}
      />
      <button type="button" className="uploadButton" onClick={handleClick}>
        업로드
      </button>
    </BoardStyled>
  );
}

export default BoardPage;
