import { pedirCategoria } from "../helpers/pedirDatos";
import { useEffect, useState } from "react";
import CategoryCardComponent from "./CategoryCardComponent";
import { useGetFirestoreCollection } from "../../hooks/useProduct";

const CategoryListContainer = ({greeting}) => {

    //const [categorias, setCategorias] = useState ([]);
    const { productsData } = useGetFirestoreCollection('category');


  return (
    <div className="container mt-4">
        
        <div className="bg-[url('../public/bmw-serie-2-coupe.webp')] mx-16 rounded-[40px] bg-auto bg-top bg-no-repeat">
            <div className="bg-cyan-950 bg-opacity-80 mt-28 mb-20 py-28 text-center rounded-[40px] p-12 shadow-xl shadow-cyan-950/50">
                <p className=" text-6xl font-medium border-t-4 pt-3 text-white">{greeting}</p>
            </div>
        </div>
        
        

        <CategoryCardComponent categorias={productsData} />
    </div>
  )
}

export default CategoryListContainer