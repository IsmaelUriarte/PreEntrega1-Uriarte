import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import 'boxicons';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';

const CartWidgetComponent = () => {
  const {count} = useContext(CartContext);
  const totalItems = count.reduce((total, item) => total + item.cantidad, 0);
  return (
    <div className=''>
        <Link to="carrito" variant="outline-dark" className='grid border-1 border-gray-600 rounded-xl '>
            Checkout <Badge bg="danger"><box-icon name='cart' color='#e0dfdf'></box-icon> {totalItems}</Badge>
        </Link>
    </div>
  )
}

export default CartWidgetComponent