// src/pages/HomePage.js
import React from 'react';
import HeroSection from '../components/HeroSection';
import Card from '../components/Card';

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        <Card title="Curso 1" description="Descrição do curso 1" />
        <Card title="Curso 2" description="Descrição do curso 2" />
        <Card title="Curso 3" description="Descrição do curso 3" />
      </div>
    </>
  );
};

export default HomePage;
