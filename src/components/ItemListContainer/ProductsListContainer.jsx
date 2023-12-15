import { useParams } from "react-router-dom";
import ItemCardComponent from "../ItemCardComponent/ItemCardComponent"
import { pedirDatos } from "../helpers/pedirDatos";
import { useEffect, useState } from "react";

const ProductsListContainer = () => {

    const [productos, setProductos] = useState ([]);

    const categoria = useParams ().categoria;
  
      useEffect(() => {
        pedirDatos ()
            .then ((res) => {
                if(categoria){
                    setProductos(res.filter ((producto) => producto.categoria === categoria));   
                } else {
                    setProductos(res);
                }
                
            })
      }, [categoria])
    
      return (
        <div className="container mt-4">
   

  
          <ItemCardComponent productos={productos} />
        </div>
      )
    }

export default ProductsListContainer