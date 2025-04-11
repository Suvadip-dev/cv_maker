// src/pages/home/index.tsx
import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import HomeHeader from "../home-header";

const HomePage: React.FC = () => {
  const navigate = useNavigate();

  const handleCreateCV = () => {
    navigate("/cv-editor"); // will redirect to login if not authenticated
  };

  return (
    <Container>
      <HomeHeader></HomeHeader>
      <h1>Welcome to AI CV Maker</h1>
      <p>Create professional CVs with AI assistance.</p>
      <button onClick={handleCreateCV}>Create Your CV</button>
    </Container>
  );
};

export default HomePage;

const Container = styled.div`
  height: 100vh;
  background: #e6f0ff;
  font-family: Arial, sans-serif;

  h1 {
    font-size: 3rem;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.2rem;
    margin-bottom: 2rem;
  }

  button {
    padding: 12px 24px;
    font-size: 18px;
    border: none;
    background-color: #0078d4;
    color: white;
    border-radius: 8px;
    cursor: pointer;
    transition: background 0.3s ease;

    &:hover {
      background-color: #005ea2;
    }
  }
`;
