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
    <>
      <AdminContainer>
        <AdminHeadBox>
          <AdminHead>
            <AdminTitle>이름</AdminTitle>
            <AdminTitle>이메일</AdminTitle>
            <AdminTitle>부서</AdminTitle>
            <AdminTitle>관리자</AdminTitle>
          </AdminHead>
        </AdminHeadBox>
        <AdminBodyBox>
          {userData.map((user) => (
            <AdminBody key={user.userId}>
              <AdminBodyItem>{user.name}</AdminBodyItem>
              <AdminBodyItem>{user.email}</AdminBodyItem>
              <AdminBodyItem>{user.department}</AdminBodyItem>
              <AdminBodyItem>{user.admin}</AdminBodyItem>
            </AdminBody>
          ))}
        </AdminBodyBox>
      </AdminContainer>
    </>
  );
}
const AdminContainer = styled.table`
  width: 100%;
  border-collapse: collapse;
  text-align: center;
`;
const AdminHeadBox = styled.thead`
  width: 100%;
`;
const AdminHead = styled.tr``;
const AdminTitle = styled.th`
  border: 1px solid #000;
`;
const AdminBodyBox = styled.tbody``;
const AdminBody = styled.tr``;
const AdminBodyItem = styled.td`
  border: 1px solid #000;
`;
export default Admin;
