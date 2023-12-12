import './ShoppingListButton.css'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


export const ShoppingListButton = ({modalOpen}) =>{
    const getProducts = localStorage.getItem('products')



    return( <button onClick={modalOpen}
        className={!getProducts || getProducts === '[]' ? 'modalButtonDisabled'  : 'modalButton' }>
          <ShoppingCartIcon fontSize="large" sx={{ color: 'black' }} />
          <p className='buttonNumber'>
      {getProducts ? JSON.parse(getProducts).reduce((total, item) => total + item.quantity, 0) : 0}
    </p>
        </button>)
}