import React from "react";
import styled from "styled-components";
import { techColor } from "../../../apis/main/projectRecommendation";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { firebaseMiniProjectDeleteData } from "../../../apis/admin/miniProject/miniProject";
function AdminRecommendationCard({ data }) {
  const queryClient = useQueryClient();
  // id , tech , explain , name
  const deleteMutation = useMutation(
    (docId) => {
      firebaseMiniProjectDeleteData(docId);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries("miniProjectData");
      },
    }
  );
  return (
    <AdminRecommendationCardContainer>
      <CardName>
        {`문서 이름 : ${data.name}`}
        <CardDeleteBtn
          onClick={() => {
            deleteMutation.mutate(data.id);
          }}
        >
          삭제
        </CardDeleteBtn>
      </CardName>
      <CardId>{`문서 번호 : ${data.id}`}</CardId>
      <CardExplain>{`문서 설명 : ${data.explain}`}</CardExplain>
      <CardTech>
        사용 기술 :
        {data.tech.map((el) => {
          return (
            <CardTechItem key={el} $techColor={techColor(el)}>
              {el}
            </CardTechItem>
          );
        })}
      </CardTech>
    </AdminRecommendationCardContainer>
  );
}
const AdminRecommendationCardContainer = styled.div`
  width: 90%;
  height: 150px;
  border: 1px solid black;
  border-radius: 10px;
  margin-left: 10px;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  padding: 3px;
`;
const CardName = styled.div`
  width: 100%;
  height: 10%;
  margin-bottom: 5px;
`;
const CardDeleteBtn = styled.button`
  border: none;
  background-color: white;
  width: 50px;
  height: 100%;
  margin-left: 25px;
  cursor: pointer;
  &:hover {
    color: red;
    transition: 0.5s;
  }
`;
const CardId = styled.div`
  width: 100%;
  height: 10%;
  margin-bottom: 5px;
`;
const CardExplain = styled.div`
  width: 100%;
  height: 50%;
`;
const CardTech = styled.div`
  display: flex;
  width: 100%;
  height: 30%;
`;
const CardTechItem = styled.div`
  margin-right: 5px;
  min-width: 50px;
  height: 50%;
  padding: 0 2px;
  border-radius: 5px;
  background-color: ${(props) => props.$techColor};
  color: black;
  opacity: 0.8;
  text-align: center;
`;
export default AdminRecommendationCard;
