// ShoppingList.js

import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useEffect, useState } from 'react';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
export const ShoppingList = ({modalOpen, modalClose}) => {


const [products, setProducts] = useState([])
useEffect (()=> {
  
  const products = JSON.parse(localStorage.getItem('products'))
  
  if(products){
    setProducts(products)
  }
},[modalOpen])

const handleDeleteProduct = (productId) => {
  const updatedProducts = products.filter((product) => product.id !== productId);
  return  setProducts(updatedProducts);
  // localStorage.setItem('products', JSON.stringify(updatedProducts));
};


const handleAddToCart = (productId) => {
  const updatedProducts = products.map((product) =>
    product.id === productId ? { ...product, quantity: (product.quantity || 1) + 1 } : product
  );
    setProducts(updatedProducts);
  // localStorage.setItem('products', JSON.stringify(updatedProducts));
};
const handleRemoveFromCart = (productId) => {
  const updatedProducts = products
    .map((product) =>
      product.id === productId
        ? { ...product, quantity: Math.max((product.quantity || 0) - 1, 0) }
        : product
    )
    .filter((product) => product.quantity > 0);

    return  setProducts(updatedProducts);  
  // localStorage.setItem('products', JSON.stringify(updatedProducts));
};

const handleModalClose  = async()=>{
  console.log(products)
 await localStorage.setItem('products', JSON.stringify(products));
  modalClose()
  // window.location.reload()
}

  return (
    <div>
      <Modal
        open={modalOpen}
        onClose={handleModalClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
        {products&&products.map((product)=>(
          <div key={product.id}>
            <p>{product.color}</p>
            <p>Quantity: {product.quantity || 1}</p>
                <button onClick={() => handleDeleteProduct(product.id)}>Delete</button>
                <button onClick={() => handleAddToCart(product.id)}>Add to Cart</button>
                <button onClick={() => handleRemoveFromCart(product.id)}>Remove from Cart</button>
          </div>
        ))}
        </Box>
      </Modal>
    </div>
  );
};
