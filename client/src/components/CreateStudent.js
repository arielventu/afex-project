import { useState, useContext } from "react";
import { Container, Form, Button } from "react-bootstrap";
import Context from "../context/StudentsState";

const CreateStudent = () => {
  const [student, setStudent] = useState({
    nombre: "",
    edad: 0,
    carrera: "",
    hobbie: "",
  });
  const { addStudent } = useContext(Context);

  const handleChange = (e) => {
    setStudent({
      ...student,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addStudent(student);
    setStudent({
      nombre: "",
      edad: 0,
      carrera: "",
      hobbie: "",
    });
  };

  return (
    <Container className="justify-content-md-center mt-5">
      <h3>Crear estudiante</h3>
      <Form className="mt-4">
        <Form.Group className="mb-3">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingrese nombre"
            name="nombre"
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Edad</Form.Label>
          <Form.Control
            type="number"
            placeholder="Ingrese edad"
            name="edad"
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Carrera</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingrese carrera"
            name="carrera"
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Hobbie</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingrese hobbie"
            name="hobbie"
            onChange={handleChange}
          />
        </Form.Group>

        <Button variant="primary" type="submit" onClick={handleSubmit}>
          Crear
        </Button>
      </Form>
    </Container>
  );
};

export default CreateStudent;
