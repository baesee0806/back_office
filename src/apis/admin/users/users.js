import { deleteUser, getAuth, updateProfile } from "firebase/auth";
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

export const firebaseUpdateUserData = async (updateData) => {
  const auth = getAuth();

  const q = doc(firestore, "user", updateData.uid);
  const querySnapshot = await updateDoc(q, {
    name: updateData.userName,
    email: updateData.userEmail,
    department: updateData.userDepartment,
    admin: updateData.userAdmin,
    updateState: !updateData.updateState,
  }).then(() => {
    updateProfile(auth.currentUser, {
      displayName: updateData.userName,
      email: updateData.userEmail,
    });
  });
};

export const firebaseUserUpdateState = async (userId) => {
  const q = doc(firestore, "user", userId);
  const querySnapshot = await updateDoc(q, {
    updateState: true,
  });
};

export const firebaseDeleteUserData = async (userId) => {
  const q = doc(firestore, "user", userId);
  const querySnapshot = await deleteDoc(q);
};
