import React, { useState } from "react";
import styled from "styled-components";
import ArticleList from "../components/Article/ArticleList";
import EditForm from "../components/EditForm/EditForm";

const BoardStyled = styled.div``;

function BoardPage() {
  //list, create, edit
  const [mode, setMode] = useState("list");
  const handleCreateClick = () => {
    setMode("create");
  };
  return (
    <BoardStyled>
      {mode === "list" && <ArticleList handleClick={handleCreateClick} />}
      {mode === ("create" || "edit") && <EditForm />}
    </BoardStyled>
  );
}

export default BoardPage;
