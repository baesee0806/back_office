import React from "react";
import styled from "styled-components";
import ProjectRecommendationCard from "./ProjectRecommendationCard.jsx";
import { useQuery } from "@tanstack/react-query";
import { firebaseGetMiniProjectData } from "../../../apis/main/projectRecommendation.js";
function MainProjectRecommendation() {
  const { data: miniProjectData } = useQuery({
    queryKey: ["miniProjectData"],
    queryFn: firebaseGetMiniProjectData,
  });
  return (
    <MainProjectRecommendationContainer>
      <Title>미니 프로젝트 추천</Title>
      <ProjectRecommendationBox>
        {miniProjectData?.map((data) => {
          return <ProjectRecommendationCard data={data} key={data.id} />;
        })}
      </ProjectRecommendationBox>
    </MainProjectRecommendationContainer>
  );
}

const MainProjectRecommendationContainer = styled.div`
  width: 85%;
  height: 92%;
  display: flex;
  flex-direction: column;
`;
const Title = styled.div`
  font-size: 30px;
  font-weight: bold;
  margin-top: 20px;
  margin-bottom: 20px;
  border-bottom: 1px solid black;
  width: 100%;
  height: 10%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
const ProjectRecommendationBox = styled.div`
  width: 100%;
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export default MainProjectRecommendation;
