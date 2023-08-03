import React from "react";
import styled from "styled-components";

function MainProgress() {
  return (
    <MainProgressContainer>
      <MainProgressItemBox>
        <MainProgressItem>항목 1</MainProgressItem>
        <MainProgressItem>항목 2</MainProgressItem>
        <MainProgressItem>항목 3</MainProgressItem>
        <MainProgressItem>항목 4</MainProgressItem>
      </MainProgressItemBox>
      <MainProgressGraphBox>
        <MainProgressGraph length={"10%"}>10%</MainProgressGraph>
        <MainProgressGraph length={"20%"} barColor={"green"}>
          20%
        </MainProgressGraph>
        <MainProgressGraph length={"30%"} barColor={"red"}>
          30%
        </MainProgressGraph>
        <MainProgressGraph length={"40%"} barColor={"blue"}>
          40%
        </MainProgressGraph>
      </MainProgressGraphBox>
    </MainProgressContainer>
  );
}
const MainProgressContainer = styled.div`
  height: 30%;
  width: 80%;
  border: 1px solid black;
  border-radius: 5px;
  display: flex;
`;
const MainProgressItemBox = styled.div`
  width: 20%;
  height: 100%;
  border-right: 1px solid black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;
const MainProgressItem = styled.div`
  font-size: 1rem;
`;
const MainProgressGraphBox = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
`;
const MainProgressGraph = styled.div`
  height: 20%;
  width: ${(props) => props.length || "0%"};
  border: 1px solid black;
  background-color: ${(props) => props.barColor || "#e0e0e0"};
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export default MainProgress;
