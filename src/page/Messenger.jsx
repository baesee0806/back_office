import React, { useEffect, useState } from "react";
import MessengerUserBox from "../components/messenger/MessengerUserBox.jsx";
import MessengerConetentBox from "../components/messenger/MessengerConetentBox.jsx";
import styled from "styled-components";
import { Route, Routes } from "react-router-dom";

function Messenger() {
  return (
    <MessengerContainer>
      <MessengerUserContainer>
        <MessengerUserBox />
      </MessengerUserContainer>
      <MessengerContentContainer>
        <Routes>
          <Route path="/" element={<div>main</div>} />
          <Route path=":id" element={<MessengerConetentBox />} />
        </Routes>
      </MessengerContentContainer>
    </MessengerContainer>
  );
}
const MessengerContainer = styled.div`
  display: flex;
  width: 100%;
  height: 90.4vh;
`;
const MessengerUserContainer = styled.div`
  width: 15%;
  border-right: 1px solid #e6e6e6;
`;
const MessengerContentContainer = styled.div`
  width: 85%;
`;

export default Messenger;
