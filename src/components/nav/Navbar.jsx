import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <a to="/">
        <i>{"Feyza"}</i>
        <span>Recipe</span>
      </a>
      <ul>
        <Link to="/">Home</Link>
        <Link to="about">about</Link>
        <Link to="register">Register</Link>
        <Link to="logout">Logout</Link>
      </ul>
    </div>
  );
};

export default Navbar;
