import { useLoaderData } from "react-router-dom";

const MovieCardDetails = () => {
  const loadedOneMovie = useLoaderData();
  console.log(loadedOneMovie);

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
              <button className="btn btn-error">Delete From Movies</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCardDetails;
