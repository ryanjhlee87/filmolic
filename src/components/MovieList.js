import { useSelector } from 'react-redux';
import { useGetMoviesQuery } from '../services/tmdb';
import { Movie, Error, Loading } from './';

const MovieList = () => {
  const { searchTerm, categories, genres, page, categoryOrGenreName } =
    useSelector(state => state.tmdb);

  const { data, error, isLoading } = useGetMoviesQuery({
    categoryOrGenreName,
    searchTerm,
    page,
  });

  if (error) <Error />;
  if (isLoading) <Loading />;

  return (
    <>
      {categories.map(category =>
        categoryOrGenreName === category.value ? (
          <h1 key={category.id} className="text-2xl uppercase mt-8">
            {category.name}
          </h1>
        ) : null
      )}
      {genres.map(genre =>
        categoryOrGenreName === genre.id ? (
          <h1 key={genre.id} className="text-2xl uppercase mt-8">
            {genre.name}
          </h1>
        ) : null
      )}
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 my-8 w-full">
        {data &&
          data.results.map(movie => <Movie key={movie.id} movie={movie} />)}
      </div>
    </>
  );
};

export default MovieList;
