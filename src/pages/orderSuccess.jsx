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
@media (max-width: 767px) {
    display: none;
`
const FooterPart = styled.div`
color: white;
 margin-top : 10px;
`
function OrderSuccess( {orderData}) {
  console.log(orderData)
  if (!orderData) 
    return
   <h2>Veri yükleniyor...</h2>;
  
  return (
    <>
    <PageWithBackground>
      <Container>
      <img style={{marginTop:"10px"}} src='\iteration-1-images\logo.svg' />
        <Slogan>TEBRİKLER SİPARİŞİNİZ ALINDI.</Slogan>
      </Container>
     
      <OrderSummary>
      <h1>Sipariş Özeti</h1>
      <p><strong>İsim:</strong> {orderData.name}</p>
      <p><strong>Boyut:</strong> {orderData.size}</p>
      <p><strong>Hamur:</strong> {orderData.dough}</p>
      <p><strong>Ek Malzemeler:</strong> {(orderData.toppings || []).join(", ")}</p>
      <p><strong>Not:</strong> {orderData.note}</p>
      <p><strong>Adet:</strong> {orderData.quantity}</p>
    </OrderSummary>
    </PageWithBackground>
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

export default OrderSuccess;