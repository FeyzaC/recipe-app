import { Link } from "react-router-dom";
import { Nav } from "./Navbar.style";

const Navbar = () => {
  return (
    <Nav justify="space-between">
      <Link to="/">
        <i>{"Feyza"}</i>
        <span>Recipe</span>
      </Link>
      <ul>
        <Link to="/">Home</Link>
        <Link to="about">about</Link>
        <Link to="register">Register</Link>
        <Link to="logout">Logout</Link>
      </ul>
    </Nav>
  );
};

export default Navbar;
