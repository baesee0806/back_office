import React, { useState } from "react";
import styled from "styled-components";
import { IoSend } from "react-icons/io5";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { firebaseAddTodo } from "../../apis/main/todos.js";
function MainTodoListAddListBox() {
  const [todo, setTodo] = useState("");

  const queryClient = useQueryClient();

  const addMutation = useMutation((data) => firebaseAddTodo(data), {
    onSuccess: () => {
      setTodo("");
      queryClient.invalidateQueries("todoListData");
    },
  });
  return (
    <AddListBox>
      <AddListInput
        type="text"
        value={todo}
        onChange={(e) => {
          setTodo(e.target.value);
        }}
      />
      <AddListButton
        onClick={() => {
          addMutation.mutate(todo);
        }}
      >
        <IoSend />
      </AddListButton>
    </AddListBox>
  );
}
const AddListBox = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const AddListInput = styled.input`
  width: 80%;
  border: none;
  border: 1px solid #908888;
  border-radius: 5px;
  font-size: 18px;
`;
const AddListButton = styled.button`
  margin-left: -30px;
  margin-top: 2px;
  background-color: white;
  border: none;
  cursor: pointer;
  &:hover {
    color: #609aea;
    transition: 0.2s;
  }
`;
export default MainTodoListAddListBox;
