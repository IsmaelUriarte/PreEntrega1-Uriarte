import NavBarComponents from './components/NavBarComponents/NavBarComponents';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import CategoryListContainer from './components/CategoryComponent/CategoryListContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FooterComponent from './components/FooterComponents/FooterComponent';

//Importación de estilos de boostrap.
// PascaleCase <- para los componentes
// camelCase <- para todo lo demas 
import 'bootstrap/dist/css/bootstrap.min.css';
import { ContactComponent } from './components/ContactComponent/ContactComponent';

  const App = () => {

    const fullPage = {
      maxWidth: "100vw",
      minHeight: "100vh",
    }

  return (
    <>
    <div style={fullPage}>
        <NavBarComponents/>
        {/* <ItemListContainer greeting="Welcome WebSite"/> */}
        <CategoryListContainer greeting="Welcome WebSite"/>
        <ItemListContainer/>
        <FooterComponent />
    </div>
    </>
  )
}

export default App
