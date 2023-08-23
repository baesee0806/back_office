import React from "react";
import styled from "styled-components";
import { techColor } from "../../../apis/main/projectRecommendation";
function ProjectRecommendationCard({ data }) {
  return (
    <ProjectRecommendationCardContainer>
      <ProjectRecommendationCardTitle>
        프로젝트 이름 : {data.name}
      </ProjectRecommendationCardTitle>
      <ProjectRecommendationCardDescription maxLength={64}>
        {data.explain}
      </ProjectRecommendationCardDescription>
      <ProjectRecommendationCardtech>
        {data.tech.map((tech) => {
          return (
            <CardTechItem key={tech} $techColor={techColor(tech)}>
              {tech}
            </CardTechItem>
          );
        })}
      </ProjectRecommendationCardtech>
    </ProjectRecommendationCardContainer>
  );
}
const ProjectRecommendationCardContainer = styled.div`
  width: 100%;
  height: 30%;
  border: 1px solid black;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const ProjectRecommendationCardTitle = styled.div`
  height: 20%;
  padding-left: 10px;
  padding-top: 10px;
  font-size: 20px;
  font-weight: bold;
`;
const ProjectRecommendationCardDescription = styled.div`
  height: 60%;
  padding-left: 10px;
  padding-top: 10px;
`;
const ProjectRecommendationCardtech = styled.div`
  height: 20%;
  padding-left: 10px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;
const CardTechItem = styled.div`
  margin-right: 10px;
  min-width: 50px;
  padding: 0 2px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  background-color: ${(props) => props.$techColor};
  color: black;
  opacity: 0.8;
`;
export default ProjectRecommendationCard;
