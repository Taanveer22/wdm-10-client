import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import FavoriteMovieCard from "../components/FavoriteMovieCard";

const MyFavorites = () => {
  const { user } = useContext(AuthContext);
  const [favMovies, setfavMovies] = useState([]);

  const handleDeleteFromFavorites = (id) => {
    console.log(id);
  };

  useEffect(() => {
    if (!user?.email) {
      return;
    }
    fetch(`http://localhost:5000/favMovies?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setfavMovies(data));
  }, [user?.email]);

  return (
    <div>
      <h1 className="text-center text-2xl font-semibold mb-4">
        My Favorite Movies Total : {favMovies.length}
      </h1>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {favMovies.map((movieItem) => (
          <FavoriteMovieCard
            key={movieItem._id}
            movieItem={movieItem}
            handleDeleteFromFavorites={handleDeleteFromFavorites}
          ></FavoriteMovieCard>
        ))}
      </div>
    </div>
  );
};

export default MyFavorites;
