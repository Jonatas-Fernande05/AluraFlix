// src/components/Card.js
import React, { useState } from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin: 20px;
  padding: 20px;
  max-width: 300px;
`;

const CardTitle = styled.h2`
  font-size: 20px;
  margin-bottom: 10px;
`;

const CardDescription = styled.p`
  font-size: 16px;
  margin-bottom: 10px;
`;

const CardButtons = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

const Button = styled.button`
  background-color: ${(props) => (props.primary ? '#007bff' : '#ffcc00')};
  border: none;
  border-radius: 5px;
  color: #fff;
  padding: 10px 20px;
  &:hover {
    background-color: ${(props) => (props.primary ? '#0056b3' : '#e6b800')};
  }
`;

const Card = ({ title, description }) => {
  const [titleInput, setTitleInput] = useState(title);
  const [descriptionInput, setDescriptionInput] = useState(description);

  const handleClear = () => {
    setTitleInput('');
    setDescriptionInput('');
  };

  const handleSave = () => {
    // Lógica para salvar os dados
    console.log('Dados salvos:', titleInput, descriptionInput);
  };

  return (
    <CardContainer>
      <CardTitle>{titleInput}</CardTitle>
      <CardDescription>{descriptionInput}</CardDescription>
      <CardButtons>
        <Button primary onClick={handleSave}>Guardar</Button>
        <Button onClick={handleClear}>Limpar</Button>
      </CardButtons>
    </CardContainer>
  );
};

export default Card;
