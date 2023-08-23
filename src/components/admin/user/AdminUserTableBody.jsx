import { useMutation, useQueryClient } from "@tanstack/react-query";
import React, { useState } from "react";
import styled from "styled-components";
import { firebaseUpdateUserData } from "../../../apis/admin/users/users";
function AdminUserTableBody({ data }) {
  const queryClient = useQueryClient();
  const [userName, setUserName] = useState(data.name);
  const [userEmail, setUserEmail] = useState(data.email);
  const [userDepartment, setUserDepartment] = useState(data.department);
  const [userAdmin, setUserAdmin] = useState(data.admin);
  const updateData = {
    userName,
    userEmail,
    userDepartment,
    userAdmin,
    uid: data.userId,
    updateState: data.updateState,
  };
  const updateUserMutation = useMutation(
    (data) => {
      firebaseUpdateUserData(data);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries("userData");
      },
    }
  );
  const handleUpdate = (updateData) => {
    console.log(data);
    if (
      userName === "" ||
      userEmail === "" ||
      userDepartment === "" ||
      userAdmin === ""
    )
      return;

    updateUserMutation.mutate(updateData);
  };
  return (
    <TableBodyUpdateRow>
      <TableBodyUpdateName>
        <TableBodyUpdateInput
          type="text"
          value={userName}
          onChange={(e) => {
            setUserName(e.target.value);
          }}
        />
      </TableBodyUpdateName>
      <TableBodyUpdateEmail>
        <TableBodyUpdateInput
          type="text"
          value={userEmail}
          onChange={(e) => {
            setUserEmail(e.target.value);
          }}
        />
      </TableBodyUpdateEmail>
      <TableBodyUpdateDepartment>
        <TableBodyUpdateInput
          type="text"
          value={userDepartment}
          onChange={(e) => {
            setUserDepartment(e.target.value);
          }}
        />
      </TableBodyUpdateDepartment>
      <TableBodyUpdateAdmin>
        <TableBodyUpdateInput
          type="text"
          value={userAdmin}
          onChange={(e) => {
            setUserAdmin(e.target.value);
          }}
        />
      </TableBodyUpdateAdmin>
      <TableBodyUpdateButtonBox>
        <TableBodyUpdateButton
          onClick={() => {
            handleUpdate(updateData);
          }}
        >
          V
        </TableBodyUpdateButton>
      </TableBodyUpdateButtonBox>
    </TableBodyUpdateRow>
  );
}
const TableBodyUpdateRow = styled.tr`
  width: 100%;
  height: 40px;
`;
const TableBodyUpdateName = styled.td`
  border: 1px solid black;
`;
const TableBodyUpdateEmail = styled.td`
  border: 1px solid black;
`;
const TableBodyUpdateDepartment = styled.td`
  border: 1px solid black;
`;
const TableBodyUpdateAdmin = styled.td`
  border: 1px solid black;
`;
const TableBodyUpdateButtonBox = styled.td`
  text-align: center;
`;
const TableBodyUpdateButton = styled.button`
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

const TableBodyUpdateInput = styled.input`
  width: 80%;
  text-align: center;
`;
export default AdminUserTableBody;
