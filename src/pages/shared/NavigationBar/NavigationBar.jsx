import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProviders/AuthProviders';


const NavigationBar = () => {
    const {user, handleSignOut} = useContext(AuthContext)

    
    return (
        <Container>
         <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="#features">
              <Link to="/">Home</Link>
            </Nav.Link>
            <Nav.Link href="#pricing">About</Nav.Link>
            <Nav.Link href="#pricing">Career</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">
              {<FaUserCircle style={{fontSize : "30px"}} />}
              </Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
            
              {
                <Link to="/login">
                <Button onClick={handleSignOut} variant="dark">
                { user ? "Logout" : "Login" }
              </Button> </Link>
              }
            
            
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      </Container>
    );
};

export default NavigationBar;