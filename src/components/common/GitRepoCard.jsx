import React from "react";
import styled from "styled-components";
import thumbnail from "../../assets/images/thumbnail.png";
function GitRepoCard() {
  return (
    <CardLayout>
      <CardTitleContainer>
        <TitleBox>
          <h2>repo adress</h2>
          <div>repo Explanation</div>
        </TitleBox>

        <TitleImg src={thumbnail} />
      </CardTitleContainer>

      <CardContent>
        <div>
          <img src="" alt="" />
          <div>num</div>
          <div>Contributors</div>
        </div>
        <div>
          <img src="" alt="" />
          <div>num</div>
          <div>Isusues</div>
        </div>
        <div>
          <img src="" alt="" />
          <div>num</div>
          <div>Discussions</div>
        </div>
        <div>
          <img src="" alt="" />
          <div>num</div>
          <div>Starts</div>
        </div>
        <div>
          <img src="" alt="" />
          <div>num</div>
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

  margin-right: 114px;
  box-shadow: 0px 2px 5px 2px rgba(0, 0, 0, 0.25);
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
