import { Navbar, MovieList } from './components';
import { Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <div className="px-20">
      <Navbar />
      <div className="px-10">
        <Routes>
          <Route path="/" element={<MovieList />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
