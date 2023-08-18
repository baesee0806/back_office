import React from "react";
import styled from "styled-components";
import MainTodoList from "../../components/main/MainTodoList.jsx";
import MainProjectRecommendation from "../../components/main/recommendation/MainProjectRecommendation.jsx";
const Main = () => {
  return (
    <MainContainer>
      <MainTodoListBox>
        <MainTodoList />
      </MainTodoListBox>
      <MainProgressBox>
        <MainProjectRecommendation />
      </MainProgressBox>
    </MainContainer>
  );
};
const MainContainer = styled.div`
  display: flex;
  justify-content: space-around;
  min-width: 1032px;
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
