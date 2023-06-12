import React from "react";
import styled from "styled-components";
import Card from "../components/common/Card.jsx";

const Main = () => {
  return (
    <MainContainer>
      <h1>Progress</h1>
      <Card />
      <h1>Not Progress</h1>
    </MainContainer>
  );
};

export default Main;

const MainContainer = styled.div`
  height: 100vh;
`;
