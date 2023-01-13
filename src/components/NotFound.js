import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen pb-20">
      <h1 className="text-3xl">
        <span className="text-red-500">404</span> Not Found
      </h1>

      <Link to="/">
        <button className="btn btn-outline btn-error mt-8">
          Back to Movies
        </button>
      </Link>
    </div>
  );
};

export default NotFound;
