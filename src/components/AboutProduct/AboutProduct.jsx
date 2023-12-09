import './AboutProduct.css'

export const AboutProduct = () => {
  return (
    <section className='aboutProduct'>
      <ul className='aboutProduct-list'>
        <li className='aboutProduct-item item-color'>
          <img className='about-img' src={require('../../Images/aboutProduct1.jpg')}alt="Жилетка на вішаку" />
          <h4 className='aboutProduct-listTitle'>Тканина</h4>
          <p className='aboutProduct-listText'>В складі бавовна 60% та акрил 40%. Таке співвідношення дозволяє відмінно тримати тепло, відводити вологу, надає пружні та еластичні властивості.</p>
        </li>
        <li className='aboutProduct-item'>
          <img className='about-img' src={require('../../Images/aboutProduct2.jpg')} alt="Дівчина в жилетці" />
          <h4 className='aboutProduct-listTitle'>Розміри</h4>
          <p className='aboutProduct-listText'>Трендовий фасон з оптимальними параметрами сторін 50 см на 50 см, надає універсальності виробу та добре підходить на розміри: 42, 44, 46.</p>
        </li>
        <li className='aboutProduct-item item-color'>
          <img className='about-img' src={require('../../Images/aboutProduct3.jpg')} alt="Жилетки на вішаку" />
          <h4 className='aboutProduct-listTitle'>Кольори</h4>
          <p className='aboutProduct-listText'>Крім оверсайз фасону в базу також увійшли і нюдові кольори в яких представлений жилет: Бежевий, молочний, гірчичний та класичний чорний.</p>
        </li>
      </ul>
    </section>
  );
};
