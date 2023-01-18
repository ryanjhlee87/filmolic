import {
  Navbar,
  MovieList,
  MovieDeatils,
  Actors,
  Profile,
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
            <Route exact path="/profile/:id" element={<Profile />} />
            <Route exact path="/approved" element={<MovieList />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
