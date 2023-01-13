import { BsSunFill, BsPersonFill, BsMoonFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from '../features/theme/themeSlice';
import { themeChange } from 'theme-change';
import { useEffect } from 'react';

const Navbar = () => {
  const theme = useSelector(state => state.theme.isDarkmode);
  const dispatch = useDispatch();

  useEffect(() => {
    themeChange(theme);
  }, []);

  return (
    <div className="navbar bg-base-100">
      {/* Left Side of Navbar */}
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to="/">Homepage</Link>
            </li>
            <li>
              <Link to="/">Portfolio</Link>
            </li>
            <li>
              <Link to="/">About</Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Logo */}
      <div className="navbar-center">
        <Link
          to="/"
          className="btn btn-ghost normal-case text-3xl"
          style={{ fontFamily: 'Dancing Script' }}
        >
          Filmolic
        </Link>
      </div>

      {/* Right Side of Navbar */}
      <div className="navbar-end">
        <button
          onClick={() => dispatch(toggleTheme())}
          data-set-theme={theme ? 'dark' : 'cupcake'}
          data-act-class="ACTIVECLASS"
          className="btn btn-ghost btn-circle"
        >
          {theme ? <BsSunFill /> : <BsMoonFill />}
        </button>
        <button className="btn btn-ghost btn-circle">
          <BsPersonFill />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
