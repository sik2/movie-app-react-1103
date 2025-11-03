import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="text-2xl">
      <Link to="/">메인 </Link>
      <Link to="/movies/popular">인기순 </Link>
      <Link to="/movies/top_rated">별점순 </Link>
      <Link to="/movies/upcoming">개봉순 </Link>
    </div>
  );
}

export default Header;
