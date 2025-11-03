import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="text-2xl">
      <Link to="/">메인 </Link>
      <Link to="/movie">영화 </Link>
    </div>
  );
}

export default Header;
