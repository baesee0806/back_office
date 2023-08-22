import { getAuth } from "firebase/auth";
import { firestore } from "../../firebaseService";
import {
  query,
  collection,
  where,
  getDocs,
  addDoc,
  updateDoc,
  doc,
  deleteDoc,
  getDoc,
} from "firebase/firestore";

export const firebaseMiniProjectData = async () => {
  const q = query(collection(firestore, "miniProject"));
  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map((doc) => doc.data());
};

export const firebaseGetBoards = async () => {
  const q = query(collection(firestore, "board"));
  const querySnapshot = await getDocs(q);
  return querySnapshot.docs
    .map((doc) => doc.data())
    .sort((a, b) => a.createdAt - b.createdAt);
};
