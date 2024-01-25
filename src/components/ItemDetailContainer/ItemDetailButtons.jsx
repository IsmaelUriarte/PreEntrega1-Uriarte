import { useContext, useState } from 'react';
import { CartContext } from '../../context/CartContext';
import { Toaster, toast } from 'sonner';

export const ItemDetailButtons = ({id}) => {
    const [ cuenta, setCuenta ] = useState(1);
    const {count, setCount} = useContext(CartContext);
    const handleAddtoCart = () => {
        const existe = count.find((item) => item.id === id);
        if(existe){
            setCount(
                count.map((item) => item.id === id? { ...item, cantidad: item.cantidad + cuenta}:item
                )
            );
        }else{
            setCount([...count, {id: id, cantidad: cuenta}]);
        }
        toast.success('Se agrego al carrito', {duration: 1000})
        
    };

    return (
        <div className='mt-2.5 text-center'>
            <Toaster richColors position='top-center'/>
            <button onClick={() => {setCuenta(cuenta - 1);}} className="p-2.5 m-1.5 rounded-xl bg-cyan-950 text-gray-100 ">-</button>
            <div>{cuenta}</div>
            <button onClick={() => {setCuenta(cuenta + 1);}} className="p-2.5 m-1.5 rounded-xl bg-cyan-950 text-gray-100 ">+</button>
            <button onClick={handleAddtoCart}className="p-2.5 m-1.5 rounded-xl bg-cyan-950 text-gray-100 ">Add</button>
        </div>
    )
}
