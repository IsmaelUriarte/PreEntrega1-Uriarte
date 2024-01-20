import ItemCardComponent from "../ItemCardComponent/ItemCardComponent"
import CategoryListContainer from "../CategoryComponent/CategoryListContainer";
import HomeComponent from "../HomeComponent/HomeComponent";
import { useGetFirestoreCollection } from "../../hooks/useProduct";

const ItemListContainer = () => {
  const { productsData } = useGetFirestoreCollection('product');
  
    return (
      <div>
        <HomeComponent/>
        <div className="container mt-4">

          <CategoryListContainer greeting="Our list of Categories"/> 

          <ItemCardComponent productsData={productsData} />
        </div>
      </div>
    )
  }

export default ItemListContainer