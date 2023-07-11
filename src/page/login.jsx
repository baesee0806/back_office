import React from "react";
import { useState } from "react";
import { authService } from "../apis/firebaseService.js";
import { signInWithEmailAndPassword } from "firebase/auth";
import styled from "styled-components";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async () => {
    signInWithEmailAndPassword(authService, email, password)
      .then(() => {
        alert("로그인 성공");
        setEmail("");
        setPassword("");
      })
      .catch((err) => {});
  };
  return (
    <>
      <div>
        <div>
          <label>아이디</label>
          <input
            type="text"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div>
          <label>비밀번호</label>
          <input
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>

        <button onClick={handleSubmit}>로그인</button>
      </div>
    </>
  );
}

const LoginContainer = styled.div``;

export default Login;
