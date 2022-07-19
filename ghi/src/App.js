import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './Homepage.js';
import Footer from './Footer.js';
import './App.css';
import Nav from './Nav.js';
import NavBar from "./NavBar";
import SignUpForm from './SignUpForm';
import './index.css';

export default function App() {
  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='footer' element={<Footer />} />

        </Routes>

        <NavBar />

        <Routes>
          {/* <Route path='/' element={<Homepage />} /> */}
          <Route path='signup/' element={<SignUpForm />} />
        </Routes>
      </div>
    </BrowserRouter>

  );
};