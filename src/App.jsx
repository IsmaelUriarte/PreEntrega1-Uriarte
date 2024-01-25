import NavBarComponents from './components/NavBarComponents/NavBarComponents';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import CategoryListContainer from './components/CategoryComponent/CategoryListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'; 
import Nosotros from './pages/Nosotros';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FooterComponent from './components/FooterComponents/FooterComponent';


//Importación de estilos de boostrap.
// PascaleCase <- para los componentes
// camelCase <- para todo lo demas 
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductsListContainer from './components/ItemListContainer/ProductsListContainer';
import Contacto from './pages/Contacto';
import { CartProvider } from './context/CartContext';
import CartDetail from './pages/CartDetail';


  const App = () => {

    const fullPage = {
      
      maxWidth: "100vw",
      minHeight: "100vh",
    }

  return (
    <>
    <div style={fullPage} className="bg-gradient-to-r from-zinc-300 via-zinc-300 to-zinc-300 ">
      <CartProvider>
        <BrowserRouter>
          <NavBarComponents/>
          <Routes>
            <Route path="/" element={<ItemListContainer/>} />
            <Route path="/item/:id" element={<ItemDetailContainer/>} />
            <Route path="/productos/:categoria" element={<ProductsListContainer/>} />
            <Route path="/nosotros" element={<Nosotros/>} />
            <Route path="/contacto" element={<Contacto/>} />
            <Route path="/carrito" element={<CartDetail/>} />
          </Routes>        
          <FooterComponent />
        </BrowserRouter>
      </CartProvider>
    </div>
    </>
  )
}

export default App
