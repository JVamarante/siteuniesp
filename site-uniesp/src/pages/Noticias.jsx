import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Noticias = () => {
    const urlBase = "http://localhost:3000";
    const [noticias, setNoticias] = useState([]);
    const [erro, setErro] = useState('');

    useEffect(() => {
        axios.get(`${urlBase}/noticias`)
            .then(response => {
                console.log("Dados recebidos da API:", response.data);
                if (Array.isArray(response.data)) {
                    setNoticias(response.data);
                } else {
                    console.error("Formato de dados inesperado recebido da API:", response.data);
                    setNoticias([]);
                    setErro("Não foi possível carregar as notícias em um formato válido.");
                }
            })
            .catch(error => {
                console.error("Erro ao carregar a lista de notícias:", error);
                setNoticias([]);
                setErro("Falha ao carregar notícias. Verifique sua conexão ou o servidor.");
            });
    }, []);

    if (erro) {
        return (
            <Container className="py-4">
                <h2 className="mb-4">Notícias</h2>
                <p className="text-danger">{erro}</p>
            </Container>
        );
    }

    if (noticias.length === 0 && !erro) {
         return (
            <Container className="py-4">
                <h2 className="mb-4">Notícias</h2>
                <p>Nenhuma notícia disponível no momento ou carregando...</p>
            </Container>
        );
    }

    return (
        <Container className="py-4">
            <h2 className="mb-4">Notícias</h2>
            <Row className="g-4">
                {noticias.map((noticia) => (
                    <Col xs={12} sm={6} md={4} key={noticia.id}>
                        <Card className="h-100 shadow-sm">
                            <Card.Img
                                variant="top"
                                src={noticia.imagemUrl || "https://images.unsplash.com/photo-1652974731232-efc86a9bd985"}
                                alt={noticia.titulo || "Imagem da notícia"}
                                style={{ height: '140px', objectFit: 'cover' }}
                            />
                            <Card.Body>
                                <Card.Title>{noticia.titulo}</Card.Title>
                                <Card.Text>
                                    {noticia.texto ? noticia.texto.substring(0, 100) + '...' : 'Sem descrição disponível.'}
                                </Card.Text>
                                <Link 
                                    to={`/visualiza-noticia/${noticia.id}`} 
                                    className="text-decoration-none text-primary"
                                >
                                    <small>Ler mais</small>
                                </Link>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default Noticias;