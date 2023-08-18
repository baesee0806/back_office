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

export const firebaseGetMiniProjectData = async () => {
  const q = query(collection(firestore, "miniProject"));
  const querySnapshot = await getDocs(q);
  return querySnapshot.docs
    .map((doc) => doc.data())
    .sort(() => Math.random() - 0.5)
    .slice(0, 3);
};

export const techColor = (tech) => {
  switch (tech) {
    case "React":
      return "#61DBFB";
      break;
    case "Vue":
      return "#41B883";
      break;
    case "Recoil":
      return "#ffca21";
      break;
    case "Redux":
      return "#764abc";
      break;
    case "Firebase":
      return "#FFA611";
      break;
    case "Styled-components":
      return "#DB7093";
      break;
    case "Sass":
      return "#CD6799";
      break;
    case "Tailwind":
      return "#06B6D4";
      break;
    case "React-query":
      return "#ffca21";
      break;
    case "React-router-dom":
      return "#61DBFB";
      break;
    case "Webpack":
      return "#8ED5FA";
      break;
    case "Vite":
      return "#F9DC3C";
      break;
  }
};
