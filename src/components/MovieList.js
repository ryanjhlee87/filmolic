import { useGetPopularMoviesQuery } from '../services/tmdb';
import { Movie, Error, Loading } from './';

const MovieList = () => {
  const { data, error, isLoading } = useGetPopularMoviesQuery();

  if (error) <Error />;
  if (isLoading) <Loading />;

  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 my-8 w-full">
      {data &&
        data.results.map(movie => <Movie key={movie.id} movie={movie} />)}
    </div>
  );
};

export default MovieList;
