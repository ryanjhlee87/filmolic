import { Link } from 'react-router-dom';

const ActorsMovies = ({ movie: { poster_path, title, id } }) => {
  if (poster_path === null) {
    return null;
  }

  return (
    <Link to={`/movie/${id}`}>
      <div className="flex shrink card bg-base-100 hover:scale-105 cursor-pointer transition-transform mb-8">
        <figure>
          <img
            src={`https://image.tmdb.org/t/p/w300/${poster_path}`}
            alt="movie poster"
            className="rounded-xl lg:w-24 xl:w-36"
          />
        </figure>
        <p className="mx-auto text-md pt-2 truncate">{title}</p>
      </div>
    </Link>
  );
};

export default ActorsMovies;
