//dinamico
import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";

const Esperienza = () => {
  return (
    <>
      <Row>
        <Col>
          <Card className="rounded-4">
            <Card.Body className="mx-2 mt-2">
              <Card.Title>
                <h4 className="mb-2">Esperienza</h4>
              </Card.Title>
              <Row>
                <Col xs={12} md={3}>
                  {/* Immagine */}
                  <img src="https://via.placeholder.com/100" alt="Placeholder" className="img-fluid mb-2" />
                </Col>
                <Col xs={12}>
                  <div>
                    <h6 className="mb-2">Luogo di Esperienza</h6>
                    <p>Qualifica Esperienza</p>
                    <p>Skills</p>
                  </div>
                  {/* altro contenuto di Esperienza */}
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default Esperienza;
