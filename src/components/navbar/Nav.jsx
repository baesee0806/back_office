import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { collection, onSnapshot } from "firebase/firestore";
import { firestore } from "../../apis/firebaseService";
import backOffce from "../../assets/images/back-office.png";
function Nav() {
  const auth = getAuth();
  const user = auth.currentUser;
  const navigate = useNavigate();
  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        alert("로그아웃 성공");
        navigate("/");
      })
      .catch((err) => {
        alert("로그아웃 실패");
      });
  };
  // user 컬렉션 데이터 가져오기
  const [userData, setUserData] = useState([]);
  const GetUserData = async () => {
    onSnapshot(collection(firestore, "user"), (snapshot) => {
      const temp = [];
      snapshot.forEach((doc) => {
        if (doc.data().email === user.email) {
          temp.push(doc.data());
        }
      });
      setUserData(temp);
    });
  };
  useEffect(() => {
    GetUserData();
  }, []);
  return (
    <Navbar>
      <MenuList>
        <LogoBox>
          <BackOfficeMenu to="/">
            <Logo src={backOffce} />
          </BackOfficeMenu>
        </LogoBox>
        <MenuBox>
          <GithubMenu to="/github">
            <li>Github</li>
          </GithubMenu>
          <BoardMenu to="/board">
            <li>게시판</li>
          </BoardMenu>
          <MessengerMenu to="/messenger">
            <li>메신저</li>
          </MessengerMenu>
          {userData && userData[0]?.admin == 1 ? (
            <AdminMenu to="/admin">
              <li>관리자</li>
            </AdminMenu>
          ) : null}
          <LogoutMenu onClick={handleLogout}>
            <li>로그아웃</li>
          </LogoutMenu>
        </MenuBox>
      </MenuList>
    </Navbar>
  );
}

export default Nav;

const Navbar = styled.div`
  display: flex;
  justify-content: space-around;
  border-bottom: 1px solid #c6c8ca;
  min-width: 950px;
`;

const MenuList = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  font-size: 1.2rem;
  list-style: none;
`;
const LogoBox = styled.div`
  width: 200px;
  height: 50px;
`;
const Logo = styled.img`
  width: 100%;
  height: 100%;
`;
const MenuBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin-right: 40px;
  width: 40%;
`;
const BackOfficeMenu = styled(Link)`
  width: 400px;
  text-decoration: none;
  margin-right: 30px;
  font-family: "Noto Sans KR", sans-serif;
  &:visited {
    color: #000;
  }
`;

const GithubMenu = styled(Link)`
  text-decoration: none;
  margin-right: 30px;
  font-family: "Noto Sans KR", sans-serif;
  &:visited {
    color: #000;
  }
`;
const BoardMenu = styled(Link)`
  text-decoration: none;
  margin-right: 30px;
  font-family: "Noto Sans KR", sans-serif;
  &:visited {
    color: #000;
  }
`;
const MessengerMenu = styled(Link)`
  text-decoration: none;
  margin-right: 30px;
  font-family: "Noto Sans KR", sans-serif;
  &:visited {
    color: #000;
  }
`;
const AdminMenu = styled(Link)`
  text-decoration: none;
  margin-right: 30px;
  color: #000;
  font-family: "Noto Sans KR", sans-serif;
  &:visited {
    color: #000;
  }
`;
const LogoutMenu = styled.div`
  cursor: pointer;
  color: #000;
  font-family: "Noto Sans KR", sans-serif;
  &:visited {
    color: #000;
  }
`;
