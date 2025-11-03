import { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?language=ko-KR&api_key=ac770053b0b8a5509c03c3d6e2110597"
    )
      .then((res) => res.json())
      .then((res) => {
        setMovies(res.results);
      });
  }, []);

  return (
    <>
      <Carousel
        showThumbs
        autoPlay
        infiniteLoop
        showStatus={false}
        transitionTime={3}
      >
        {movies.map((movie) => (
          <img
            src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
            alt="영화 포스터"
          />
        ))}
      </Carousel>
    </>
  );
}

export default Home;
