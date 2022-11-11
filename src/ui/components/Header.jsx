import { NavLink, useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useContext } from 'react';
import { AuthContext } from '../../auth/context/AuthContext';
import { toast } from 'react-toastify';

import logo from '../../assets/mix/logo.png'

export const Header = () => {
    
  const {user,logout,logged} = useContext(AuthContext)

  const navigate = useNavigate()
  
  const onLog = () => {
    if (user) {
      logout()
      toast('May the force be with you!', {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      navigate('/home',{replace:true});
    } 
    else navigate('/login',{replace:true})
  }

  const onClickSecrets = () => {
    !logged &&  toast.info('You must login before access to the secrets!', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  }

  return (

  // <div style={{'margin-bottom': '8%'}}>
  <div style={{'marginBottom': '6rem'}}>
  <Navbar className='' collapseOnSelect expand="sm" bg="dark" variant="dark" fixed='top' >
        <Container>
        {/* <Navbar.Brand href="/">Star Wars</Navbar.Brand> */}
        <Navbar.Brand href="/">
        <img
              src={logo}
              width="100"
              height="40"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavLink className="nav-item nav-link" to="/home">Home</NavLink>
            <NavLink className="nav-item nav-link" to="/characters/jedi">Jedis</NavLink>
            <NavLink className="nav-item nav-link" to="/characters/sith">Siths</NavLink>
            <NavLink className="nav-item nav-link" to="/characters/search">Search</NavLink>
          </Nav>

          <Nav className="d-flex justify-content-end">
            <NavLink className="nav-item nav-link" to="/secrets" onClick={onClickSecrets}>Force Secrets</NavLink>
          </Nav>
          
          <Nav>
            <Nav.Link >
              <ul className="navbar-nav ml-auto  d-flex w-100 justify-content-end">
                <span className='nav-item nav-link text-primary'>{user && `@${user.name}`}</span>
                
                  <button className='nav-item nav-link btn btn-outline-primary'
                  onClick={onLog}>
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