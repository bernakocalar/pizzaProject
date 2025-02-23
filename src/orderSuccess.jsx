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

function OrderSuccess() {
  const location = useLocation();
  const { orderData } = location.state || {};
  return (
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
  );
}

export default OrderSuccess;