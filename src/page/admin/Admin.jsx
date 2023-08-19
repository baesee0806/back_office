import React from "react";
import styled from "styled-components";
import AdminUserTable from "../../components/admin/user/AdminUserTable.jsx";
function Admin() {
  return (
    <>
      <AdminContainer>
        <AdminUserTable />
        <AdminMiniProjectBox>미니프로젝트 CRUD</AdminMiniProjectBox>
      </AdminContainer>
    </>
  );
}
const AdminContainer = styled.table`
  width: 100%;
  height: 92vh;
  display: flex;
`;
const AdminUserBox = styled.div`
  border-collapse: collapse;
  text-align: center;
  width: 50%;
`;
const AdminUser = styled.div``;
const AdminMiniProjectBox = styled.div`
  width: 50%;
`;

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
export default Admin;
