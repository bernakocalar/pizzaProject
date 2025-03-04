import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { styled } from 'styled-components';
import { useForm } from 'react-hook-form';

function OrderPage({ setOrderData }) {
  const navigate = useNavigate();
  const { 
    register, 
    handleSubmit, 
    formState: { errors, isSubmitting },
    setValue,
    watch
  } = useForm({
    defaultValues: {
      note: '',
      toppings: [],
      size: '',
      dough: '',
      quantity: 1,
      name: ''
    }
  });
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

  const watchedToppings = watch('toppings');
  const watchedQuantity = watch('quantity');

  const handleQuantityChange = (operation) => {
    const currentQuantity = watchedQuantity;
    setValue('quantity', 
      operation === 'increase' 
        ? currentQuantity + 1 
        : currentQuantity > 1 
        ? currentQuantity - 1 
        : 1
    );
  };

  const onSubmit = async (data) => {
    if (data.toppings.length < 3) {
      setError("En az 3 malzeme seçmelisiniz.");
    }else
{await axios.post('https://reqres.in/api/pizza', data);
      navigate('/orderSuccess');}
      setOrderData(data)
}
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
      <div className="header">
        <img style={{marginTop:"10px"}} src='\iteration-1-images\logo.svg' />
        <p>Ana Sayfa - Sipariş Oluştur</p>
      </div>
      <img style={{ marginLeft: "35%", marginRight: "35%", marginTop: "0" }} 
           src="\iteration-2-images\pictures\form-banner.png" />
      <div id="form-container">
        <h1>Position Absolute Acı Pizza</h1>
        <div className="pizzaPrice">
          <p>85,50₺</p>
          <p>4,5 (200)</p>
        </div>
        <p>
        Frontend Dev olarak hala position:absolute kullanıyorsan bu çok acı pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli lezzetli bir yemektir. Küçük bir pizzaya bazen pizzetta denir.

        </p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <fieldset className="size">
            <legend style={{ fontWeight: "bold" }}>Boyut Seç *</legend>
            <label>
              <input
                type="radio"
                {...register("size", { required: "Boyut seçimi zorunludur" })}
                value="küçük"
              /> Küçük
            </label>
            <label>
              <input
                type="radio"
                {...register("size", { required: "Boyut seçimi zorunludur" })}
                value="orta"
              /> Orta
            </label>
            <label>
              <input
                type="radio"
                {...register("size", { required: "Boyut seçimi zorunludur" })}
                value="büyük"
              /> Büyük
            </label>
            {errors.size && <p style={{ color: "red" }}>{errors.size.message}</p>}
          </fieldset>

          <label htmlFor="dough">Hamur Seç *</label>
          <select 
            {...register("dough", { required: "Hamur seçimi zorunludur" })}
          >
            <option value="">Hamur Seçin</option>
            <option value="ince">İnce</option>
            <option value="kalın">Kalın</option>
            <option value="glutensiz">Glutensiz</option>
          </select>
          {errors.dough && <p style={{ color: "red" }}>{errors.dough.message}</p>}

          <legend>Ek Malzemeler (En fazla 10 adet seçebilirsiniz.)</legend>
          <fieldset className="toppings">
            {toppingsList.map(({ value, label }) => (
              <label key={value}>
                <input
                  type="checkbox"
                  {...register("toppings")}
                  value={value}
                  disabled={watchedToppings.length >= 10 && !watchedToppings.includes(value)}
                /> {label}
              </label>
            ))}
          </fieldset>

          <label>İsim</label>
          <textarea 
            {...register("name", { required: "İsim zorunludur" })}
            rows="1" 
            placeholder="Adınızı giriniz"
          />
          {errors.name && <p style={{ color: "red" }}>{errors.name.message}</p>}

          <label htmlFor="note">Sipariş Notu</label>
          <textarea 
            {...register("note")}
            rows="1" 
            placeholder="Siparişine eklemek istediğin bir not var mı?"
          />

          <div className="altKisim">
            <section>
              <h3>Sipariş Toplamı</h3>
              <p>Seçimler: 25.00₺</p>
              <p>Toplam: 130.00₺</p>
            </section>
            <section id="sonBolum">
              <label htmlFor="quantity">Adet:</label>
              <button 
                className="tinyButton" 
                type="button" 
                onClick={() => handleQuantityChange('decrease')} 
                disabled={watchedQuantity <= 1}
              >-</button>
              <input 
                className="quantity" 
                {...register("quantity")}
                readOnly 
              />
              <button 
                className="tinyButton" 
                type="button" 
                onClick={() => handleQuantityChange('increase')}
              >+</button>
            </section>
              <button 
                className="mainButton" 
                type="submit"
                disabled={isSubmitting}
              >
                Siparişi Tamamla
              </button>
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
