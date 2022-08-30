import { Outlet, Link } from "react-router-dom";
import Nav from "react-bootstrap/esm/Nav";
import bwlogo from './images/bwlogo.png';
import { Navbar, Container } from 'react-bootstrap';

const Layout = () => {
  return (
    <>
<Navbar className="navbar navbar-expand fixed-top" bg="black" variant="dark">
            <Container fluid>
              <Navbar.Brand href={bwlogo}>
                <img 
                       className="img-logo"
                       src={bwlogo}
                       width={200}
                       height={80}
                       alt="A grey laptop computer with a black background."
                />
              </Navbar.Brand>
              <Nav className="navbar-nav me-auto mb-2 mb-md-0">
                <Link to='/'>Home</Link>
                <Nav.Link href="#features">Features</Nav.Link>
                <Link to="/Privacy">Privacy</Link>
              </Nav>
            </Container>
</Navbar>
      <Outlet />
    </>
  )
};

export default Layout;





