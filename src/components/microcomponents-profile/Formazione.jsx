//dinamico
import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";

const Formazione = () => {
    return (
        <Container>
            <Row>
                <Col>
                    <div className="mt-2">
                        <Card className="rounded-4">
                            <Card.Body>
                            <Card.Title>
                                <h4 className="mb-2">Formazione</h4>
                            </Card.Title>
                            <Row>
                                <Col xs={12} md={3}>
                                {/* Immagine */}
                                <img
                                    src="https://via.placeholder.com/150"
                                    alt="Placeholder"
                                    className="img-fluid"
                                />
                                </Col>
                                <Col xs={12}>
                                
                                <div>
                                    <h6 className="mb-2">Luogo di Formazione</h6>
                                    <p>Qualifica formazione</p>
                                    <p>Skills</p>
                                </div>
                                {/* altro contenuto di formazione */}
                                </Col>
                            </Row>
                            </Card.Body>
                        </Card>
                    </div>
                </Col>
            </Row>
        </Container>
    );
    };

export default Formazione;