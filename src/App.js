import { Navbar, MovieList, NotFound } from './components';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="sm:px-16 md:px-24 lg:px-48 xl:px-56">
        <div>
          <Routes>
            <Route exact path="/" element={<MovieList />} />
            <Route exact path={'*'} element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
