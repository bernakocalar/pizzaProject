import React from 'react';
import './orderSuccess.css';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; 

const PageWithBackground = () => {
  useEffect(() => {
    document.body.classList.add("custom-success");

    return () => {
      document.body.classList.remove("custom-success"); 
      };
  }, []);
}
function OrderSuccess({onNavigate}) {
  return (
    <>
    <PageWithBackground/>
    <div id="container">
      <h1 id="title">Teknolojik Yemekler</h1>
      <p id="slogan">TEBRİKLER SİPARİŞİNİZ ALINDI.</p>
    </div>
    </>
  )
}
export default OrderSuccess;