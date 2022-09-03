import { Modal, Button, Row, Col, Container, Card } from "react-bootstrap";
import { useContext } from "react";
import Context from "../context/State";
import playButton from "../assets/play.png";

const ModaComponent = ({ thumbnail, title, description, link }) => {
  const { show, setShow, video } = useContext(Context);
  const handleClose = () => setShow(false);

  return (
    <Modal
      show={show}
      onHide={handleClose}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton />
      <Modal.Body className="show-grid">
        <Container>
          <Row>
            <Col xs={5}>
              <Card
                className="p-0 position-relative border-0"
                style={{ width: "18rem" }}
              >
                <Card.Img variant="top" src={thumbnail} />
                <Card.ImgOverlay className="d-flex justify-content-center align-items-center">
                <a href={link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
                    <img src={playButton} alt="play" style={{ width: "3rem" }} />
                    </a>
                </Card.ImgOverlay>
              </Card>
            </Col>
            <Col xs={7}>
              <Card.Title>{title}</Card.Title>
              <p
                style={{
                  display: "-webkit-box",
                  textOverflow: "ellipsis",
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                  maxHeight: "3.6em",
                  lineHeight: "1.8em",
                  marginTop: "1.5rem"
                }}
              >
                {description}
              </p>
            </Col>
          </Row>
        </Container>
      </Modal.Body>
    </Modal>
  );
};
export default ModaComponent;
