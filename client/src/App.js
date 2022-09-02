import React from "react";
import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import CreateStudent from "./components/CreateStudent";
import NotFound from "./components/NotFound";
import api from "./api.json";
import "bootstrap/dist/css/bootstrap.min.css";
import Context from './context/StudentsState'
import Footer from "./components/Footer";

function App() {
  const [students, setStudents] = React.useState(api);

  const addStudent = (payload) => {
    setStudents([...students, payload]);
  };
  

  return (
    <Context.Provider value={{students, addStudent}}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<CreateStudent />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </Context.Provider>
  );
}

export default App;
