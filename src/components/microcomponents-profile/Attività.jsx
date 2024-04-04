import React from "react";
import { Col, Row, Card, ListGroup } from "react-bootstrap";
import { BiRightArrowAlt } from "react-icons/bi";

const Attività = () => {
  return (
    <>
      <Col>
        <Row>
          <div className="mt-2">
            <Card className="rounded-4">
              <Card.Body className="mx-2">
                <Card.Title>
                  <div>
                    <h4 className="mb-2">Attività</h4>
                    <p className="pb-2">7 followers</p>
                  </div>
                </Card.Title>
                <Card.Subtitle></Card.Subtitle>
                <div>
                  <h6 className="mb-0">Non hai ancora pubblicato nulla</h6>
                  <div>I post che condividi appariranno qui</div>
                </div>
              </Card.Body>
              <ListGroup.Item className="text-center">
                <div className="component-footer-show ">
                  <p>
                    Mostra tutte le attività
                    <BiRightArrowAlt />
                  </p>
                </div>
              </ListGroup.Item>
            </Card>
          </div>
        </Row>
      </Col>
    </>
  );
};
// gli "p" andranno sostituiti con dei Link probabilmente
export default Attività;
