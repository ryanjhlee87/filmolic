import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useGetListQuery, useGetMovieQuery } from '../services/tmdb';
import { useSelector } from 'react-redux';
import { userSelector } from '../features/auth/auth';
import { Error, Loading, Rating, Casts, Trailer } from './';
import { fetchToken } from '../utils';

const MovieDeatils = () => {
  const { id } = useParams();
  const { user } = useSelector(userSelector);

  const [isFavorite, setIsFavorite] = useState(false);
  const [isWatchList, setIsWatchList] = useState(false);

  const { data: favoriteMovies } = useGetListQuery({
    listName: 'favorite/movies',
    accountId: user.id,
    sessionId: localStorage.getItem('session_id'),
  });
  const { data: watchlistMovies } = useGetListQuery({
    listName: 'watchlist/movies',
    accountId: user.id,
    sessionId: localStorage.getItem('session_id'),
  });

  const { data, error, isFetching } = useGetMovieQuery(id);

  useEffect(() => {
    setIsFavorite(
      !!favoriteMovies?.results?.find(movie => movie?.id === data?.id)
    );
  }, [favoriteMovies, data]);

  useEffect(() => {
    setIsWatchList(
      !!watchlistMovies?.results?.find(movie => movie?.id === data?.id)
    );
  }, [watchlistMovies, data]);

  const addToFavorites = async () => {
    await axios.post(
      `https://api.themoviedb.org/3/account/${user.id}/favorite?api_key=${
        process.env.REACT_APP_TMDB_KEY
      }&session_id=${localStorage.getItem('session_id')}`,
      {
        media_type: 'movie',
        media_id: id,
        favorite: !isFavorite,
      }
    );

    setIsFavorite(prev => !prev);
  };

  const addToWatchList = async () => {
    await axios.post(
      `https://api.themoviedb.org/3/account/${user.id}/watchlist?api_key=${
        process.env.REACT_APP_TMDB_KEY
      }&session_id=${localStorage.getItem('session_id')}`,
      {
        media_type: 'movie',
        media_id: id,
        watchlist: !isWatchList,
      }
    );

    setIsWatchList(prev => !prev);
  };

  const favoriteBtnsHandler = () => {
    if (user.id) {
      if (!isFavorite) {
        return (
          <button
            onClick={addToFavorites}
            className="btn btn-outline btn-error"
          >
            ❤️ Add to Favorite
          </button>
        );
      } else {
        return (
          <button onClick={addToFavorites} className="btn btn-error">
            ❤️ Favorited
          </button>
        );
      }
    } else {
      return (
        <button onClick={fetchToken} className="btn btn-outline btn-error">
          Login to add favorite
        </button>
      );
    }
  };

  const watchListBtnsHandler = () => {
    if (user.id) {
      if (!isWatchList) {
        return (
          <button onClick={addToWatchList} className="btn btn-outline btn-info">
            👀 Add to Watchlist
          </button>
        );
      } else {
        return (
          <button onClick={addToWatchList} className="btn btn-info">
            👀 Watchlisted
          </button>
        );
      }
    } else {
      return (
        <button onClick={fetchToken} className="btn btn-outline btn-info">
          👀 Login to Watchlist
        </button>
      );
    }
  };

  if (error) return <Error />;
  if (isFetching) return <Loading />;
  const voteAverage = Math.round(data.vote_average / 2);

  if (data) {
    return (
      <>
        <h2 className="xs:mx-2 text-2xl uppercase my-8">Movie Details</h2>
        <div className="flex flex-col md:max-w-3xl lg:max-w-4xl xl:max-w-5xl mx-auto">
          {data?.backdrop_path === null ? (
            <h2 className="mx-auto text-lg">
              Poster for this movie is not available from server
            </h2>
          ) : (
            <img
              src={`https://image.tmdb.org/t/p/w1280/${data?.backdrop_path}`}
              alt={data.title}
              className="rounded-3xl shadow-lg shadow-black xs:mx-2 md:max-w-2xl lg:max-w-2xl xl:max-w-3xl mx-auto"
            />
          )}
          <div className="flex flex-col px-16 max-w-5xl mx-auto mt-8">
            <h1 className="text-center text-3xl mb-4">{data.title}</h1>
            <h2 className="text-center text-xl italic">{data.tagline}</h2>

            {/* Rating and movie runtime / Language */}
            <div className="xs:flex-col xs:mx-auto flex flex-row justify-around my-8">
              <Rating rating={voteAverage} vote_average={data.vote_average} />
              <div>
                {data.runtime} min / {data.release_date} /{' '}
                {data.spoken_languages[0].name}
              </div>
            </div>

            {/* Btns */}
            <div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-1">
              <Link to="/">
                <button className="btn btn-outline w-full">
                  👈 Back to Movies
                </button>
              </Link>
              <label
                htmlFor="my-modal-4"
                className="btn btn-outline btn-success"
              >
                Watch Video
              </label>
              {favoriteBtnsHandler()}
              {watchListBtnsHandler()}
            </div>

            {/* Trailer Modal / hidden by default */}
            <Trailer youtubeKey={data.videos.results[0]?.key} />

            {/* Overview */}
            <div className="my-8">
              <h2 className="text-2xl mb-8">Overview</h2>
              <p className="text-lg">{data.overview}</p>
            </div>

            {/* Casts */}
            <div>
              <h2 className="text-2xl mb-8">Top cast</h2>
              <Casts casts={data.credits.cast} />
            </div>
          </div>
        </div>
      </>
    );
  }
};

export default MovieDeatils;
