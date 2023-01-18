import { BsPersonFill } from 'react-icons/bs';
import { fetchToken, createSessionId, moviesApi } from '../utils/index.js';
import { useSelector, useDispatch } from 'react-redux';
import { userSelector } from '../features/auth/auth';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { setUser } from '../features/auth/auth';

const LoginLogout = () => {
  const token = localStorage.getItem('request_token');
  const sessionIdFromLocalStorage = localStorage.getItem('session_id');

  const dispatch = useDispatch();

  useEffect(() => {
    const loginUser = async () => {
      if (token) {
        if (sessionIdFromLocalStorage) {
          const { data: userData } = await moviesApi.get(
            `/account?session_id=${sessionIdFromLocalStorage}`
          );
          dispatch(setUser(userData));
        } else {
          const sessionId = await createSessionId();
          const { data: userData } = await moviesApi.get(
            `/account?session_id=${sessionId}`
          );

          dispatch(setUser(userData));
        }
      }
    };

    loginUser();
  }, [token]);

  const { isAuthenticated, user } = useSelector(userSelector);

  if (isAuthenticated && user) {
    return (
      <div className="dropdown dropdown-end">
        <label tabIndex={0} className="btn btn-ghost rounded-btn">
          {user.username}
        </label>
        <ul
          tabIndex={0}
          className="menu dropdown-content p-2 shadow bg-base-100 rounded-box w-52 mt-4"
        >
          <li>
            <Link to="/profile/:id">Profile</Link>
          </li>
          <li>
            <Link to="/">Log Out</Link>
          </li>
        </ul>
      </div>
    );
  }

  return (
    <button className="btn btn-ghost btn-circle">
      <BsPersonFill className="text-lg" onClick={fetchToken} />
    </button>
  );
};

export default LoginLogout;
