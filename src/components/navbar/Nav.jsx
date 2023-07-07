import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <Navbar>
      <MenuList>
        <BackOfficeMenu to="/">
          <li>
            ###님의 <br />
            Back Office
          </li>
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
  height: 100vh;
  width: 170px;
  background-color: #d9bde2;
  margin-top: 0;
  position: fixed;
  z-index: 1;
`;

const MenuList = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;

  width: 170px;
  height: 100%;

  text-align: center;
  font-size: 1.5rem;
  margin-top: 2rem;
  margin-left: -32px;
`;
const BackOfficeMenu = styled(Link)`
  text-decoration: none;
  margin-bottom: 2rem;
  color: white;
`;

const GithubMenu = styled(Link)`
  text-decoration: none;
  margin-bottom: 2rem;
`;
const BoardMenu = styled(Link)`
  text-decoration: none;
  margin-bottom: 2rem;
`;
const MessengerMenu = styled(Link)`
  text-decoration: none;
`;
