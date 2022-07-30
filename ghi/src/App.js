import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './Homepage.js';
import Footer from './Footer.js';
import NavBar from "./NavBar";
import SignUpForm from './SignUpForm';
import Checkout from './Checkout';
import SubscriptionsPage from "./SubscriptionsPage";
import Things from "./Things";
import Clothing from "./Clothing";
import AboutUs from './AboutUs';
import LoginForm from './LoginForm';
import ReceiptComplete from './ReceiptComplete.js';
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
            <Route path='ReceiptComplete/' element={<ReceiptComplete />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
};