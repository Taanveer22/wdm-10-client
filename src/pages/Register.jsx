import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const { registerUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleRegisterForm = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    // console.log(name, photo, email, password);

    // backend register
    registerUser(email, password)
      .then(() => {
        return updateUserProfile(name, photo);
      })
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div className="flex justify-center items-center">
      <form onSubmit={handleRegisterForm}>
        <fieldset className="fieldset bg-base-300 border-base-300 rounded-box w-xs border p-4">
          <label className="label">Name</label>
          <input name="name" type="text" className="input" placeholder="Name" />

          <label className="label">Photo Url</label>
          <input
            name="photo"
            type="text"
            className="input"
            placeholder="Photo Url"
          />

          <label className="label">Email</label>
          <input
            name="email"
            type="email"
            className="input"
            placeholder="Email"
          />

          <label className="label">Password</label>
          <input
            name="password"
            type="password"
            className="input"
            placeholder="Password"
          />

          <button className="btn btn-neutral mt-4">Register</button>
        </fieldset>
      </form>
    </div>
  );
};

export default Register;
