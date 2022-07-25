import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './Homepage.js';
import Footer from './Footer.js';
import NavBar from "./NavBar";
import SignUpForm from './SignUpForm';
import Checkout from './Checkout';
import SubscriptionsPage from "./SubscriptionsPage";
import AboutUs from './AboutUs';
import LoginForm from './LoginForm';
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
            <Route path='login/' element={<LoginForm />} />
            <Route path='checkout/' element={<Checkout />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
};