import { Link } from "react-router-dom";

export default function EmptyPage() {
  return (
    <div>
      <h1>Empty Page</h1>
      <Link to="/">돌아가기</Link>
    </div>
  );
}
