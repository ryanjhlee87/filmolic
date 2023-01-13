import { useGetPopularMoviesQuery } from '../services/tmdb';
import { Movie, Error, Loading } from './';

const MovieList = () => {
  const { data, error, isLoading } = useGetPopularMoviesQuery();

  if (error) <Error />;
  if (isLoading) <Loading />;

  return (
    <div>
      {data &&
        data.results.map(movie => <Movie key={movie.id} movie={movie} />)}
    </div>
  );
};

export default MovieList;
