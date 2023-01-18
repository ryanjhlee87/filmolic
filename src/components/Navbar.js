import { BsSunFill, BsMoonFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from '../features/theme/themeSlice';
import { themeChange } from 'theme-change';
import { useEffect } from 'react';
import CategoryGenre from './CategoryGenre';
import { selectCategoryOrGenre } from '../features/tmdb/tmdbSlice';
import { LoginLogout } from './';

const Navbar = () => {
  const theme = useSelector(state => state.theme.isDarkmode);
  const dispatch = useDispatch();

  useEffect(() => {
    themeChange(theme);
  }, []);

  return (
    <div className="navbar bg-base-300 sm:px-16 md:px-24 lg:px-48 xl:px-56 py-8 w-full">
      {/* Dropdown menu icon */}
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

          {/* Dropdown items */}
          <CategoryGenre />
        </div>
      </div>

      {/* Logo */}
      <div className="navbar-center">
        <Link
          to="/"
          className="btn btn-ghost normal-case text-2xl sm:text-2xl lg:text-3xl xl:text-4xl"
          style={{ fontFamily: 'Dancing Script' }}
          onClick={() => selectCategoryOrGenre('popular')}
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
        <LoginLogout />
      </div>
    </div>
  );
};

export default Navbar;
