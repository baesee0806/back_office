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

export const firebaseGetBoards = async () => {
  const q = query(collection(firestore, "board"));
  const querySnapshot = await getDocs(q);
  return querySnapshot.docs
    .map((doc) => doc.data())
    .sort((a, b) => a.createdAt - b.createdAt);
};

export const firebaseUpdateView = async (item) => {
  const docRef = item.docId;
  const viewData = item.view;
  const q = doc(firestore, "board", docRef);
  const querySnapshot = await updateDoc(q, {
    view: viewData + 1,
  });
};
