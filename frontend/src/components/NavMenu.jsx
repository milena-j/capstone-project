import React from 'react'
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'
import { LuUserCircle2 } from "react-icons/lu";
import LogoBianco from '../assets/img/Logo-Mattatoyo-bianco.png'
import { Link } from 'react-router-dom'

export default function NavMenu() {
  return (
    <header>
      <Navbar expand="lg" className="bg-dark" data-bs-theme="dark">
        <Container className='d-flex justify-content-between'>
          <Navbar.Brand href="#home" className="fs-6">
            <img
              alt="Logo Mattatoyo"
              src={LogoBianco}
              width="50"
              height="50"
            />
            {/* className="d-inline-block align-middle" */}
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
            </Nav>
          </Navbar.Collapse>
          <NavDropdown title={<LuUserCircle2 className='text-white fs-4' />} drop='start' >
            <Link to="/gestione-utenti" className='dropdown-item'>Gestione Utenti</Link>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#login">Logout</NavDropdown.Item>
          </NavDropdown>
        </Container>
      </Navbar>
    </header>
  )
}


