import { Link } from "react-router-dom";

const MovieCard = ({ movieItem }) => {
  // console.log(movieItem);
  return (
    <section>
      <div className="card bg-gray-200 shadow-sm pb-5">
        <figure className="mx-5 my-5">
          <img
            src={movieItem?.poster}
            alt="movie"
            className="rounded-xl h-40"
          />
        </figure>
        <h2 className="card-title mx-5 mb-2"> {movieItem?.title}</h2>
        <div className="flex justify-between mx-5 mb-2">
          <p className="text-justify">Genre : {movieItem?.genre}</p>
          <p className="text-justify">Rating :{movieItem?.rating}</p>
        </div>
        <div className="card-actions justify-center items-center">
          <Link
            to={`/movieCardDetails/${movieItem?._id}`}
            className="btn btn-sm btn-info"
          >
            See Details
          </Link>
        </div>
      </div>
    </section>
  );
};

export default MovieCard;
