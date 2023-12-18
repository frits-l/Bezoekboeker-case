// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import Reserve from "./Pages/Reserve/Reserve";
// import SplashScreen from "./Components/SplashScreen/SplashScreen";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        {/* Route Configuration */}

        {/* <nav>
          <Link to="/">Home</Link> |<Link to="/complete">Complete</Link>
        </nav> */}
        <Routes>
          <Route path="/complete" element={<h1>complete</h1>} />
          <Route path="*" element={<Reserve />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
