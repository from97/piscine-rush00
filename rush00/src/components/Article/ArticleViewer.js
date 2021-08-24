import React from "react";
import { ArticleViewerStyled, ArticleWrapper } from "./ArticleViewer.styles";
import CommentList from "./CommentList";

function ArticleViewer({ handleModifyClick, handleDeleteClick }) {
  return (
    <ArticleViewerStyled>
      <ArticleWrapper>
        <ArticleWrapper.Title>title</ArticleWrapper.Title>
        <ArticleWrapper.Content>content with markdown</ArticleWrapper.Content>
      </ArticleWrapper>
      <CommentList />
      <ArticleViewerStyled.Buttons>
        <button type="button" onClick={handleModifyClick}>
          수정
        </button>
        <button type="button" onClick={handleDeleteClick}>
          삭제
        </button>
      </ArticleViewerStyled.Buttons>
    </ArticleViewerStyled>
  );
}

export default ArticleViewer;
