import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import { AiOutlinePlus } from "react-icons/ai";
import { BiPencil } from "react-icons/bi";

const Lingue = () => {
  return (
    <>
      <Row>
        <Col>
          <div className="mt-2 ">
            <Card className="rounded-4">
              <Card.Body className="mx-2">
                <Card.Title className="d-flex justify-content-between align-items-center">
                  <div>
                    <h4 className="mb-2">Lingue</h4>
                  </div>
                  <div className="d-flex align-items-end">
                    <div className="mr-3">
                      <AiOutlinePlus />
                    </div>
                    <div>
                      <img src="pen.svg" alt="" />
                    </div>
                  </div>
                </Card.Title>
                <div>
                  <div>
                    <h6>Inglese</h6>
                    <hr />
                  </div>
                  <div>
                    <h6>Italiano</h6>
                    <hr />
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

export default Lingue;
