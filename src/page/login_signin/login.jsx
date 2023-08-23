import React from "react";
import { useState } from "react";
import { authService } from "../../apis/firebaseService.js";
import { signInWithEmailAndPassword } from "firebase/auth";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { firebaseGetUserData } from "../../apis/admin/users/users.js";
import { useQuery } from "@tanstack/react-query";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async () => {
    signInWithEmailAndPassword(authService, email, password)
      .then(() => {
        alert("로그인 성공");
        setEmail("");
        setPassword("");
      })
      .catch((err) => {});
  };
  const { data: userData } = useQuery({
    queryKey: ["userData"],
    queryFn: firebaseGetUserData,
  });
  const handleLogin = () => {
    userData?.map((user) => {
      if (user.email === email) {
        handleSubmit();
      } else {
        return;
      }
    });
  };
  return (
    <LoginContainer>
      <LoginBox>
        <LoginTitle>로그인</LoginTitle>
        <EmailBox>
          <EmailInput
            type="text"
            value={email}
            placeholder="이메일을 입력해주세요."
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </EmailBox>
        <PasswordBox>
          <PasswordInput
            type="password"
            value={password}
            placeholder="비밀번호를 입력해주세요."
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </PasswordBox>
        <EmailPasswordfindBox>
          <EmailFind>아이디 찾기 |</EmailFind>
          <PasswordFind>비밀번호 찾기</PasswordFind>
        </EmailPasswordfindBox>

        <LoginButton onClick={handleLogin}>로그인</LoginButton>
        <SignupButton
          onClick={() => {
            navigate("/signin");
          }}
        >
          회원가입
        </SignupButton>
      </LoginBox>
    </LoginContainer>
  );
}

const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  height: 100vh;
`;

const LoginBox = styled.div`
  width: 650px;
  height: 550px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 2px solid #aea8f1;
  border-radius: 5px;
`;
const LoginTitle = styled.div`
  font-size: 30px;
  margin-bottom: 40px;
  font-weight: bold;
  color: #191f28;
`;

const EmailBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

const EmailInput = styled.input`
  font-size: 25px;
  width: 500px;
  height: 60px;
  border-radius: 5px;
  border: 2px solid #aea8f1;
  &::placeholder {
    color: #c4c4c4;
    padding-left: 20px;
  }
  &:focus {
    &::placeholder {
      color: white;
    }
  }
`;

const PasswordBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

const PasswordInput = styled.input`
  font-size: 25px;
  width: 500px;
  height: 60px;
  border-radius: 5px;
  border: 2px solid #aea8f1;
  &::placeholder {
    color: #c4c4c4;
    padding-left: 20px;
  }
  &:focus {
    &::placeholder {
      color: white;
    }
  }
`;

const EmailPasswordfindBox = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 40px;
`;

const EmailFind = styled.div`
  margin-right: 8px;
`;
const PasswordFind = styled.div``;

const LoginButton = styled.button`
  width: 500px;
  height: 60px;
  margin-bottom: 20px;
  border-radius: 5px;
  border: 2px solid #aea8f1;
  font-size: 25px;
  font-weight: bold;
  background-color: white;
  color: #aea8f1;
  &:hover {
    background-color: #aea8f1;
    color: white;
  }
`;
const SignupButton = styled.button`
  width: 500px;
  height: 60px;
  border-radius: 5px;
  border: 2px solid #aea8f1;
  font-size: 25px;
  font-weight: bold;
  background-color: white;
  color: #aea8f1;
  &:hover {
    background-color: #aea8f1;
    color: white;
  }
`;
export default Login;
