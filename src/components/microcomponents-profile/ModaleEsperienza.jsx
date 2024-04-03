// import React, { useState } from "react";
// import { Button, Modal, Form } from "react-bootstrap";

// const ModaleEsperienza = ({ show, handleClose, esperienza, onSave, onDelete }) => {
    // const [formData, setFormData] = useState({
    //     company: esperienza.company || "",
    //     startDate: esperienza.startDate || "",
    //     endDate: esperienza.endDate || "",
    //     description: esperienza.description || "",
    //     area: esperienza.area || ""
    // });

    // const handleChange = (e) => {
    //     const { name, value } = e.target;
    //     setFormData({ ...formData, [name]: value });
    // };

    // const handleSave = () => {
    //     onSave(formData);
    //     handleClose();
    // };

//     const handleDelete = () => {
//         onDelete();
//         handleClose();
//     };

// return (
//         <Modal show={show} onHide={handleClose}>
//         <Modal.Header closeButton>
//             <Modal.Title>{esperienza.id ? "Modifica Esperienza" : "Aggiungi Esperienza"}</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//             <Form>
//             <Form.Group controlId="company">
//                 <Form.Label>Compagnia</Form.Label>
//                 <Form.Control
//                 type="text"
//                 placeholder="Inserisci la compagnia"
//                 name="company"
//                 value={formData.company}
//                 onChange={handleChange}
//                 />
//             </Form.Group>
//             {/* Altri campi del form per le informazioni sull'esperienza */}
//             <Form.Group controlId="startDate">
//                 <Form.Label>Data Inizio</Form.Label>
//                 <Form.Control
//                 type="date"
//                 name="startDate"
//                 value={formData.startDate}
//                 onChange={handleChange}
//                 />
//             </Form.Group>
//             {/* Aggiungi altri campi del form come necessario */}
//             </Form>
//         </Modal.Body>
//         <Modal.Footer>
//             <Button variant="secondary" onClick={handleClose}>
//             Chiudi
//             </Button>
//             {esperienza.id && (
//             <Button variant="danger" onClick={handleDelete}>
//                 Elimina
//             </Button>
//             )}
//             <Button variant="primary" onClick={handleSave}>
//             {esperienza.id ? "Salva Modifiche" : "Aggiungi"}
//             </Button>
//         </Modal.Footer>
//         </Modal>
//     );
// };

// export default ModaleEsperienza;
