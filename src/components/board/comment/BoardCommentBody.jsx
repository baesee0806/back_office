import React from "react";
import styled from "styled-components";

function BoardCommentBody({ item }) {
  const year = item.createdAt.toDate().getFullYear().toString();
  const month = item.createdAt.toDate().getMonth() + 1;
  const day = item.createdAt.toDate().getDate().toString();
  const hour = item.createdAt.toDate().getHours().toString();
  const min = item.createdAt.toDate().getMinutes().toString();
  return (
    <CommentBodyContainer>
      <CommentUerInfoBox>
        <CommentUserId>{item.userName}</CommentUserId>
        <CommentDate>{`(${year}-${month}-${day}-${hour}:${min})`}</CommentDate>
        <div>삭제 수정</div>
      </CommentUerInfoBox>
      <CommentContent>{item.comment}</CommentContent>
      <input type="text" />
    </CommentBodyContainer>
  );
}
const CommentBodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 80px;
  margin-top: 20px;
  border-bottom: 1px solid #c6c8ca;
`;
const CommentUerInfoBox = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 10px;
`;
const CommentUserId = styled.div`
  font-size: 20px;
  margin-right: 8px;
  margin-left: 10px;
`;
const CommentDate = styled.div`
  font-size: 16px;
  margin-right: 10px;
`;
const CommentContent = styled.div`
  font-size: 16px;
  margin-top: 10px;
  margin-left: 10px;
`;
export default BoardCommentBody;
