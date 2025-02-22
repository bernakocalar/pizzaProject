import React from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './App.css'
function App() {
  const navigate = useNavigate(); 
  
  return (
    <>
    <div className="app">
    <div id="container">
      <h1 id="title">Teknolojik Yemekler</h1>
      <p id="slogan">KOD ACIKTIRIR. PİZZA, DOYURUR.</p>
      <button 
        onClick={() => navigate('/orderPage')} 
        id="firstButton">
        ACIKTIM
      </button>
    </div>
    </div>
      </>
  );
}
export default App;
