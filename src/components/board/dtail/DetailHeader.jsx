import React from "react";
import styled from "styled-components";
function DetailHeader(props) {
  const data = props.Data;
  return (
    <DetailHeaderContainer>
      <DetailHeaderUser>{data.userName}</DetailHeaderUser>
      <DetailHeaderTitle>{data.title}</DetailHeaderTitle>
      <DetailHeaderTimeViewBox>
        <DetailHeaderTime>createAt</DetailHeaderTime>
        <DetailHeaderView>조회수</DetailHeaderView>
      </DetailHeaderTimeViewBox>
    </DetailHeaderContainer>
  );
}
const DetailHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 50px;
  margin: 25px auto 25px auto;
  border-bottom: 1px solid #c6c8ca;
`;
const DetailHeaderUser = styled.div`
  width: 20%;
  font-size: 20px;
  font-weight: bold;
  display: flex;
  justify-content: center;
`;

const DetailHeaderTitle = styled.div`
  width: 50%;
  font-size: 20px;
  font-weight: bold;
  display: flex;
  justify-content: center;
`;

const DetailHeaderTimeViewBox = styled.div`
  width: 20%;
  display: flex;
  justify-content: center;
`;
const DetailHeaderTime = styled.div`
  margin-right: 10px;
  font-size: 20px;
  font-weight: bold;
`;
const DetailHeaderView = styled.div`
  font-size: 20px;
  font-weight: bold;
`;
export default DetailHeader;
