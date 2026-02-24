import { useLoaderData } from "react-router-dom";
import MovieCard from "../components/MovieCard";

const AllMovies = () => {
  const loadedAllMovies = useLoaderData();
  console.log(loadedAllMovies);
  return (
    <div>
      <h1 className="text-center text-2xl font-semibold mb-4">
        Movies Available : {loadedAllMovies.length}
      </h1>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {loadedAllMovies.map((movieItem) => (
          <MovieCard key={movieItem._id} movieItem={movieItem}></MovieCard>
        ))}
      </div>
    </div>
  );
};

export default AllMovies;
