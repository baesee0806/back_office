import React from "react";
import styled from "styled-components";
function BoardCommentBody() {
  return (
    <>
      <CommentInfoBox>
        <CommentWriter>작성자</CommentWriter>
        <CommentDate>작성일</CommentDate>
      </CommentInfoBox>
      <CommentBody>content</CommentBody>
    </>
  );
}
const CommentInfoBox = styled.div`
  display: flex;
  margin-top: 25px;
  margin-bottom: 1.5rem;
`;
const CommentWriter = styled.div`
  margin-left: 14px;
  margin-right: 5rem;
`;
const CommentDate = styled.div`
  margin-right: 5rem;
`;
const CommentBody = styled.div`
  width: 100%;
  margin-left: 14px;
  min-height: 50px;
`;
export default BoardCommentBody;
