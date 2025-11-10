import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieCard from "../components/MovieCard";
import SearchBox from "../components/SearchBox";

function MovieList() {
  const [movies, setMovies] = useState([]);

  // 검색
  const [keyword, setKeyword] = useState("");
  const onChangeKeyword = (e) => setKeyword(e.target.value);

  const params = useParams();

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${
        params.type ? params.type : "popular"
      }?language=ko-KR&api_key=ac770053b0b8a5509c03c3d6e2110597`
    )
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
        setKeyword("");
      });
  }, [params.type]);

  // (선택) 카테고리 제목 매핑
  const titleMap = {
    popular: "인기 영화",
    top_rated: "별점 높은 영화",
    upcoming: "개봉 예정작",
    now_playing: "현재 상영작",
  };
  const pageTitle = titleMap[params.type] ?? "인기 영화";

  return (
    <div className="px-12 pb-12">
      <SearchBox keyword={keyword} onChangeKeyword={onChangeKeyword} />
      <h2 className="text-[1.75rem] m-10">{pageTitle}</h2>

      <div className="flex flex-wrap w-full justify-center">
        {movies
          .filter(
            (movie) =>
              movie.original_title
                ?.toLowerCase()
                .includes(keyword.toLowerCase()) ||
              movie.title?.toLowerCase().includes(keyword.toLowerCase())
          )
          .map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
      </div>
    </div>
  );
}

export default MovieList;
