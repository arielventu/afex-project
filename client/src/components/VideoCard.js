import { useState } from "react";
import { useContext } from "react";
import axios from "axios"
import Context from "../context/State";
import { Card, CloseButton } from "react-bootstrap";
import moment from "moment";
import momentDurationFormatSetup from "moment-duration-format";
import ModalComponent from "./ModalComponent";

const VideoCard = ({ thumbnail, duration, id, onDelete, handleShow }) => {
  const processDuration = (duration) => {
    return moment.duration(duration).format("h:mm:ss").padStart(4, "0:0");
  };

  // console.log(processDuration(duration))
  const { show, setShow,} = useContext(Context);
  // const handleShow = () => setShow(false);

  const [isHovering, setIsHovering] = useState(false);
  const handleMouseEnter = () => setIsHovering(true);
  const handleMouseLeave = () => setIsHovering(false);

  // console.log(id)

  return (
    <>
      <Card
        className="p-0 position-relative border-0"
        style={{
          width: "18rem",
          cursor: isHovering ? "pointer" : "default",
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <Card.Img variant="top" src={thumbnail} />
        <Card.ImgOverlay>
          <div className="bg-black d-inline-flex p-1 rounded-1 position-absolute top-0 end-0 m-2">
            <CloseButton
              variant="white"
              onClick={() => onDelete(id)}
              style={{ width: "5px", height: "5px" }}
            />
          </div>
          <Card.Body>
            {/* <Card.Title style={{ fontSize:"1rem" }}>{title}</Card.Title>
          <Card.Text>{description}</Card.Text> */}
            <Card.Text
              className="text-white p-0 position-absolute bottom-0 end-0 m-2"
              style={{ textShadow: "1px 2px 2px black" }}
            >
              {processDuration(duration)}
            </Card.Text>
          </Card.Body>
        </Card.ImgOverlay>
      </Card>
    </>
  );
};

export default VideoCard;
