import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";
function Nav() {
  const auth = getAuth();
  const [user, setUser] = useState(null);
  useEffect(() => {
    if (!auth.currentUser) return;
    setUser(auth.currentUser);
  }, [auth.currentUser]);
  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        alert("로그아웃 성공");
      })
      .catch((err) => {
        alert("로그아웃 실패");
      });
  };

  return (
    <Navbar>
      <MenuList>
        <LogoBox>
          <BackOfficeMenu to="/">
            <li>{user?.displayName}님의 Back Office</li>
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
  background-color: #d9bde2;
`;

const MenuList = styled.ul`
  display: flex;
  justify-content: space-between;
  width: 100%;
  font-size: 1.5rem;
  list-style: none;
`;
const LogoBox = styled.div`
  display: flex;
`;
const MenuBox = styled.div`
  display: flex;
  margin-right: 40px;
`;
const BackOfficeMenu = styled(Link)`
  width: 400px;
  text-decoration: none;
  color: white;
  margin-right: 30px;
`;

const GithubMenu = styled(Link)`
  text-decoration: none;
  margin-right: 30px;
  color: white;
`;
const BoardMenu = styled(Link)`
  text-decoration: none;
  margin-right: 30px;
  color: white;
`;
const MessengerMenu = styled(Link)`
  text-decoration: none;
  margin-right: 30px;
  color: white;
`;
const LogoutMenu = styled.div`
  cursor: pointer;
  color: white;
`;
