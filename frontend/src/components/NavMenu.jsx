import React from 'react'
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'
import LogoBianco from '../assets/img/Logo-Mattatoyo-bianco.png'
import { Link } from 'react-router-dom'

export default function NavMenu() {
  return (
    <header>
      <Navbar expand="lg" className="bg-dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/" className="fs-6">
            <img
              alt="Logo Mattatoyo"
              src={LogoBianco}
              width="50"
              height="50"
              className="me-2"
            />
            Circolo Mattatoyo
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Link to="/" className='nav-link'>Eventi</Link>
                <NavDropdown title="Spese" id="basic-nav-dropdown">
                  <Link to="/spese-fisse" className='dropdown-item'>Fisse</Link>
                  <Link to="/spese-variabili" className='dropdown-item'>Variabili</Link>
                </NavDropdown>
                <Link to="/tessere" className='nav-link'>Tessere</Link>
                <Link to="/statistiche" className='nav-link'>Statistiche</Link>
                <Link to="/gestione-utenti" className='nav-link'>Gestione Utenti</Link>
                <Nav.Item onClick={() => window.location.href = '/login'} className='nav-link'>Logout</Nav.Item>
              </Nav>
            </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}