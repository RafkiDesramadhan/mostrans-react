import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CharacterDetail from "./components/organisms/CharacterDetail";
import CharacterList from "./components/organisms/CharacterList";
import EpisodeDetail from "./components/organisms/EpisodeDetail";
import EpisodeList from "./components/organisms/EpisodeList";
import LocationDetail from "./components/organisms/LocationDetail";
import LocationList from "./components/organisms/LocationList";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CharacterList />} />
        <Route path="/detail/:id" element={<CharacterDetail />} />
        <Route path="/location" element={<LocationList />} />
        <Route path="/location-detail/:id" element={<LocationDetail />} />
        <Route path="/episode" element={<EpisodeList />} />
        <Route path="/episode-detail/:id" element={<EpisodeDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
