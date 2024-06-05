import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <Link to="/">
        <h1>POKEMON</h1>
      </Link>

      <Link to="/pokemon">ADD</Link>
    </nav>
  );
}

export default Navbar;
