import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Sliders from './pages/sliders/Sliders';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Sliders />} />
      </Routes>
    </Router>
  );
}

export default App;
