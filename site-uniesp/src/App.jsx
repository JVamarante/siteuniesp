import React from 'react'
import { Container } from 'react-bootstrap'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Inicial from './pages/Inicial'
import Navbar from './components/CustomNavbar'

const App = () => {
  return (
   <BrowserRouter>
   <Navbar />
      <Container className="my-4">
      <Routes>
        <Route path="/" element={<Inicial/>} />

      </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App