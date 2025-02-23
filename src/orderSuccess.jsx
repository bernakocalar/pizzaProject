import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const PageWithBackground = styled.div`
  background-color: #CE2829;
  width: 100vw;
  height: 100vh;
`;

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
  font-size: 3rem;
`;

const Slogan = styled.p`
  margin-top: 10px;
  font-size: 1.4rem;
`;

function OrderSuccess() {
  const navigate = useNavigate();

  return (
    <PageWithBackground>
      <Container>
        <Title>Teknolojik Yemekler</Title>
        <Slogan>TEBRİKLER SİPARİŞİNİZ ALINDI.</Slogan>
      </Container>
    </PageWithBackground>
  );
}

export default OrderSuccess;