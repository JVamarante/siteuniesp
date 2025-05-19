import React from 'react'
import { useState } from 'react'
import { Container, Nav, Navbar, Collapse } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const CustomNavbar = () => {

  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <>
      <Navbar expand="md" style={{ backgroundColor: '#002F6C' }} variant="dark" className="px-3 shadow-sm">
        <Container>
          <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
            <img src="/uniesp.jpg" alt="Uniesp Logo" width={60} height={60} className="me-2 rounded" />
          </Navbar.Brand>

          {/* botão hamburguer */}
          <Navbar.Toggle onClick={handleShow} aria-controls="navbar-menu" />

          {/* Collapse manual com estado */}
          <Collapse in={show}>
            <div id="navbar-menu" className="w-100">
              <Navbar.Collapse className="justify-content-end">
                <Nav onClick={handleClose}> {/* Fecha ao clicar em um link */}
                  <Nav.Link as={Link} to="/a-faculdade" className="px-3">A faculdade</Nav.Link>
                  <Nav.Link as={Link} to="/dpo-lgpd" className="px-3">DPO LGPD</Nav.Link>
                  <Nav.Link as={Link} to="/noticias" className="px-3">Notícias</Nav.Link>
                  <Nav.Link as={Link} to="/admin" className="px-3">Admin</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </div>
          </Collapse>

        </Container>
      </Navbar>
    </>
  )
}

export default CustomNavbar
