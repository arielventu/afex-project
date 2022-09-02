import { useContext } from "react";
import {Table} from 'react-bootstrap'
import Context from "../context/StudentsState";

const Home = () => {
  const { students } = useContext(Context);

  return (
    <div className="container mt-4">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Nombre</th>
            <th>Edad</th>
            <th>Carrera</th>
            <th>Hobbie</th>
          </tr>
        </thead>
        <tbody>
          {students.map((p, i) => {
            return (
              <tr key={p.nombre}>
                <td>{i + 1}</td>
                <td>{p.nombre}</td>
                <td>{p.edad}</td>
                <td>{p.carrera}</td>
                <td>{p.hobbie}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      </div>
    );
  };

export default Home;
