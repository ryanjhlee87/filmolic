import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-screen flex justify-center">
      <div className="flex flex-col items-center justify-center mb-80">
        <h1 className="text-3xl">
          <span className="text-red-500">404</span> Not Found
        </h1>

        <Link to="/">
          <button className="btn btn-outline btn-error mt-8">
            Back to Movies
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
