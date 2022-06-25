import logo from '../logo.svg';
import '../index.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="navbar">
      <ul className="header">
        <li>
          <img src={logo}></img>
        </li>
        <li className="logo">
          <h2>Awesome react blog!</h2>
          <p>Simple blog based on The Net Ninja tutorial series.</p>
        </li>
      </ul>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/create" className='special'>Add blog</Link>
      </div>
    </div>
  );
}
 
export default Navbar;