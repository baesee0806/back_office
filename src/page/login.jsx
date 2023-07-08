import React from "react";

function Login() {
  return (
    <>
      <div>
        <div>
          <label>아이디</label>
          <input type="text" />
        </div>
        <div>
          <label>비밀번호</label>
          <input type="password" />
        </div>
        <div>
          <label>Github 아이디</label>
          <input type="text" />
        </div>
        <button>로그인</button>
      </div>
    </>
  );
}

export default Login;
