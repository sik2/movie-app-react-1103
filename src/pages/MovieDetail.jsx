import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function MovieDetail() {
  const [movie, setMovie] = useState(null);
  const param = useParams();

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${param.id}?language=ko-KR&api_key=${
        import.meta.env.VITE_APP_MOVIE_API_KEY
      }`
    )
      .then((res) => res.json())
      .then((data) => setMovie(data))
      .catch(() => setMovie(null));
  }, [param.id]);

  if (!movie) return null;

  return (
    <div className="relative w-full flex flex-col items-center">
      {/* 상단 백드롭 */}
      <div className="w-4/5">
        <div className="backdrop">
          <img
            src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
            alt="영화 포스트 사진"
            className="w-full h-[500px] object-cover object-[0_35%]"
          />
        </div>
      </div>

      {/* 본문 */}
      <div className="relative flex w-3/4 items-center -top-[225px]">
        {/* 좌측 포스터 */}
        <div className="ml-[30px]">
          <div className="poster">
            <img
              src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
              alt="영화 포스트 사진"
              className="w-[300px] rounded-lg shadow-2xl"
            />
          </div>
        </div>

        {/* 우측 정보 */}
        <div className="flex-1 px-8">
          <div className="mb-6">
            <h5 className="text-5xl font-semibold mb-4">
              {movie.original_title}
            </h5>

            <p className="flex items-center gap-2 mb-2">
              <span className="flex items-center gap-1">
                ⭐️ {movie.vote_average}
              </span>
              <span className="opacity-60">/</span>
              <span className="flex items-center gap-1">
                {movie.runtime} mins
              </span>
            </p>

            {/* 태그라인 (비어있을 수 있음) */}
            {movie.tagline ? (
              <p className="italic text-gray-300 mb-4">{movie.tagline}</p>
            ) : null}

            {/* 장르 */}
            <div className="flex gap-4 my-5 flex-wrap">
              {movie.genres?.map((genre) => (
                <p
                  key={genre.id}
                  className="px-3 py-2 border-2 border-white rounded-full text-sm"
                >
                  {genre.name}
                </p>
              ))}
            </div>
          </div>

          {/* 소개글 */}
          <div className="my-10">
            <h5 className="text-[1.6rem] mb-6 font-semibold">소개글</h5>
            <p className="leading-relaxed opacity-90">{movie.overview}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieDetail;
