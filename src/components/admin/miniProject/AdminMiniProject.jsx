import { useQuery } from "@tanstack/react-query";
import React from "react";
import styled from "styled-components";
import { firebaseMiniProjectData } from "../../../apis/admin/miniProject/miniProject.js";
import ProjectRecommendationCard from "../../main/recommendation/ProjectRecommendationCard.jsx";
import AdminRecommendationCard from "./AdminRecommendationCard.jsx";
import AdminCreateProjectCard from "./AdminCreateProjectCard.jsx";

function AdminMiniProject() {
  const { data: miniProjectData } = useQuery({
    queryKey: ["miniProjectData"],
    queryFn: firebaseMiniProjectData,
  });
  return (
    <AdminMiniProjectContainer>
      <AdminMiniProjectContentBox>
        {miniProjectData?.map((data) => {
          return <AdminRecommendationCard key={data.id} data={data} />;
        })}
      </AdminMiniProjectContentBox>

      <AdminCreateProjectCard />
    </AdminMiniProjectContainer>
  );
}
const AdminMiniProjectContainer = styled.div`
  display: flex;
  width: 100%;
`;
const AdminMiniProjectContentBox = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  scroll-behavior: smooth;
`;
export default AdminMiniProject;
