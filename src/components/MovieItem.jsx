import { Link } from "react-router-dom";

function MovieItem({ movie }) {
  return (
    <div className="relative">
      <Link to={`/movie/${movie.id}`}>
        <div>
          <img
            src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
            alt="영화 포스터"
            className="h-[92vh] w-full object-cover"
          />
        </div>

        <div className="absolute w-full bottom-0 text-left px-8 py-10 bg-gradient-to-t from-black to-transparent">
          <h5 className="text-3xl">{movie.title}</h5>
          <p className="mt-2 mb-3 flex items-center gap-3">
            {movie.release_date} / ⭐️ {movie.vote_average}
          </p>

          <p className="w-[70%]">{movie.overview}</p>
        </div>
      </Link>
    </div>
  );
}

export default MovieItem;
