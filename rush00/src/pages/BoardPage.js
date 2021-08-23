import React, { useState } from "react";
import SimpleMde from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
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
    margin: 20px 0;
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

  const handleClick = () => {
    console.log(value);
  };

  return (
    <BoardStyled>
      <SimpleMde value={value} onChange={onChange} />
      <button type="button" className="uploadButton" onClick={handleClick}>
        업로드
      </button>
    </BoardStyled>
  );
}

export default BoardPage;
