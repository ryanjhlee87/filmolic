import { useSelector } from 'react-redux';
import { userSelector } from '../features/auth/auth';
import {
  useGetFavoriteMoviesQuery,
  useGetWatchlistQuery,
} from '../services/tmdb';
import { Error, Loading } from './';
import { Link } from 'react-router-dom';

const Profile = () => {
  // Get access to profile name or id from redux
  const { user } = useSelector(userSelector);

  const sessionId = localStorage.getItem('session_id');
  const accountId = localStorage.getItem('accountId');
  const {
    data: favoriteMoviesList,
    error,
    isFetching,
    isLoading,
  } = useGetFavoriteMoviesQuery(sessionId, accountId);
  const { data: watchList } = useGetWatchlistQuery(sessionId, accountId);

  if (error) <Error />;
  if (isFetching || isLoading) <Loading />;

  if (favoriteMoviesList && watchList) {
    return (
      <div className="flex flex-col w-full">
        <h1 className="xs:text-center text-2xl uppercase my-8">My profile</h1>

        {favoriteMoviesList?.results.length < 1 && watchList.length < 1 ? (
          <h2 className="xs:mx-8">
            Add favorite or watchlist some movies to see them here!
          </h2>
        ) : (
          <>
            {/* Favorite Movies */}
            <div className="xs:mx-8">
              <h2 className="text-2xl">Favorite Movies</h2>
              <div className="my-8">
                {favoriteMoviesList.results.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4 my-8 w-full">
                    {favoriteMoviesList.results.map(movie => (
                      <Link to={`/movie/${movie.id}`}>
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
              </div>
            </div>

            {/* Watch list */}
            <div>
              <h2 className="text-2xl">Watchlist</h2>
              <div className="my-8">
                {watchList.results.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4 my-8 w-full">
                    {watchList.results.map(movie => (
                      <Link to={`/movie/${movie.id}`}>
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
                  <h2>watchlist empty</h2>
                )}
              </div>
            </div>
          </>
        )}
      </div>
    );
  }
};

export default Profile;
