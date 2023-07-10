import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  // apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  // authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  // projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  // storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  // messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  // appId: process.env.REACT_APP_FIREBASE_APP_ID,
  apiKey: "AIzaSyDpCklaHthM1v7DpcgkHl24hHj1PnfIo-k",
  authDomain: "back-office-924f0.firebaseapp.com",
  projectId: "back-office-924f0",
  storageBucket: "back-office-924f0.appspot.com",
  messagingSenderId: "50995983491",
  appId: "1:50995983491:web:fca54249e556e2afda97b6",
};

const firebaseApp = initializeApp(firebaseConfig);
const firestore = getFirestore(firebaseApp);
const firestorage = getStorage(firebaseApp);
const authService = getAuth(firebaseApp);
export { firestore, firestorage, authService };
