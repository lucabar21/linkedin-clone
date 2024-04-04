import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { uploadImage } from "../redux/actions";
import { useSelector } from "react-redux";
import { getAccount } from "../redux/actions";

function UploadImageModal(props) {
  const [selectedImage, setSelectedImage] = useState(null);
  const dispatch = useDispatch();

  // Questo ci serve per poter prendere l'ID del profilo corrente!
  const currentAccount = useSelector((state) => state.profile.user);

  const handleImageChange = (event) => {
    setSelectedImage(event.target.files[0]);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (selectedImage) {
      dispatch(uploadImage(currentAccount._id, selectedImage));
      dispatch(getAccount());
    }
    props.onHide();
  };

  return (
    <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Carica la tua immagine</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleFormSubmit}>
          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">Immagine</InputGroup.Text>
            <Form.Control
              placeholder="Carica la tua immagine"
              aria-label="image"
              aria-describedby="basic-addon1"
              type="file"
              onChange={handleImageChange}
            />
          </InputGroup>
          <Modal.Footer>
            <Button variant="secondary" onClick={props.onHide}>
              Close
            </Button>
            <Button type="submit" variant="primary">
              Salva
            </Button>
          </Modal.Footer>
        </Form>
      </Modal.Body>
    </Modal>
  );
}
export default UploadImageModal;
