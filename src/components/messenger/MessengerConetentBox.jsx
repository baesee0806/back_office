import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { firestore } from "../../apis/firebaseService.js";
import { RiSendPlane2Fill } from "react-icons/ri";
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
    scrollRef.current.scrollTop = scrollRef.current.scrollHeight;

    getLoginUserData().then((data) => {
      getUserMessage();
    });

    const updateData = setInterval(() => {
      getUserMessage();
    }, 4000);
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
          <MessageSendButton />
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
    color: #609aea;
    transition: 0.5s;
  }
  &:focus {
    outline: none !important;
    border: 1px solid black;
  }
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
const MessageSendButton = styled(RiSendPlane2Fill)`
  font-size: 24px;
`;
export default MessengerConetentBox;
