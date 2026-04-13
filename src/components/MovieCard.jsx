import { Link } from "react-router-dom";

const MovieCard = ({ movieItem }) => {
  // console.log(movieItem);
  return (
    <div>
      <div className="card bg-gray-200 shadow-sm">
        <figure className="px-10 pt-10">
          <img
            src={movieItem?.poster}
            alt="movie"
            className="rounded-xl h-40"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title"> {movieItem?.title}</h2>
          <p className="text-justify">{movieItem?.summary}</p>
          <div className="card-actions">
            <Link
              to={`/movieCardDetails/${movieItem?._id}`}
              className="btn btn-info"
            >
              See Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
