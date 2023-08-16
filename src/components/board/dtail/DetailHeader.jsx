import React from "react";
import styled from "styled-components";
import { Viewer } from "@toast-ui/react-editor";
import { useDateChange } from "../../../hooks/useDateChange";
function DetailHeader({ data }) {
  const contents = data.content;
  const date = useDateChange(data.createdAt, 3);
  return (
    <>
      <DetailHeaderContainer>
        <DetailHeaderUser>{data.userName}</DetailHeaderUser>
        <DetailHeaderTitle>{data.title}</DetailHeaderTitle>
        <DetailHeaderTimeViewBox>
          <DetailHeaderTime>{`작성일 : ${date} `}</DetailHeaderTime>
          <DetailHeaderView>{"조회  : " + data.view}</DetailHeaderView>
        </DetailHeaderTimeViewBox>
      </DetailHeaderContainer>
      <DetailBodyContainer>
        {contents && <Viewer initialValue={contents} />}
      </DetailBodyContainer>
    </>
  );
}
const DetailHeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50px;
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
  width: 60%;
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
  font-size: 20px;
  font-weight: bold;
  margin-right: 10px;
`;
const DetailHeaderView = styled.div`
  font-size: 20px;
  font-weight: bold;
`;
const DetailBodyContainer = styled.div`
  width: 80%;
  margin: 25px auto;
  min-height: 20vh;
`;
export default DetailHeader;
