import { Cast } from './';

const Casts = ({ casts }) => {
  // Get first 6 actors from casts array
  const slicedCasts = casts.slice(0, 6);

  return (
    <div className="flex xs:flex-col sm:flex-col md:flex-row justify-around px-2">
      {slicedCasts.map(cast => (
        <Cast key={cast.cast_id} cast={cast} />
      ))}
    </div>
  );
};

export default Casts;
