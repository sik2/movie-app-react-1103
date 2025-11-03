import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Moive from "./pages/Movie";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />}></Route>
        <Route path="movie" element={<Moive />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
