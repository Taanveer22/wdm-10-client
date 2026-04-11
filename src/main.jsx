import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import PublicRouter from "./routes/PublicRouter";
import AuthProvider from "./providers/AuthProvider";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={PublicRouter} />
    </AuthProvider>
  </StrictMode>,
);
