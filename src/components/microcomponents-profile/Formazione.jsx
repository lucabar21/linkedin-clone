import React from "react";
import { Card, Row, Col } from "react-bootstrap";

const Formazione = () => {
  return (
    <>
      <Row>
        <Col>
          <Card className="rounded-4 mb-2">
            <Card.Body className="mx-2 mt-2">
              <Card.Title>
                <h4 className="mb-2">Formazione</h4>
              </Card.Title>
              <Row>
                <Col xs={12} md={3}>
                  {/* Immagine */}
                  <img src="https://via.placeholder.com/100" alt="Placeholder" className="img-fluid mb-2" />
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
        </Col>
      </Row>
    </>
  );
};

export default Formazione;
