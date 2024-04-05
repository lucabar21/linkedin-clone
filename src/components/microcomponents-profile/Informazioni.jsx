//dinamico
import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import { useSelector } from "react-redux";

const Informazioni = ({ user }) => {
  const currentAccount = useSelector((state) => state.profile.user);

  return (
    <>
      <Row>
        <Col>
          <div className="mt-2 ">
            <Card className="rounded-4">
              <Card.Body className="mx-2">
                <Card.Title className="d-flex justify-content-between align-items-center">
                  <div>
                    <h4 className="mb-2">Informazioni</h4>
                  </div>
                </Card.Title>
                <div>
                  <div>
                    <p>{user && user.bio}</p>
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

export default Informazioni;
