import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import Footer from "./components/Footer";
// import VideoDetail from "./components/VideoDetail";
import Context from "./context/State";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [videos, setVideos] = React.useState([]);
  const [show, setShow] = React.useState(false);
  const [video, setVideo] = React.useState({
    id: "",
    title: "",
    description: "",
    thumbnail: "",
    ytId: "",
    link: ""
  });
  const [link, setLink] = React.useState("");
  const [videoId, setVideoId] = React.useState("");

  return (
    <Context.Provider
      value={{ videos, setVideos, show, setShow, video, setVideo, link, setLink, videoId, setVideoId }}
    >
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/detail" element={<VideoDetail />} /> */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </Context.Provider>
  );
}

export default App;
