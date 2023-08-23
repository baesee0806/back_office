import React from "react";
import styled from "styled-components";
import AdminUserTable from "../../components/admin/user/AdminUserTable.jsx";
import AdminMiniProject from "../../components/admin/miniProject/AdminMiniProject.jsx";
import { Routes, Route, Link } from "react-router-dom";
function Admin() {
  return (
    <AdminContainer>
      <AdminMenuBox>
        <AdminUserMenu to="/admin">User</AdminUserMenu>
        <AdminProjectMenu to="/admin/Project">Mini Project</AdminProjectMenu>
      </AdminMenuBox>
      <Routes>
        <Route path="/" element={<AdminUserTable />} />
        <Route path="Project" element={<AdminMiniProject />} />
      </Routes>
    </AdminContainer>
  );
}
const AdminContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
const AdminMenuBox = styled.div`
  width: 30%;
  height: 60px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const AdminUserMenu = styled(Link)`
  width: 40px;
  text-decoration: none;
  font-family: "Noto Sans KR", sans-serif;
  font-weight: bold;
  &:visited {
    color: #000;
  }
`;
const AdminProjectMenu = styled(Link)`
  width: 150px;
  text-decoration: none;
  font-family: "Noto Sans KR", sans-serif;
  font-weight: bold;
  &:visited {
    color: #000;
  }
`;
export default Admin;
