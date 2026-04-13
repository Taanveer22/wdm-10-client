const FavoriteMovieCard = ({ movieItem, handleDeleteFromFavorites }) => {
  // console.log(movieItem);
  return (
    <section>
      <div className="card bg-gray-200 shadow-sm">
        <figure className="mx-5 my-5">
          <img
            src={movieItem?.poster}
            alt="movie"
            className="rounded-xl w-full h-40"
          />
        </figure>
        <h2 className="text-lg font-medium mx-5"> {movieItem?.title}</h2>
        <div className="card-body items-start">
          <p>Release Year : {movieItem?.release}</p>
          <p>Duration : {movieItem?.duration} minutes</p>
          <p>Genre : {movieItem?.genre}</p>
          <p>Rating : {movieItem?.rating}</p>
          <div className="flex items-center">
            <button
              onClick={() => handleDeleteFromFavorites(movieItem?._id)}
              className="btn btn-error"
            >
              Delete From Favorites
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FavoriteMovieCard;
