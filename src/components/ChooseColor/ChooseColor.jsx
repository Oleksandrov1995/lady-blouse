import { productsData } from 'data/productsData';
import './ChooseColor.css';
import { useEffect, useState } from 'react';

export const ChooseColor = ({ modalOpen }) => {
  const [products, setProducts] = useState(() => {
    const storedProducts = localStorage.getItem('products');

    return storedProducts ? JSON.parse(storedProducts) : [];
  });

  const handleAddProduct = async productId => {
    const selectedProduct = productsData.find(
      product => productId === product.id
    );

    const storedProducts = JSON.parse(localStorage.getItem('products')) || [];
    const isProductAdded = storedProducts.find(
      product => productId === product.id
    );

    if (isProductAdded) {
      return modalOpen();
    }

    const updatedProducts = [...storedProducts, selectedProduct];

    setProducts(updatedProducts);
    localStorage.setItem('products', JSON.stringify(updatedProducts));

    modalOpen();
  };

  useEffect(() => {
    localStorage.setItem('products', JSON.stringify(products));
  }, [products]);

  return (
    <section id="chooseColor" className="product">
      <h2>Обери свій колір</h2>
      <ul className="product-list">
        {productsData.map(product => (
          <li className="product-item" key={product.id}>
            <img className="product-img" src={product.imageSrc} alt="Жилет" />
            <img
              className="discount-img"
              src={require('Images/discount.png')}
              alt=""
            />
            <p className="discount-text">-{product.discount}%</p>
            <p className="todayPrice-text">Ціна сьогодні:</p>
            <p className="productPrice-text">{product.price} грн</p>
            <p className="productTodayPrice-text">{product.todayPrice} грн</p>
            <p className="product-color">{product.color}</p>
            <button
              onClick={() => handleAddProduct(product.id)}
              className="product-button"
              type="button"
            >
              Обрати {product.color}
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
};
