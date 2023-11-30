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
  console.log('Stored Products:', products);
  if(products){
    setProducts(products)
  }
},[localStorage.getItem('products')])
  return (
    <div>
      <Modal
        open={modalOpen}
        onClose={modalClose}
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
          </div>
        ))}
        </Box>
      </Modal>
    </div>
  );
};
