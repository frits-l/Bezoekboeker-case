import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import Reserve from "./Pages/Reserve/Reserve";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/complete" element={<h1>complete</h1>} />
          <Route path="*" element={<Reserve />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
