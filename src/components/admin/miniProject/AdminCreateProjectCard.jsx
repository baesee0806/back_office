import React, { useState } from "react";
import styled from "styled-components";
import { techColor } from "../../../apis/main/projectRecommendation";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { firebaseMiniProjectAddData } from "../../../apis/admin/miniProject/miniProject";
function AdminCreateProjectCard() {
  const queryClient = useQueryClient();
  const tech = [
    { id: 0, value: "React", isAtive: false },
    { id: 1, value: "Vue", isAtive: false },
    { id: 2, value: "Recoil", isAtive: false },
    { id: 3, value: "Redux", isAtive: false },
    { id: 4, value: "Firebase", isAtive: false },
    { id: 5, value: "Styled-components", isAtive: false },
    { id: 6, value: "Sass", isAtive: false },
    { id: 7, value: "Tailwind", isAtive: false },
    { id: 8, value: "React-query", isAtive: false },
    { id: 9, value: "React-router-dom", isAtive: false },
    { id: 10, value: "Webpack", isAtive: false },
    { id: 11, value: "Vite", isAtive: false },
  ];
  const [data, setData] = useState(tech);
  const [techData, setTechData] = useState([]);
  const [title, setTitle] = useState("");
  const [explain, setExplain] = useState("");
  const BtnClick = (item) => {
    const temp = [...data];
    const index = [];
    temp[item.id].isAtive = !temp[item.id].isAtive;
    const filter = temp.map((el) => {
      if (el.isAtive) {
        index.push(el.value);
      }
      return el;
    });
    setData(temp);
    setTechData(index);
  };
  const addData = {
    explain,
    name: title,
    tech: [...techData],
  };
  const addMiniProjectData = useMutation(
    (data) => {
      firebaseMiniProjectAddData(data);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries("miniProjectData");
        setTitle("");
        setExplain("");
        setData(tech);
      },
    }
  );
  return (
    <AdminCreateProjectCardContainer>
      <h3>미니 프로젝트 추가</h3>
      <NameInput
        type="text"
        placeholder="프로젝트 이름"
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <ExplainTextarea
        value={explain}
        placeholder="프로젝트 설명"
        onChange={(e) => {
          setExplain(e.target.value);
        }}
      />
      <TechBox>
        {data?.map((el) => {
          return (
            <TechItem
              key={el.id}
              $techColor={techColor(el.value)}
              $isAtive={el.isAtive}
              onClick={() => BtnClick(el)}
            >
              {el.value}
            </TechItem>
          );
        })}
      </TechBox>
      <ButtonBox>
        <AddBtn
          onClick={() => {
            addMiniProjectData.mutate(addData);
          }}
        >
          추가하기
        </AddBtn>
      </ButtonBox>
    </AdminCreateProjectCardContainer>
  );
}
const AdminCreateProjectCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 50%;
  border: 1px solid black;
  padding: 10px;
  height: 500px;
  margin-right: 10px;
`;
const NameInput = styled.input`
  width: 100%;
  height: 30px;
`;
const ExplainTextarea = styled.textarea`
  width: 100%;
  height: 250px;
`;
const TechBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: 100px;
`;
const TechItem = styled.button`
  margin-right: 5px;
  min-width: 50px;
  height: 25px;
  padding: 0 2px;
  border-radius: 5px;
  background-color: ${(props) => (props.$isAtive ? props.$techColor : "white")};
  border: 1px solid ${(props) => props.$techColor};
  color: black;
  opacity: 0.8;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ButtonBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const AddBtn = styled.button`
  width: 50%;
  height: 30px;
  font-weight: bold;
  font-size: 20px;
  border: none;
  background-color: white;
  cursor: pointer;
  &:hover {
    color: #609aea;
    transition: 0.5s;
  }
`;
export default AdminCreateProjectCard;
