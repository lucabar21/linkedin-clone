import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import TopbarComponent from "./components/TopbarComponent";
import HeroSection from "./components/HeroSection";
import LanguageAndURL from "./components/LanguageAndURL";
import Recommended from "./components/Recommended";
import ChatMin from "./components/ChatMin";
import Homepage from "./components/Homepage";


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <TopbarComponent />
        <Routes>
          <Route
            path="/"
            element={
              <Container>
                <Row>
                  <Col className="col-9">
                    <HeroSection />
                    <Homepage/>
                  </Col>
                  <Col className="col-3">
                    <div>
                      <LanguageAndURL />
                      <Recommended title="Persone che potresti conoscere" subtitle="Dal tuo settore" />
                      <Recommended title="Consigliati" />
                    </div>
                  </Col>
                </Row>
              </Container>
            }
          ></Route>
        </Routes>
        <ChatMin />
      </div>
    </BrowserRouter>
  );
}

export default App;
