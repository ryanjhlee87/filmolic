import { useGetActorQuery, useGetMoviesByActorIdQuery } from '../services/tmdb';
import { useParams, Link } from 'react-router-dom';
import { Error, Loading, ActorsMovies } from './';

const Actors = () => {
  const { id } = useParams();
  const { data, error, isFetching, isLoading } = useGetActorQuery(id);
  const { data: movies } = useGetMoviesByActorIdQuery(id);

  if (error) <Error />;
  if (isLoading) <Loading />;
  if (isFetching) <Loading />;

  const slicedMovies = movies?.results.slice(0, 6);

  if (data) {
    return (
      <div className="w-full">
        <h2 className="xs:mx-2 text-2xl uppercase my-8">Actor Details</h2>
        <h2 className="my-8 text-3xl text-center">{data.name}</h2>
        <div className="grid grid-rows-1 gap-8">
          <img
            src={`https://image.tmdb.org/t/p/w500/${data.profile_path}`}
            className="xs:shadow-none xs:px-2 xs:mx-auto rounded-3xl shadow-lg shadow-black mx-auto"
            alt=""
          />

          <div>
            <h2 className="text-2xl text-center">Biography</h2>
            <p className="xs:mx-2 md:text-md lg:text-md max-w-5xl my-8 mx-auto">
              {data?.biography === ''
                ? `Biography for ${data.name} is not available at the moment.`
                : data.biography}
            </p>

            <div className="flex justify-center my-8 gap-1">
              {/* Btns */}
              <Link to="/">
                <button className="btn btn-outline">👈 Back to Movies</button>
              </Link>
              {/* https://www.imdb.com/name/nm0941777/ */}
              <a href={`https://www.imdb.com/name/${data.imdb_id}`}>
                <button className="btn btn-outline btn-info">
                  Find out more on IMDB
                </button>
              </a>
            </div>
          </div>

          <h1 className="text-2xl text-center">
            <span className="text-primary">{data.name}</span>'s Movies
          </h1>

          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-6 my-8 max-w-5xl gap-1 mx-auto">
            {slicedMovies?.map(movie => (
              <ActorsMovies key={movie.id} movie={movie} />
            ))}
          </div>
        </div>
      </div>
    );
  }
};

export default Actors;
