import React from "react";
import styled from "styled-components";
import MainTodoList from "../../components/main/MainTodoList.jsx";
const Main = () => {
  return (
    <MainContainer>
      <MainTodoListBox>
        <MainTodoList />
      </MainTodoListBox>
      <MainProgressBox>
        <div>미정 공간</div>
      </MainProgressBox>
    </MainContainer>
  );
};
const MainContainer = styled.div`
  display: flex;
  justify-content: space-around;
  min-width: 950px;
`;
const MainTodoListBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 90vh;
`;
const MainProgressBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 50%;
  height: 90vh;
`;
export default Main;
