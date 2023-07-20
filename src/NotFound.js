import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <>
      <h1 class="text-center text-black font-bold text-5xl">
        This Page Is 404 Not found
      </h1>
      <Link to="/" className="text-blue-400 underline">
        Home
      </Link>
    </>
  );
}
