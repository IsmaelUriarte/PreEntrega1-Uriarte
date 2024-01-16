import { pedirCategoria } from "../helpers/pedirDatos";
import { useEffect, useState } from "react";
import CategoryCardComponent from "./CategoryCardComponent";


const CategoryListContainer = ({greeting}) => {

    const [categorias, setCategorias] = useState ([]);
    
    useEffect(() => {
        pedirCategoria ()
            .then ((res) => {
                setCategorias(res);
            })
      }, [])

  return (
    <div className="container mt-4">
        <div className="bg-cyan-950 mt-16 mb-14 mx-16 text-center rounded-2xl p-12 shadow-xl">
            <h1 className=" text-5xl font-medium text-white">{greeting}</h1>
        </div>

        <CategoryCardComponent categorias={categorias} />
    </div>
  )
}

export default CategoryListContainer