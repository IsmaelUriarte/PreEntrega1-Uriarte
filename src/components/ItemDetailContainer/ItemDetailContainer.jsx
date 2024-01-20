import { Link, useParams } from "react-router-dom"
import { useEffect, useState } from "react";
import { pedirProducto } from "../helpers/pedirDatos";
import { useGetFirestoreDocument } from "../../hooks/useProduct";

const ItemDetailContainer = (  ) => {

  const idProducto = useParams().id;
  const { documentData } = useGetFirestoreDocument('product', idProducto);

  return (
    <div className="group pb-4  relative border-1 bg-white border-slate-200 rounded-lg shadow-lg">
        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-50">
        <img src={documentData.imagen} alt={documentData.titulo} className="h-full w-full object-cover object-center lg:h-full lg:w-full"/>
        </div>
        <div className="mt-4 flex justify-between p-2.5">
        <div>
            <h3 className="text-sm text-gray-700">
            <a href="#">
                <span aria-hidden="true" className="absolute inset-0"></span>
                {documentData.titulo}
            </a>
            </h3>
            <p className="mt-1 text-sm text-gray-500">{documentData.descripcion}</p>
        </div>
        <p className="text-sm font-medium text-gray-900">{documentData.precio}</p>
        </div>
        <div className='mt-2.5 text-center '>
          <Link to="/item/:" className="p-2.5 m-1.5 rounded-xl bg-cyan-950 text-gray-100 ">Agregar</Link>
        </div>
    </div>
  )
}

export default ItemDetailContainer