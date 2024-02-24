import Home from './pages/home/home';
import Vod from './pages/vod/vod';
import Live from './pages/live/live';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Layout from './components/layout/layout';
import Stream from './pages/stream/stream';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="vod" element={<Vod />} />
          <Route path="live" element={<Live />} />
          <Route path="stream/:id" element={<Stream />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
