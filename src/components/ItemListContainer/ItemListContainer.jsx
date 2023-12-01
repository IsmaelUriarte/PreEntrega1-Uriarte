
const ItemListContainer = ({greeting}) => {
  return (
    <div className="container mt-4">
      <div className="bg-red-400 text-center rounded-xl p-4">
        <h1 className="text-2xl ">{greeting}</h1>
      </div>
    </div>
  )
}

export default ItemListContainer