import React from 'react'
import { Link } from 'react-router-dom'

const Item = ( {productos} ) => {
  return (
    <div className='productos'>
        <div>
          <img src="{productos.imagen}" />
            <h3>{productos.titulo}</h3>
            <p>precio: {productos.precio}</p>
            <p>categoria: {productos.categoria}</p>
            <Link to=""></Link>
        </div>
    </div>
  )
}
export default Item
