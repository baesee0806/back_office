import React, { useState } from "react";
import styled from "styled-components";
import { RiSendPlane2Fill } from "react-icons/ri";
import { addDoc, collection, updateDoc } from "firebase/firestore";
import { firestore } from "../../apis/firebaseService.js";
import { useParams } from "react-router-dom";

function MessengerMessgeSendBox({ dumyLoginUser }) {
  const [message, setMessage] = useState("");
  const ref = useParams();
  const sendMessage = async () => {
    if (message === "") {
      return;
    }
    const docRef = await addDoc(collection(firestore, "messages"), {
      message: message,
      to: ref.id,
      from: dumyLoginUser.userId,
      createdAt: new Date(),
      room: [ref.id + dumyLoginUser.userId, dumyLoginUser.userId + ref.id],
    }).then((data) => {
      updateDoc(data, {
        id: data.id,
      });
      setMessage("");
    });
  };
  return (
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
  );
}
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
const MessageSendButton = styled(RiSendPlane2Fill)`
  font-size: 24px;
`;
export default MessengerMessgeSendBox;
