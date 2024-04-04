import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import { AiOutlinePlus } from "react-icons/ai";

const Competenze = () => {
  return (
    <>
      <Row>
        <Col>
          <div className="my-2">
            <Card className="rounded-4">
              <Card.Body className="mx-2">
                <Card.Title className="d-flex justify-content-between align-items-center">
                  <div>
                    <h4 className="mb-2">Competenze</h4>
                  </div>
                  <div className="d-flex align-items-end">
                    <div className="mr-3">
                      <AiOutlinePlus />
                    </div>
                    <div>
                      <img src="/pen.svg" alt="" />
                    </div>
                  </div>
                </Card.Title>
                <div>
                  <div>
                    <h6 className="mb-2">Reducers</h6>
                    <p className="mb-2">
                      {" "}
                      <img className="mx-2" height="20" width="20" id="epicodLogo" src="/epicode.svg" alt="logo" />
                      Full-Stack Developer - Certification
                    </p>
                  </div>
                  <div>
                    <h6 className="mb-2">Typescript</h6>
                    <p className="mb-2">
                      {" "}
                      <img className="mx-2" height="20" width="20" id="epicodLogo" src="/epicode.svg" alt="logo" />
                      Full-Stack Developer - Certification
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

export default Competenze;
