import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import OrderSuccess from "./orderSuccess";
import { styled } from 'styled-components';

function OrderPage({ setOrderData }) {
  const [formData, setFormData] = useState({
    note: '',
    toppings: [],
    size: '',
    dough: '',
    quantity: 1,
    name: '',
  });

  const [error, setError] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);
  const navigate = useNavigate();

  const toppingsList = [
    { value: 'pepperoni', label: 'Pepperoni' },
    { value: 'tavuk ızgara', label: 'Tavuk Izgara' },
    { value: 'mısır', label: 'Mısır' },
    { value: 'sarımsak', label: 'Sarımsak' },
    { value: 'ananas', label: 'Ananas' },
    { value: 'sosis', label: 'Sosis' },
    { value: 'soğan', label: 'Soğan' },
    { value: 'sucuk', label: 'Sucuk' },
    { value: 'biber', label: 'Biber' },
    { value: 'kabak', label: 'Kabak' },
    { value: 'domates', label: 'Domates' },
    { value: 'zeytin', label: 'Zeytin' },
    { value: 'mantar', label: 'Mantar' },
    { value: 'patlıcan', label: 'Patlıcan' },
  ];

  const handleToppings = (topping) => {
    setFormData(prevState => {
      const newToppings = prevState.toppings.includes(topping)
        ? prevState.toppings.filter(item => item !== topping)
        : [...prevState.toppings, topping];
      return { ...prevState, toppings: newToppings };
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleQuantityChange = (operation) => {
    setFormData(prevState => ({
      ...prevState,
      quantity: operation === 'increase'
        ? prevState.quantity + 1
        : prevState.quantity > 1
        ? prevState.quantity - 1
        : 1,
    }));
  };

  const validateForm = () => {
    const { name, size, dough, toppings } = formData;
    if (!name || !size || !dough || toppings.length < 3) {
      setError("Lütfen tüm gerekli alanları doldurun.");
      return false;
    }
    setError('');
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    const orderDetails = { ...formData };
    try {
      const response = await axios.post('https://reqres.in/api/pizza', orderDetails);
      setShowSuccess(true);
      setOrderData(response.data);
      navigate('/orderSuccess');
    } catch (error) {
      setError('Sipariş gönderilirken bir hata oluştu.');
    }
  };

  const Footer = styled.section`
    height: 300px;
    background-color: black;
    display: flex;
    justify-content: space-evenly;
    @media (max-width: 767px) {
      display: none;
    }
  `;
  
  const FooterPart = styled.div`
    color: white;
    margin-top: 10px;
  `;

  return (
    <div style={{ color: "black", display: "flex", flexDirection: "column" }}>
      <div id="header">
      <img style={{marginTop:"10px"}} src='\iteration-1-images\logo.svg' />
        <p>Ana Sayfa - Sipariş Oluştur</p>
      </div>
      <img style={{ marginLeft: "35%", marginRight: "35%", marginTop: "0" }} src="\iteration-2-images\pictures\form-banner.png" />
      <div id="form-container">
        <h1>Position Absolute Acı Pizza</h1>
        <div className="pizzaPrice">
          <p>85,50₺</p>
          <p>4,5 (200)</p>
        </div>
        <p>
          Frontend Dev olarak hala position:absolute kullanıyorsan bu çok acı pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli lezzetli bir yemektir. Küçük bir pizzaya bazen pizzetta denir.
        </p>
        <form onSubmit={handleSubmit}>
          <fieldset className="size">
            <legend style={{ fontWeight: "bold" }}>Boyut Seç *</legend>
            <label>
              <input
                type="radio"
                name="size"
                value="küçük"
                onChange={handleChange}
              /> Küçük
            </label>
            <label>
              <input
                type="radio"
                name="size"
                value="orta"
                onChange={handleChange}
              /> Orta
            </label>
            <label>
              <input
                type="radio"
                name="size"
                value="büyük"
                onChange={handleChange}
              /> Büyük
            </label>
          </fieldset>

          <label htmlFor="dough">Hamur Seç *</label>
          <select name="dough" onChange={handleChange}>
            <option value="">Hamur Seçin</option>
            <option value="ince">İnce</option>
            <option value="kalın">Kalın</option>
            <option value="glutensiz">Glutensiz</option>
          </select>

          <legend>Ek Malzemeler (En fazla 10 adet seçebilirsiniz.)</legend>
          <fieldset className="toppings">
            {toppingsList.map(({ value, label }) => (
              <label key={value}>
                <input
                  type="checkbox"
                  name="toppings"
                  id="checkBox"
                  value={value}
                  onChange={() => handleToppings(value)}
                  disabled={formData.toppings.length >= 10 && !formData.toppings.includes(value)}
                /> {label}
              </label>
            ))}
          </fieldset>

          <label>İsim</label>
          <textarea onChange={handleChange} value={formData.name} name="name" rows="1" placeholder="Adınızı giriniz"></textarea>

          <label htmlFor="note">Sipariş Notu</label>
          <textarea onChange={handleChange} name="note" rows="1" placeholder="Siparişine eklemek istediğin bir not var mı?"></textarea>

          <div className="altKisim">
            <section>
              <h3>Sipariş Toplamı</h3>
              <p>Seçimler:</p>
              <p>25.00$</p>
              <p>Toplam:</p>
              <p>130.00$</p>
            </section>
            <section id="sonBolum">
              <label htmlFor="quantity">Adet:</label>
              <button className="tinyButton" type="button" onClick={() => handleQuantityChange('decrease')} disabled={formData.quantity <= 1}>-</button>
              <input className="quantity" name="quantity" value={formData.quantity} readOnly />
              <button className="tinyButton" type="button" onClick={() => handleQuantityChange('increase')}>+</button>
            </section>

            {!showSuccess ? (
              <>
                {error && <p style={{ color: "red" }}>{error}</p>}
                <button
                  className="mainButton"
                  type="submit"
                  disabled={!validateForm}
                >
                  Siparişi Tamamla
                </button>
              </>
            ) : (
              <OrderSuccess />
            )}
          </div>
        </form>
      </div>

      <Footer>
        <FooterPart>
          <h2>Teknolojik Yemekler</h2>
          <div style={{ display: "grid", gridTemplateColumns: "auto auto", gridTemplateRows: "1fr", gap: "10px" }}>
            <img src="\iteration-2-images\footer\icons\icon-1.png" />
            <p>341 Londonderry Road, Istanbul Türkiye </p>
            <img src="\iteration-2-images\footer\icons\icon-2.png" />
            <p>aciktim@teknolojikyemekler.com  </p>
            <img src="\iteration-2-images\footer\icons\icon-3.png" />
            <p>+90 216 123 45 67  </p>
          </div>
        </FooterPart>
        <FooterPart>
          <h3>Hot Menu</h3>
          <p>Terminal Pizza</p>
          <p>5 Kişilik Hackathlon Pizza</p>
          <p>useEffect Tavuklu Pizza</p>
          <p>Beyaz Console Frosty</p>
          <p>Testler Geçti Mutlu Burger</p>
          <p>Position Absolute Acı Burger</p>
        </FooterPart>
        <FooterPart>
          <h3>İnstagram</h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gridTemplateRows: "repeat(2, 1fr)", gap: "10px" }}>
            <img src="\iteration-2-images\footer\insta\li-0.png" />
            <img src="\iteration-2-images\footer\insta\li-1.png" />
            <img src="\iteration-2-images\footer\insta\li-2.png" />
            <img src="\iteration-2-images\footer\insta\li-3.png" />
            <img src="\iteration-2-images\footer\insta\li-4.png" />
            <img src="\iteration-2-images\footer\insta\li-5.png" />
          </div>
          <p>© 2023 Teknolojik Yemekler.</p>
        </FooterPart>
      </Footer>
    </div>
  );
}

export default OrderPage;
