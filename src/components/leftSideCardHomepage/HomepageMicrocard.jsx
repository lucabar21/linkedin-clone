import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Link from "react-bootstrap/NavLink";

function HomepageMicrocard() {
  return (
    <Card className="rounded-4 mt-2">
      <ListGroup className="rounded-4" variant="flush">
        <ListGroup.Item className=" small fw-medium">
          <Link id="microCardLink" className="text-primary px-2 my-2">
            Gruppi
          </Link>

          <div className="d-flex justify-content-between  align-items-center">
            {" "}
            <Link id="microCardLink" className="text-primary px-2 my-2">
              Eventi
            </Link>
            <div id="buttonPlus" className="p-2">
              {" "}
              <img src="plus.svg" alt="" />
            </div>
          </div>

          <Link id="microCardLink" className="text-primary px-2 mt-2">
            Hashtag seguiti
          </Link>
        </ListGroup.Item>{" "}
        <ListGroup.Item className="text-center component-footer-show">
          <p className="my-1">Scopri di più</p>
        </ListGroup.Item>
      </ListGroup>
    </Card>
  );
}

export default HomepageMicrocard;
