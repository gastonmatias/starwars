import { NavLink, useNavigate } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useContext } from 'react';
import { AuthContext } from '../../auth/context/AuthContext';

export const Header = () => {
    
  const {user,logout} = useContext(AuthContext)

  const navigate = useNavigate()
  
  const onLogout = () => {
    
    logout()
    
    navigate('/login',{
          replace:true // para qe usuario recien deslogueado no pueda volver a "pagina anterior logueada"
      });
  }

  return (

  // <div style={{'margin-bottom': '8%'}}>
  <div style={{'marginBottom': '6rem'}}>
  <Navbar className='' collapseOnSelect expand="sm" bg="dark" variant="dark" fixed='top' >
        <Container>
        <Navbar.Brand href="/">Star Wars</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavLink className="nav-item nav-link" to="/home">Home</NavLink>
            <NavLink className="nav-item nav-link" to="/characters/jedi">Jedis</NavLink>
            <NavLink className="nav-item nav-link" to="/characters/sith">Siths</NavLink>
            <NavLink className="nav-item nav-link" to="/characters/search">Search</NavLink>
          </Nav>

          <Nav className="d-flex justify-content-end">
            <NavLink className="nav-item nav-link" to="/secrets">Force Secrets</NavLink>
          </Nav>
          
          <Nav>
            <Nav.Link >
              <ul className="navbar-nav ml-auto  d-flex w-100 justify-content-end">
                <span className='nav-item nav-link text-primary'>{user && `@${user.name}`}</span>
                <button className='nav-item nav-link btn btn-outline-primary'
                        onClick={onLogout}>
                    {user ? 'Logout' : 'Login'}
                </button>
              </ul>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        </Container>
  </Navbar>
  </div>

)}