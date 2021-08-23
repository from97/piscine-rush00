import React from "react";
import ArticleItem from "./ArticleItem";
import ArticleListStyled from "./ArticleList.styles";

function ArticleList({ handleClick }) {
  return (
    <ArticleListStyled>
      <button type="button" className="createButton" onClick={handleClick}>
        새 글 작성
      </button>
      <ArticleListStyled.Field>
        <span className="field_num">No</span>
        <span className="field_title">제목</span>
        <span className="field_author">작성자</span>
      </ArticleListStyled.Field>
      <ArticleItem />
      <ArticleItem />
      <ArticleItem />
      <ArticleItem />
      <ArticleItem />
      <ArticleListStyled.Pagination>
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ArticleListStyled.Pagination>
    </ArticleListStyled>
  );
}

export default ArticleList;
