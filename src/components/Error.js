import { MdError } from 'react-icons/md';
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen pb-20">
      <MdError className="text-7xl text-error" />
      <h1 className="text-xl my-8">Server Error</h1>
      <Link to="/">
        <button className="btn btn-outline btn-error">Back to Movies</button>
      </Link>
    </div>
  );
};

export default Error;
