import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './orderPage.css';

function OrderPage() {
    const [note, setNote] = useState('');
  const [toppings, setToppings] = useState([]);
  const handleToppings = (topping) => {
    if (toppings.includes(topping)) {
      setToppings(toppings.filter(item => item !== topping));
    } else if (toppings.length < 10) {
      setToppings([...toppings, topping]);
    }
  };
const handleChange = (e) => {
      setNote(e.target.value)
  }
  const [quantity, setQuantity] = useState(1);
  const increaseQuantity = () => setQuantity((prev) => prev + 1);
  const decreaseQuantity = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  const navigate = useNavigate();

  return (
    < div style={{color: "black"}}>
      <div id="header">
        <h1 id="title">Teknolojik Yemekler</h1>
        <p id="siparis">Ana Sayfa - Sipariş Oluştur</p>
      </div>

      <div id="form-container">
        <h1 id="pizzaName">Position Absolute Acı Pizza</h1>
        <div id="pizzaPrice">
          <p>85,50$</p>
          <p> 4,5 (200)</p>
        </div>
        <p id="pizzaExp">
          Frontent Dev olarak hala position:absolute kullanıyorsan bu çok acı pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli lezzetli bir yemektir. . Küçük bir pizzaya bazen pizzetta denir.
        </p>
        <form id="mediumArea">
          <fieldset id="size">
            <legend  style={{fontWeight:"bold"}}>Boyut Seç *</legend>
            <label>
              <input type="radio" name="size" value="small" /> Küçük
            </label>
            <label>
              <input type="radio" name="size" value="medium" /> Orta
            </label>
            <label>
              <input type="radio" name="size" value="large" /> Büyük
            </label>
          </fieldset>
          <label htmlFor="dough" style={{fontWeight:"bold"}}>Hamur Seç *</label>
          <select id="dough" name="dough">
            <option value="thin">İnce</option>
            <option value="thick">Kalın</option>
            <option value="gluten-free">Glutensiz</option>
          </select>
        </form>
        <fieldset id="toppings">
          <legend style={{fontWeight:"bold"}}>Ek Malzemeler (En fazla 10 adet seçebilirsiniz.)</legend>
          <label>
            <input type="checkbox" name="toppings" value="pepperoni" onChange={() => handleToppings('pepperoni')} disabled={toppings.length >= 10 && !toppings.includes('pepperoni')} /> Pepperoni
          </label>
          <label>
            <input type="checkbox" name="toppings" value="chicken" onChange={() => handleToppings('chicken')} disabled={toppings.length >= 10 && !toppings.includes('chicken')} /> Tavuk Izgara
          </label>
          <label>
            <input type="checkbox" name="toppings" value="corn" onChange={() => handleToppings('corn')} disabled={toppings.length >= 10 && !toppings.includes('corn')} /> Mısır
          </label>
          <label>
            <input type="checkbox" name="toppings" value="garlic" onChange={() => handleToppings('garlic')} disabled={toppings.length >= 10 && !toppings.includes('garlic')} /> Sarımsak
          </label>
          <label>
            <input type="checkbox" name="toppings" value="pineapple" onChange={() => handleToppings('pineapple')} disabled={toppings.length >= 10 && !toppings.includes('pineapple')} /> Ananas
          </label>
          <label>
            <input type="checkbox" name="toppings" value="sausage" onChange={() => handleToppings('sausage')} disabled={toppings.length >= 10 && !toppings.includes('sausage')} /> Sosis
          </label>
          <label>
            <input type="checkbox" name="toppings" value="onion" onChange={() => handleToppings('onion')} disabled={toppings.length >= 10 && !toppings.includes('onion')} /> Soğan
          </label>
          <label>
            <input type="checkbox" name="toppings" value="sucuk" onChange={() => handleToppings('sucuk')} disabled={toppings.length >= 10 && !toppings.includes('sucuk')} /> Sucuk
          </label>
          <label>
            <input type="checkbox" name="toppings" value="pepper" onChange={() => handleToppings('pepper')} disabled={toppings.length >= 10 && !toppings.includes('pepper')} /> Biber
          </label>
          <label>
            <input type="checkbox" name="toppings" value="zucchini" onChange={() => handleToppings('zucchini')} disabled={toppings.length >= 10 && !toppings.includes('zucchini')} /> Kabak
          </label>
          <label>
            <input type="checkbox" name="toppings" value="canadian-bacon" onChange={() => handleToppings('canadian-bacon')} disabled={toppings.length >= 10 && !toppings.includes('canadian-bacon')} /> Kanada Jambonu
          </label>
          <label>
            <input type="checkbox" name="toppings" value="tomato" onChange={() => handleToppings('tomato')} disabled={toppings.length >= 10 && !toppings.includes('tomato')} /> Domates
          </label>
        </fieldset>
        <label htmlFor="note">Sipariş Notu</label>
        <textarea onChange={handleChange} id="note" name="note" rows="1" placeholder="Siparişine eklemek istediğin bir not var mı?"></textarea>
        <label htmlFor="quantity">Adet:</label>
        <button id='tinyButton' type="button" onClick={decreaseQuantity} disabled={quantity <= 1}>-</button>
        <input id="quantity" name="quantity" value={quantity} readOnly />
        <button id='tinyButton' type="button" onClick={increaseQuantity}>+</button>
          <p>Sipariş Toplamı</p>
          <p>Seçimler 25.00</p>
          <p>Toplam 130.00</p>
          <button id="firstButton" onClick={() => navigate('/orderSuccess')}>Sipariş ver</button>
      </div>
    </div>
  );
}

export default OrderPage;