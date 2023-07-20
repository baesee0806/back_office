import { firestore } from "../apis/firebaseService.js";
import { collection, onSnapshot } from "firebase/firestore";

export const useGetDetailBoardData = async (ref, setData) => {
  const q = collection(firestore, "board");
  const querySnapshot = await onSnapshot(q, (querySnapshot) => {
    querySnapshot.forEach((doc) => {
      if (doc.id === ref.id) {
        setData(doc.data());
      }
    });
  });
};
