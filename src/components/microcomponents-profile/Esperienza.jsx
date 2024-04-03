// //dinamico
// import React, { useState } from "react";
// import { Button, Card, Container, Row, Col } from "react-bootstrap";
// import ModaleEsperienza from "./ModaleEsperienza";

// const Esperienza = ({ esperienza }) => {
//   const [showModal, setShowModal] = useState(false);

//   const handleShowModal = () => setShowModal(true);
//   const handleCloseModal = () => setShowModal(false);

//   const handleSaveEsperienza = (data) => {
//     // Implementa la logica per salvare o aggiornare l'esperienza nel tuo stato o nel tuo backend
//     console.log("Salva esperienza:", data);
//   };

//   const handleDeleteEsperienza = () => {
//     // Implementa la logica per eliminare l'esperienza dal tuo stato o dal tuo backend
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
//                     {/* Aggiungi altri campi per visualizzare le informazioni sull'esperienza */}
//                   </div>
//                   {/* Altri contenuti di esperienza */}
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
//       {/* Modale per aggiungere o modificare esperienza */}
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
