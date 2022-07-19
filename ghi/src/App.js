import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './Homepage.js';
import Footer from './Footer.js';
<<<<<<< HEAD
import './App.css';
import Nav from './Nav.js';
=======
>>>>>>> main
import NavBar from "./NavBar";
import SignUpForm from './SignUpForm';
import SubscriptionsPage from "./SubscriptionsPage";
import AboutUs from './AboutUs';

import './index.css';

export default function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <div className="container">
          <Routes>
            <Route path='/' element={<Homepage />} />
            <Route path='signup/' element={<SignUpForm />} />
            <Route path='subscriptions/' element={<SubscriptionsPage />} />
            <Route path='aboutus/' element={<AboutUs />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
};