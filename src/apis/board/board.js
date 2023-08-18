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

// board page board List Get
export const firebaseGetBoards = async () => {
  const q = query(collection(firestore, "board"));
  const querySnapshot = await getDocs(q);
  return querySnapshot.docs
    .map((doc) => doc.data())
    .sort((a, b) => a.createdAt - b.createdAt);
};

// board page detail board Data Get
export const firebaseDetailBoard = async (ref) => {
  const q = query(collection(firestore, "board"), where("id", "==", ref.id));
  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map((doc) => doc.data());
};

// board page board detail view Update
export const firebaseUpdateView = async (item) => {
  const docRef = item.id;
  const viewData = item.view;
  const q = doc(firestore, "board", docRef);
  const querySnapshot = await updateDoc(q, {
    view: viewData + 1,
  });
};
// board page add board Data
export const firebaseAddBoard = async (data) => {
  const authUserUid = getAuth().currentUser.uid;
  const userName = getAuth().currentUser.displayName;

  const q = collection(firestore, "board");
  const docRef = await addDoc(q, {
    title: data.title,
    content: data.content,
    uid: authUserUid,
    userName: userName,
    createdAt: new Date(),
    view: 0,
    docNumber: data.docNumber + 1,
  }).then((docRef) => {
    updateDoc(docRef, {
      id: docRef.id,
    });
  });
};
// update board Data

export const firebaseUpdateBoard = async (data) => {
  const q = doc(firestore, "board", data.ref);
  const querySnapshot = await updateDoc(q, {
    title: data.title,
    content: data.content,
    createdAt: new Date(),
  });
};
// update 할려는 글의 정보 불러오기

export const firebaseGetUpdateBoard = async (ref) => {
  const q = query(collection(firestore, "board"), where("id", "==", ref.id));
  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map((doc) => doc.data());
};
// delete board Data

export const firebaseDeleteBoard = async (ref) => {
  const q = doc(firestore, "board", ref.id);
  const querySnapshot = await deleteDoc(q);
};

// get Comment Data
export const firebaseGetComments = async (ref) => {
  const q = query(
    collection(firestore, "comments"),
    where("docId", "==", ref.id)
  );
  const querySnapshot = await getDocs(q);
  return querySnapshot.docs
    .map((doc) => doc.data())
    .sort((a, b) => a.createdAt - b.createdAt);
};

// delete Comment Data

export const firebaseDeleteComment = async (data) => {
  const docId = data.id;
  const q = doc(firestore, "comments", docId);
  const querySnapshot = await deleteDoc(q);
};

// add Comment Data
export const firebaseAddComment = async (data) => {
  const authUserUid = getAuth().currentUser.uid;
  const userName = getAuth().currentUser.displayName;
  const comment = data.comment;
  const ref = data.ref;
  // const docNumber = data.docNumber;

  const docRef = await addDoc(collection(firestore, "comments"), {
    userId: authUserUid,
    userName: userName,
    comment: comment,
    docId: ref.id,
    createdAt: new Date(),
  }).then((docRef) => {
    updateDoc(docRef, {
      id: docRef.id,
    });
  });
};

// update Comment Data
export const firebaseUpdateComment = async (data) => {
  const docId = data.docId;
  const comment = data.comment;
  const q = doc(firestore, "comments", docId);
  const querySnapshot = await updateDoc(q, {
    comment: comment,
    createdAt: new Date(),
  });
};
