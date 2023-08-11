import { getAuth } from "firebase/auth";
import { firestore } from "../firebaseService";
import {
  query,
  collection,
  where,
  getDocs,
  addDoc,
  updateDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";

// main page Todo List Get 컬렉션 todo Data
export const firebaseGetTodos = async (authUserUid) => {
  const q = query(
    collection(firestore, "todo"),
    where("uid", "==", authUserUid)
  );
  const querySnapshot = await getDocs(q);
  return querySnapshot.docs
    .map((doc) => doc.data())
    .sort((a, b) => a.createdAt - b.createdAt);
};

// main page Todo List Add todo Data
export const firebaseAddTodo = async (todo) => {
  const authUserUid = getAuth().currentUser.uid;

  const docRef = await addDoc(collection(firestore, "todo"), {
    uid: authUserUid,
    todo,
    checked: false,
    createdAt: new Date(),
  }).then((docRef) => {
    console.log(1);
    updateDoc(docRef, {
      id: docRef.id,
    });
  });
};

// main page Todo List Delete todo Data

export const firebaseDeleteTodo = async (data) => {
  const docId = data.id;
  const q = doc(firestore, "todo", docId);
  const querySnapshot = await deleteDoc(q);
};

// main page Todo List checked State Update
export const firebaseCheckTodoUpdate = async (data) => {
  const docId = data.id;
  const checkedState = data.checked;
  const q = doc(firestore, "todo", docId);
  const querySnapshot = await updateDoc(q, {
    checked: !checkedState,
  });
};
