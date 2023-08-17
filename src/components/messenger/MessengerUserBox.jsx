import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { getAuth } from "firebase/auth";
import { useQuery } from "@tanstack/react-query";
import { firebaseGetUserList } from "../../apis/messenger/messenger.js";
import { useSetRecoilState } from "recoil";
import { userList } from "../../recoil/atoms.js";

function MessengerUserBox() {
  const user = getAuth();
  const navigate = useNavigate();
  const setUserList = useSetRecoilState(userList);
  const { data: userData } = useQuery({
    queryKey: ["userData"],
    queryFn: firebaseGetUserList,
    onSuccess: (data) => {
      data.map((item) => {
        if (item.email === user.currentUser.email) {
          setUserList(item);
        }
      });
    },
  });

  return (
    <MessengerUserContainer>
      {userData?.map((data) => {
        if (data.email === user.currentUser.email) {
          return null;
        }
        return (
          <UserBox
            key={data.userId}
            onClick={() => {
              navigate(`${data.userId}`);
            }}
          >
            {data.name}
          </UserBox>
        );
      })}
    </MessengerUserContainer>
  );
}
const MessengerUserContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  scroll-behavior: smooth;
  overflow-y: scroll;
  height: 100%;
`;
const UserBox = styled.div`
  margin-top: 16px;
  margin-bottom: 16px;
  font-size: 20px;
  border-bottom: 1px solid #3b3838;
  cursor: pointer;
`;
export default MessengerUserBox;
