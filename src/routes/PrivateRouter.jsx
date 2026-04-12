import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import Spinner from "../components/Spinner";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRouter = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  // console.log(location);

  if (loading) {
    return Spinner;
  }

  if (user) {
    return children;
  }

  return <Navigate to="/login" state={location?.pathname}></Navigate>;
};

export default PrivateRouter;
