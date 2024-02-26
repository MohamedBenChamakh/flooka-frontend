import Live from './pages/live/live';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Layout from './components/layout/layout';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Live />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
