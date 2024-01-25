import { Link } from "react-router-dom"

const CategoryComponent = ({nombre, imagen, id}) => {
  return (
    <div className="group pb-4 border-1 bg-white border-slate-200 rounded-lg  py-3 px-3">
        <div className="">
        <img src={imagen} alt={nombre} className="h-full w-full object-cover object-center lg:h-full lg:w-full"/>
        </div>
        <div className="mt-4 flex justify-between p-2.5">
        <div>
            <h3 className="text-sm text-gray-700">
            <Link to={"/productos/" + id}>
                
            </Link>
            </h3>
            <p className="mt-1 text-2xl text-gray-700 font-bold border-t-4 border-gray-700">{nombre}</p>
        </div>
        </div>
        <div className='mt-2.5 text-center '>
            <Link to={"/productos/" + id} className="p-2.5 m-1.5 rounded-xl bg-cyan-950 text-gray-100  ">See more...</Link>
        </div>
    </div>
  )
}

export default CategoryComponent