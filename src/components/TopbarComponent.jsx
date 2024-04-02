import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const TopbarComponent = () => {
  return (
    <Container fluid id="topbar">
      <Row className="justify-content-center">
        <Col className="d-flex gap-2 align-items-center justify-content-center p-2 col-10">
          <div id="top-logo">
            <img src="linkedin.svg" alt="logo" />
          </div>

          <div id="input-search">
            <img src="search.svg" alt="search" />
            <input type="search" placeholder="Cerca" />
          </div>

          {/* ICONS */}
          <div id="nav-icons-container">
            <div id="top-icon-lg">
              <div id="top-icon-img">
                <img src="search.svg" alt="home" />
              </div>
              <span>Cerca</span>
            </div>
            <div id="top-icon">
              <div id="top-icon-img">
                <img src="home.svg" alt="home" />
                <span id="span-1"></span>
                <span id="span-2"></span>
              </div>
              <span>Home</span>
            </div>
            <div id="top-icon">
              <div id="top-icon-img">
                <img src="rete.svg" alt="connections" />
              </div>
              <span>Rete</span>
            </div>
            <div id="top-icon">
              <div id="top-icon-img">
                <img src="jobs.svg" alt="jobs" />
              </div>
              <span>Lavoro</span>
            </div>
            <div id="top-icon">
              <div id="top-icon-img">
                <img src="message.svg" alt="jobs" />
              </div>
              <span>Messaggistica</span>
            </div>
            <div id="top-icon">
              <div id="top-icon-img">
                <img src="bell.svg" alt="notification" />
              </div>
              <span>Notifiche</span>
            </div>
            {/* USER */}
            <div id="top-icon-user">
              <div id="top-icon-avatar">
                <img src="https://placedog.net/410" alt="user" />
              </div>
              <div id="drop-span">
                <span id="drop-span" className="d-flex gap-1">
                  Tu <img src="dropdown.svg" alt="drop" />
                </span>
              </div>
            </div>
            {/* GRID */}
            <div id="top-icon">
              <div id="top-icon-img">
                <img src="grid.svg" alt="grid" />
              </div>
              <div id="drop-span">
                <span className="d-flex gap-1">
                  Per le aziende <img src="dropdown.svg" alt="drop" />
                </span>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
export default TopbarComponent;
