// src/components/Header.js
import React from 'react';
import styled from 'styled-components';
import logo from '../assets/Footer.png'; 
import { Link } from 'react-router-dom';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #1e3a8a;
`;

const Logo = styled.img`
  height: 40px;
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
`;

const SearchInput = styled.input`
  padding: 8px;
  margin-right: 20px;
  border: none;
  border-radius: 4px;
`;

const NavLink = styled(Link)`
  color: #ffffff;
  margin-right: 20px;
  font-size: 16px;
  &:hover {
    color: #93c5fd;
  }
`;

const MoreButton = styled.button`
  background-color: #3b82f6;
  color: #ffffff;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  &:hover {
    background-color: #2563eb;
  }
`;


function Header() {
  return (
    <HeaderContainer>
      <Link to="/"><Logo src={logo} alt="AluraFlix Logo" /></Link>
      <Nav>
        <SearchInput type="text" placeholder="Search..." />
        <NavLink to="/home">Home</NavLink>
        <MoreButton onClick={() => alert("Mais componentes em breve!")}>Mais</MoreButton>
      </Nav>
    </HeaderContainer>
  );
}

export default Header;
