import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
// import Nav from './Nav';
import SignUpForm from './SignUpForm';
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
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
};