import { Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png"

const Header = () => {
  return (
    <>
      <Navbar bg="primary" variant="dark" style={{ height: "3rem" }} className="fixed-top">
        <Container>
          <Link to="/" style={{ textDecoration: "none" }}>
            <img src={logo} alt="logo" style={{ maxWidth: 40 }} />
            <Navbar.Brand>  Mis videos favoritos</Navbar.Brand>
          </Link>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
