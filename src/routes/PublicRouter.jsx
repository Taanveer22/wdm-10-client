import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";
import NotFound from "../pages/NotFound";
import Home from "../pages/Home";
import AddMovie from "../pages/AddMovie";
import MyFavorites from "../pages/MyFavorites";
import Login from "../pages/Login";
import Register from "../pages/Register";
import MovieCardDetails from "../components/MovieCardDetails";
import PrivateRouter from "./PrivateRouter";
import MyMovies from "../pages/MyMovies";
import AllUsersMovies from "../pages/AllUsersMovies";
import Spinner from "../components/Spinner";

const PublicRouter = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    errorElement: <NotFound></NotFound>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "/allUsersMovies",
        element: <AllUsersMovies></AllUsersMovies>,
      },
      {
        path: "/myMovies",
        element: <MyMovies></MyMovies>,
      },
      {
        path: "/movieCardDetails/:id",
        element: (
          <PrivateRouter>
            <MovieCardDetails></MovieCardDetails>
          </PrivateRouter>
        ),
        hydrateFallbackElement: <Spinner></Spinner>,
        loader: ({ params }) =>
          fetch(`https://wdm-10-server.vercel.app/movies/${params.id}`),
      },
      {
        path: "/addMovie",
        element: (
          <PrivateRouter>
            <AddMovie></AddMovie>
          </PrivateRouter>
        ),
      },
      {
        path: "/myFavorites",
        element: (
          <PrivateRouter>
            <MyFavorites></MyFavorites>
          </PrivateRouter>
        ),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);

export default PublicRouter;
