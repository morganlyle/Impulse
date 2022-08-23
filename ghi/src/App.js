import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './storefront/Homepage.js';
import Footer from './helpers/Footer.js';
import NavBar from "./helpers/NavBar";
import SignUpForm from './users/SignUpForm';
import Checkout from './checkout/Checkout';
import Things from "./storefront/Things";
import SubscriptionsPage from "./storefront/SubscriptionsPage";
import Clothing from "./storefront/Clothing";
import AboutUs from './AboutUs';
import LoginForm from './users/LoginForm';
import Receipt from './checkout/Receipt.js';
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
            <Route path='login/' element={<LoginForm />} />
            <Route path='subscriptions/' element={<SubscriptionsPage />} />
            <Route path='aboutus/' element={<AboutUs />} />
            <Route path='things/' element={<Things />} />
            <Route path='login/' element={<LoginForm />} />
            <Route path='clothing/' element={<Clothing />} />
            <Route path='checkout/' element={<Checkout />} />
            <Route path='receipt/' element={<Receipt />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
};