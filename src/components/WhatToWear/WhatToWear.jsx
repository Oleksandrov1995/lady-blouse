import './WhatToWear.css'

export const WhatToWear = () => {
  return (
<section className='whatToWhear-section'>
    <h2>З чим вдягати жилет:</h2>
    <ul className='whatToWhear-list'>
        <li className='whatToWhear-item'>
            <img className='whatToWhear-img' src={require('../../Images/whatToWhear1.jpg')} alt="" />
            <p className='whatToWhear-text'>
            <span className='whatToWhear-textSp'>На футболку:</span> <br/>
            Чудовий вибір для повсякденного носіння. Вона створює легкий і невимушений образ
            </p>
        </li>
        <li className='whatToWhear-item'>
            <img className='whatToWhear-img' src={require('../../Images/whatToWhear2.jpg')}  alt="" />
            <p className='whatToWhear-text'>
            <span className='whatToWhear-textSp'>На топ:</span> <br/>
            Трендовий варіант, який створює дуже модний і трохи зухвалий образ. Підійде для вечірок або літніх прогулянок
            </p>
        </li>
        <li className='whatToWhear-item'>
            <img className='whatToWhear-img' src={require('../../Images/whatToWhear3.jpg')}  alt="" />
            <p className='whatToWhear-text'>
            <span className='whatToWhear-textSp'> На сорочку:</span><br/>
Класичний вибір, який надає образу елегантності. Ідеально підходить для роботи або офіційних заходів
            </p>
        </li>
        <li className='whatToWhear-item'>
            <img className='whatToWhear-img' src={require('../../Images/whatToWhear4.jpg')}  alt="" />
            <p className='whatToWhear-text'><span className='whatToWhear-textSp'> На гольф:</span><br/>
Ідеальний варіант для холодної погоди. Носіть в'язану жилетку поверх водолазки для додаткового тепла і стилю</p>
        </li>
    </ul>
    </section>
  );
};
