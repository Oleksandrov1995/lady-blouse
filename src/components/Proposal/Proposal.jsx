import './Proposal.css';

let price = 792;
let todayPrice = 539;
let quantity = 11;

export const Proposal = () => {
  return (
    <section className="proposal-section">
      <ul className="proposal-list">
        <li className="proposal-item">
          <img className='proposal-img'
            src={require('../../Images/proposal1.jpg')}
            alt="Дівчина в жилетці"
          />
          <p>Доповнює стиль та додає тепла</p>
        </li>
        <li className="proposal-item">
          {' '}
          <img className='proposal-img'
            src={require('../../Images/proposal2.jpg')}
            alt="Жилетка на вішаку"
          />
          <p>Висока якість пошиву та тканини</p>
        </li>
        <li className="proposal-item">
          {' '}
          <img className='proposal-img'
            src={require('../../Images/proposal3.jpg')}
            alt="Дівчина в жилетці"
          />
          <p>Приховує особливості фігури</p>
        </li>
      </ul>
      <div className="proposal-allPrice">
        <img
          src={require('../../Images/prices1.png')}
          alt="Шаблон ціни тижня"
        />
        <span className="proposal-price price-text">{price} ГРН</span>
        <span className="proposal-todayPrice price-text">{todayPrice} ГРН</span>
      </div>
      <h3 className='proposal-text'>Пропозиція діє до кінця тижня</h3>
      <button type='button' className='proposal-button'>Обрати жилет</button>
      <p className='proposal-text'>{`Залишилося ${quantity} штук по акції`}</p>
    </section>
  );
};
