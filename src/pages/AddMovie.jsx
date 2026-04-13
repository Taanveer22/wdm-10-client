import { useContext, useState } from "react";
import { Rating } from "react-simple-star-rating";
import Swal from "sweetalert2";
import { AuthContext } from "../providers/AuthProvider";

const AddMovie = () => {
  const { user } = useContext(AuthContext);
  const [rating, setRating] = useState(0);
  // Catch Rating value
  const handleRatingValue = (rate) => {
    setRating(rate);
  };
  const handleAddMovieForm = async (e) => {
    e.preventDefault();
    const poster = e.target.poster.value;
    const title = e.target.title.value;
    const genre = e.target.genre.value;
    const duration = e.target.duration.value;
    const release = e.target.release.value;
    const rating = e.target.rating.value;
    const summary = e.target.summary.value;

    const movieInfo = {
      // send the user email who add this movie
      email: user?.email,
      poster,
      title,
      genre,
      duration,
      release,
      rating,
      summary,
    };
    // console.log(movieInfo);
    // send movie data to server
    const res = await fetch(`http://localhost:5000/movies`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(movieInfo),
    });
    const data = await res.json();
    // console.log(data);
    if (data.insertedId) {
      Swal.fire("movie added to db");
    }
  };

  return (
    <div>
      <section className="w-11/12 mx-auto">
        <form onSubmit={handleAddMovieForm}>
          {/* 1st */}
          <div className="flex items-center justify-between gap-6 my-4">
            <fieldset className="fieldset w-1/2">
              <legend className="fieldset-legend">Movie Poster</legend>
              <input
                name="poster"
                type="text"
                className="input w-full"
                placeholder="Movie Poster"
              />
            </fieldset>
            <fieldset className="fieldset w-1/2">
              <legend className="fieldset-legend">Title</legend>
              <input
                name="title"
                type="text"
                className="input w-full"
                placeholder="Title"
              />
            </fieldset>
          </div>
          {/* 2nd */}
          <div className="flex items-center justify-between gap-6 mb-4">
            <fieldset className="fieldset w-1/2">
              <legend className="fieldset-legend font-semibold">Genre</legend>
              <select className="input w-full" name="genre">
                <option value="comedy">comedy</option>
                <option value="horror">horror</option>
                <option value="thriller">thriller</option>
              </select>
            </fieldset>
            <fieldset className="fieldset w-1/2">
              <legend className="fieldset-legend">Duration</legend>
              <input
                name="duration"
                type="number"
                className="input w-full"
                placeholder="Duration"
              />
            </fieldset>
          </div>
          {/* 3rd */}
          <div className="flex items-center justify-between gap-6 mb-4">
            <fieldset className="fieldset w-1/2">
              <legend className="fieldset-legend">Release Year</legend>
              <input
                name="release"
                type="number"
                className="input w-full"
                placeholder="Release Year"
              />
            </fieldset>
            <fieldset className="fieldset w-1/2">
              <legend className="fieldset-legend">Rating</legend>
              <div className="input w-full flex items-center gap-2">
                <Rating
                  onClick={handleRatingValue}
                  initialValue={rating}
                  size={20}
                  SVGstyle={{ display: "inline" }}
                  style={{ display: "flex", flexDirection: "row" }}
                />
                <span className="text-sm text-gray-400">{rating} / 5</span>
              </div>
              <input type="hidden" name="rating" value={rating} />
            </fieldset>
          </div>
          {/* 4th */}
          <div className="mb-4">
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Summary</legend>
              <input
                name="summary"
                type="text"
                className="input w-full"
                placeholder="Summary"
              />
            </fieldset>
          </div>
          {/* btn */}
          <div>
            <button className="btn btn-success w-full">Add Movie</button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default AddMovie;
