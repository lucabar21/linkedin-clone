import React from "react";
import { Card } from "react-bootstrap";
import { AiOutlinePlus } from "react-icons/ai";
import { BiPencil } from "react-icons/bi";

const Competenze = () => {
    return (
        <div className="mt-2">
        <Card>
            <Card.Body>
            <Card.Title className="d-flex justify-content-between align-items-center">
                <div>
                <h2>Competenze</h2>
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
                <h4>Reducers</h4>
                <p>Full-Stack Developer - Certification</p>
                </div>
                <div>
                <h4>Typescript</h4>
                <p>Full-Stack Developer - Certification</p>
                </div>
            </div>
            </Card.Body>
        </Card>
        </div>
    );
};

export default Competenze;
