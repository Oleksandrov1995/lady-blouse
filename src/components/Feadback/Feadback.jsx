import { useState, useEffect } from 'react';
import './Feadback.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { sendMessage } from 'utilities/sendMessage';

export const Feadback = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const [isFailure, setIsFailure] = useState(false);

  useEffect(() => {
    if (isSuccess) {
      Notify.success('Дякуємо! Заявка прийнята.');
      setTimeout(() => setIsSuccess(false), 4000);
    }
  }, [isSuccess]);

  useEffect(() => {
    if (isFailure) {
      Notify.failure('Введіть Ваш номер телефону');
      setTimeout(() => setIsFailure(false), 4000);
    }
  }, [isFailure]);

  const handleFormSubmit = async e => {
    e.preventDefault();

    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(phone)) {
      setIsFailure(true);
      return;
    }
    sendMessage(
      `Нова заявка! Хочу жилет!!! Зателефонуй мені! \nІм'я: ${name}\nТелефон: ${phone}`
    );
    setIsSuccess(true);
    setName('');
    setPhone('');
  };

  return (
    <section id="feadback" className="feadback">
      <ul className="feadback-list">
        <li>
          <p className="feadback-text">
            Залиште заявку та наш менеджер зв'яжеться з Вами для уточнення
            деталей
          </p>
        </li>
        <li>
          {' '}
          <p className="feadback-text2">
            Ми допоможемо підібрати розмір, спосіб оплати, доставки, або
            відповімо на інші Ваші запитання
          </p>
        </li>
      </ul>
      <form className="feadback-form" onSubmit={handleFormSubmit}>
        <input
          className="feadback-input"
          type="text"
          name="name"
          placeholder="Ваше Ім'я"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <input
          className="feadback-input"
          type="tel"
          name="phone"
          placeholder="099-999-99-99"
          value={phone}
          onChange={e =>
            setPhone(e.target.value.replace(/\D/g, '').slice(0, 10))
          }
        />
        <button className="feadback-button" type="submit">
          Залишити заявку
        </button>
      </form>
    </section>
  );
};
