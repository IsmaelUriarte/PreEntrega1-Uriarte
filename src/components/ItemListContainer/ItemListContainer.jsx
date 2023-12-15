import ItemCardComponent from "../ItemCardComponent/ItemCardComponent"
import CategoryListContainer from "../CategoryComponent/CategoryListContainer";
import Carousel from 'react-bootstrap/Carousel';
import { pedirDatos } from "../helpers/pedirDatos";
import { useEffect, useState } from "react";

const ItemListContainer = ({greeting}) => {

  const [productos, setProductos] = useState ([]);

    useEffect(() => {
      pedirDatos ()
          .then ((res) => {
              setProductos(res);
          })
    }, [])
  
    return (
      <div className="container mt-4">

        <CategoryListContainer greeting="Welcome WebSite"/> 

        <ItemCardComponent productos={productos} />
      </div>
    )
  }

export default ItemListContainer