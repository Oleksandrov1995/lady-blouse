import React, { useState } from 'react';
import './Header.css';
import { AiOutlineMenu, AiOutlineCloseCircle } from 'react-icons/ai';
import RedeemIcon from '@mui/icons-material/Redeem';
import { Link } from 'react-scroll';

export const Header = ({modalOpen}) => {
  const [burgerMenuVisible, setBurgerMenuVisible] = useState(false);

  const toggleBurgerMenu = () => {
    setBurgerMenuVisible(!burgerMenuVisible);
  };

  return (
    <div className="header-container">
      <div className="header-logo">
        <img src={require('../../Images/logo1.jpg')} alt="Logo" />
      </div>
      <ul className={`header-list ${burgerMenuVisible ? 'is-open' : ''}`}>
      <li>
          <Link
            to="chooseColor"
            spy={true}
            smooth={true}
            offset={-70} // Адаптуйте цей зсув відповідно до вашого макету
            duration={500}
            className="header-text"
          >
            Асортимент
          </Link>
        </li>
        <li>
          <a href="http://google.com" className="header-text">
            Параметри
          </a>
        </li>
        <li>
          <a href="http://google.com" className="header-text">
            Відгуки
          </a>
        </li>
        <li>
          <a href="http://google.com" className="header-text">
            Запитання
          </a>
        </li>
        <li>
          <a href="http://google.com" className="header-text">
            Швидке замовлення
          </a>
        </li>
        <li>
          <a href="http://google.com" className="header-text">
            Контакти
          </a>
        </li>
      </ul>

      <button onClick={modalOpen} ><RedeemIcon fontSize="large" sx={{ color: '#ffffff' }}/></button>
      <div className="burger-menu-icon" onClick={toggleBurgerMenu}>
        {burgerMenuVisible ? (
          <AiOutlineCloseCircle size={30} />
        ) : (
          <AiOutlineMenu size={30} />
        )}
      </div>
    </div>
  );
};
