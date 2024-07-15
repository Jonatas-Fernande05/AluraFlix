// src/components/RegistrationForm.js
import React, { useState } from 'react';
import styled from 'styled-components';

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
  background-color: #ffffff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  max-width: 500px;
  margin: 40px auto;
`;

const Title = styled.h2`
  margin-bottom: 20px;
  color: #1e3a8a;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Button = styled.button`
  background-color: #3b82f6;
  color: #ffffff;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  margin-right: 10px;
  &:hover {
    background-color: #2563eb;
  }
`;

const RegistrationForm = () => {
  const [title, setTitle] = useState('');
  const [catalog, setCatalog] = useState('');
  const [image, setImage] = useState('');
  const [video, setVideo] = useState('');
  const [description, setDescription] = useState('');

  const handleSave = () => {
    // Lógica para salvar os dados
    alert('Dados salvos!');
  };

  const handleClear = () => {
    setTitle('');
    setCatalog('');
    setImage('');
    setVideo('');
    setDescription('');
  };

  return (
    <FormContainer>
      <Title>Cadastro de Conteúdo</Title>
      <Input
        type="text"
        placeholder="Título"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <Input
        type="text"
        placeholder="Catálogo"
        value={catalog}
        onChange={(e) => setCatalog(e.target.value)}
      />
      <Input
        type="text"
        placeholder="URL da Imagem"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      <Input
        type="text"
        placeholder="URL do Vídeo"
        value={video}
        onChange={(e) => setVideo(e.target.value)}
      />
      <TextArea
        placeholder="Descrição"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <div>
        <Button onClick={handleSave}>Guardar</Button>
        <Button onClick={handleClear}>Limpar</Button>
      </div>
    </FormContainer>
  );
};

export default RegistrationForm;
