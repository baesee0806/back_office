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

export const firebaseMiniProjectAddData = async (data) => {
  const q = collection(firestore, "miniProject");
  const docRef = await addDoc(q, data).then((docRef) => {
    updateDoc(docRef, {
      id: docRef.id,
    });
  });
};

export const firebaseMiniProjectDeleteData = async (docId) => {
  const q = doc(firestore, "miniProject", docId);
  const querySnapshot = await deleteDoc(q);
};
