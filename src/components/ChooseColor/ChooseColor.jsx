import { productsData } from 'data/productsData'
import './ChooseColor.css'

export const ChooseColor = () =>{
    return(
        <section className='product'>
        <h2>Обери свій колір</h2>
        <ul className='product-list'>
            {productsData.map((product)=>(
            <li className='product-item'  key={product.id}>
                <img className='product-img'  src={product.imageSrc} alt="Жилет" />
<img className='discount-img' src={require('Images/discount.png')} alt="" />
<p className='discount-text'>-{product.discount}%</p>
<p className='todayPrice-text'>Ціна сьогодні:</p>
                <p className='productPrice-text'>{product.price} грн</p>
                <p className='productTodayPrice-text'>{product.todayPrice} грн</p>
                <p className='product-color'>{product.color}</p>
                <button className='product-button' type='button'>Обрати {product.color}</button>

            </li>))}
        </ul>
        </section>
    )
}