import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";

const FeaturedMovies = () => {
  const [featMovies, setFeatMovies] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/movies/featured`)
      .then((res) => res.json())
      .then((data) => setFeatMovies(data));
  }, []);

  // console.log(featMovies);

  return (
    <section>
      <h1 className="text-center text-2xl font-semibold mb-4">
        Featured Movies
      </h1>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {featMovies.map((movieItem) => (
          <MovieCard key={movieItem._id} movieItem={movieItem}></MovieCard>
        ))}
      </div>
    </section>
  );
};

export default FeaturedMovies;
