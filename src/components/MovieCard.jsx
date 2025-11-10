import { useEffect, useState } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Link } from "react-router-dom";

function MovieCard({ movie }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(t);
  }, []);

  return (
    <div>
      {loading ? (
        <div className="relative inline-block rounded-[10px] overflow-hidden m-[0.19rem] cursor-pointer min-w-[200px] h-[300px] border border-neutral-600">
          <SkeletonTheme baseColor="#202020" highlightColor="#444">
            <Skeleton height={300} duration={2} />
          </SkeletonTheme>
        </div>
      ) : (
        <Link to={`/movie/${movie.id}`}>
          <div className="group relative inline-block rounded-[10px] overflow-hidden m-[0.19rem] cursor-pointer min-w-[200px] h-[300px] border border-neutral-600 transition-transform duration-200 hover:scale-120 hover:z-[1000] hover:shadow-[0_54px_55px_rgba(0,0,0,0.25),0_-12px_30px_rgba(0,0,0,0.12),0_4px_6px_rgba(0,0,0,0.12),0_12px_13px_rgba(0,0,0,0.17),0_-3px_5px_rgba(0,0,0,0.09)]">
            <img
              src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
              alt={movie.title || "영화 포스터"}
              className="h-[300px] w-full object-cover"
              loading="lazy"
            />

            <div className="absolute bottom-0 w-full px-4 pt-0 pb-4 h-[290px] flex flex-col justify-end bg-gradient-to-t from-black to-transparent opacity-0 transition-opacity duration-200 group-hover:opacity-100 text-white">
              <h4 className="font-black text-base mb-1">
                {movie.original_title || movie.title}
              </h4>

              <h5 className="flex items-center gap-1.5 text-xs mb-1">
                {movie.release_date} / ⭐️ {movie.vote_average}
              </h5>

              <p className="text-xs italic w-[85%] mb-1">
                {(movie.overview ?? "").slice(0, 50) +
                  (movie.overview ? "..." : "")}
              </p>
            </div>
          </div>
        </Link>
      )}
    </div>
  );
}

export default MovieCard;
