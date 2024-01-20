import ProductComponent from "./ProductComponent"

const ItemCardComponent = ( {productsData} ) => {
  
  return (

  <div className="productos mt-6 mb-5 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
      
      {productsData.map ((auto) => <ProductComponent key={auto.id} id={auto.id} imagen={auto.imagen} titulo={auto.titulo} descripcion={auto.descripcion} precio={auto.precio} enlace={""} />)}
      
  </div>

  )
}
      
export default ItemCardComponent
