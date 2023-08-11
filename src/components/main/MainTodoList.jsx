import React from "react";
import styled from "styled-components";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getAuth } from "firebase/auth";
import {
  firebaseGetTodos,
  firebaseDeleteTodo,
  firebaseCheckTodoUpdate,
} from "../../apis/main/todos.js";
import MainTodoListAddListBox from "./MainTodoListAddListBox.jsx";

function MainTodoList() {
  const authUserUid = getAuth().currentUser.uid;
  const queryClient = useQueryClient();
  // get Data
  const { data: todoListData } = useQuery({
    queryKey: ["todoListData", authUserUid],
    queryFn: () => firebaseGetTodos(authUserUid),
    enabled: !!authUserUid,
  });
  // update checked data
  const updateCheckedMutation = useMutation(
    (data) => firebaseCheckTodoUpdate(data),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("todoListData");
      },
    }
  );
  // delete data
  const deleteMutation = useMutation((data) => firebaseDeleteTodo(data), {
    onSuccess: () => {
      queryClient.invalidateQueries("todoListData");
    },
  });

  const DeleteLastDayTodoListData = (data) => {
    const today = new Date();
    const thisYear = today.getFullYear();
    const thisMonth = today.getMonth() + 1;
    const thisDay = today.getDate();

    const createAT = new Date(data.createdAt.seconds * 1000);
    const createYear = createAT.getFullYear();
    const createMonth = createAT.getMonth() + 1;
    const createDay = createAT.getDate();
    if (createYear - thisYear == 0) {
      if (createMonth - thisMonth == 0) {
        if (createDay - thisDay == 0) {
          return;
        } else {
          return deleteMutation.mutate(data);
        }
      } else {
        return deleteMutation.mutate(data);
      }
    } else {
      return deleteMutation.mutate(data);
    }
  };
  return (
    <TodoListcontainer>
      <Title>To Do List</Title>
      <TodoListBox>
        {todoListData
          ?.sort((a, b) => a.createdAt - b.createdAt)
          .map((data) => {
            DeleteLastDayTodoListData(data);
            return (
              <TodoList key={data.id}>
                <input
                  type="checkbox"
                  onChange={() => {
                    updateCheckedMutation.mutate(data);
                  }}
                  checked={data.checked}
                />
                {data.todo}
                <TodoListDleteButton
                  onClick={() => {
                    deleteMutation.mutate(data);
                  }}
                >
                  <RiDeleteBin6Line />
                </TodoListDleteButton>
              </TodoList>
            );
          })}
      </TodoListBox>

      <MainTodoListAddListBox />
    </TodoListcontainer>
  );
}
const TodoListcontainer = styled.div`
  width: 85%;
  height: 92%;
  border: 1px solid black;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Title = styled.div`
  font-size: 30px;
  font-weight: bold;
  margin-top: 20px;
  margin-bottom: 20px;
  border-bottom: 1px solid black;
`;
const TodoListBox = styled.div`
  width: 80%;
  height: 82%;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  scroll-behavior: smooth;
  overflow-y: auto;
`;
const TodoList = styled.div`
  width: 100%;
  height: 40px !important;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #908888;
`;

const TodoListDleteButton = styled.button`
  background-color: white;
  border: none;
  margin-top: 2px;
  cursor: pointer;
  font-size: 20px;
  &:hover {
    color: #609aea;
    transition: 0.2s;
  }
`;
export default MainTodoList;
