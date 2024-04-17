import React, { useState } from 'react'
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'
import LogoBianco from '../assets/img/Logo-Mattatoyo-bianco.png'
import { Link } from 'react-router-dom'

export default function NavMenu() {

  const [expanded, setExpanded] = useState(false);

  return (
    <header>
      <Navbar
        expanded={expanded}
        expand="lg"
        className="bg-dark"
        data-bs-theme="dark"
      >
        <Container>
          <Navbar.Brand href="/" className="fs-6">
            <img
              alt="Logo Mattatoyo"
              src={LogoBianco}
              width="50"
              height="50"
              className="me-2"
            />
            Mattatoyo
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            onClick={() => setExpanded(expanded ? false : true)}
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link
                to="/eventi"
                className='nav-link'
                onClick={() => setExpanded(false)}
              >
                Eventi
              </Link>
              {/* <NavDropdown title="Spese" id="basic-nav-dropdown">
                <Link
                  to="/spese-fisse"
                  className='dropdown-item'
                  onClick={() => setExpanded(false)}
                >
                  Fisse
                </Link>
                <Link
                  to="/spese-variabili"
                  className='dropdown-item'
                  onClick={() => setExpanded(false)}
                >
                  Variabili
                </Link>
              </NavDropdown>
              <Link
                to="/tessere"
                className='nav-link'
                onClick={() => setExpanded(false)}
              >
                Tessere
              </Link> */}
              <Link
                to="/statistiche"
                className='nav-link'
                onClick={() => setExpanded(false)}
              >
                Statistiche
              </Link>
              {/* <Link
                to="/gestione-utenti"
                className='nav-link'
                onClick={() => setExpanded(false)}
              >
                Gestione Utenti
              </Link> */}
              <Nav.Item
                className='nav-link'
                onClick={() => window.location.href = '/accesso'}
              >
                Logout
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}