import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="topnav">
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/HelloHooks'>HelloHooks</Link>
        </li>
        <li>
          <Link to='/Count'>Count</Link>
        </li>
        <li>
          <Link to='/UpdateObject'>UpdateObject</Link>
        </li>
        <li>
          <Link to='/Quiz1'>Quiz1</Link>
        </li>
        <li>
          <Link to='/Quiz2'>Quiz2</Link>
        </li>
        <li>
          <Link to='/Quiz3'>Quiz3</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
