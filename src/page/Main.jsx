import React from "react";
import styled from "styled-components";
import Card from "../components/common/Card.jsx";
import ProjectChart from "../components/main/ProjectChart.jsx";
const Main = () => {
  return (
    <MainContainer>
      <section>
        <h1>메인 프로젝트 진행률</h1>
        <ProjectChart />
      </section>
      <section>
        <h1>진행중인 프로젝트</h1>
        <Card />
      </section>
    </MainContainer>
  );
};

export default Main;

const MainContainer = styled.div`
  height: 100vh;
`;
