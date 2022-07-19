import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
import SignUpForm from './SignUpForm';
import SubscriptionsPage from "./SubscriptionsPage";
import './index.css';

export default function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <div className="container">
          <Routes>
            {/* <Route path='/' element={<Homepage />} /> */}
            <Route path='signup/' element={<SignUpForm />} />
            <Route path='subscriptions/' element={<SubscriptionsPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
};