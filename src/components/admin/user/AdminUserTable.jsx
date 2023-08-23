import React from "react";
import styled from "styled-components";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  firebaseDeleteUserData,
  firebaseGetUserData,
  firebaseUserUpdateState,
} from "../../../apis/admin/users/users";
import AdminUserTableBody from "./AdminUserTableBody.jsx";
function AdminUserTable() {
  const queryClient = useQueryClient();
  const { data: userData } = useQuery({
    queryKey: ["userData"],
    queryFn: firebaseGetUserData,
  });
  const firebaseUpdateStateMutation = useMutation(
    (userId) => {
      firebaseUserUpdateState(userId);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries("userData");
      },
    }
  );
  const firebaseDeleteUserMutation = useMutation(
    (userId) => {
      firebaseDeleteUserData(userId);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries("userData");
      },
    }
  );

  return (
    <TableContainer>
      <TableHead>
        <tr>
          <TableHeadName>이름</TableHeadName>
          <TableHeadEmail>이메일</TableHeadEmail>
          <TableHeadDepartment>부서</TableHeadDepartment>
          <TableHeadAdmin>관리자</TableHeadAdmin>
        </tr>
      </TableHead>
      <TableBody>
        {userData?.map((user) => {
          return user?.updateState ? (
            <AdminUserTableBody key={user.userId} data={user} />
          ) : (
            <TableBodyRow
              key={user.userId}
              onClick={() => {
                firebaseUpdateStateMutation.mutate(user.userId);
              }}
            >
              <TableBodyName>{user.name}</TableBodyName>
              <TableBodyEmail>{user.email}</TableBodyEmail>
              <TableBodyDepartment>{user.department}</TableBodyDepartment>
              <TableBodyAdmin>{user.admin}</TableBodyAdmin>
              <TableBodyDeleteButtonBox>
                <TableBodyDeleteButton
                  onClick={() => {
                    firebaseDeleteUserMutation.mutate(user.userId);
                  }}
                >
                  X
                </TableBodyDeleteButton>
              </TableBodyDeleteButtonBox>
            </TableBodyRow>
          );
        })}
      </TableBody>
    </TableContainer>
  );
}

const TableContainer = styled.table`
  min-width: 50%;
  text-align: center;
  border-collapse: collapse;
`;
const TableHead = styled.thead`
  width: 100%;
  height: 40px;
`;
const TableHeadName = styled.th`
  border: 1px solid black;
`;
const TableHeadEmail = styled.th`
  border: 1px solid black;
`;
const TableHeadDepartment = styled.th`
  border: 1px solid black;
`;
const TableHeadAdmin = styled.th`
  border: 1px solid black;
`;
const TableBody = styled.tbody`
  width: 100%;
`;
const TableBodyRow = styled.tr`
  width: 100%;
  height: 50px !important;
  cursor: pointer;
`;
const TableBodyName = styled.td`
  border: 1px solid black;
`;
const TableBodyEmail = styled.td`
  border: 1px solid black;
`;
const TableBodyDepartment = styled.td`
  border: 1px solid black;
`;
const TableBodyAdmin = styled.td`
  border: 1px solid black;
`;
const TableBodyDeleteButtonBox = styled.td`
  text-align: center;
  width: 25px;
`;
const TableBodyDeleteButton = styled.button`
  background-color: white;
  border: none;
  cursor: pointer;
  width: 25px;
  font-size: 15px;
  font-weight: bold;
  &:hover {
    color: #1e90ff;
    transition: 0.5s;
  }
`;

export default AdminUserTable;
