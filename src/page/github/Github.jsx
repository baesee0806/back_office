import React, { useEffect, useState } from "react";
import styled from "styled-components";
import GitRepoCard from "../../components/common/GitRepoCard.jsx";
import { collection, getDocs, query, where } from "firebase/firestore";
import { firestore } from "../../apis/firebaseService.js";
import { getAuth } from "firebase/auth";

const Github = () => {
  const [gitRepoData, setGitRepoData] = useState([]);
  const myGitRepo = async (githubId) => {
    const res = await fetch(`https://api.github.com/users/${githubId}/repos`);
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
  const authUserEmail = getAuth().currentUser.email;
  const [userData, setUserData] = useState("");
  const getUserData = async () => {
    const q = query(
      collection(firestore, "user"),
      where("email", "==", authUserEmail)
    );

    const querySnapshot = await getDocs(q);
    const temp = [];
    querySnapshot.forEach((doc) => {
      temp.push(doc.data().githubId);
    });
    setUserData(temp);
    return temp;
  };
  useEffect(() => {
    getUserData().then((data) => {
      const githubId = data[0];
      myGitRepo(githubId);
    });
  }, []);
  const filterData = [gitRepoData[0], gitRepoData[1]];
  return (
    <GithubContainer>
      <GithubTitle>최근 작업중인 Repo</GithubTitle>
      <GitRepoCardBox>
        {filterData &&
          filterData.map((data) => {
            const id = data?.id;
            return <GitRepoCard data={data} key={id} />;
          })}
      </GitRepoCardBox>
      <GithubTitle>###님의 Git commit</GithubTitle>
      <GitCommitBox>
        <GitCommit src={`https://ghchart.rshah.org/${userData[0]}`} />
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
