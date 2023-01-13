import { Navbar, MovieList, NotFound } from './components';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <div className="px-20">
        <Navbar />
        <div className="px-10">
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
