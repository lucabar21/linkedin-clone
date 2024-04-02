import React from "react";
import { Card, Col, Row } from "react-bootstrap";

const Formazione = () => {
    return (
        <div className="mt-2">
            <Card>
                <Card.Body>
                <Card.Title>
                    <h2 className="mb-0">Formazione</h2>
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
                    <Col xs={12} md={9}>
                    
                    <div>
                        <h3 className="mb-0">Luogo di Formazione</h3>
                        <p>Qualifica formazione</p>
                        <p>Skills</p>
                    </div>
                    {/* altro contenuto di formazione */}
                    </Col>
                </Row>
                </Card.Body>
            </Card>
        </div>
    );
    };

export default Formazione;