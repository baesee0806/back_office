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
import { firestore } from "../apis/firebaseService.js";
import { collection, addDoc, onSnapshot, updateDoc } from "firebase/firestore";

function SignIn() {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [registerName, setRegisterName] = useState("");
  const [department, setDepartment] = useState("");
  const [githubId, setGithubId] = useState("");
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
        window.location.reload();
      });
    } catch (error) {
      console.log(error);
    }
  };
  const userData = async () => {
    const docRef = await addDoc(collection(firestore, "user"), {
      name: registerName,
      email: registerEmail,
      admin: 0,
      department: department,
      userId: "",
      githubId: githubId,
    }).then((docRef) => {
      updateDoc(docRef, {
        userId: docRef.id,
      });
    });
  };
  const handleSelect = (e) => {
    setDepartment(e.target.value);
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
        <GithubBox>
          <GithubInput
            type="text"
            value={githubId}
            placeholder="Github 아이디를 입력해주세요."
            onChange={(e) => {
              setGithubId(e.target.value);
            }}
          />
        </GithubBox>
        <DepartmentBox value={department} onChange={handleSelect}>
          <option value="">부서를 선택해주세요</option>
          <option value="FE">Front-end</option>
          <option value="BE">Back-end</option>
          <option value="PL">Planner</option>
          <option value="DE">Designer</option>
        </DepartmentBox>
        <SignButton
          onClick={() => {
            if (
              registerEmail == "" ||
              registerPassword == "" ||
              registerName == "" ||
              department == ""
            ) {
              return console.log("다입력해주세요");
            }
            register();
            userData();
          }}
        >
          회원가입
        </SignButton>
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
  height: 650px;
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
const GithubBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

const GithubInput = styled.input`
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
const DepartmentBox = styled.select`
  width: 500px;
  height: 60px;
  margin-bottom: 20px;
  border-radius: 5px;
  border: 2px solid #aea8f1;
  font-size: 16px;
  color: #aea8f1;
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
