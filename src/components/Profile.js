import { useSelector } from 'react-redux';
import { userSelector } from '../features/auth/auth';

const Profile = () => {
  // Get access to profile name or id from redux
  const { user } = useSelector(userSelector);

  const favoriteMovies = [];
  const watchList = [];

  return (
    <div className="flex flex-col w-full">
      <h1 className="text-2xl uppercase my-8">My profile</h1>

      {favoriteMovies.length < 1 && watchList.length < 1 ? (
        <h2>Add favorite or watchlist some movies to see them here!</h2>
      ) : (
        <>
          {/* Favorite Movies */}
          <div>
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
