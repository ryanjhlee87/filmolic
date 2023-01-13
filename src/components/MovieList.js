import { useGetPopularMoviesQuery } from '../services/tmdb';
import { Movie } from './';

const MovieList = () => {
  const { data, error, isLoading } = useGetPopularMoviesQuery();

  return (
    <div>
      <h1>what</h1>
    </div>
  );
};

export default MovieList;
