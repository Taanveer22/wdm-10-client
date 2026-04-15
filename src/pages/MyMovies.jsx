import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import MovieCard from "../components/MovieCard";

const MyMovies = () => {
  const { user } = useContext(AuthContext);
  const [individualMovies, setIndividualMovies] = useState([]);

  useEffect(() => {
    if (!user?.email) {
      return;
    }
    fetch(`https://wdm-10-server.vercel.app/movies?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setIndividualMovies(data));
  }, [user?.email]);

  return (
    <div>
      <h1 className="text-center text-2xl font-semibold mb-4">
        My Added Movies Total : {individualMovies.length}
      </h1>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {individualMovies.map((movieItem) => (
          <MovieCard key={movieItem._id} movieItem={movieItem}></MovieCard>
        ))}
      </div>
    </div>
  );
};

export default MyMovies;
