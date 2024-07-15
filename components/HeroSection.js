// src/components/HeroSection.js
import React from 'react';
import styled from 'styled-components';
import backgroundImage from '../assets/Home - Modal - Desktop.png'; 

const HeroContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 80vh;
  background: url(${backgroundImage}) no-repeat center center/cover;
  color: #ffffff;
  text-align: center;
`;

const HeroTitle = styled.h1`
  font-size: 48px;
  margin-bottom: 20px;
`;

const HeroSubtitle = styled.p`
  font-size: 24px;
  margin-bottom: 40px;
`;

const HeroButton = styled.a`
  background-color: #3b82f6;
  padding: 10px 20px;
  border-radius: 5px;
  color: #ffffff;
  font-size: 18px;
  &:hover {
    background-color: #2563eb;
  }
`;

const HeroSection = () => {
  return (
    <HeroContainer>
      <HeroTitle>Bem-vindo ao AluraFlix</HeroTitle>
      <HeroSubtitle>Aprenda, pratique e se conecte com a nossa comunidade</HeroSubtitle>
      <HeroButton href="#courses">Ver Cursos</HeroButton>
    </HeroContainer>
  );
};

export default HeroSection;
