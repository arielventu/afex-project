
const Student = ({ nombre, edad, carrera, hobbie }) => {
  return (
    <>
      <div>
        <div className="nombre">
          <h4>{nombre}</h4>
        </div>
        <div className="edad">
          <h6>
            Edad: <span className="fw-lighter">{edad}</span>
          </h6>
        </div>
        <div className="carrera">
          <h6>
            Carrera: <span className="fw-lighter">{carrera}</span>
          </h6>
        </div>
        <div className="hobbie">
          <h6>
            Hobbie: <span className="fw-lighter">{hobbie}</span>
          </h6>
        </div>
      </div>
    </>
  );
};

export default Student;
