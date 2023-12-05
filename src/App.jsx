import NavBarComponents from './components/NavBarComponents/NavBarComponents';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

//Importación de estilos de boostrap.
import 'bootstrap/dist/css/bootstrap.min.css';

  const App = () => {

    const fullPage = {
      maxWidth: "100vw",
      minHeight: "100vh"
    }

  return (
    <>
    <div style={fullPage}>
      <div >
        <NavBarComponents/>
        <ItemListContainer greeting="Welcome WebSite"/>
      </div>

      <div>

      </div>
    </div>
    </>
  )
}

export default App
