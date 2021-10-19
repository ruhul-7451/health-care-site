import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClinicMedical, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import useAuth from '../../../Hooks/useAuth';

const homeClinic = <FontAwesomeIcon icon={faClinicMedical} />
const logOutLogo = <FontAwesomeIcon icon={faSignOutAlt} />

const Header = () => {
    const { user, logOut } = useAuth();

    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container >
                    <Navbar.Brand as={Link} to="/home">{homeClinic} e-SHEBA</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto ">
                            <Nav.Link className="text-light" as={Link} to="/home">Home</Nav.Link>
                            <Nav.Link className="text-light" as={Link} to="/services">Services</Nav.Link>
                            <Nav.Link className="text-light" as={Link} to="/doctors">Doctors</Nav.Link>
                            <Nav.Link className="text-light" as={Link} to="/appointment">Appointment</Nav.Link>
                            {
                                user.email && <Navbar.Text className="text-info border rounded px-1">
                                    Hello! {user.displayName ? <span className="text-warning">{user.displayName}</span> : <span className="text-warning">User</span>}</Navbar.Text>
                            }
                            {
                                user.email ? <Nav.Link as={Link} to="/home" onClick={logOut} className="btn btn-danger ms-3 text-light">{logOutLogo} Logout</Nav.Link> : <Nav.Link as={Link} to="/login" className="text-light">Login</Nav.Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div >
    );
};

export default Header;