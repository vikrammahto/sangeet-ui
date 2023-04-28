import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AlbumCard from './components/AlbumCard';
import Player from './components/Player';
import SongCard from './components/SongCard';

function App() {
  return (
    <div className="container">
      <Router>
        <Routes>
          <Route exact path="/" element={<AlbumCard />} />
          <Route exact path="/songs/:albumId" element={<SongCard />} />
          <Route exact path="/songs/:albumId/:songId" element={<Player />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
