import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "../page/Main.jsx";
import Messenger from "../page/Messenger.jsx";
import Board from "../page/Board.jsx";
import Nav from "../components/navbar/Nav.jsx";
import Login from "../page/login.jsx";
import SignIn from "../page/SignIn.jsx";
function AppRouter({ isLoggedIn }) {
  return (
    <>
      {isLoggedIn ? (
        <>
          <Nav />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/board" element={<Board />} />
            <Route path="/messenger" element={<Messenger />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signin" element={<SignIn />} />
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
