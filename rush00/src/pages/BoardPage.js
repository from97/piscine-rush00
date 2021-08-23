import React, { useState } from "react";
import SimpleMde from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import styled from "styled-components";

const BoardStyled = styled.div`
  .openEditorButton,
  .uploadButton {
    width: 80px;
    text-align: center;
    border: 1px solid #343a3f;
    border-radius: 20px;
    padding: 6px 10px;
    font-weight: 600;
    :hover {
      background-color: #343a3f;
      color: #fff;
    }
  }
`;

function BoardPage() {
  const [value, setValue] = useState("");

  const onChange = (value) => {
    setValue(value);
  };

  return (
    <BoardStyled>
      <button type="button" className="openEditorButton">
        새 글 작성
      </button>
      <SimpleMde value={value} onChange={onChange} />
      <button type="button" className="uploadButton">
        업로드
      </button>
    </BoardStyled>
  );
}

export default BoardPage;
