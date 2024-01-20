import { useParams } from "react-router-dom";
import ItemCardComponent from "../ItemCardComponent/ItemCardComponent"
import { useGetFirestoreCollectionCategory } from "../../hooks/useProduct";

const ProductsListContainer = () => {
  const filtro = useParams ().categoria;
  const { productsData } = useGetFirestoreCollectionCategory(filtro);
      return (
        <div className="container mt-4">
          <ItemCardComponent productsData={productsData} />
        </div>
      )
    }

export default ProductsListContainer