import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import { AiOutlinePlus } from "react-icons/ai";
import { BiPencil } from "react-icons/bi";

const Esperienza = () => {
  return (
    <>
      <Row>
        <Col>
          <Card className="rounded-4">
            <Card.Body className="mx-2 mt-2">
            <Card.Title className="d-flex justify-content-between align-items-center">
                  <div>
                    <h4 className="mb-2">Esperienza</h4>
                  </div>
                  <div className="d-flex align-items-end">
                    <div className="mr-3">
                      <AiOutlinePlus />
                    </div>
                    <div>
                      <BiPencil />
                    </div>
                  </div>
                </Card.Title>
              <Row>
                <Col xs={12} md={3}>
                  <img src="https://via.placeholder.com/70" alt="Placeholder" className="img-fluid mb-2" />
                </Col>
                <Col xs={12}>
                  <div>
                    <h6 className="mb-2">Tipo esperienza</h6>
                    <p>luogo dell'esperienza</p>
                    <p>inizio esperienza - fine esperienza</p>
                    <p>sede del luogo dell'esperienza</p>
                    <p>descrizione</p>
                    <p className="mt-3">Skills</p>
                  </div>
                  {/* artra esperienza */}
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

