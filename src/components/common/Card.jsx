import React from "react";
import styled from "styled-components";
import thumbnail from "../../assets/images/thumbnail.png";
function Card() {
  return (
    <CardBox>
      <img src={thumbnail} />
      <div>제목</div>
      <div>내용</div>
    </CardBox>
  );
}

const CardBox = styled.div`
  width: 300px;
  height: 300px;
  border: 1px solid black;
`;

export default Card;
