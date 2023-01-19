import { Link, useParams } from 'react-router-dom';
import { useGetMovieQuery } from '../services/tmdb';
import { Error, Loading, Rating, Casts } from './';

const MovieDeatils = () => {
  const { id } = useParams();

  const { data, error, isFetching } = useGetMovieQuery(id);

  if (error) return <Error />;
  if (isFetching) return <Loading />;
  const voteAverage = Math.round(data.vote_average / 2);

  return (
    <>
      <h2 className="xs:mx-2 text-2xl uppercase my-8">Movie Details</h2>
      <div className="flex flex-col md:max-w-3xl lg:max-w-4xl xl:max-w-5xl mx-auto">
        <img
          src={`https://image.tmdb.org/t/p/w1280/${data?.backdrop_path}`}
          alt={data.title}
          className="rounded-3xl shadow-lg shadow-black xs:mx-2 md:max-w-2xl lg:max-w-2xl xl:max-w-3xl mx-auto"
        />
        <div className="flex flex-col px-16 max-w-5xl mx-auto mt-8">
          <h1 className="text-center text-3xl mb-4">{data.title}</h1>
          <h2 className="text-center text-xl italic">{data.tagline}</h2>

          {/* Rating and movie runtime / Language */}
          <div className="xs:flex-col xs:mx-auto flex flex-row justify-around my-8">
            <Rating rating={voteAverage} vote_average={data.vote_average} />
            <div>
              {data.runtime} min / {data.release_date} /{' '}
              {data.spoken_languages[0].name}
            </div>
          </div>

          {/* Btns */}
          <div className="grid grid-cols-3 xs:grid-cols-1 gap-1">
            <Link to="/">
              <button className="btn btn-outline w-full">
                👈 Back to Movies
              </button>
            </Link>
            <button className="btn btn-outline btn-error">
              ❤️ Add to Favorite
            </button>
            <button className="btn btn-outline btn-info">
              👀 Add to Watchlist
            </button>
          </div>

          {/* Overview */}
          <div className="my-8">
            <h2 className="text-2xl mb-8">Overview</h2>
            <p className="text-lg">{data.overview}</p>
          </div>

          {/* Casts */}
          <div>
            <h2 className="text-2xl mb-8">Top cast</h2>
            <Casts casts={data.credits.cast} />
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieDeatils;
