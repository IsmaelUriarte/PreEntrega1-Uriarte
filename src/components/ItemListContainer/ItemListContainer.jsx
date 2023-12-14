import ItemCardComponent from "../ItemCardComponent/ItemCardComponent"
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
        <div className="bg-cyan-950 my-12 text-center rounded-2xl p-12">
          <h1 className="text-4xl text-white">{greeting}</h1>
        </div>

        <ItemCardComponent productos={productos} />
      </div>
    )
  }

export default ItemListContainer