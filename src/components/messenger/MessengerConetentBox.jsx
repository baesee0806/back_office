import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { firestore } from "../../apis/firebaseService.js";
import {
  addDoc,
  collection,
  getDocs,
  onSnapshot,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import { getAuth } from "firebase/auth";
function MessengerConetentBox() {
  const scrollRef = useRef();
  useEffect(() => {
    scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  });

  const ref = useParams();
  //
  const auth = getAuth();
  const [authUser, setAuthUser] = useState([]);
  const getLoginUserData = async () => {
    const temp = [];
    onSnapshot(collection(firestore, "user"), (snapshot) => {
      snapshot.forEach((doc) => {
        const data = doc.data();
        if (data.email === auth.currentUser.email) {
          temp.push(data.userId);
        }
      });
      setAuthUser(temp);
    });
  };
  useEffect(() => {
    getLoginUserData().then((data) => {
      getUserMessage();
    });
    const updateData = setInterval(() => {
      getUserMessage();
      console.log(1);
    }, 500);
    setTimeout(() => {
      clearInterval(updateData);
    }, 600);
  }, []);
  //
  const [message, setMessage] = useState("");

  const sendMessage = async () => {
    if (message === "") {
      return;
    }
    const docRef = await addDoc(collection(firestore, "messages"), {
      message: message,
      to: ref.id,
      from: authUser[0],
      createdAt: new Date(),
    }).then((data) => {
      updateDoc(data, {
        id: data.id,
      });
      setMessage("");
      getUserMessage();
    });
  };

  //
  const [userMessage, setUserMessage] = useState([]);
  const getUserMessage = async () => {
    const temp = [];
    const q = query(collection(firestore, "messages"));

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      temp.push(doc.data());
    });
    setUserMessage(temp);
  };
  //
  const keydown = (e) => {
    if (e.key === "Enter") {
      // sendMessage();
      console.log("enter");
    }
  };

  return (
    <MessengerConetentBoxContainer>
      <ContentBox ref={scrollRef}>
        {userMessage
          .sort((a, b) => {
            return a.createdAt - b.createdAt;
          })
          .map((item) => {
            const isMyMessage = item.from === authUser[0];
            // 데이터 최신순으로 정렬

            return isMyMessage ? (
              <MyMessage key={item.id}>
                <MessafeTime>
                  {item.createdAt.toDate().getHours()}:
                  {item.createdAt.toDate().getMinutes()}
                </MessafeTime>
                <Message>{item.message}</Message>
              </MyMessage>
            ) : (
              <UserMessage key={item.id}>
                <Message>{item.message}</Message>
                <MessafeTime>
                  {item.createdAt.toDate().getHours()}:
                  {item.createdAt.toDate().getMinutes()}
                </MessafeTime>
              </UserMessage>
            );
          })}
      </ContentBox>
      <MessageInputBox>
        <MessageInput
          type="text"
          placeholder="메세지를 입력하세요"
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
          }}
        />
        <MessageButton
          onClick={() => {
            sendMessage();
          }}
        >
          전송
        </MessageButton>
      </MessageInputBox>
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
const MessageInputBox = styled.div`
  width: 100%;
  height: 15%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const MessageInput = styled.input`
  width: 90%;
  height: 100%;
  border: none;
  border: 1px solid #e6e6e6;
  border-radius: 10px;
  font-size: 18px;
  padding-left: 20px;
`;
const MessageButton = styled.button`
  margin-left: -60px;
  width: 40px;

  border: none;
  font-size: 14px;
  cursor: pointer;
  background-color: white;
  &:hover {
    border-bottom: 1px solid black;
    transition: 0.5s;
  }
  &:focus {
    outline: none !important;
    border: 1px solid black;
  }
`;
const Message = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 300px;
  border-radius: 10px;
  min-height: 50px;
  border: 1px solid black;
`;
const MessafeTime = styled.p`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  width: 50px;
  height: 50px;
`;
export default MessengerConetentBox;
