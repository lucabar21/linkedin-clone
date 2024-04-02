import React from "react";
import { Card } from "react-bootstrap";


const Cause = () => {
    return (
        <div className="mt-2 mb-2">
        <Card>
            <Card.Body>
            <Card.Title className="d-flex justify-content-between align-items-center">
                <div>
                    <h2>Cause</h2>
                </div>
                    <div className="d-flex align-items-end">
                </div>
            </Card.Title>
            <div>
                <div>
                    <p>Alleviamento povertà • Ambiente • Arte e cultura • Benessere degli animali • Diritti umani • Formazione • Salute • Scienza e tecnologia • Servizi sociali</p>
                </div>
            </div>
            </Card.Body>
        </Card>
        </div>
    );
};

export default Cause;