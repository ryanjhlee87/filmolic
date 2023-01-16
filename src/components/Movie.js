const Movie = ({ movie: { title, poster_path } }) => {
  // Some of the images not available from tmdb website
  if (poster_path === null) {
    return null;
  }

  // Rendering all the movies with poster
  return (
    <div className="card h-full bg-base-100 hover:scale-105 cursor-pointer transition-transform">
      <figure>
        <img
          src={`https://image.tmdb.org/t/p/w400/${poster_path}`}
          alt="movie poster"
          className="rounded-b-xl"
        />
      </figure>
      <p className="text-center py-2 truncate">{title}</p>
    </div>
  );
};

export default Movie;
