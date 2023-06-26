import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/navbar/Nav.jsx";
import Main from "./page/Main.jsx";
import Messenger from "./page/Messenger.jsx";
import Share from "./page/Share.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/share" element={<Share />} />
        <Route path="/messenger" element={<Messenger />} />
      </Routes>
    </BrowserRouter>
  );
};
ReactDOM.render(<App />, document.getElementById("app"));
