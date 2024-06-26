import { useEffect, useState } from "react";
import { FloatingLabel, Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../../redux/actions/posts";
import { uploadImagePost } from "../../redux/actions/posts";
import { getAccount } from "../../redux/actions";

function ModalComment(props) {
  const currentProfile = useSelector((state) => state.profile.user);
  const currentLogin = useSelector((state) => state.login.data.token);
  const [text, setText] = useState("");
  const [postID, setPostId] = useState("");
  const dispatch = useDispatch();

  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (event) => {
    setSelectedImage(event.target.files[0]);
  };

  const handleFormSubmit = () => {
    console.log("c'è l'immagine?", selectedImage);
    if (selectedImage) {
      dispatch(uploadImagePost(postID, selectedImage));
      dispatch(getAccount());
    }
  };

  const ExperiencesEndpoint = `https://striveschool-api.herokuapp.com/api/posts/` + postID;

  const fetchOfPosts = (method) => {
    fetch(ExperiencesEndpoint, {
      method: method,
      body: JSON.stringify({ text }),
      headers: {
        Authorization: currentLogin,
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          setText("");
          handleFormSubmit();
        } else {
          throw new Error("Quacosa è andato storto!");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleclick = () => {
    props.onHide();

    fetchOfPosts("POST");
    dispatch(fetchPosts());
  };

  const handleclickEdit = () => {
    props.onHide();

    fetchOfPosts("PUT");
    dispatch(fetchPosts());
  };

  const handleclickDelete = () => {
    fetch(ExperiencesEndpoint, {
      method: "DELETE",
      headers: {
        Authorization: currentLogin,
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Quacosa è andato storto!");
        }
      })
      .catch((error) => {
        console.log(error);
      });
    dispatch(fetchPosts());
    props.onHide();
  };

  useEffect(() => {
    if (props.post !== undefined) {
      setPostId(props.post._id);
      setText(props.post.text);
    }
  }, [props.post]);

  return (
    <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
      <div className="p-2 ">
        <Modal.Header className="textarea-comm" closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            <div className="d-flex">
              <img
                className="me-2 rounded-circle object-fit-cover"
                src={
                  currentProfile !== null
                    ? currentProfile.image
                    : "https://openclipart.org/download/247319/abstract-user-flat-3.svg"
                }
                alt="Nome Utente"
                width={50}
                height={50}
              />
              <div className="">
                <h5>
                  {currentProfile !== null ? (
                    <>
                      {" "}
                      {currentProfile.name} {currentProfile.surname}
                    </>
                  ) : (
                    "title"
                  )}
                </h5>
                <p className="comm-font-mess">{props.edit}</p>
              </div>
            </div>
          </Modal.Title>
        </Modal.Header>
        <FloatingLabel controlId="floatingTextarea" label="Di cosa vorresti parlare?" className="mb-3 textarea-height">
          <Form.Control
            className="textarea-focus"
            as="textarea"
            placeholder="Leave a comment here"
            rows={10}
            onChange={(e) => setText(e.target.value)}
            value={text}
          />
        </FloatingLabel>
        <Form.Control
          className="textarea-focus"
          placeholder="Carica la tua immagine"
          onChange={handleImageChange}
          type="file"
        />
        <div className="d-flex">
          <div className="bg-svg" onClick={() => {}}>
            <img src="/multimedia.svg" alt="" className="img-textarea-comm" />
          </div>
          <div className="bg-svg">
            <img src="/calendar.svg" alt="" className="img-textarea-comm" />
          </div>
          <div className="bg-svg">
            <img src="/happyStar.svg" alt="" className="img-textarea-comm" />
          </div>
          <div className="bg-svg">
            <img src="/threePointsBlack.svg" alt="" className="img-textarea-comm" />
          </div>
        </div>
        <Modal.Footer>
          <img src="clock.svg" alt="" className="opacity-75" />
          {text === "" && props.post === undefined && (
            <Button disabled className="rounded-pill py-1">
              Pubblica
            </Button>
          )}
          {/* dobbiamo fare qualcosa */}
          {text === "" && props.post !== undefined && (
            <>
              <Button className="rounded-pill py-1 me-2">Elimina</Button>
              <Button disabled className="rounded-pill py-1">
                Modifica
              </Button>
            </>
          )}
          {text !== "" && props.post === undefined && (
            <Button className="rounded-pill py-1" onClick={handleclick}>
              Pubblica
            </Button>
          )}
          {text !== "" && props.post !== undefined && (
            <>
              <Button className="rounded-pill py-1" onClick={handleclickDelete}>
                Elimina
              </Button>
              <Button className="rounded-pill py-1" onClick={handleclickEdit}>
                Modifica
              </Button>
            </>
          )}
        </Modal.Footer>
      </div>
    </Modal>
  );
}

export default ModalComment;
