const CategoryComponent = ({nombre, key, imagen}) => {
  return (
    <div className="group pb-4  relative border-1 bg-white border-slate-200 rounded-lg shadow-lg">
        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-50">
        <img src={imagen} alt={nombre} className="h-full w-full object-cover object-center lg:h-full lg:w-full"/>
        </div>
        <div className="mt-4 flex justify-between p-2.5">
        <div>
            <h3 className="text-sm text-gray-700">
            <a href="#">
                <span aria-hidden="true" className="absolute inset-0"></span>
                {nombre}
            </a>
            </h3>
            <p className="mt-1 text-sm text-gray-500">{nombre}</p>
        </div>
        </div>
        <div className='mt-2.5 text-center '>
            <a href={key} className="p-2.5 m-1.5 rounded-xl bg-cyan-950 text-gray-100 ">Ver más...</a>
        </div>
    </div>
  )
}

export default CategoryComponent