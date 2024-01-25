import { Link, useParams } from "react-router-dom"
import { useEffect, useState } from "react";
import { pedirProducto } from "../helpers/pedirDatos";
import { useGetFirestoreDocument } from "../../hooks/useProduct";
import { ItemDetailButtons } from "./ItemDetailButtons";

const ItemDetailContainer = (  ) => {
  const idProducto = useParams().id;
  const { documentData } = useGetFirestoreDocument('product', idProducto);

  return (
    <div className="group pb-4 border-1 bg-white border-slate-200 rounded-lg shadow-lg">
      <div className="a overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 ">
          <img src={documentData.imagen} alt={documentData.titulo} className="object-center"/>
        </div>
        <div className="mt-4 flex justify-between p-2.5">
          <div>
              <h3 className="text-sm text-gray-700">
                {documentData.titulo}
              </h3>
              <p className="mt-1 text-sm text-gray-500">{documentData.descripcion}</p>
              <p className="text-sm font-medium text-gray-900">{documentData.precio}</p>
          </div>
          
        </div>
        
        <ItemDetailButtons id={documentData.titulo}></ItemDetailButtons>
    </div>
  )
}

export default ItemDetailContainer