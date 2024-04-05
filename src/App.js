import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import TopbarComponent from "./components/TopbarComponent";
import ChatMin from "./components/chat/ChatMin";
import SidebarProfile from "./components/sidebarProfile/SidebarProfile";
import Footer from "./components/Footer";
import AddCommentMain from "./components/homePageBody/AddCommentMain";
import ProfileModal from "./components/ProfileModal";
import HeroSection from "./components/HeroSection";
import ProfilePage from "./components/ProfilePage";
import RightbarHomepage from "./components/rightSideCardHomepage/RightbarHomepage";
import { useSelector } from "react-redux";
import HomepageCardProfile from "./components/leftSideCardHomepage/HomepageCardProfile";
import HomepageMicrocard from "./components/leftSideCardHomepage/HomepageMicrocard";
import HomePage from "./components/homePageBody/HomePage";
import LoginPage from "./components/login/LoginPage";

function App() {
  const currentAccount = useSelector((state) => state.profile.user);
  const clickedAccount = useSelector((state) => state.profile.clicked);

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
                  <Col lg={3} md={4} sm={12}>
                    <HomepageCardProfile />
                    <HomepageMicrocard />
                  </Col>
                  <Col sm={12} md={8} lg={6}>
                    <AddCommentMain />
                    <HomePage />
                  </Col>
                  <Col id="colNone" md={4}></Col>
                  <Col sm={12} md={8} lg={3}>
                    <RightbarHomepage />
                  </Col>
                </Row>
              </Container>
            }
          ></Route>
          <Route
            path="/me"
            element={
              <Container className="mt-4">
                <Row>
                  <Col sm={12} md={7} lg={8} xl={9}>
                    <div id="main-section">
                      {<HeroSection user={currentAccount} />}
                      {<ProfilePage user={currentAccount} />} {<ProfileModal user={currentAccount} />}
                    </div>
                  </Col>
                  <Col xs={12} md={5} lg={4} xl={3}>
                    <SidebarProfile />
                  </Col>
                </Row>{" "}
                <Footer />
              </Container>
            }
          ></Route>
          <Route
            path="/login"
            element={
              <Container className=" mt-4">
                <LoginPage />
              </Container>
            }
          ></Route>
          <Route
            path="/profile/:userId"
            element={
              <Container className="mt-4">
                <Row>
                  <Col sm={12} md={7} lg={8} xl={9}>
                    <div id="main-section">
                      {clickedAccount !== null && (
                        <>
                          <HeroSection user={clickedAccount} />
                          <ProfilePage user={clickedAccount} />
                        </>
                      )}
                    </div>
                  </Col>
                  <Col xs={12} md={5} lg={4} xl={3}>
                    <SidebarProfile />
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
