import React from "react";
import { Card } from "react-bootstrap";
import { AiOutlinePlus } from "react-icons/ai";
import { BiPencil } from "react-icons/bi";

const Lingue = () => {
    return (
        <div className="mt-2 mb-2">
        <Card>
            <Card.Body>
            <Card.Title className="d-flex justify-content-between align-items-center">
                <div>
                <h2>Lingue</h2>
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
            <div>
                <div>
                    <h4>Inglese</h4>
                <hr />
                </div>
                <div>
                    <h4>Italiano</h4>
                <hr />
                </div>
            </div>
            </Card.Body>
        </Card>
        </div>
    );
};

export default Lingue;