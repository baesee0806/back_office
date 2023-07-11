import React from "react";
import { useState } from "react";
import { authService } from "../apis/firebaseService.js";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
function SignIn() {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const navigate = useNavigate();
  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        authService,
        registerEmail,
        registerPassword
      );
      console.log(user);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div>
        <div>
          <label>아이디</label>
          <input
            type="text"
            name="id"
            value={registerEmail}
            onChange={(e) => {
              setRegisterEmail(e.target.value);
            }}
          />
        </div>
        <div>
          <label>비밀번호</label>
          <input
            type="password"
            name="password"
            value={registerPassword}
            onChange={(e) => {
              setRegisterPassword(e.target.value);
            }}
          />
        </div>
        {/* <div>
          <label>Github 아이디</label>
          <input
            type="text"
            name="githubId"
            value={user.githubId}
            onChange={handleChangeUser}
          />
        </div> */}
        <button onClick={register}>회원가입</button>
      </div>
    </>
  );
}

export default SignIn;
