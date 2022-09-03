import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Container, Button } from "react-bootstrap";
import Context from "../context/State";
import VideoCard from "./VideoCard";
import ModalComponent from "./ModalComponent";
import axios from "axios";
import { ytIdExtractor } from "../utils";
// import { apiKey } from "../z_utils";


const Home = () => {
  // const { videos, setVideos } = useContext(Context);
  // const [link, setLink] = useState("");
  // const [videoId, setVideoId] = useState("");
  // const [bandera, setBandera] = useState(false)

  // const apiKeyYT = process.env.apiKey || apiKey;
  const apiKeyYT = process.env.apiKey 

  const {
    show,
    setShow,
    link,
    setLink,
    videoId,
    setVideoId,
    videos,
    setVideos,
    video,
    setVideo
  } = useContext(Context);

  //Manejo del Modal
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

 
  // getVideoById("d81cf559-1f2b-4552-b816-fd61aff6fa0f")

  const getVideosFromDB = async () => {
    await axios.get("/").then((res) => {
      setVideos(res.data);
      console.log(res.data);
      // setBandera(true ? false : true)
    });
  };

  const handleInputChange = (e) => {
    e.preventDefault();
    setLink(e.target.value);
    setVideoId(ytIdExtractor(e.target.value));
    // console.log(link);
  };

  const getVideoDetailsFromYtApi = (url) => {
    return fetch(url).then((response) => response.json());
  };

  const handleAddVideo = () => {
    getVideoDetailsFromYtApi(
      `https://www.googleapis.com/youtube/v3/videos?id=${videoId}&key=${apiKeyYT}&part=snippet&part=contentDetails`
      ).then((data) => {
      const { items } = data;
      const { id, snippet, contentDetails } = items[0];
      const { title, description, thumbnails } = snippet;
      const { duration } = contentDetails;
      const { url } = thumbnails.medium;
      
      const newVideo = {
        ytId: id,
        title,
        description,
        thumbnail: url,
        duration,
        link: `https://youtu.be/${id}`
      };
      
      axios.post("/add", newVideo); //Guardo video en la DB
      setVideos([...videos, newVideo]); //Agrego el video en el Context
      // setVideos(videos.reverse()) 
      setLink("");
      setVideoId("");
      // setBandera(true ? false : true)
      // console.log(videos);
    });
  };

  const handleDelete = (id) => {
    // console.log(id);
    axios.delete(`/delete/${id}`).then(() => {
      const newVideos = videos.filter((video) => video.id !== id);
      setVideos(newVideos);
    });
  };

  const getVideoById = async (id) => {
    await axios.get(`/${id}`).then((res) => {
      setVideo(res.data.body);
      // console.log(res.data.body);
      console.log(video)
      handleShow()
      // setBandera(true ? false : true)
    });
  };

  useEffect(() => {
    getVideosFromDB(); //Obtiene videos de la BD de AWS
  }, [videos.length]);

  // console.log(video)

  return (
    <div className="bg-light min-vh-100 pt-4">
      <Container style={{ maxWidth: "40rem" }}>
        <h4>Añadir nuevo video</h4>
        <div className="input-group mb-3">
          <input
            onChange={handleInputChange}
            type="text"
            className="form-control"
            placeholder="Añadir"
            aria-label="Añadir"
            aria-describedby="basic-addon2"
            value={link}
          />
          <div className="input-group-append d-grid gap-2 col-2">
            <button
              onClick={handleAddVideo}
              className="btn btn-primary "
              type="button"
              style={{ borderRadius: "0 5px 5px 0" }}
            >
              Añadir
            </button>
          </div>
        </div>
      </Container>
      <Container
        style={{
          display: "flex",
          flexDirection: "row-reverse",
          flexWrap: "wrap",
          justifyContent: "flex-end",
        }}
      >
          {videos?.map((v) => (
            // <Link className="row p-4 d-inline-flex justify-content-center" to={`/detail/${v.id}`} key={v.id} style={{ textDecoration: 'none' }}>
            <a
              className="p-4"
              onClick={() => getVideoById(v.id)}
              key={v.id}
              // style={{ textDecoration: "none" }}
            >
              <VideoCard
                key={v.id}
                title={v.title}
                description={v.description}
                thumbnail={v.thumbnail}
                duration={v.duration}
                id={v.id}
                onDelete={handleDelete}
                getVideoById={getVideoById}
              />
            </a>
          ))}
      </Container>
      {/* <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button> */}
      <ModalComponent id={video.id} title={video.title} description={video.description} thumbnail={video.thumbnail} link={video.link} />
          
    </div>
  );
};

export default Home;
