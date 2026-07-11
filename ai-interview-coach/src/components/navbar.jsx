 import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/">Home</Link>

      <Link to="/features">Features</Link>

      <Link to="/interview">Interview</Link>
    </nav>
  );
}

export default Navbar;