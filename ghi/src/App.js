import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './Homepage.js';
import Footer from './Footer.js';
import './App.css';
import Nav from './Nav.js';

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='footer' element={<Footer />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
