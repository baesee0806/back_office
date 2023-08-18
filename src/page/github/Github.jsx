import React, { useEffect, useState } from "react";
import styled from "styled-components";
import GitRepoCard from "../../components/github/GitRepoCard.jsx";
import GitHubCalendar from "react-github-calendar";
import { useQuery } from "@tanstack/react-query";
import {
  fetchGithubData,
  firebaseGetUserData,
} from "../../apis/github/github.js";
import { getAuth } from "firebase/auth";

const Github = () => {
  const auth = getAuth();
  const [githubId, setGithubId] = useState("");
  const { data: githubGetData } = useQuery({
    queryKey: ["githubGetData"],
    queryFn: async () => {
      const id = await firebaseGetUserData();
      setGithubId(id);
      return await fetchGithubData(id);
    },
  });
  console.log(githubId);
  return (
    <GithubContainer>
      <GithubTitle>최근 작업중인 Repo</GithubTitle>
      <GitRepoCardBox>
        {githubGetData?.map((data) => {
          const id = data?.id;
          return <GitRepoCard data={data} key={id} />;
        })}
      </GitRepoCardBox>
      <GithubTitle>{auth.currentUser.displayName}님의 Git commit</GithubTitle>
      <GitCommitBox>
        {githubGetData && (
          <GitHubCalendar
            username={`${githubId}`}
            colorScheme="light"
            // 좌측 요일 표시
            showWeekdayLabels
            // 사이즈 조정
            blockSize={20}
            style={{
              height: "14.4rem",
              width: "72rem",
              marginLeft: "2.5rem",
              color: "#000000",
            }}
          />
        )}
      </GitCommitBox>
    </GithubContainer>
  );
};

export default Github;

const GithubContainer = styled.div`
  width: 100%;
  min-width: 950px;
`;

const GithubTitle = styled.h1`
  margin-left: 32px;
  margin-top: 32px;
  margin-bottom: 32px;
`;
const GitRepoCardBox = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  min-width: 950px;
  @media screen and (max-width: 950px) {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    margin-left: 32px;
    height: 600px;
  }
`;
const GitCommitBox = styled.div`
  display: flex;
  justify-content: center;
  @media screen and (max-width: 950px) {
    width: 750px;
  }
`;
const GitCommit = styled.img`
  width: 85%;
  @media screen and (max-width: 950px) {
    width: 750px;
  }
`;
