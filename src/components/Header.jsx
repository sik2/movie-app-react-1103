import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="flex justify-between items-center mx-10 py-2">
      <div className="flex items-center gap-12 text-2xl">
        <Link to="/">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/500px-IMDB_Logo_2016.svg.png"
            alt="로고"
            className="w-20 block"
          />
        </Link>
        <Link to="/movies/popular" className="hover:opacity-80">
          인기순
        </Link>
        <Link to="/movies/top_rated" className="hover:opacity-80">
          별점순
        </Link>
        <Link to="/movies/upcoming" className="hover:opacity-80">
          개봉순
        </Link>
      </div>
    </nav>
  );
}

export default Header;
