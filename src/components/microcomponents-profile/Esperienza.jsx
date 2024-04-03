// //dinamico
// import React, { useState } from "react";
// import { Button, Card, Container, Row, Col } from "react-bootstrap";
// import ModaleEsperienza from "./ModaleEsperienza";

// const Esperienza = ({ esperienza }) => {
//   const [showModal, setShowModal] = useState(false);

//   const handleShowModal = () => setShowModal(true);
//   const handleCloseModal = () => setShowModal(false);

//   const handleSaveEsperienza = (data) => {
//     
//     console.log("Salva esperienza:", data);
//   };

//   const handleDeleteEsperienza = () => {
//     
//     console.log("Elimina esperienza:", esperienza.id);
//   };

//   return (
//     <Container>
//       <Row>
//         <Col>
//           <Card className="rounded-4">
//             <Card.Body className="mx-2 mt-2">
//               <Card.Title>
//                 <h4 className="mb-2">Esperienza</h4>
//               </Card.Title>
//               <Row>
//                 <Col xs={12} md={3}>
//                   {/* Immagine */}
//                   <img
//                     src="https://via.placeholder.com/100"
//                     alt="Placeholder"
//                     className="img-fluid mb-2"
//                   />
//                 </Col>
//                 <Col xs={12}>
//                   <div>
//                     <h6 className="mb-2">Luogo di Esperienza</h6>
//                     <p>{esperienza.company}</p>
//                   </div>
//                 </Col>
//               </Row>
//               {/* Bottone per aprire il modale */}
//               <Button variant="primary" onClick={handleShowModal}>
//                 Aggiungi/Modifica Esperienza
//               </Button>
//             </Card.Body>
//           </Card>
//         </Col>
//       </Row>
//       <ModaleEsperienza
//         show={showModal}
//         handleClose={handleCloseModal}
//         esperienza={esperienza}
//         onSave={handleSaveEsperienza}
//         onDelete={handleDeleteEsperienza}
//       />
//     </Container>
//   );
// };

// export default Esperienza;
