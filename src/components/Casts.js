import { Cast } from './';

const Casts = ({ casts }) => {
  // Get first 6 actors from casts array
  const slicedCasts = casts.slice(0, 6);

  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-6">
      {slicedCasts.map(cast => (
        <Cast key={cast.cast_id} cast={cast} />
      ))}
    </div>
  );
};

export default Casts;
