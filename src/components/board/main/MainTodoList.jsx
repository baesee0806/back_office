import React from "react";
import styled from "styled-components";
import { IoSend } from "react-icons/io5";
function MainTodoList() {
  return (
    <TodoListcontainer>
      <Title>To Do List</Title>
      <TodoListBox>
        <TodoList>
          <input type="checkbox" />
          오늘 할일
        </TodoList>
        <TodoList>
          <input type="checkbox" />
          오늘 할일
        </TodoList>
        <TodoList>
          <input type="checkbox" />
          오늘 할일
        </TodoList>
        <TodoList>
          <input type="checkbox" />
          오늘 할일
        </TodoList>
        <TodoList>
          <input type="checkbox" />
          오늘 할일
        </TodoList>
        <TodoList>
          <input type="checkbox" />
          오늘 할일
        </TodoList>
        <TodoList>
          <input type="checkbox" />
          오늘 할일
        </TodoList>
        <TodoList>
          <input type="checkbox" />
          오늘 할일
        </TodoList>
        <TodoList>
          <input type="checkbox" />
          오늘 할일
        </TodoList>
        <TodoList>
          <input type="checkbox" />
          오늘 할일
        </TodoList>
        <TodoList>
          <input type="checkbox" />
          오늘 할일
        </TodoList>
        <TodoList>
          <input type="checkbox" />
          오늘 할일
        </TodoList>
        <TodoList>
          <input type="checkbox" />
          오늘 할일
        </TodoList>
        <TodoList>
          <input type="checkbox" />
          오늘 할일
        </TodoList>
        <TodoList>
          <input type="checkbox" />
          오늘 할일
        </TodoList>
        <TodoList>
          <input type="checkbox" />
          오늘 할일
        </TodoList>
        <TodoList>
          <input type="checkbox" />
          오늘 할일
        </TodoList>
      </TodoListBox>
      <AddListBox>
        <AddListInput type="text" />
        <AddListButton>
          <IoSend />
        </AddListButton>
      </AddListBox>
    </TodoListcontainer>
  );
}
const TodoListcontainer = styled.div`
  width: 80%;
  height: 90%;
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
  align-items: center;
`;
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

export default MainTodoList;
