import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { firestore } from "../../apis/firebaseService.js";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { useNavigate, useParams } from "react-router-dom";
import { getAuth } from "firebase/auth";

function MessengerUserBox() {
  const [usersData, setUsersData] = useState([]);
  const user = getAuth();
  const navigate = useNavigate();
  const ref = useParams();

  const firebaseGetUsersData = () => {
    onSnapshot(collection(firestore, "user"), (snapshot) => {
      const temp = [];

      snapshot.forEach((doc) => {
        temp.push(doc);
      });
      setUsersData(temp);
    });
  };

  useEffect(() => {
    firebaseGetUsersData();
  }, []);
  return (
    <MessengerUserContainer>
      {usersData.map((item) => {
        const data = item.data();
        console.log(item.id);
        if (data.email === user.currentUser.email) {
          return null;
        }
        return (
          <UserBox
            key={item.id}
            onClick={() => {
              navigate(`${item.id}`);
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
  justify-content: center;
  align-items: center;
  flex-direction: column;
  scroll-behavior: smooth;
  overflow-y: scroll;
`;
const UserBox = styled.div`
  margin-top: 16px;
  margin-bottom: 16px;
  font-size: 20px;
  border-bottom: 1px solid #3b3838;
  cursor: pointer;
`;
export default MessengerUserBox;
