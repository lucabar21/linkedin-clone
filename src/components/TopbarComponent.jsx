import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";

const TopbarComponent = () => {
  const currentProfile = useSelector((state) => state.profile.user);
  const [dropdown, setDropdown] = useState(false);

  const toggleDropdown = () => {
    setDropdown(!dropdown);
  };

  const location = useLocation();

  return (
    <>
      {location.pathname === `/` ? (
        <div></div>
      ) : (
        <div id="topbar">
          <Container>
            <div>
              <Row className="justify-content-center">
                <Col className="d-flex gap-4 mx-1 align-items-center justify-content-between p-2">
                  <div className="d-flex">
                    <Link to="/home">
                      <div id="top-logo">
                        <img src="/linkedin.svg" alt="logo" />
                      </div>
                    </Link>

                    <div id="input-search">
                      <img src="/search.svg" alt="search" />
                      <input type="search" placeholder="Cerca" />
                    </div>
                  </div>

                  {/* ICONS */}
                  <div id="nav-icons-container">
                    <div id="top-icon-lg">
                      <div id="top-icon-img">
                        <img src="/search.svg" alt="home" />
                      </div>

                      <span>Cerca</span>
                    </div>
                    <div id="top-icon">
                      <Link to="/home">
                        <div id="top-icon-img">
                          <img src="/home.svg" alt="home" />
                          <span id="span-1"></span>
                          <span id="span-2"></span>
                        </div>
                      </Link>
                      <span>Home</span>
                    </div>
                    <div id="top-icon">
                      <div id="top-icon-img">
                        <img src="/rete.svg" alt="connections" />
                      </div>
                      <span>Rete</span>
                    </div>
                    <div id="top-icon">
                      <div id="top-icon-img">
                        <img src="/jobs.svg" alt="jobs" />
                      </div>
                      <span>Lavoro</span>
                    </div>
                    <div id="top-icon">
                      <div id="top-icon-img">
                        <img src="/message.svg" alt="jobs" />
                      </div>
                      <span>Messaggistica</span>
                    </div>
                    <div id="top-icon">
                      <div id="top-icon-img">
                        <img src="/bell.svg" alt="notification" />
                      </div>
                      <span>Notifiche</span>
                    </div>
                    {/* USER */}
                    {currentProfile && (
                      <div id="top-icon-user" onClick={toggleDropdown}>
                        <div id="top-icon-avatar">
                          <img src={currentProfile.image} alt="user" />
                        </div>

                        <div id="drop-span">
                          <span id="drop-span" className="d-flex gap-1">
                            Tu <img src="/dropdown.svg" alt="drop" />
                          </span>
                        </div>
                        <div id="user-dropdown" className={dropdown ? "d-flex mt-3" : "d-none"}>
                          <div className="d-flex gap-3">
                            <div id="drop-img-container">
                              <img src={currentProfile.image} alt="user" />
                            </div>
                            <div id="drop-text-container">
                              <p id="dropdownName" className="fw-medium">
                                {currentProfile.name} {currentProfile.surname}
                              </p>
                              <span className="fs-6">{currentProfile.title}</span>
                            </div>
                          </div>
                          <Link to="/me" className="text-decoration-none">
                            <div id="view-profile">Visualizza profilo</div>
                          </Link>
                          <div id="drop-line"></div>
                          <div id="account-drop">
                            <p>Account</p>
                            <div className="d-flex align-items-end ">
                              <img src="/linkedinPremium.svg" alt="" className="mb-1" />
                              <h6 className="fw-medium" id="provaPremium">
                                Prova Premium gratis
                              </h6>
                            </div>
                            <h6 id="microCardLink">Impostazioni e privacy</h6>
                            <h6 id="microCardLink">Guida</h6>
                            <h6 id="microCardLink">Lingua</h6>
                          </div>
                          <div id="drop-line"></div>
                          <div id="account-drop">
                            <p>Gestisci</p>
                            <h6 id="microCardLink">Post e attività</h6>
                            <h6 id="microCardLink">Account per la pubblicazione di...</h6>
                          </div>
                          <div id="drop-line"></div>
                          <div id="account-drop">
                            <Link to="login">
                              <h6 id="microCardLink">Esci</h6>
                            </Link>
                          </div>
                        </div>
                      </div>
                    )}
                    {/* GRID */}
                    <div id="top-icon">
                      <div id="top-icon-img">
                        <img src="/grid.svg" alt="grid" />
                      </div>
                      <div id="drop-span">
                        <span className="d-flex flex-nowrap gap-1">
                          Per le aziende <img src="/dropdown.svg" alt="drop" />
                        </span>
                      </div>
                    </div>
                    <div>
                      <Link id="premiumLink" className="mt-3">
                        Prova Premium gratis
                      </Link>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>{" "}
          </Container>
        </div>
      )}
    </>
  );
};
export default TopbarComponent;
