import { useSelector } from 'react-redux';
import { useGetMoviesQuery } from '../services/tmdb';
import { Movie, Error, Loading, Search } from './';

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
    <div className="xs:mx-8">
      <div className="flex justify-between">
        {/* Showing category || genre || search results */}
        {searchTerm ? (
          <h1 className="xs:text-center sm:text-center md:text-left text-2xl uppercase mt-8">
            {searchTerm} Movies
          </h1>
        ) : (
          <>
            {categories.map(category =>
              categoryOrGenreName === category.value ? (
                <h1
                  key={category.id}
                  className="sm:pl-2 text-2xl uppercase mt-8"
                >
                  {category.name}
                </h1>
              ) : null
            )}
            {genres.map(genre =>
              categoryOrGenreName === genre.id ? (
                <h1 key={genre.id} className="sm:pl-2 text-2xl uppercase mt-8">
                  {genre.name}
                </h1>
              ) : null
            )}
          </>
        )}

        <Search />
      </div>

      {/* Actual movie list */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 my-8 w-full">
        {data &&
          data.results.map(movie => <Movie key={movie.id} movie={movie} />)}
      </div>
    </div>
  );
};

export default MovieList;
