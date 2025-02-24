import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
const Container = styled.div`
  top: 10%;
  left: 50%;
  text-align: center;
  color: white;
 
  @media (max-width: 768px) {
    top: 15%;
    height: 70px;
  }

  @media (max-width: 480px) {
    top: 20%;
    height: 60px;
  }
`;

const Title = styled.h1`
  margin-top: 10px;
  font-size: 1.4rem;
 @media (max-width: 768px) {
    margin-top: 5px;
    
  }

  @media (max-width: 480px) {
    margin-top: 2px;
  }
`;

const Slogan = styled.p`
  
  font-size: 3.5rem;
   @media (max-width: 768px) {
    top: 15%;
    height: 70px;
  }

  @media (max-width: 480px) {
    top: 20%;
    height: 60px;
  }
`;

const AppWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url("/iteration-1-images/home-banner.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
 

  @media (max-width: 768px) {
     background-size: cover;
       background-position: center;
  }

  @media (max-width: 480px) {
     background-size: cover;
       background-position: center;
  }
`;

const FirstButton = styled.button`
  background-color: #FDC913;
  border-radius: 20px;
  border: 1px solid transparent;
  font-size: 1em;
  font-family: inherit;
  cursor: pointer;
  width: 200px;
  height: 50px;


  @media (max-width: 768px) {
   width: 200px;
  height: 50px;

  }

  @media (max-width: 480px) {
    width: 200px;
  height: 50px;

  }
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
