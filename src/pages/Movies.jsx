import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Movies() {
  const [movies, setMovies] = useState([]);

  const params = useParams();

  useEffect(() => {
    console.log(params.type);
    fetch(
      `https://api.themoviedb.org/3/movie/${params.type}?language=ko-KR&api_key=ac770053b0b8a5509c03c3d6e2110597`
    )
      .then((res) => res.json())
      .then((res) => {
        setMovies(res.results);
      });
  }, [params.type]);

  return (
    <>
      <h1>서브 페이지</h1>
      {movies.map((row) => (
        <li>{row.title}</li>
      ))}
    </>
  );
}

export default Movies;
