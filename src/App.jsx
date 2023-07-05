import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/navbar/Nav.jsx";
import Main from "./page/Main.jsx";
import Messenger from "./page/Messenger.jsx";
import Share from "./page/Share.jsx";
import styled from "styled-components";
const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Nav />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/share" element={<Share />} />
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
  height: 100vh;
`;
ReactDOM.render(<App />, document.getElementById("app"));
