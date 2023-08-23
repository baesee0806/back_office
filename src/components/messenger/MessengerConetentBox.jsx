import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { firestore } from "../../apis/firebaseService.js";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { useRecoilValue } from "recoil";
import { userList } from "../../recoil/atoms.js";
import MessengerMessgeSendBox from "../messenger/MessengerMessgeSendBox.jsx";
function MessengerConetentBox() {
  const scrollRef = useRef();
  const ref = useParams();
  const dumyLoginUser = useRecoilValue(userList);
  console.log(dumyLoginUser);
  const [userMessage, setUserMessage] = useState([]);
  const roomNumber = ref.id + dumyLoginUser.userId;
  const messages = userMessage.filter((item) => {
    return (
      item.room[0].includes(roomNumber) || item.room[1].includes(roomNumber)
    );
  });
  // scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  useEffect(() => {
    const queryMessages = query(
      collection(firestore, "messages"),
      orderBy("createdAt")
    );

    const unsubscribe = onSnapshot(queryMessages, (snapshot) => {
      const temp = [];
      snapshot.forEach((doc) => {
        temp.push({ ...doc.data() });
      });
      setUserMessage(temp);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <MessengerConetentBoxContainer>
      <ContentBox ref={scrollRef} key={ref.id}>
        {messages.map((item) => {
          const isMyMessage = item.from === dumyLoginUser.userId;

          return isMyMessage ? (
            <MyMessage key={item.id}>
              <MessafeTime>
                {item.createdAt.toDate().getHours()}:
                {item.createdAt.toDate().getMinutes()}
              </MessafeTime>
              <MyMessageContent>{item.message}</MyMessageContent>
            </MyMessage>
          ) : (
            <UserMessage key={item.id}>
              <UserMessageContent>{item.message}</UserMessageContent>
              <MessafeTime>
                {item.createdAt.toDate().getHours()}:
                {item.createdAt.toDate().getMinutes()}
              </MessafeTime>
            </UserMessage>
          );
        })}
      </ContentBox>
      <MessengerMessgeSendBox
        dumyLoginUser={dumyLoginUser}
        key={dumyLoginUser.userId}
      />
    </MessengerConetentBoxContainer>
  );
}
const MessengerConetentBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 90.4vh;
`;
const ContentBox = styled.div`
  height: 80%;
  display: flex;
  flex-direction: column;
  scroll-behavior: smooth;
  overflow: auto;
`;
const UserMessage = styled.div`
  display: flex;
  justify-content: flex-start;
  border-radius: 10px;
  margin-bottom: 10px;
  margin-left: 20px;
`;

const MyMessage = styled.div`
  display: flex;
  justify-content: flex-end;
  border-radius: 10px;
  margin-bottom: 10px;
  margin-right: 20px;
`;

const MyMessageContent = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 50px;
  max-width: 50%;
  min-height: 20px;
  max-height: 50%;
  background-color: #609aea;
  color: white;
  border-radius: 10px;
  padding: 5px 10px 5px 10px;
  word-break: break-all;
`;
const UserMessageContent = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 50px;
  max-width: 50%;
  min-height: 20px;
  max-height: 50%;
  border-radius: 10px;
  background-color: #e6e6e6;
  color: black;
  padding: 5px 10px 5px 10px;
  word-break: break-all;
`;
const MessafeTime = styled.p`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  width: 50px;
  height: 50px;
`;

export default MessengerConetentBox;
