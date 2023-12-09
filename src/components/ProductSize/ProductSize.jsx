import './ProductSize.css';

export const ProductSize = () => {
  return (
    <section id="productSize" className='productSize'>
      <h2>Заміри виробу</h2>
      <ul className='productSize-list'>
        <li>
       <p><span className='productSize-bolt'>Розмір: </span> 42 - 44 - 46 - універсальний</p>
        </li>
        <li>
          <p><span className='productSize-bolt'>Довжина жилету: </span> 50 см -ідеальна довжина для стильної двошаровості</p>
        </li>
        <li>
          <p><span className='productSize-bolt'>Ширина жилету: </span> 50 см -легко тягнеться до 54 см на ОГ до 108 см</p>
        </li>
      </ul>
      <p><span className='productSize-bolt'>*</span>  також стильно виглядає як оверсайз на розмірі 40, при цьому легко тягнеться до розміру 48 не втрачаючи форму та пружність</p>
    </section>
  );
};
