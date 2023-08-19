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
} from "firebase/firestore";

export const firebaseGetUserData = async () => {
  const q = query(collection(firestore, "user"));
  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map((doc) => doc.data());
};
