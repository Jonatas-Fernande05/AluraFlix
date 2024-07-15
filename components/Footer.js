// src/components/Footer.js
import React from 'react';
import styled from 'styled-components';
import logo from '../assets/Footer.png'; // Adicione a logo "AluraFlix" nesta pasta

const FooterContainer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background-color: #1e3a8a;
  color: #ffffff;
`;

const Logo = styled.img`
  height: 40px;
  margin-right: 10px;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <Logo src={logo} alt="AluraFlix Logo" />
      <p>&copy; 2024 AluraFlix. Todos os direitos reservados.</p>
    </FooterContainer>
  );
};

export default Footer;
