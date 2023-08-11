import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { getAuth } from "firebase/auth";
import AppRouter from "./share/AppRouter.js";
import { RecoilRoot, useRecoilState } from "recoil";
import { loadingState, loginState } from "./recoil/atoms.js";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const App = () => {
  const auth = getAuth();
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(loginState);
  const [loading, setLoading] = useRecoilState(loadingState);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
      setLoading(true);
    });
  }, [isLoggedIn]);

  return (
    <BrowserRouter>
      {loading ? <AppRouter isLoggedIn={isLoggedIn} /> : "Loading..."}
    </BrowserRouter>
  );
};

// ReactDOM.render(<App />, document.getElementById("app"));
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      cacheTime: 1000 * 60 * 60 * 24, // 24시간
    },
  },
});
const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(
  <RecoilRoot>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </RecoilRoot>
);
