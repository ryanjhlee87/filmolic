import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectCategoryOrGenre } from '../features/tmdb/tmdbSlice';

const CategoryGenre = () => {
  const categories = useSelector(state => state.tmdb.categories);
  const genres = useSelector(state => state.tmdb.genres);
  const categoryOrGenreName = useSelector(
    state => state.tmdb.categoryOrGenreName
  );
  const searchTerm = useSelector(state => state.tmdb.searchTerm);

  const dispatch = useDispatch();

  return (
    <>
      <ul
        tabIndex={0}
        className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 py-4"
      >
        {/* Categories */}
        {categories &&
          categories.map(category => (
            <li key={category.id}>
              <Link
                to="/"
                className={
                  !searchTerm && categoryOrGenreName === category.value
                    ? 'active'
                    : null
                }
                onClick={() => dispatch(selectCategoryOrGenre(category.value))}
              >
                {category.icon}
                {category.name}
              </Link>
            </li>
          ))}

        <hr className="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700" />

        {/* Genres */}
        {genres &&
          genres.map(genre => (
            <li key={genre.id}>
              <Link
                to="/"
                className={
                  !searchTerm && categoryOrGenreName === genre.id
                    ? 'active'
                    : null
                }
                onClick={() => dispatch(selectCategoryOrGenre(genre.id))}
              >
                {genre.icon}
                {genre.name}
              </Link>
            </li>
          ))}
      </ul>
    </>
  );
};

export default CategoryGenre;
