import MovieCard from "../components/MovieCard";
import { useEffect, useState } from "react";

const AllUsersMovies = () => {
  const [allMovies, setAllMovies] = useState([]);
  const [searchField, setSearchField] = useState("");

  useEffect(() => {
    fetch(`https://wdm-10-server.vercel.app/movies?search=${searchField}`)
      .then((res) => res.json())
      .then((data) => setAllMovies(data));
  }, [searchField]);

  return (
    <div>
      <h1 className="text-center text-2xl font-semibold mb-4">
        Available Movies : {allMovies.length}
      </h1>

      <div className="flex justify-center items-center mb-4">
        <label className="input">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input
            onChange={(e) => setSearchField(e.target.value)}
            type="search"
            placeholder="Search"
          />
        </label>
      </div>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {allMovies.map((movieItem) => (
          <MovieCard key={movieItem._id} movieItem={movieItem}></MovieCard>
        ))}
      </div>
    </div>
  );
};

export default AllUsersMovies;
