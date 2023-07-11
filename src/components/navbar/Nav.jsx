import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";
function Nav() {
  const auth = getAuth();
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
        <BackOfficeMenu to="/">
          <li>###님의 Back Office</li>
        </BackOfficeMenu>
        <GithubMenu to="/github">
          <li>Github</li>
        </GithubMenu>
        <BoardMenu to="/board">
          <li>게시판</li>
        </BoardMenu>
        <MessengerMenu to="/messenger">
          <li>메신저</li>
        </MessengerMenu>
        <div onClick={handleLogout}>
          <li>로그아웃</li>
        </div>
      </MenuList>
    </Navbar>
  );
}

export default Nav;

const Navbar = styled.div`
  display: flex;
  justify-content: space-around;
  background-color: #d9bde2;
  z-index: 1;
`;

const MenuList = styled.ul`
  display: flex;
  width: 100%;
  font-size: 1.5rem;
`;
const BackOfficeMenu = styled(Link)`
  width: 200px;
  text-decoration: none;
  color: white;
  margin-right: 30px;
`;

const GithubMenu = styled(Link)`
  text-decoration: none;
  margin-right: 30px;
`;
const BoardMenu = styled(Link)`
  text-decoration: none;
  margin-right: 30px;
`;
const MessengerMenu = styled(Link)`
  text-decoration: none;
  margin-right: 30px;
`;
