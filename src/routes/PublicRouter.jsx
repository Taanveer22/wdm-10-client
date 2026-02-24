import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";
import NotFound from "../pages/NotFound";
import Home from "../pages/Home";
import AllMovies from "../pages/AllMovies";
import AddMovie from "../pages/AddMovie";
import MyFavorites from "../pages/MyFavorites";
import Login from "../pages/Login";
import Register from "../pages/Register";
import MovieCardDetails from "../components/MovieCardDetails";

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
        path: "/allMovies",
        element: <AllMovies></AllMovies>,
        loader: () => fetch(`http://localhost:5000/movies`),
      },
      {
        path: "/movieCardDetails/:id",
        element: <MovieCardDetails></MovieCardDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/movies/${params.id}`),
      },
      {
        path: "/addMovie",
        element: <AddMovie></AddMovie>,
      },
      {
        path: "/myFavorites",
        element: <MyFavorites></MyFavorites>,
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
