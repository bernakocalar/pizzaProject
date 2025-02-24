import React from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';

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
const OrderSummary = styled.div`
position: absolute;
    top: 40%; 
    left: 50%; 
    transform: translateX(-50%); 
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 10px 0 rgba(0,0,0,0.1);
`
const Footer = styled.section`

height: 300px;
 background-color:black;
display:flex;
justify-content: space-evenly;
`
const FooterPart = styled.div`
color: white;
`
function OrderSuccess() {
  const location = useLocation();
  const { orderData } = location.state || {};
  return (
    <>
    <PageWithBackground>
      <Container>
        <Title>Teknolojik Yemekler</Title>
        <Slogan>TEBRİKLER SİPARİŞİNİZ ALINDI.</Slogan>
      </Container>
      <OrderSummary>
      <h1>Sipariş Özeti</h1>
      <p><strong>İsim:</strong> {orderData.name}</p>
      <p><strong>Boyut:</strong> {orderData.size}</p>
      <p><strong>Hamur:</strong> {orderData.dough}</p>
      <p><strong>Ek Malzemeler:</strong> {orderData.toppings.join(", ")}</p>
      <p><strong>Not:</strong> {orderData.note}</p>
      <p><strong>Adet:</strong> {orderData.quantity}</p>
    </OrderSummary>
    </PageWithBackground>
    <Footer>
    <FooterPart>
      <h2>Teknolojik Yemekler</h2>
      <p>341 Londonderry Road,  
      Istanbul Türkiye </p>
      <p>aciktim@teknolojikyemekler.com  </p>
      <p>+90 216 123 45 67  </p>
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
      <p>© 2023 Teknolojik Yemekler.</p>
    </FooterPart>
    </Footer>
    </>
  );
}

export default OrderSuccess;