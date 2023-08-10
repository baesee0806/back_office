import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { getAuth } from "firebase/auth";
import AppRouter from "./share/AppRouter.js";
import { RecoilRoot } from "recoil";
const App = () => {
  const auth = getAuth();
  const [init, setInit] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
      setInit(true);
    });
  }, [isLoggedIn]);

  return (
    <RecoilRoot>
      <BrowserRouter>
        {init ? <AppRouter isLoggedIn={isLoggedIn} /> : "Loading..."}
      </BrowserRouter>
    </RecoilRoot>
  );
};

// ReactDOM.render(<App />, document.getElementById("app"));
const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(<App />);
