import React from "react";
import styled from "styled-components";
import GitRepoCard from "../components/common/GitRepoCard.jsx";

const Github = () => {
  return (
    <GithubContainer>
      <h1>최근 작업중인 Repo</h1>
      <GitRepoCardContainer>
        <GitRepoCard />
      </GitRepoCardContainer>
      <h1>###님의 Git commit</h1>
      <div>
        <GitCommit src="https://ghchart.rshah.org/baesee0806" />
      </div>
    </GithubContainer>
  );
};

export default Github;

const GithubContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  margin-top: 90px;
  margin-right: 10px;
  padding: 0;
`;

const GitRepoCardContainer = styled.div``;

const GitCommit = styled.img`
  width: 85%;
`;
