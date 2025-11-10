import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import MovieDetail from "./pages/MovieDetail";
import Movies from "./pages/Movies";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index element={<Home />}></Route>
        <Route path="movies/:type" element={<Movies />}></Route>
        <Route path="movie/:id" element={<MovieDetail />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
