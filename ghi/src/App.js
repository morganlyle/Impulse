import { BrowserRouter, Routes } from "react-router-dom";
import NavBar from "./NavBar";
import './index.css';

function App() {
  return (
    <>
      <BrowserRouter>
      <NavBar />
        <div className="container">
          <Routes>
            {/* <Route path='/' element={<Homepage />} /> */}
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
