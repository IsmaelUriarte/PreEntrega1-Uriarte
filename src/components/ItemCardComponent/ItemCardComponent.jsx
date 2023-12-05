import ProductComponent from "./ProductComponent"

const ItemCardComponent = () => {
  const listadoAutos = [
    {
      imagen: './public/bmw-sedan.webp',
      titulo: 'BMW X2',
      descripcion: 'Recien Llegado',
      precio: '$15.000USD',
      enlace: ''
    },

    {
      imagen: './public/bmw-sedan.webp',
      titulo: 'BMW X2',
      descripcion: 'Recien Llegado',
      precio: '$15.000USD',
      enlace: '',
    },

    {
      imagen: './public/bmw-sedan.webp',
      titulo: 'BMW X2',
      descripcion: 'Recien Llegado',
      precio: '$15.000USD',
      enlace: ''
    },

    {
      imagen: './public/bmw-sedan.webp',
      titulo: 'BMW X2',
      descripcion: 'Recien Llegado',
      precio: '$15.000USD',
      enlace: '',
    },

    {
      imagen: './public/bmw-familiar.webp',
      titulo: 'BMW X2',
      descripcion: 'Recien Llegado',
      precio: '$15.000USD',
      enlace: ''
    },

    {
      imagen: './public/bmw-familiar.webp',
      titulo: 'BMW X2',
      descripcion: 'Recien Llegado',
      precio: '$15.000USD',
      enlace: ''
    },

    {
      imagen: './public/bmw-familiar.webp',
      titulo: 'BMW X2',
      descripcion: 'Recien Llegado',
      precio: '$15.000USD',
      enlace: ''
    },

    {
      imagen: './public/bmw-familiar.webp',
      titulo: 'BMW X2',
      descripcion: 'Recien Llegado',
      precio: '$15.000USD',
      enlace: ''
    },
  ]
   
  return (
    <div className="mt-6 mb-5 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
      {
        listadoAutos.map(auto => 
          <ProductComponent imagen={auto.imagen} titulo={auto.titulo} descripcion={auto.descripcion} precio={auto.precio} />
        )
      }
    </div>
  )
}
      
export default ItemCardComponent