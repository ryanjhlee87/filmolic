import React from 'react';

// Search input in dropdown menu -> CategoryGenre.js
const Search = () => {
  return (
    <form className="form-control py-2" onSubmit={e => e.preventDefault()}>
      <div className="input-group input-group-sm">
        <input
          type="text"
          placeholder="Search…"
          className="input input-bordered w-36"
        />
        <button className="btn btn-square">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
      </div>
    </form>
  );
};

export default Search;
