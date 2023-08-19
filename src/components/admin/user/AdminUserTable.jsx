import React, { useState } from "react";
import styled from "styled-components";
import { useQuery } from "@tanstack/react-query";
import { firebaseGetUserData } from "../../../apis/admin/users/users";
function AdminUserTable() {
  const [nameState, setNameState] = useState(false);
  const [emailState, setEmailState] = useState(false);
  const [departmentState, setDepartmentState] = useState(false);
  const [adminState, setAdminState] = useState(false);
  const { data: userData } = useQuery({
    queryKey: ["userData"],
    queryFn: firebaseGetUserData,
  });
  return (
    <AdminUserContainer>
      <AdminUserBox>
        <AdminHead>
          <AdminUsersName>이름</AdminUsersName>
          <AdminUsersEmail>이메일</AdminUsersEmail>
          <AdminUsersDepartment>부서</AdminUsersDepartment>
          <AdminUsersAdmin>관리자</AdminUsersAdmin>
        </AdminHead>

        {userData?.map(
          (user) => (
            <AdminBody key={user.userId}>
              <AdminUserName>{user.name}</AdminUserName>
              <AdminUserEmail>{user.email}</AdminUserEmail>

              <AdminUserDepartment>{user.department}</AdminUserDepartment>
              <AdminUserAdmin>{user.admin}</AdminUserAdmin>
            </AdminBody>
          )
          //   user.updateState ? (
          //     <AdminBody key={user.userId}>
          //       <AdminUserName>
          //         <Test type="text" />
          //         <button>v</button>
          //       </AdminUserName>
          //       <AdminUserEmail>
          //         <Test type="text" />
          //       </AdminUserEmail>
          //       <AdminUserDepartment>
          //         <Test type="text" />
          //       </AdminUserDepartment>
          //       <AdminUserAdmin>
          //         <Test type="text" />
          //       </AdminUserAdmin>
          //     </AdminBody>
          //   ) : (
          //     <AdminBody key={user.userId}>
          //       <AdminUserName>{user.name}</AdminUserName>
          //       <AdminUserEmail>{user.email}</AdminUserEmail>
          //       <AdminUserDepartment>{user.department}</AdminUserDepartment>
          //       <AdminUserAdmin>{user.admin}</AdminUserAdmin>
          //     </AdminBody>
          //   )
        )}
      </AdminUserBox>
    </AdminUserContainer>
  );
}
const Test = styled.input`
  width: 80%;
`;
const AdminUserContainer = styled.div`
  border-collapse: collapse;
  text-align: center;
  width: 50%;
`;
const AdminUserBox = styled.div``;

const AdminHead = styled.tr`
  width: 100%;
  display: flex;
`;
const AdminUsersName = styled.th`
  border: 1px solid #000;
  width: 20%;
`;
const AdminUsersEmail = styled.th`
  border: 1px solid #000;
  width: 40%;
`;
const AdminUsersDepartment = styled.th`
  border: 1px solid #000;
  width: 20%;
`;
const AdminUsersAdmin = styled.th`
  border: 1px solid #000;
  width: 20%;
`;

const AdminBody = styled.tr`
  width: 100%;
  display: flex;
`;
const AdminUserName = styled.td`
  border: 1px solid #000;
  width: 20%;
`;
const AdminUserEmail = styled.td`
  border: 1px solid #000;
  width: 40%;
`;
const AdminUserDepartment = styled.td`
  border: 1px solid #000;
  width: 20%;
`;
const AdminUserAdmin = styled.td`
  border: 1px solid #000;
  width: 20%;
`;
export default AdminUserTable;
