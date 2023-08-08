import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { IoSend } from "react-icons/io5";
import { RiDeleteBin6Line } from "react-icons/ri";
import { firestore } from "../../apis/firebaseService.js";
import { getAuth } from "firebase/auth";
import {
  collection,
  addDoc,
  onSnapshot,
  updateDoc,
  doc,
  deleteDoc,
  where,
  query,
  getDocs,
} from "firebase/firestore";
function MainTodoList() {
  const [todoList, setTodoList] = useState([]);
  const [todo, setTodo] = useState("");
  // create todo
  const authUserUid = getAuth().currentUser.uid;
  const AddTodo = async () => {
    const docRef = await addDoc(collection(firestore, "todo"), {
      todo: todo,
      uid: authUserUid,
      createdAt: new Date(),
      checked: false,
    }).then((docRef) => {
      updateDoc(docRef, {
        docId: docRef.id,
      });
    });
    setTodo("");
    GetTodo();
  };
  // get todo
  const GetTodo = async () => {
    const q = query(
      collection(firestore, "todo"),
      where("uid", "==", authUserUid)
    );
    const querySnapshot = await getDocs(q);
    const temp = [];
    querySnapshot.forEach((doc) => {
      temp.push(doc.data());
    });
    setTodoList(temp);
  };
  useEffect(() => {
    GetTodo();
  }, []);
  // todo check line-through (update)
  const UpdateChecked = async (data) => {
    const ref = data.docId;
    const checkedState = data.checked;
    const q = doc(firestore, "todo", ref);
    const querySnapshot = await updateDoc(q, {
      checked: !checkedState,
    }).then(() => {
      GetTodo();
    });
  };
  // todo delete
  const DeleteTodo = async (data) => {
    const ref = data.docId;

    const q = doc(firestore, "todo", ref);
    const querySnapshot = await deleteDoc(q).then(() => {
      GetTodo();
    });
  };
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
          return DeleteTodo(data);
        }
      } else {
        return DeleteTodo(data);
      }
    } else {
      return DeleteTodo(data);
    }
  };
  return (
    <TodoListcontainer>
      <Title>To Do List</Title>
      <TodoListBox>
        {todoList
          .sort((a, b) => a.createdAt - b.createdAt)
          .map((data) => {
            DeleteLastDayTodoListData(data);
            return (
              <TodoList key={data.docId}>
                <input
                  type="checkbox"
                  onChange={() => {
                    UpdateChecked(data);
                  }}
                  checked={data.checked}
                />
                {data.todo}
                <TodoListDleteButton
                  onClick={() => {
                    DeleteTodo(data);
                  }}
                >
                  <RiDeleteBin6Line />
                </TodoListDleteButton>
              </TodoList>
            );
          })}
      </TodoListBox>
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
            AddTodo();
          }}
        >
          <IoSend />
        </AddListButton>
      </AddListBox>
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
