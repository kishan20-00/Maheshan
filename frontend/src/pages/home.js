import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import backgroundImage from './mall.jpg';
import "./home.css";

function HomePage() {
    let navigate = useNavigate();
    const handleLogout = () => {
        navigate('/');
    };

    return (
        <div 
            className="d-flex flex-column min-vh-100" 
            style={{
                backgroundImage: `url(${backgroundImage})`, // Set the background image
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <div className="d-flex flex-column min-vh-100">
                {/* Header */}
                <Navbar bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand href="/">Mega Mall</Navbar.Brand>
                        <Nav className="mr-auto">
                            <Nav.Link as={Link} to="/home">Home</Nav.Link>
                            <Nav.Link as={Link} to="/viewcloth">Cloths</Nav.Link>
                            <Nav.Link as={Link} to="/addcloth">Add Cloths</Nav.Link>
                            <Nav.Link as={Link} to="/viewuser">All Users</Nav.Link>
                        </Nav>
                        <Button variant="outline-light" onClick={handleLogout}>Sign out</Button>
                    </Container>
                </Navbar>


                {/* Footer */}
                <footer className="footer bg-light mt-auto py-3">
                    <Container className='footer'>
                        <p className="text-center">&copy; 2024 My Website. All rights reserved.</p>
                    </Container>
                </footer>
            </div>
        </div>
    );
}

export default HomePage;
