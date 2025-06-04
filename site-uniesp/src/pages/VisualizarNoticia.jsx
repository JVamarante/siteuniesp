import React, { useReducer } from 'react'
import {useEffect } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Card } from 'react-bootstrap';



const VisualizarNoticia = () => {
    const { id } = useParams();
    const [noticia, setNoticia] = useState({});
    const urlBase = "http://localhost:3000";

    useEffect(() => {
      axios.get(`${urlBase}/noticias/${id}`)
      .then(response => setNoticia(response.data))
      .catch(error => {
        console.error("Erro ao buscar os detalhes da notícia:", error);
      });
    }, [id]);
  


  return (
    <Container className="py-4">
      <Card className="shadow-sm">
        <Card.Body>
          <Card.Title>{noticia.titulo}</Card.Title>
          <Card.Text>{noticia.texto}</Card.Text>
        </Card.Body>

      </Card>

    </Container>
  )
}

export default VisualizarNoticia