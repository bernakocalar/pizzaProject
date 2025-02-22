import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  position: absolute;
  top: 10%;
  left: 50%;
  transform: translateX(-50%);
  height: 80px;
  text-align: center;
  color: white;
`;

const Title = styled.h1`
  margin-top: 10px;
  font-size: 1.4rem;
`;

const Slogan = styled.p`
  margin-top: 10px;
  font-size: 3.5rem;
`;

const AppWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url("/iteration-1-images/home-banner.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

const FirstButton = styled.button`
  background-color: #FDC913;
  margin-top: 10px;
  border-radius: 20px;
`;

function App() {
  const navigate = useNavigate();

  return (
    <AppWrapper>
      <Container>
        <Title>Teknolojik Yemekler</Title>
        <Slogan>KOD ACIKTIRIR. PİZZA, DOYURUR.</Slogan>
        <FirstButton onClick={() => navigate('/orderPage')} id="firstButton">
          ACIKTIM
        </FirstButton>
      </Container>
    </AppWrapper>
  );
}

export default App;
