import { firestore } from "../firebaseService";
import { query, collection, getDocs } from "firebase/firestore";

// messenger get user list

export const firebaseGetUserList = async () => {
  const q = query(collection(firestore, "user"));
  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map((doc) => doc.data());
};
