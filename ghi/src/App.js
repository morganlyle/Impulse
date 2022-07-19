import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomePage from './Homepage.js';
import Footer from './Footer.js';
import './App.css';
import NavBar from "./NavBar";
import SignUpForm from './SignUpForm';
import './index.css';

export default function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <div className="container">
        <Routes>
          <Route path='/' element={<HomePage />} />


        </Routes>


        <Routes>
          {/* <Route path='/' element={<Homepage />} /> */}
          <Route path='signup/' element={<SignUpForm />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>

  );
};