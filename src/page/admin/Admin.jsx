import React from "react";
import styled from "styled-components";
import AdminUserTable from "../../components/admin/user/AdminUserTable.jsx";
function Admin() {
  return (
    <AdminContainer>
      <AdminUserTable />
      <div>미니프로젝트 CRUD</div>
    </AdminContainer>
  );
}
const AdminContainer = styled.div`
  width: 100%;
  display: flex;
`;
export default Admin;
