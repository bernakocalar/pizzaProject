import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './orderPage.css';


function OrderPage() {
  const [note, setNote] = useState('');
  const [toppings, setToppings] = useState([]);
  const [size, setSize] = useState('');
  const [dough, setDough] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [name, setName] = useState('');
  const navigate = useNavigate();


  const goToSuccess = () => {
    navigate('/orderSuccess');
  }; 
  const toppingsList = [
    { value: 'pepperoni', label: 'Pepperoni' },
    { value: 'chicken', label: 'Tavuk Izgara' },
    { value: 'corn', label: 'Mısır' },
    { value: 'garlic', label: 'Sarımsak' },
    { value: 'pineapple', label: 'Ananas' },
    { value: 'sausage', label: 'Sosis' },
    { value: 'onion', label: 'Soğan' },
    { value: 'sucuk', label: 'Sucuk' },
    { value: 'pepper', label: 'Biber' },
    { value: 'zucchini', label: 'Kabak' },
    {value: "tomateos", label: 'Domates'},
    {value: "olives", label: 'Zeytin'},
    {value: "mushrooms", label: 'Mantar'},
    {value: "eggplant", label: 'Patlıcan'},
  ];

  const handleToppings = (topping) => {
    if (toppings.includes(topping)) {
      setToppings(toppings.filter((item) => item !== topping));
    } else if (toppings.length < 10) {
      setToppings([...toppings, topping]);
    }
  };

  const handleChange = (e) => setNote(e.target.value);
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

    if (!validateForm()) {
      alert("Lütfen gerekli tüm alanları doldurun!");
      return;
    }

    setIsSubmitting(true);

    const orderData = {
      size,
      dough,
      toppings,
      note,
      quantity,
      name,
    };

    try {
      const response = await axios.post('https://reqres.in/api/pizza', orderData);
      console.log('Sunucudan Gelen Yanıt:', response.data);
      console.log('Sipariş Özeti:', {
        size,
        dough,
        toppings,
        note,
        quantity,
        response: response.data
      });
      
    } catch (error) {
      console.error('API Hatası:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div style={{ color: "black" }}>
      <div id="header">
        <h1 id="title">Teknolojik Yemekler</h1>
        <p id="siparis">Ana Sayfa - Sipariş Oluştur</p>
      </div>

      <div id="form-container">
        <h1 id="pizzaName">Position Absolute Acı Pizza</h1>
        <div id="pizzaPrice">
          <p>85,50$</p>
          <p>4,5 (200)</p>
        </div>
        <p id="pizzaExp">
          Frontend Dev olarak hala position:absolute kullanıyorsan bu çok acı pizza tam sana göre...
        </p>
        <form id="mediumArea" onSubmit={handleSubmit}>
          <fieldset id="size">
            <legend style={{ fontWeight: "bold" }}>Boyut Seç *</legend>
            <label>
              <input
                type="radio"
                name="size"
                value="small"
                onChange={handleSizeChange}
              /> Küçük
            </label>
            <label>
              <input
                type="radio"
                name="size"
                value="medium"
                onChange={handleSizeChange}
              /> Orta
            </label>
            <label>
              <input
                type="radio"
                name="size"
                value="large"
                onChange={handleSizeChange}
              /> Büyük
            </label>
          </fieldset>

          <label htmlFor="dough" style={{ fontWeight: "bold" }}>Hamur Seç *</label>
          <select id="dough" name="dough" onChange={handleDoughChange}>
            <option value="">Hamur Seçin</option>
            <option value="thin">İnce</option>
            <option value="thick">Kalın</option>
            <option value="gluten-free">Glutensiz</option>
          </select>

          <fieldset id="toppings">
            <legend style={{ fontWeight: "bold" }}>
              Ek Malzemeler (En fazla 10 adet seçebilirsiniz.)
            </legend>
            {toppingsList.map(({ value, label }) => (
              <label key={value}>
                <input
                  type="checkbox"
                  name="toppings"
                  value={value}
                  onChange={() => handleToppings(value)}
                  disabled={toppings.length >= 10 && !toppings.includes(value)}
                /> {label}
              </label>
            ))}
          </fieldset>

          <label>İsim</label>
          <textarea onChange={handleNameChange} value={name} id="name" name="name" rows="1" placeholder="Adınızı giriniz"></textarea>

          <label htmlFor="note">Sipariş Notu</label>
          <textarea onChange={handleChange} id="note" name="note" rows="1" placeholder="Siparişine eklemek istediğin bir not var mı?"></textarea>

          <label htmlFor="quantity">Adet:</label>
          <button id="tinyButton" type="button" onClick={decreaseQuantity} disabled={quantity <= 1}>-</button>
          <input id="quantity" name="quantity" value={quantity} readOnly />
          <button id="tinyButton" type="button" onClick={increaseQuantity}>+</button>

          <p>Sipariş Toplamı</p>
          <p>Seçimler: 25.00$</p>
          <p>Toplam: 130.00$</p>

          <button
            id="firstButton"
            type="submit"
            disabled={isSubmitting || !validateForm()}
            onClick={goToSuccess}
          >
            Sipariş Ver
          </button>
        </form>
      </div>
    </div>
  );
}

export default OrderPage;
