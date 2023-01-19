import { useSelector } from 'react-redux';
import { userSelector } from '../features/auth/auth';
import { useGetFavoriteMoviesQuery } from '../services/tmdb';

const Profile = () => {
  // Get access to profile name or id from redux
  const { user } = useSelector(userSelector);

  const favoriteMovies = [];
  const watchList = [];

  const sessionId = localStorage.getItem('session_id');
  const accountId = localStorage.getItem('accountId');
  const { data: favoriteMoviesList } = useGetFavoriteMoviesQuery(
    sessionId,
    accountId
  );

  // Favorite Movies
  console.log(favoriteMoviesList);

  return (
    <div className="flex flex-col w-full">
      <h1 className="xs:text-center text-2xl uppercase my-8">My profile</h1>

      {favoriteMovies.length < 1 && watchList.length < 1 ? (
        <h2 className="xs:mx-8">
          Add favorite or watchlist some movies to see them here!
        </h2>
      ) : (
        <>
          {/* Favorite Movies */}
          <div className="xs:mx-8">
            {favoriteMovies.length > 0 ? (
              <h2>there is favorite</h2>
            ) : (
              <h2>favorite movie empty</h2>
            )}
          </div>

          {/* Watch list */}
          <div>
            {watchList.length > 0 ? (
              <h2>there is watchlist</h2>
            ) : (
              <h2>watchlist empty</h2>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default Profile;
