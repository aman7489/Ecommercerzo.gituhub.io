import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import Nav from "./Nav1"


const Header = () => {
  return (
    <MainHeader>
      <NavLink to="/">
        <img src='./BAGRI.png' className='logo'></img>
      </NavLink>
      <Nav/>
    </MainHeader>
  )
}

export default Header


const MainHeader = styled.header`
padding:0 4rem;
height:7rem;
background-color: ${({ theme }) => theme.colors.bg};
display:flex;
justify-content:space-between;
align-items:center;
position:relative;

.logo{
  height:5rem;
}
`
