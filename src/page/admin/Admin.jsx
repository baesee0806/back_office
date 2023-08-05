import React, { useEffect, useState } from "react";
import { getAuth } from "firebase/auth";
import { collection, onSnapshot } from "firebase/firestore";
import { firestore } from "../../apis/firebaseService";
import styled from "styled-components";
function Admin() {
  const auth = getAuth();
  const [userData, setUserData] = useState([]);
  const GetUserData = async () => {
    onSnapshot(collection(firestore, "user"), (snapshot) => {
      const temp = [];
      snapshot.forEach((doc) => {
        temp.push(doc.data());
      });
      setUserData(temp);
    });
  };
  useEffect(() => {
    GetUserData();
  }, []);
  return (
    <AdminContainer>
      <FEBox>
        <Header>Front-end</Header>
        <Hr />
        <div>user</div>
      </FEBox>
      <BEBox>
        <Header>Back-end</Header>
        <Hr />
      </BEBox>
      <DesignBox>
        <Header>Design</Header>
        <Hr />
      </DesignBox>
      <PlannerBox>
        <Header>Planner</Header>
        <Hr />
      </PlannerBox>
    </AdminContainer>
  );
}
const AdminContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Header = styled.div`
  font-size: 1.5rem;
`;
const Hr = styled.hr`
  width: 100%;
`;
const FEBox = styled.div`
  width: 25%;
  height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-right: 1px solid black;
`;

const BEBox = styled.div`
  height: 90vh;
  width: 25%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-right: 1px solid black;
`;
const DesignBox = styled.div`
  height: 90vh;
  width: 25%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-right: 1px solid black;
`;

const PlannerBox = styled.div`
  height: 90vh;
  width: 25%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default Admin;
