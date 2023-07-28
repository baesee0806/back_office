import React, { useEffect, useState } from "react";
import styled from "styled-components";
import GitRepoCard from "../components/common/GitRepoCard.jsx";

const Github = () => {
  const [gitRepoData, setGitRepoData] = useState([]);
  const myGitRepo = async () => {
    const res = await fetch("https://api.github.com/users/baesee0806/repos");
    const data = await res.json();
    setGitRepoData(data);
  };
  console.log(gitRepoData);
  useEffect(() => {
    myGitRepo();
  }, []);
  return (
    <GithubContainer>
      <GithubTitle>최근 작업중인 Repo</GithubTitle>
      <GitRepoCardBox>
        <GitRepoCard />
        <GitRepoCard />
      </GitRepoCardBox>
      <GithubTitle>###님의 Git commit</GithubTitle>
      <GitCommitBox>
        <GitCommit src="https://ghchart.rshah.org/baesee0806" />
      </GitCommitBox>
    </GithubContainer>
  );
};

export default Github;

const GithubContainer = styled.div`
  width: 100%;
  margin: auto;
`;

const GithubTitle = styled.h1`
  margin-left: 32px;
  margin-top: 32px;
  margin-bottom: 32px;
`;
const GitRepoCardBox = styled.div`
  display: flex;
  justify-content: center;
`;
const GitCommitBox = styled.div`
  display: flex;
  justify-content: center;
`;
const GitCommit = styled.img`
  width: 85%;
`;
