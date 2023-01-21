import { useEffect } from 'react';
import { useGetFavoriteMoviesQuery } from '../services/tmdb';
import { Error, Loading } from './';
import { Link } from 'react-router-dom';

const Favorites = () => {
  const sessionId = localStorage.getItem('session_id');
  const accountId = localStorage.getItem('accountId');

  const {
    data: favoriteMoviesList,
    error,
    isFetching,
    isLoading,
    refetch: refetchFavorite,
  } = useGetFavoriteMoviesQuery(sessionId, accountId);

  useEffect(() => {
    refetchFavorite();
  }, []);

  if (error) <Error />;
  if (isFetching || isLoading) <Loading />;

  if (favoriteMoviesList) {
    return (
      <div className="flex flex-col w-full">
        {favoriteMoviesList?.results.length < 1 ? (
          <h2 className="xs:mx-8">
            Add favorite or watchlist some movies to see them here!
          </h2>
        ) : (
          <>
            {/* Favorite Movies */}
            <div className="xs:mx-8">
              <h2 className="text-3xl my-8">Favorite Movies</h2>
              <>
                {favoriteMoviesList.results.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4 my-8 w-full">
                    {favoriteMoviesList.results.map(movie => (
                      <Link key={movie.id} to={`/movie/${movie.id}`}>
                        <div className="card h-full bg-base-100 hover:scale-105 cursor-pointer transition-transform">
                          <figure>
                            <img
                              src={`https://image.tmdb.org/t/p/w400/${movie.poster_path}`}
                              alt="movie poster"
                              className="rounded-b-xl"
                            />
                          </figure>
                          <p className="text-center py-2 truncate">
                            {movie.title}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                ) : (
                  <h2>favorite movie empty</h2>
                )}
              </>
            </div>
          </>
        )}
      </div>
    );
  }
};

export default Favorites;
