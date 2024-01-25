
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import CartWidgetComponent from "../CartWidgetComponent/CartWidgetComponent";
import { Link } from "react-router-dom"
import { useGetFirestoreCollection } from "../../hooks/useProduct";

const NavBarComponents = () => {
  const { productsData } = useGetFirestoreCollection("category");
  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container className="shadow-xl shadow-gray-100/50">
          <div><img src="../public/BMW-logo.png" className="h-7 w-7 mt-1"/></div>
          <Link  to="/" className="text-3xl font-semibold">NABMW</Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className="mx-auto" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
              <Link to="/" className="text-lg font-semibold mt-2 mr-5 border-2 border-transparent transform hover:border-b-cyan-950 hover:-translate-y-1">Home</Link>
              <Link to="/contacto" className="text-lg font-semibold mt-2 mr-5 border-2 border-transparent transform hover:border-b-cyan-950 hover:-translate-y-1">Contact</Link>
              <Link to="/nosotros" className="text-lg font-semibold mt-2 mr-4 border-2 border-transparent transform hover:border-b-cyan-950 hover:-translate-y-1">About Us</Link>
              <NavDropdown className="text-lg font-semibold text-black border-2 border-transparent transform hover:border-b-cyan-950 hover:-translate-y-1" title="Categories" id="basic-nav-dropdown">
                {
                  productsData.map ((auto, index) => {
                    return(
                      <div key={index}>
                        <li><Link className="dropdown-item" to={`/productos/${auto.nombre}`}>{auto.nombre}</Link></li>
                        <li><hr className="dropdown-divider"/></li>
                      </div>
                    )
                  })
                }
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
          <CartWidgetComponent/>
        </Container>
      </Navbar>
    </div>
  )
}

export default NavBarComponents;