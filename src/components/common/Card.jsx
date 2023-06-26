import React from "react";
import styled from "styled-components";
import thumbnail from "../../assets/images/thumbnail.png";
function Card() {
  return (
    <CardBox>
      <ThumbnailImage src={thumbnail} />
      <div>제목</div>
      <div>내용</div>
      <div>진행률 : </div>
    </CardBox>
  );
}

const CardBox = styled.div`
  width: 300px;
  height: 300px;
  border: 1px solid black;
`;
const ThumbnailImage = styled.img`
  width: 100%;
  height: 230px;
`;
export default Card;
