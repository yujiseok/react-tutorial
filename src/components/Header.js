import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <h1>
        <Link to="/">토익 영단어</Link>
      </h1>
      <div className="menu">
        <Link to="/createWord" className="link">
          단어 추가
        </Link>
        <a href="/createDay" className="link">
          Day 추가
        </a>
      </div>
    </header>
  );
}

export default Header;
