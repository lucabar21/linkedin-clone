import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const Cause = () => {
  return (
    <>
      <Row>
        <Col>
          <div className="mt-2 ">
            <Card className="rounded-4">
              <Card.Body>
                <Card.Title className="d-flex justify-content-between align-items-center">
                  <div>
                    <h4 className="mb-2">Cause</h4>
                  </div>
                  <div className="d-flex align-items-end"></div>
                </Card.Title>
                <div>
                  <div>
                    <p>
                      Alleviamento povertà • Ambiente • Arte e cultura • Benessere degli animali • Diritti umani •
                      Formazione • Salute • Scienza e tecnologia • Servizi sociali
                    </p>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default Cause;
