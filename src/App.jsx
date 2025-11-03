import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Moive from "./pages/Movie";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index element={<Home />}></Route>
        <Route path="movie" element={<Moive />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
