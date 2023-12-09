import './Proposal.css';
import { Link } from 'react-scroll';

let price = 792;
let todayPrice = 539;


export const Proposal = () => {
  return (
    <section className="proposal-section">
      <ul className="proposal-list">
        <li className="proposal-item">
          <img className='proposal-img'
            src={require('../../Images/proposal1.jpg')}
            alt="Дівчина в жилетці"
          />
          <p className="proposal-item-text">Доповнює стиль та <br/> додає тепла</p>
        </li>
        <li className="proposal-item">
          {' '}
          <img className='proposal-img'
            src={require('../../Images/proposal2.jpg')}
            alt="Жилетка на вішаку"
          />
          <p className="proposal-item-text">Висока якість пошиву <br/>  та тканини</p>
        </li>
        <li className="proposal-item">
          {' '}
          <img className='proposal-img'
            src={require('../../Images/proposal3.jpg')}
            alt="Дівчина в жилетці"
          />
          <p className="proposal-item-text">Приховує особливості <br/> фігури</p>
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
      <button type='button' className='proposal-button'> <Link
      
            to="chooseColor"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Обрати жилет
          </Link></button>
      <p className='proposal-text'>Залишилося <span style={{ background: '#ff671e' }}>11</span> штук по акції</p>
    </section>
  );
};
