import ItemCardComponent from "../ItemCardComponent/ItemCardComponent"
import Carousel from 'react-bootstrap/Carousel';

const ItemListContainer = ({greeting}) => {
  return (
    <div className="container mt-4">

      <div className="bg-cyan-950 my-12 text-center rounded-2xl p-12">
        <h1 className="text-4xl text-white">{greeting}</h1>
      </div>

        <ItemCardComponent/>
    </div>
  )
}

export default ItemListContainer