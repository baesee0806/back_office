import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <Navbar>
      <Menu>
        <Link to="/">
          <MenuButton>메인</MenuButton>
        </Link>
        <Link to="/board">
          <MenuButton>게시판</MenuButton>
        </Link>
        <Link to="/Schedule">
          <MenuButton>일정</MenuButton>
        </Link>
      </Menu>
      <User>###님</User>
    </Navbar>
  ) 
}

export default Nav;

const Navbar = styled.div`

height: 80px;
width: 100%;

display: flex;
justify-content: space-between;
align-items: center;

font-size: 1.5rem;

border-bottom: 1px solid black;
`
const Menu = styled.div`
display: flex;
flex-direction: row;
margin-left: 10px;;
`
const MenuButton = styled.div`
margin-right: 20px;
`
const User = styled.div`
margin-right: 10px;

`