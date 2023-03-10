import { Link } from 'react-router-dom';

const Cast = ({ cast: { profile_path, name, character, id } }) => {
  if (profile_path === null) {
    return null;
  }

  return (
    <Link to={`/actors/${id}`}>
      <div className="flex shrink card bg-base-100 hover:scale-105 cursor-pointer transition-transform mb-8">
        <figure>
          <img
            src={`https://image.tmdb.org/t/p/w300/${profile_path}`}
            alt="movie poster"
            className="rounded-xl lg:w-24 xl:w-36"
          />
        </figure>
        <p className="mx-auto text-md pt-2 truncate">{name}</p>
        <p className="mx-auto text-sm text-primary italic">{character}</p>
      </div>
    </Link>
  );
};

export default Cast;
