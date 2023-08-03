import { getAuth } from "firebase/auth";
import React from "react";
import styled from "styled-components";
function MainWorkList() {
  const auth = getAuth();
  return (
    <MainWorkListContainer>
      <MainMvpBox>
        <MainMvpHeader>{auth.currentUser.displayName} 님의 MVP</MainMvpHeader>
        <MainMvpItemBox>
          <MainMvpRank>1</MainMvpRank>
          <MainMvpItem>main 화면 뷰 그리기</MainMvpItem>
          <MainMvpItemCheckbox type="checkbox" />
        </MainMvpItemBox>
      </MainMvpBox>
    </MainWorkListContainer>
  );
}
const MainWorkListContainer = styled.div`
  width: 80%;
  height: 50%;
  margin-bottom: 72px;
  border: 1px solid black;
  border-radius: 5px;
`;

const MainMvpBox = styled.div`
  width: 100%;
  height: 90%;
  display: flex;
  flex-direction: column;
`;
const MainMvpHeader = styled.div`
  height: 10%;
  border-bottom: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const MainMvpItemBox = styled.div`
  height: 8%;
  width: 100%;
  border-bottom: 1px solid black;
  display: flex;
  align-items: center;
`;

const MainMvpRank = styled.div`
  width: 5%;
  height: 100%;
  border-right: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const MainMvpItem = styled.div`
  margin-left: 10px;
  width: 90%;
`;
const MainMvpItemCheckbox = styled.input``;
export default MainWorkList;
