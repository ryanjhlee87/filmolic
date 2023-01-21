import {
  Navbar,
  MovieList,
  MovieDeatils,
  Actors,
  Favorites,
  WatchLists,
  NotFound,
} from './components';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="sm:px-16 md:px-24 lg:px-48 xl:px-56">
        <div>
          <Routes>
            <Route exact path="/" element={<MovieList />} />
            <Route exact path="/movie/:id" element={<MovieDeatils />} />
            <Route exact path="/actors/:id" element={<Actors />} />
            <Route
              exact
              path="/profile/:id/favorites"
              element={<Favorites />}
            />
            <Route
              exact
              path="/profile/:id/watchlists"
              element={<WatchLists />}
            />
            <Route exact path="/approved" element={<MovieList />} />
            <Route path={'*'} element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
