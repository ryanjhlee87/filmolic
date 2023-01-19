import React from 'react';

const Cast = ({ cast: { profile_path, name, character, cast_id } }) => {
  return (
    <div className="card bg-base-100 hover:scale-105 cursor-pointer transition-transform mb-8">
      <figure>
        <img
          src={`https://image.tmdb.org/t/p/w300/${profile_path}`}
          alt="movie poster"
          className="rounded-xl md:w-24 lg:w-24 xl:w-36"
        />
      </figure>
      <p className="mx-auto text-md pt-2 truncate">{name}</p>
      <p className="mx-auto text-sm text-primary italic">{character}</p>
    </div>
  );
};

export default Cast;
