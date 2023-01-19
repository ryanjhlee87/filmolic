const Rating = ({ rating, vote_average }) => {
  return (
    <div className="rating rating-md">
      <input
        type="radio"
        name="rating-3"
        className="mask mask-star bg-yellow-400"
        checked={rating <= 1 ? true : false}
        readOnly
      />
      <input
        type="radio"
        name="rating-3"
        className="mask mask-star bg-yellow-400"
        checked={rating === 2 ? true : false}
        readOnly
      />
      <input
        type="radio"
        name="rating-3"
        className="mask mask-star bg-yellow-400"
        checked={rating === 3 ? true : false}
        readOnly
      />
      <input
        type="radio"
        name="rating-3"
        className="mask mask-star bg-yellow-400"
        checked={rating === 4 ? true : false}
        readOnly
      />
      <input
        type="radio"
        name="rating-3"
        className="mask mask-star bg-yellow-400"
        checked={rating === 5 ? true : false}
        readOnly
      />
      &nbsp; &nbsp;
      <h2>{vote_average} / 10</h2>
    </div>
  );
};

export default Rating;
