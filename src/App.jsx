import NavBarComponents from './components/NavBarComponents/NavBarComponents';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import CategoryListContainer from './components/CategoryComponent/CategoryListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'; 
import Nosotros from './pages/Nosotros';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FooterComponent from './components/FooterComponents/FooterComponent';
import HomeComponent from './components/HomeComponent/HomeComponent';

//Importación de estilos de boostrap.
// PascaleCase <- para los componentes
// camelCase <- para todo lo demas 
import 'bootstrap/dist/css/bootstrap.min.css';
import { ContactComponent } from './components/ContactComponent/ContactComponent';
import ProductsListContainer from './components/ItemListContainer/ProductsListContainer';


  const App = () => {

    const fullPage = {
      maxWidth: "100vw",
      minHeight: "100vh",
    }

  return (
    <>
    <div style={fullPage}>
      <BrowserRouter>

        <NavBarComponents/>
        
        <Routes>

          <Route path="/" element={<ItemListContainer/>} />
          <Route path="/item/:id" element={<ItemDetailContainer/>} />
          <Route path="/productos/:categoria" element={<ProductsListContainer/>} />
          <Route path="/nosotros" element={<Nosotros/>} />
          <Route/>
          
        </Routes>        
        
        

        <FooterComponent />

      </BrowserRouter>
    </div>
    </>
  )
}

export default App
