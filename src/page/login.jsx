import React from "react";
import { useState } from "react";
function Login() {
  const [user, setUser] = useState({
    id: "",
    password: "",
    githubId: "",
  });
  const handleChangeUser = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <div>
        <div>
          <label>아이디</label>
          <input
            type="text"
            name="id"
            value={user.id}
            onChange={handleChangeUser}
          />
        </div>
        <div>
          <label>비밀번호</label>
          <input
            type="password"
            name="password"
            value={user.password}
            onChange={handleChangeUser}
          />
        </div>
        <div>
          <label>Github 아이디</label>
          <input
            type="text"
            name="githubId"
            value={user.githubId}
            onChange={handleChangeUser}
          />
        </div>
        <button>로그인</button>
      </div>
    </>
  );
}

export default Login;
