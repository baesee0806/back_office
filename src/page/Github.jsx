import React, { useEffect, useState } from "react";
import styled from "styled-components";
import GitRepoCard from "../components/common/GitRepoCard.jsx";

const Github = () => {
  const [gitRepoData, setGitRepoData] = useState([]);
  const myGitRepo = async () => {
    const res = await fetch("https://api.github.com/users/baesee0806/repos");
    const data = await res.json();
    const sortData = data.sort((a, b) => {
      return new Date(b.pushed_at) - new Date(a.pushed_at);
    });
    setGitRepoData(sortData);
  };
  // repo 이름 : name
  // repo 설명 : description
  // repo img : owner.avatar_url
  // repo 참여자 수  : contributors_url.length
  // repo issue 수 : open_issues_count
  // repo star 수 : stargazers_count
  // repo fork 수 : forks_count
  const filterData = [gitRepoData[0], gitRepoData[1]];

  useEffect(() => {
    myGitRepo();
  }, []);
  return (
    <GithubContainer>
      <GithubTitle>최근 작업중인 Repo</GithubTitle>
      <GitRepoCardBox>
        {filterData && filterData.map((data) => <GitRepoCard data={data} />)}
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
  margin: 0 auto;
`;

const GithubTitle = styled.h1`
  margin-left: 32px;
  margin-top: 32px;
  margin-bottom: 32px;
`;
const GitRepoCardBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
  margin: 0 auto;
`;
const GitCommitBox = styled.div`
  display: flex;
  justify-content: center;
`;
const GitCommit = styled.img`
  width: 85%;
`;
