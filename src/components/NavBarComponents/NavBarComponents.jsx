
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidgetComponent from '../CartWidgetComponent/CartWidgetComponent';

const NavBarComponents = () => {

    return (
        <div>
            <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">BMW</Navbar.Brand>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" className='mx-auto' />
        <Navbar.Collapse id="basic-navbar-nav">
          
          <Nav className="mx-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            
            <Nav.Link href="#link">Contact</Nav.Link>
            
            <NavDropdown title="Categories" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
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