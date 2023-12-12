import React, { useState } from 'react';
import './Header.css';
import { AiOutlineMenu, AiOutlineCloseCircle } from 'react-icons/ai';
import { Link } from 'react-scroll';

export const Header = () => {
  const [burgerMenuVisible, setBurgerMenuVisible] = useState(false);

  const toggleBurgerMenu = () => {
    setBurgerMenuVisible(!burgerMenuVisible);
  };

  return (
    <header className='header-section'>
    <div className="header-container">
      <div className="header-logo">
        <img src={require('../../Images/logo1.jpg')} alt="Logo" />
      </div>
      <ul className={`header-list ${burgerMenuVisible ? 'is-open' : ''}`}>
        <li className="header-item">
          <Link
            to="chooseColor"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="header-text"
          >
            Асортимент
          </Link>
        </li>
        <li className="header-item">
          <Link
            to="productSize"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="header-text"
          >
            Параметри
          </Link>
        </li>
        <li className="header-item">
          <Link
            to="reviews"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="header-text"
          >
            Відгуки
          </Link>
        </li>
        <li className="header-item">
          <Link
            to="questions"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="header-text"
          >
            Запитання
          </Link>
        </li>
        <li className="header-item">
          <Link
            to="feadback"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="header-text"
          >
            Швидке замовлення
          </Link>
        </li>
        <li className="header-item">
          <Link
            to="contacts"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="header-text"
          >
            Контакти
          </Link>
        </li>
      </ul>

      <div className="burger-menu-icon" onClick={toggleBurgerMenu}>
        {burgerMenuVisible ? (
          <AiOutlineCloseCircle size={30} />
        ) : (
          <AiOutlineMenu size={30} />
        )}
      </div>
    </div>
    </header>
  );
};
