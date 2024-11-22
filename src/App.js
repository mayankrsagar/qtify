import './App.css';

import {
  Route,
  Routes,
} from 'react-router-dom';

import Navbar from './components/Navbar/Navbar.jsx';
import Home from './Pages/Home/Home.jsx';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes >
        <Route path='/' element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
