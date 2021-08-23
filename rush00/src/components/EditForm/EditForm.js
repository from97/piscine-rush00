import React, { useRef, useState } from "react";
import "@toast-ui/editor/dist/toastui-editor.css";
import { Editor } from "@toast-ui/react-editor";
import EditFormStyled from "./EditForm.styles";

function EditForm() {
  const [title, setTitle] = useState("");
  const editorRef = useRef();

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleClick = () => {
    const editor = editorRef.current.getInstance();
    console.log(title);
    console.log(editor.getMarkdown());
    console.log(editor.getHTML());
  };

  return (
    <EditFormStyled>
      <EditFormStyled.Title>
        <input
          type="text"
          name="title"
          placeholder="제목을 입력하세요"
          onChange={handleTitleChange}
        ></input>
      </EditFormStyled.Title>
      <EditFormStyled.Body>
        <Editor
          ref={editorRef}
          hideModeSwitch={true}
          placeholder="마크다운 형식으로 내용을 입력해 주세요"
          previewStyle="tab"
          previewHighlight={false}
        />
      </EditFormStyled.Body>
      <EditFormStyled.Button
        type="button"
        className="uploadButton"
        onClick={handleClick}
      >
        업로드
      </EditFormStyled.Button>
    </EditFormStyled>
  );
}

export default EditForm;
