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

export const firebaseGetUserData = async () => {
  const temp = [];
  const authUserEmail = getAuth().currentUser.email;
  const q = query(
    collection(firestore, "user"),
    where("email", "==", authUserEmail)
  );
  const querySnapshot = await getDocs(q);
  querySnapshot.docs.map((doc) => temp.push(doc.data().githubId));
  return temp[0];
};

export const fetchGithubData = async (githubId) => {
  const temp = [];
  const response = await fetch(
    `https://api.github.com/users/${githubId}/repos`
  );
  const data = await response.json();
  const orderByData = data.sort((a, b) => {
    return new Date(b.pushed_at) - new Date(a.pushed_at);
  });
  temp.push(orderByData);
  return [temp[0][0], temp[0][1]];
};
