import './Feadback.css';

export const Feadback = () => {
  return (
    <section className="feadback">

     <ul className='feadback-list'>
        <li>
      <p className='feadback-text'>
        Залиште заявку та наш менеджер зв'яжеться з Вами для уточнення деталей
      </p></li>
      <li> <p className='feadback-text2'> 
        Ми допоможемо підібрати розмір, спосіб оплати, доставки, або відповімо
        на інші Ваші запитання
      </p></li>
      </ul>
      <form className='feadback-form' action="">
        <input className='feadback-input' type="text" placeholder="Ваше Ім'я" />
        <input className='feadback-input' type="tel" placeholder="099-999-99-99" />
        <button className='feadback-button' type='button'>Залишити заявку</button>
      </form>
    </section>
  );
};
