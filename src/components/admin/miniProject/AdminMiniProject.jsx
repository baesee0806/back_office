import { useQuery } from "@tanstack/react-query";
import React from "react";
import styled from "styled-components";
import { firebaseMiniProjectData } from "../../../apis/admin/miniProject/miniProject.js";

function AdminMiniProject() {
  const { data: miniProjectData } = useQuery({
    queryKey: ["miniProjectData"],
    queryFn: firebaseMiniProjectData,
  });
  console.log(miniProjectData);
  return (
    <AdminMiniProjectContainer>
      <AdminMiniProjectContentBox>
        {miniProjectData?.map((data) => {
          return (
            <div key={data.id}>
              <div>{data.name}</div>
              <div>{data.explain}</div>
              <div>{data.id}</div>
              <div>{data.tech}</div>
            </div>
          );
        })}
      </AdminMiniProjectContentBox>

      <div>miniProject Cud</div>
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
`;
export default AdminMiniProject;
