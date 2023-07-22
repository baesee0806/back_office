import React from "react";
import styled from "styled-components";

function GitRepoCard() {
  return (
    <CardLayout>
      <div>
        <h2>repo adress</h2>
        <div>repo Explanation</div>
      </div>

      <div>repo img</div>

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
  height: 226px;

  margin-right: 114px;
  border: 1px solid black;
`;

const CardContent = styled.div`
  display: flex;
`;
