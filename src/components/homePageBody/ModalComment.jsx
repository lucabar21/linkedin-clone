import { useState } from "react";
import { FloatingLabel, Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function ModalComment(props) {
  const [text, setText] = useState("");
  return (
    <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
      <div className="p-2">
        <Modal.Header className="textarea-comm" closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            <div className="d-flex">
              <img
                className="me-2 rounded-circle object-fit-cover"
                src="https://openclipart.org/download/247319/abstract-user-flat-3.svg"
                alt="Nome Utente"
                width={50}
                height={50}
              />
              <div className="">
                <h5>Name</h5>
                <p className="comm-font-mess"> Pubblica: Chiunque</p>
              </div>
            </div>
          </Modal.Title>
        </Modal.Header>
        <FloatingLabel controlId="floatingTextarea" label="Di cosa vorresti parlare?" className="mb-3 textarea-height">
          <Form.Control
            className="textarea-focus"
            as="textarea"
            placeholder="Leave a comment here"
            rows={10}
            onChange={e => setText(e.target.value)}
            value={text}
          />
        </FloatingLabel>
        <div className="d-flex">
          <div className="bg-svg">
            <img src="multimedia.svg" alt="" className="img-textarea-comm" />
          </div>
          <div className="bg-svg">
            <img src="calendar.svg" alt="" className="img-textarea-comm" />
          </div>
          <div className="bg-svg">
            <img src="happyStar.svg" alt="" className="img-textarea-comm" />
          </div>
          <div className="bg-svg">
            <img src="threePointsBlack.svg" alt="" className="img-textarea-comm" />
          </div>
        </div>
        <Modal.Footer>
          <img src="clock.svg" alt="" className="opacity-75" />
          {text === "" && (
            <Button disabled className="rounded-pill py-1" onClick={props.onHide}>
              Pubblica
            </Button>
          )}
          {text !== "" && (
            <Button className="rounded-pill py-1" onClick={props.onHide}>
              Pubblica
            </Button>
          )}
        </Modal.Footer>
      </div>
    </Modal>
  );
}

export default ModalComment;
