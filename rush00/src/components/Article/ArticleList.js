import React from "react";
import ArticleItem from "./ArticleItem";
import ArticleListStyled from "./ArticleList.styles";
import ReactPaginate from "react-paginate";

function ArticleList({ handleClick }) {
  const handlePageChange = () => {
    console.log("page changed");
  };
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
        <ReactPaginate
          previousLabel={"<"}
          nextLabel={">"}
          breakLabel={"..."}
          pageCount={10}
          onPageChange={handlePageChange}
        />
      </ArticleListStyled.Pagination>
    </ArticleListStyled>
  );
}

export default ArticleList;
