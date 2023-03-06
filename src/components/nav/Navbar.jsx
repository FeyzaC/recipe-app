import { Link } from "react-router-dom";
import { Brand, Menu, Nav } from "./Navbar.style";

const Navbar = () => {
  return (
    <Nav justify="space-between" wrap="wrap">
      <Brand to="/">
        <i>{"Feyza"}</i>
        <span>Recipe</span>
      </Brand>

      <Menu>
        <Link to="/">Home</Link>
        <Link to="about">About</Link>
        <Link to="register">Register</Link>
        <Link to="logout">Logout</Link>
      </Menu>
    </Nav>
  );
};

export default Navbar;
