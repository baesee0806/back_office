import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "../page/Main.jsx";
import Messenger from "../page/Messenger.jsx";
import Board from "../page/Board.jsx";
import Nav from "../components/navbar/Nav.jsx";
import Login from "../page/login.jsx";
import SignIn from "../page/SignIn.jsx";
import Github from "../page/Github.jsx";
import BoardCreate from "../page/BoardCreate.jsx";
import BoardDtail from "../page/BoardDtail.jsx";
import BoardUpdate from "../page/board/BoardUpdate.jsx";
function AppRouter({ isLoggedIn }) {
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
            <Route path="/messenger" element={<Messenger />} />
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
