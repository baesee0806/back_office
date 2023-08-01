import React, { useEffect, useState } from "react";
import styled from "styled-components";
import thumbnail from "../../assets/images/thumbnail.png";
import { useNavigate } from "react-router-dom";
// repo 이름 : name
// repo 설명 : description
// repo img : owner.avatar_url
// repo 참여자 수  : contributors_url.length
// repo issue 수 : open_issues_count
// repo star 수 : stargazers_count
// repo fork 수 : forks_count
function GitRepoCard(props) {
  const navigate = useNavigate();
  const data = props.data;
  const contributorUrl = data?.contributors_url;
  const gitUrl = data?.html_url;
  const [contributorNum, setContributorNum] = useState(0);

  const contributorData = async () => {
    const res = await fetch(`${contributorUrl}`);
    const data = await res.json();
    setContributorNum(data.length);
  };
  useEffect(() => {
    if (contributorUrl) {
      contributorData();
    }
  }, [contributorUrl]);

  return (
    <CardLayout
      onClick={() => {
        window.open(`${gitUrl}`);
      }}
    >
      <CardTitleContainer>
        <TitleBox>
          <h2>{data?.name}</h2>
          <div>
            {data?.description ? data?.description : "설명이 없습니다."}
          </div>
        </TitleBox>

        <TitleImg src={thumbnail} />
      </CardTitleContainer>

      <CardContent>
        <div>
          <img src="" />
          <div>{contributorNum}</div>
          <div>Contributors</div>
        </div>
        <div>
          <img src="" />
          <div>{data?.open_issues_count}</div>
          <div>Isusues</div>
        </div>

        <div>
          <img src="" />
          <div>{data?.stargazers_count}</div>
          <div>Starts</div>
        </div>
        <div>
          <img src="" />
          <div>{data?.forks_count}</div>
          <div>Forks</div>
        </div>
      </CardContent>
    </CardLayout>
  );
}

export default React.memo(GitRepoCard);

const CardLayout = styled.div`
  width: 500px;
  height: 250px;

  box-shadow: 0px 2px 5px 2px rgba(0, 0, 0, 0.25);
  cursor: pointer;
`;

const CardTitleContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 70%;
`;
const TitleBox = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 60%;
`;

const TitleImg = styled.img`
  width: 30%;
  height: 80%;
`;
const CardContent = styled.div`
  display: flex;
  justify-content: space-around;
  height: 30%;
`;
