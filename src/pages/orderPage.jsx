import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './orderPage.css';
import OrderSuccess from "./orderSuccess"
import { styled} from 'styled-components';

function OrderPage({setOrderData}) {
  const [note, setNote] = useState('');
  const [toppings, setToppings] = useState([]);
  const [size, setSize] = useState('');
  const [dough, setDough] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const [showSuccess, setShowSuccess] = useState(false)
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
    if (toppings.includes(topping)) {
      setToppings(toppings.filter((item) => item !== topping));
    } else if (toppings.length < 10) {
      setToppings([...toppings, topping]);
    }
  };

  const handleChange = (e) => setNote(e.target.value) ;
  const handleSizeChange = (e) => setSize(e.target.value);
  const handleDoughChange = (e) => setDough(e.target.value);
  const handleNameChange = (e) => setName(e.target.value);
  const increaseQuantity = () => setQuantity((prev) => prev + 1);
  const decreaseQuantity = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  const validateForm = () => {
    return size && dough && toppings.length > 3 && name.length >= 3;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const orderDetails = {  // 📌 Gönderilecek sipariş bilgileri oluşturuldu
      name,
      size,
      dough,
      toppings,
      quantity,
      note,
    };
    try {
      const response = await axios.post('https://reqres.in/api/pizza',orderDetails);
      setShowSuccess(true)
      setOrderData(response.data)
      navigate('/orderSuccess')
    } catch (error) {
      setError('Sipariş gönderilirken bir hata oluştu.')
    }
  };
  console.log(showSuccess)
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
  return (
    <div style={{ color: "black", display: "flex", flexDirection: "column" }}>
      <div id="header">
        <h1 >Teknolojik Yemekler</h1>
        <p >Ana Sayfa - Sipariş Oluştur</p>
      </div>
      <img style={{marginLeft: "35%", marginRight:"35%" , marginTop:"0"}} src="public\iteration-2-images\pictures\form-banner.png" />
      <div id="form-container">
        <h1 >Position Absolute Acı Pizza</h1>
        <div className="pizzaPrice">
          <p>85,50₺</p>
          <p>4,5 (200)</p>
        </div>
        <p>
          Frontent Dev olarak hala position:absolute kullanıyorsan bu çok acı pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli lezzetli bir yemektir. . Küçük bir pizzaya bazen pizzetta denir.
        </p>
        <form onSubmit={handleSubmit}>
          <fieldset className="size">
            <legend style={{ fontWeight: "bold" }}>Boyut Seç *</legend>
            <label>
              <input
                type="radio"
                name="size"
                value="küçük"
                onChange={handleSizeChange}
              /> Küçük
            </label>
            <label>
              <input
                type="radio"
                name="size"
                value="orta"
                onChange={handleSizeChange}
              /> Orta
            </label>
            <label>
              <input
                type="radio"
                name="size"
                value="büyük"
                onChange={handleSizeChange}
              /> Büyük
            </label>
          </fieldset>

          <label htmlFor="dough" >Hamur Seç *</label>
          <select name="dough" onChange={handleDoughChange}>
            <option value="">Hamur Seçin</option>
            <option value="ince">İnce</option>
            <option value="kalın">Kalın</option>
            <option value="glutensiz">Glutensiz</option>
          </select>
          <legend >
              Ek Malzemeler (En fazla 10 adet seçebilirsiniz.)
            </legend>
          <fieldset className="toppings">
            {toppingsList.map(({ value, label }) => (
              <label key={value}>
                <input
                  type="checkbox"
                  name="toppings"
                  id='checkBox'
                  value={value}
                  onChange={() => handleToppings(value)}
                  disabled={toppings.length >= 10 && !toppings.includes(value)}
                /> {label}
              </label>
            ))}
          </fieldset>

          <label>İsim</label>
          <textarea onChange={handleNameChange} value={name} name="name" rows="1" placeholder="Adınızı giriniz"></textarea>

          <label htmlFor="note">Sipariş Notu</label>
          <textarea onChange={handleChange} name="note" rows="1" placeholder="Siparişine eklemek istediğin bir not var mı?"></textarea>
          <div className='altKisim'>
          <section>
            <h3>Sipariş Toplamı</h3>
            <p>Seçimler:</p>
            <p> 25.00$</p>
            <p>Toplam: </p>
            <p>130.00$</p>
          </section>
          <section id="sonBolum">
          
            <label htmlFor="quantity">Adet:</label>
            <button className="tinyButton" type="button" onClick={decreaseQuantity} disabled={quantity <= 1}>-</button>
            <input className="quantity" name="quantity" value={quantity} readOnly />
            <button className="tinyButton" type="button" onClick={increaseQuantity}>+</button>
            </section>
            {!showSuccess ? (
              <>
                {error && <p style={{ color: "red" }}>Gerekli alanları doldurun.</p>}
                <button
                  className="mainButton"
                  type="submit"
                  disabled={ !validateForm()}
                  onClick={handleSubmit}>Siparişi Tamamla</button>
              </>
            ) : (
              <OrderSuccess/>
            )}
        
          </div>
        </form>
      </div>
      <Footer>
    <FooterPart>
    <h2>Teknolojik Yemekler</h2>
      <div  style = {{display :"grid", gridTemplateColumns: "auto auto",
gridTemplateRows: "1fr", gap:"10px"}}>
      <img src="public\iteration-2-images\footer\icons\icon-1.png"/>
      <p>341 Londonderry Road,  
      Istanbul Türkiye </p>
      <img src="public\iteration-2-images\footer\icons\icon-2.png"/>
      <p>aciktim@teknolojikyemekler.com  </p>
      <img src="public\iteration-2-images\footer\icons\icon-3.png"/>
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
        <img src="public\iteration-2-images\footer\insta\li-0.png"/>
        <img src="public\iteration-2-images\footer\insta\li-1.png"/>
        <img src="public\iteration-2-images\footer\insta\li-2.png"/>
        <img src="public\iteration-2-images\footer\insta\li-3.png"/>
        <img src="public\iteration-2-images\footer\insta\li-4.png"/>
        <img src="public\iteration-2-images\footer\insta\li-5.png"/>
      </div>
      <p>© 2023 Teknolojik Yemekler.</p>
    </FooterPart>
    </Footer>
    </div>
  );
}

export default OrderPage;
