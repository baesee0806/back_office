import React from "react";
import styled from "styled-components";
import MainTodoList from "../components/board/main/MainTodoList.jsx";
import MainProgress from "../components/board/main/MainProgress.jsx";
import MainWorkList from "../components/board/main/MainWorkList.jsx";
const Main = () => {
  return (
    <MainContainer>
      <MainTodoListBox>
        <MainTodoList />
      </MainTodoListBox>
      <MainProgressBox>
        <MainWorkList />
        <MainProgress />
      </MainProgressBox>
    </MainContainer>
  );
};
const MainContainer = styled.div`
  display: flex;
  justify-content: space-around;
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
