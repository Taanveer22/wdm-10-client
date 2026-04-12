import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  const { loginUser, signInWithGoogle } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location?.state || "/";

  const handleLoginForm = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    loginUser(email, password)
      .then((result) => {
        console.log(result.user);
        navigate(from);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const handleGoogleLogin = () => {
    signInWithGoogle()
      .then((result) => {
        console.log(result.user);
        navigate(from);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className="flex justify-center items-center">
      <div>
        <form onSubmit={handleLoginForm}>
          <fieldset className="fieldset bg-base-300 border-base-300 rounded-box w-xs border p-4">
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

            <button className="btn btn-neutral mt-4">Login</button>
          </fieldset>
        </form>
        <button
          onClick={handleGoogleLogin}
          className="btn btn-warning w-full mt-4"
        >
          Login With Google
        </button>
      </div>
    </div>
  );
};

export default Login;
