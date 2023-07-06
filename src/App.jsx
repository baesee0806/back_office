import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/navbar/Nav.jsx";
import Main from "./page/Main.jsx";
import Messenger from "./page/Messenger.jsx";
import Board from "./page/Board.jsx";
import styled from "styled-components";
const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Nav />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/board" element={<Board />} />
          <Route path="/messenger" element={<Messenger />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

const Layout = styled.div`
  margin-left: -8px;
  margin-top: -8px;

  display: flex;
  align-items: center;
  width: 100%;

  & > *:last-child {
    margin-left: 180px;
    width: calc(100% - 170px);
  }
`;

ReactDOM.render(<App />, document.getElementById("app"));
