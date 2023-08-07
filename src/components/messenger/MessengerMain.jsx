import React from "react";
import styled from "styled-components";
function MessengerMain() {
  return (
    <MessengerContainer>메세지를 보낼 유저를 선택해주세요.</MessengerContainer>
  );
}
const MessengerContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
`;
export default MessengerMain;
