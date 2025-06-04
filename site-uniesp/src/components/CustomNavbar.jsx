import React, { useState } from 'react'
import { Container, Nav, Navbar, Offcanvas } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const CustomNavbar = () => {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)

  return (
    <>
      <Navbar expand="md" style={{ backgroundColor: '#002F6C' }} variant="dark" className="px-3 shadow-sm">
        <Container>
          <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
            <img src="/uniesp.jpg" alt="Uniesp Logo" width={60} height={60} className="me-2 rounded" />
          </Navbar.Brand>

          {/* Botão hamburguer padrão */}
          <Navbar.Toggle aria-controls="navbar-menu" />

          {/* Menu colapsável para telas md+ */}
          <Navbar.Collapse id="navbar-menu" className="justify-content-end">
            <Nav>
              <Nav.Link as={Link} to="/a-faculdade" className="px-3">A Faculdade</Nav.Link>
              <Nav.Link as={Link} to="/dpo-lgpd" className="px-3">DPO LGPD</Nav.Link>
              <Nav.Link as={Link} to="/noticias" className="px-3">Notícias</Nav.Link>
              <Nav.Link as={Link} to="/admin" className="px-3">Admin</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Offcanvas para telas pequenas (mobile) */}
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="flex-column">
            <Nav.Link as={Link} to="/a-faculdade" onClick={handleClose}>A Faculdade</Nav.Link>
            <Nav.Link as={Link} to="/dpo-lgpd" onClick={handleClose}>DPO LGPD</Nav.Link>
            <Nav.Link as={Link} to="/noticias" onClick={handleClose}>Notícias</Nav.Link>
            <Nav.Link as={Link} to="/admin" onClick={handleClose}>Admin</Nav.Link>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  )
}

export default CustomNavbar
