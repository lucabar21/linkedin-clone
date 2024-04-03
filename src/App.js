import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import TopbarComponent from "./components/TopbarComponent";
import HeroSection from "./components/HeroSection";
import ChatMin from "./components/chat/ChatMin";
import Analisi from "./components/Analisi";
import SidebarProfile from "./components/sidebarProfile/SidebarProfile";

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
                    <Analisi />
                  </Col>
                  <Col className="col-3">
                    <SidebarProfile />
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
