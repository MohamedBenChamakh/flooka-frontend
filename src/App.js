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
          <Route index element={<Live />} />
          <Route path="/live/:id" element={<Stream />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
