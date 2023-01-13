import { Navbar, MovieList, NotFound } from './components';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <div className="sm:px-16 md:px-24 lg:px-48 xl:px-56">
        <Navbar />
        <div className="px-5">
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
