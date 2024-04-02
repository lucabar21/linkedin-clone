import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Analisi from "./components/Analisi";
import Risorse from "./components/Risorse";
import Attività from "./components/Attività";
import Formazione from "./components/formazione";
import { Container } from "react-bootstrap";
function App() {
  return (
  <Container>
      <Analisi/>
      <Risorse />
      <Attività /> 
      <Formazione/>
  </Container>
  )
}

export default App;
