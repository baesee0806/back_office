import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function Nav() {
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
