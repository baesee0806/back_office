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
  const q = query(collection(firestore, "board"), where("docId", "==", ref.id));
  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map((doc) => doc.data());
};

// board page board detail view Update
export const firebaseUpdateView = async (item) => {
  const docRef = item.docId;
  const viewData = item.view;
  const q = doc(firestore, "board", docRef);
  const querySnapshot = await updateDoc(q, {
    view: viewData + 1,
  });
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
export const firebaseAddComment = async (comment) => {
  const authUserUid = getAuth().currentUser.uid;
  const docRef = await addDoc(collection(firestore, "comments"), {
    userId: authUserUid,
    userName: userName,
    comment: comment,
    docId: ref.id,
    createdAt: new Date(),
    docNumber: props.commentData.length + 1,
  }).then((docRef) => {
    updateDoc(docRef, {
      id: docRef.id,
    });
  });
};

// export const firebaseAddTodo = async (todo) => {
//     const authUserUid = getAuth().currentUser.uid;

//     const docRef = await addDoc(collection(firestore, "todo"), {
//       uid: authUserUid,
//       todo,
//       checked: false,
//       createdAt: new Date(),
//     }).then((docRef) => {
//       updateDoc(docRef, {
//         id: docRef.id,
//       });
//     });
//   };
