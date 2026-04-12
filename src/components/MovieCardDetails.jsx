import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const MovieCardDetails = () => {
  const loadedOneMovie = useLoaderData();
  // console.log(loadedOneMovie);
  const navigate = useNavigate();

  const handleDeleteFromMovies = async (id) => {
    const res = await fetch(`http://localhost:5000/movies/${id}`, {
      method: "DELETE",
    });
    const data = await res.json();
    // console.log(data);
    if (data.deletedCount > 0) {
      Swal.fire("Movie deleted from db");
      navigate("/allMovies");
    }
  };

  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={loadedOneMovie?.poster}
            className="max-w-md rounded-lg shadow-2xl"
          />
          <div className="space-y-3">
            <h1 className="text-3xl font-bold">{loadedOneMovie?.title}</h1>
            <p>{loadedOneMovie?.summary}</p>
            <p>Release Year : {loadedOneMovie?.release}</p>
            <p>Duration : {loadedOneMovie?.duration} minutes</p>
            <p>Genre : {loadedOneMovie?.genre}</p>
            <p>Rating : {loadedOneMovie?.rating}</p>
            <div className="flex items-center gap-6">
              <button className="btn btn-success">Add To Favorites</button>
              <button
                onClick={() => handleDeleteFromMovies(loadedOneMovie?._id)}
                className="btn btn-error"
              >
                Delete From Movies
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCardDetails;
