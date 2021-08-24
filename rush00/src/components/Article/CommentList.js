import React from "react";
import styled from "styled-components";
import CommentItem from "./CommentItem";

const CommentListStyled = styled.div`
  width: 70vw;
  margin-top: 40px;
  text-align: left;
`;

const CommentsWrapper = styled.div`
  height: 100px;
  overflow-y: scroll;
  box-sizing: border-box;
`;

function CommentList() {
  return (
    <CommentListStyled>
      <h3>Comments</h3>
      <CommentsWrapper>
        <CommentItem />
        <CommentItem />
        <CommentItem />
        <CommentItem />
        <CommentItem />
        <CommentItem />
      </CommentsWrapper>
    </CommentListStyled>
  );
}

export default CommentList;
