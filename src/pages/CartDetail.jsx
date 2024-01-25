import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import CartDetailComponent from '../components/CartDetailComponent/CartDetailComponent';
import { useState, useEffect } from 'react';
import { useGetFirestoreCartProducts } from '../hooks/useProduct';

const CartDetail = () => {
  const { count } = useContext(CartContext);
  const { cartProductsData } = useGetFirestoreCartProducts(count);
  return (
    cartProductsData.length > 0 ? (
      cartProductsData[0] == 'nodata' ? (
          <p>No existen los productos</p>
        ):(
        <CartDetailComponent cartProductsData={cartProductsData}></CartDetailComponent>
      )
    ):(
      <p>No hay datos</p>
    )
  )
}

export default CartDetail