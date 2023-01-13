import React from 'react';

const Movie = ({ movie: { title, poster_path } }) => {
  return (
    <div className="card bg-base-100 shadow-sm hover:scale-105 cursor-pointer transition-transform">
      <figure>
        <img src={`https://image.tmdb.org/t/p/w400/${poster_path}`} alt="" />
      </figure>
      <p className="text-center">{title}</p>
    </div>
  );
};

export default Movie;
