import React from "react";
import styled from "styled-components";

function Share() {
  return (
    <div>
      <Box>
        <div>프론트엔드 정보 공유</div>
        <div>
          <div>글쓰기</div>
          <div>정렬</div>
        </div>
      </Box>
      <hr />
      <Box>
        <div>번호</div>
        <div>제목</div>
        <div>작성자</div>
        <div>작성일</div>
        <div>조회</div>
      </Box>
      <hr />
      <Post>
        <div>번호</div>
        <div>webpack 설치 방법</div>
        <div>작성자 ###</div>
        <div>작성일 ###</div>
        <div>조회수</div>
      </Post>
      <Post>
        <div>번호</div>
        <div>webpack 설치 방법</div>
        <div>작성자 ###</div>
        <div>작성일 ###</div>
        <div>조회수</div>
      </Post>
      <Post>
        <div>번호</div>
        <div>webpack 설치 방법</div>
        <div>작성자 ###</div>
        <div>작성일 ###</div>
        <div>조회수</div>
      </Post>
    </div>
  );
}

export default Share;

const Box = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Post = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
`;
