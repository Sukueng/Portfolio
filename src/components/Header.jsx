import React from 'react'
import { Link } from 'react-router-dom'
import "./component.css"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';

function Header() {
    return (
        <div className='container mt-2 mb-4'>
            {/* <div className='row' > */}
            <div className="">
                    <h2 className='titile' style={{ color: '#101552' }}>Sukumar <span style={{ color: 'orange' }}>Sivasubramaniyam</span></h2>
                </div>
            {/* <div className="col d-flex justify-content-end me-3 "> */}
            <Navbar expand="lg" className="">
                <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" className='text-center'/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto d-flex justify-content-center" >
                            <div className="navs">
                            <Link className='link-items' to="/" style={{ color: 'black',fontWeight:'bold'}}>Home</Link>
                            <Link className='link-items' to="/about" style={{ color: 'black',fontWeight:'bold' }}>About</Link>
                            <Link className='link-items' to="#" style={{ color: 'black',fontWeight:'bold' }}>Projects</Link>
                            <Link className='link-items' to="#" style={{ color: 'black' ,fontWeight:'bold'}}>Contact</Link>
                            </div>
                        </Nav>
                        
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
        // </div>
        // </div>
    )
}

export default Header

{/* <nav>
<ul class="navitems list-inline">
    <li class="list-inline-item p-3"><Link to={"/"} class=" text-decoration-none " style={{ color: '#101552', fontWeight: 'bold' }}>Home</Link></li>
    <li class="list-inline-item p-3"><a href="#" class=" text-decoration-none " style={{ color: '#101552', fontWeight: 'bold' }}><Link to={"/about"} class=" text-decoration-none " style={{ color: '#101552', fontWeight: 'bold' }}>About</Link></a></li>
    <li class="list-inline-item p-3"><a href="#" class=" text-decoration-none " style={{ color: '#101552', fontWeight: 'bold' }}>Projects</a></li>
    <li class="list-inline-item "><a href="#" class=" text-decoration-none " style={{ color: '#101552', fontWeight: 'bold' }}>Contact</a>
    </li>
</ul>
</nav> */}