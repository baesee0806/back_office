import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "../page/main/Main.jsx";
import Messenger from "../page/messenger/Messenger.jsx";
import Board from "../page/board/Board.jsx";
import Nav from "../components/navbar/Nav.jsx";
import Login from "../page/login_signin/login.jsx";
import SignIn from "../page/login_signin/SignIn.jsx";
import Github from "../page/github/Github.jsx";
import BoardCreate from "../page/board/BoardCreate.jsx";
import BoardDtail from "../page/board/BoardDtail.jsx";
import BoardUpdate from "../page/board/BoardUpdate.jsx";
import { collection, onSnapshot } from "firebase/firestore";
import { firestore } from "../apis/firebaseService.js";
import { getAuth } from "firebase/auth";
import Admin from "../page/admin/Admin.jsx";
function AppRouter({ isLoggedIn }) {
  // user 컬렉션 데이터 가져오기
  const auth = getAuth();
  const user = auth.currentUser;
  const [userData, setUserData] = useState([]);
  const GetUserData = async () => {
    onSnapshot(collection(firestore, "user"), (snapshot) => {
      const temp = [];
      snapshot.forEach((doc) => {
        if (doc.data().email === user?.email) {
          temp.push(doc.data());
        }
      });
      setUserData(temp);
    });
  };
  useEffect(() => {
    GetUserData();
  }, []);
  return (
    <>
      {isLoggedIn ? (
        <>
          <Nav />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/github" element={<Github />} />
            <Route path="/board" element={<Board />} />
            <Route path="/board/create" element={<BoardCreate />} />
            <Route path="/board/:id" element={<BoardDtail />} />
            <Route path="/board/update/:id" element={<BoardUpdate />} />
            <Route path="/messenger/*" element={<Messenger />} />
            {userData[0]?.admin == 1 ? (
              <Route path="/admin" element={<Admin />} />
            ) : null}
          </Routes>
        </>
      ) : (
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signin" element={<SignIn />} />
        </Routes>
      )}
    </>
  );
}

export default AppRouter;
