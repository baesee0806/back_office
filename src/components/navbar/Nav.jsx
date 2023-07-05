import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function Nav() {
  return (
    // <Navbar>
    //   <Menu>
    //     <Link to="/">
    //       <MenuButton>메인</MenuButton>
    //     </Link>
    //     <Link to="/share">
    //       <MenuButton>정보 공유</MenuButton>
    //     </Link>
    //     <Link to="/messenger">
    //       <MenuButton>메신저</MenuButton>
    //     </Link>
    //   </Menu>
    //   <User>###님</User>
    // </Navbar>
    <Navbar>
      <ul>
        <Link to="/">
          <li>###님의 Back Office</li>
        </Link>
        <Link to="/github">
          <li>Github</li>
        </Link>
        <Link to="/share">
          <li>게시판</li>
        </Link>
        <Link to="/messenger">
          <li>메신저</li>
        </Link>
      </ul>
    </Navbar>
  );
}

export default Nav;

const Navbar = styled.div`
  height: 100%;
  width: 300px;
  background-color: green;
`;
