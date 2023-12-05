import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import 'boxicons';

const CartWidgetComponent = () => {
  return (
    <div className=''>
        <Button variant="outline-dark" className='grid border-1 border-gray-600 rounded-xl '>
            Checkout <Badge bg="danger"><box-icon name='cart' color='#e0dfdf'></box-icon> 0</Badge>
        </Button>
    </div>
  )
}

export default CartWidgetComponent