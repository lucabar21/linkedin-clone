//dinamico
import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";


const Informazioni = () => {
    return (
        <Container>
            <Row>
                <Col>
                    <div className="mt-2 mb-2">
                    <Card className="rounded-4">
                        <Card.Body>
                        <Card.Title className="d-flex justify-content-between align-items-center">
                            <div>
                            <h4 className="mb-2">Informazioni</h4>
                            </div>
                        </Card.Title>
                        <div>
                            <div>
                                <p> 
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem sit ut sequi ipsa deserunt odio accusamus temporibus tenetur quam, ducimus, asperiores deleniti et eos magnam velit consectetur in voluptatum necessitatibus!
                                </p>
                            </div>
                        </div>
                        </Card.Body>
                    </Card>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Informazioni;