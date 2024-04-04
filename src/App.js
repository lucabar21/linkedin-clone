import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import TopbarComponent from "./components/TopbarComponent";
import HeroSection from "./components/HeroSection";
import ChatMin from "./components/chat/ChatMin";
import ProfilePage from "./components/ProfilePage";
import SidebarProfile from "./components/sidebarProfile/SidebarProfile";
import Footer from "./components/Footer";
import HomepageCardProfile from "./components/HomepageCardProfile";
import HomepageMicrocard from "./components/HomepageMicrocard";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <TopbarComponent />
        <Routes>
          <Route
            path="/"
            element={
              <Container className="mt-4">
                <Row>
                  <Col sm={12} md={7} lg={8} xl={9}>
                    <div id="main-section">
                      <HeroSection />
                      <ProfilePage />
                    </div>
                  </Col>
                  <Col xs={12} md={5} lg={4} xl={3}>
                    <SidebarProfile />
                    <HomepageCardProfile />
                    <HomepageMicrocard />
                  </Col>
                </Row>{" "}
                <Footer />
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
