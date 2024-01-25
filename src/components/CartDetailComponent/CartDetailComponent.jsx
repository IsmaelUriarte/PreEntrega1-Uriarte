import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { useEffect } from "react";
import { useState } from "react";

const CartDetailComponent = ({ cartProductsData }) => {
  const { count, setCount } = useContext(CartContext);

  const handleRemoveCartItem = (productId) => {
    const updatedCart = count.filter((item) => item.id !== productId);
    setCount(updatedCart);
  };

  return (
    <div className="m-5 p-5">
    <h2 className="text-2xl font-medium pb-4 text-gray-900">Detalle de Compra</h2>
    <ul role="list" className="border p-4 divide-y divide-gray-100">
      {cartProductsData.map((elproducto) => {
        return (
          <li key={elproducto.id} className="flex justify-between gap-x-6 py-1">
            <div className="flex min-w-0 gap-x-4">
              <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                <img
                  src={elproducto.imagen}
                  alt={elproducto.titulo}
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <div className="min-w-0 flex-auto">
                <p className="text-sm font-semibold leading-6 text-gray-900">{elproducto.titulo}</p>
                <p className="mt-1 truncate text-xs leading-5 text-gray-500">{elproducto.descripcion}</p>
              </div>
            </div>
            <div className="mt-1 flex items-center gap-x-1.5">
              <p className="text-xs leading-5 text-gray-500">Cantidad: {elproducto.cantidad}</p>
            </div>
            <button onClick={() => handleRemoveCartItem(elproducto.titulo)}>Eliminar</button>
          </li>
        )
      }) }
      </ul>
    </div>
  )
}

export default CartDetailComponent

