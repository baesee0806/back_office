import React from "react";
import { useState } from "react";
import { authService } from "../apis/firebaseService.js";
import {
  createUserWithEmailAndPassword,
  updateProfile,
  getAuth,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useUserData } from "../apis/useUserData.js";
function SignIn() {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [registerName, setRegisterName] = useState("");
  const navigate = useNavigate();
  const auth = getAuth();
  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        authService,
        registerEmail,
        registerPassword
      );
      updateProfile(auth.currentUser, {
        displayName: registerName,
      }).then(() => {
        navigate("/");
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <SignContainer>
      <SignBox>
        <LoginTitle>회원가입</LoginTitle>
        <EmailBox>
          <EmailInput
            type="text"
            placeholder="이메일을 입력해주세요."
            value={registerEmail}
            onChange={(e) => {
              setRegisterEmail(e.target.value);
            }}
          />
        </EmailBox>
        <PasswordBox>
          <PasswordInput
            type="password"
            value={registerPassword}
            placeholder="비밀번호를 입력해주세요."
            onChange={(e) => {
              setRegisterPassword(e.target.value);
            }}
          />
        </PasswordBox>
        <NameBox>
          <NameInput
            type="text"
            value={registerName}
            placeholder="성함을 입력해주세요."
            onChange={(e) => {
              setRegisterName(e.target.value);
            }}
          />
        </NameBox>

        <SignButton onClick={register}>회원가입</SignButton>
      </SignBox>
    </SignContainer>
  );
}

const SignContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  height: 100vh;
`;
const SignBox = styled.div`
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
const NameBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

const NameInput = styled.input`
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
const SignButton = styled.button`
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
export default SignIn;
