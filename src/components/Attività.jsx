import React from "react";
import { Card, ListGroup } from "react-bootstrap";
import { BiRightArrowAlt } from "react-icons/bi";


const Attività = () => {
return (
        <div className="mt-2">
        <Card>
            <Card.Body>
                <Card.Title>
                    <div>
                    <h2 className="mb-0">Attività</h2>
                    <p>
                        <a href="#">7 followers</a>
                    </p>
                    </div>
                </Card.Title>
            <Card.Subtitle></Card.Subtitle>
            <div>
                
                <h3 className="mb-0">Non hai ancora pubblicato nulla</h3>
                <div>
                    I post che condividi appariranno qui
                
                </div>
            </div>
            </Card.Body>
            <ListGroup.Item className="text-center">
            <p>
                Mostra tutte le attività
                <BiRightArrowAlt />
            </p>
            </ListGroup.Item>
        </Card>
        </div>
    );
}
// gli "p" andranno sostituiti con dei Link probabilmente
export default Attività