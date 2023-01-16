import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Search } from './';
import { selectCategoryOrGenre } from '../features/tmdb/tmdbSlice';

const CategoryGenre = () => {
  const categories = useSelector(state => state.tmdb.categories);
  const genres = useSelector(state => state.tmdb.genres);

  const dispatch = useDispatch();

  return (
    <>
      <ul
        tabIndex={0}
        className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
      >
        <Search />

        <hr className="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700" />

        {categories &&
          categories.map(category => (
            <li
              key={category.id}
              onClick={() => dispatch(selectCategoryOrGenre(category.value))}
            >
              <Link to="/">{category.name}</Link>
            </li>
          ))}

        <hr className="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700" />

        {genres &&
          genres.map(genre => (
            <li key={genre.id}>
              <Link
                to="/"
                onClick={() => dispatch(selectCategoryOrGenre(genre.id))}
              >
                {genre.name}
              </Link>
            </li>
          ))}
      </ul>
    </>
  );
};

export default CategoryGenre;
