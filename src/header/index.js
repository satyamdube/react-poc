import { NavLink } from 'react-router-dom';
import './header.scss';

const Header = () => {
  return (
    <div className="outerHeader">
        <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact Us</NavLink>
            </li>
        </ul>
    </div>
  );
}

export default Header;