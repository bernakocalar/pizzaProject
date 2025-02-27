import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
const MainContainer = styled.div`
  top: 10%;
  left: 50%;
  text-align: center;
  color: white;
 
  @media (max-width: 768px) {
    top: 15%;
    height: 70px;
    weight : 100%
  }

  @media (max-width: 480px) {
    top: 20%;
    height: 60px;
     weight : %100
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
  margin-top : 50px;
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
  width: 200px;
  height: 50px;
  margin-top :40px;


  @media (max-width: 768px) {
   width: 200px;
  height: 50px;
  margin-top : 200px;

  }

  @media (max-width: 480px) {
    width: 200px;
  height: 50px;
  margin-top : 200px;

  }
`;
const Container = styled.section`
display: flex;
grid-template-columns: repeat(3, 1fr);
grid-template-rows: 1fr;
grid-column-gap: 0px;
grid-row-gap: 0px;
  justify-content: center;
  padding: 0;
  place-items: center;
   margin-left: 25%;
  margin-right: 25%;
  margin- top : 20px;
  font-weight: bold;
      @media (max-width: 768px) {
   grid-template-columns: repeat(1, 1fr);
  }

`;

const SmallContainer = styled.section`
height: 50px;
padding : 10px;
display: flex;
justify-content: space-around;
flex-direction : row;
align-items = center;
place-items: center;
 margin-left: 20%;
  margin-right: 20%;
    margin- top : 20px;

@media (max-width: 768px) {
display : flex;
flex-wrap : wrap;

  }

`
const Footer = styled.section`

  height: 300px;
   background-color:black;
  display:flex;
  justify-content: space-evenly;
   @media (max-width: 767px) {
    display: none;
  `
  const FooterPart = styled.div`
  color: white;
  margin-top : 10px;
  `
function Home() {
  const navigate = useNavigate();

  return (
    <>
    <AppWrapper>
      <MainContainer>
        <Title>Teknolojik Yemekler</Title>
        <Slogan>KOD ACIKTIRIR. PİZZA, DOYURUR.</Slogan>
        <FirstButton onClick={() => navigate('/orderPage')} >
          ACIKTIM
        </FirstButton>
      </MainContainer>
    </AppWrapper>
    <SmallContainer>
        <img src = "/iteration-2-images/icons/1.svg" alt=""/>
        <p>YENİ! Korea</p>
        <img src = "\iteration-2-images\icons/2.svg" alt=""/>
        <p>Pizza</p>
        <img src = "\iteration-2-images\icons/3.svg" alt=""/>
        <p>Burger</p>
        <img src = "\iteration-2-images\icons/4.svg" alt=""/>
        <p>Kızartmalar</p>
        <img src = "\iteration-2-images\icons/5.svg" alt=""/>
        <p>Fast Food</p>
        <img src = "\iteration-2-images\icons/6.svg" alt=""/>
        <p>Gazlı İçecek</p>
    </SmallContainer>
    <MainContainer>

    </MainContainer>
    <Container>
      <div>
    <img src="\iteration-2-images\pictures\food-1.png" />
    <p>Terminal Pizza</p>
    <p>4,9 (200) 60₺</p>
    </div>
    <div>
    <img src="\iteration-2-images\pictures\food-2.png" />
    <p>useEffect Tavuklu Pizza</p>
    <p>4,9 (200) 60₺</p>
    </div>
    <div>
    <img src="\iteration-2-images\pictures\food-3.png" />
    
    <p>Position Absolute Acı Pizza</p>
    <p>4,9 (200) 60₺</p>
    </div>
    
    </Container>
    <Footer>
    <FooterPart>
    <h2>Teknolojik Yemekler</h2>
      <div  style = {{display :"grid", gridTemplateColumns: "auto auto",
gridTemplateRows: "1fr", gap:"10px"}}>
      <img src="\iteration-2-images\footer\icons\icon-1.png"/>
      <p>341 Londonderry Road,  
      Istanbul Türkiye </p>
      <img src="\iteration-2-images\footer\icons\icon-2.png"/>
      <p>aciktim@teknolojikyemekler.com  </p>
      <img src="\iteration-2-images\footer\icons\icon-3.png"/>
      <p>+90 216 123 45 67  </p>
      </div>
    </FooterPart>
    <FooterPart>
      <h3>Hot Menu</h3>
      <p>Terminal Pizza  </p>
<p>5 Kişilik Hackathlon Pizza  </p>
<p>useEffect Tavuklu Pizza  </p>
<p>Beyaz Console Frosty  </p>
<p>Testler Geçti Mutlu Burger </p> 
<p>Position Absolute Acı Burger </p>
    </FooterPart>
    <FooterPart>
      <h3>İnstagram</h3>
      <div style = {{display :"grid", gridTemplateColumns: "repeat(3, 1fr)",
gridTemplateRows: "repeat(2, 1fr)", gap:"10px"}}>
        <img src="\iteration-2-images\footer\insta\li-0.png"/>
        <img src="\iteration-2-images\footer\insta\li-1.png"/>
        <img src="\iteration-2-images\footer\insta\li-2.png"/>
        <img src="\iteration-2-images\footer\insta\li-3.png"/>
        <img src="\iteration-2-images\footer\insta\li-4.png"/>
        <img src="\iteration-2-images\footer\insta\li-5.png"/>
      </div>
      <p>© 2023 Teknolojik Yemekler.</p>
    </FooterPart>
    </Footer>
    </>

  );
}

export default Home;
