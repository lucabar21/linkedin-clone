import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAccount } from "../../redux/actions";

function HomepageCardProfile() {
  const dispatch = useDispatch();
  const currentAccount = useSelector((state) => state.profile.user);
  useEffect(() => {
    dispatch(getAccount());
  }, []);

  return (
    <>
      {currentAccount && (
        <Card className="rounded-4 ">
          <Card.Img
            className="rounded-top-4 "
            variant="top"
            id="topCardProfileImg"
            src="https://sb.ecobnb.net/app/uploads/sites/2/2018/04/shoot-n-design-71270-unsplash.jpg"
          />{" "}
          <Card.Img id="cardProfileImg" src={currentAccount.image} />
          <Card.Body>
            <Card.Title id="cardProfileTitle" className="text-center mt-4">
              {" "}
              {currentAccount.name} {currentAccount.surname}
            </Card.Title>
            <Card.Text className="text-center mt-2 small">{currentAccount.title}</Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush rounded-bottom-4">
            <ListGroup.Item className=" p-3 small fw-medium component-footer-show">
              <p className=" text-body-tertiary ">Collegamento</p>
              <p>Espandi la tua rete</p>
            </ListGroup.Item>
            <ListGroup.Item className=" p-3 small component-footer-show">
              <p className=" text-body-tertiary ">Accedi a strumenti e informazioni in esclusiva</p>
              <div className="d-flex">
                <img src="linkedinPremium.svg" alt="" className="me-1" />
                <a className="d-flex align-items-end fw-medium " id="provaPremium">
                  Prova premium gratis
                </a>
              </div>
            </ListGroup.Item>
            <ListGroup.Item className="d-flex p-3 small fw-medium component-footer-show">
              <img src="saved.svg" alt="" />
              <span className="ms-1">I miei elementi</span>
            </ListGroup.Item>
          </ListGroup>
        </Card>
      )}
    </>
  );
}

export default HomepageCardProfile;
