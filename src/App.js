import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Analisi from "./components/Analisi";
import Risorse from "./components/Risorse";
import Attività from "./components/Attività";
import Formazione from "./components/formazione";
import Competenze from "./components/Competenze";
import { Container } from "react-bootstrap";
import Lingue from "./components/Lingue";
import Cause from "./components/Cause";
function App() {
  return (
  <Container>
      <Analisi/>
      <Risorse />
      <Attività /> 
      <Formazione />
      <Competenze /> 
      <Lingue />
      <Cause />
  </Container>
  )
}

export default App;
