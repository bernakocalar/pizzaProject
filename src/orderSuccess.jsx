import React from 'react';
import { styled } from 'styled-components';

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
const MainPageButtton = styled.button`
 background-color: #FDC913;
  margin-top: 10px;
  border-radius: 20px;
  border: 1px solid transparent;
  font-size: 1em;
  font-family: inherit;
  cursor: pointer;
  transition: border-color 0.25s;
  width: 200px;
  height: 50px;

  @media (max-width: 768px) {
    width: 150px;
    height: 40px;
  }

  @media (max-width: 480px) {
    width: 120px;
    height: 35px;
  }`
function OrderSuccess({onBackHome}) {
  return (
<>
    <PageWithBackground>
      <Container>
        <Title>Teknolojik Yemekler</Title>
        <Slogan>TEBRİKLER SİPARİŞİNİZ ALINDI.</Slogan>
        <MainPageButtton  onClick={onBackHome}>Ana Sayfa</MainPageButtton>
      </Container>
    </PageWithBackground>
    </>
  );
}

export default OrderSuccess;