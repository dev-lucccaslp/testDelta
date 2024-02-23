import { Navigate, Outlet, useLocation  } from "react-router-dom";
import { useStorage } from "../hooks/useStorage";

const AuthRoutes = () => {
  const { getItem } = useStorage();
  const location = useLocation();
  const isAuthenticated = getItem('data') && getItem('data').token;

  if (isAuthenticated) {
    if (location.pathname === "/") {
      return <Navigate to="/dashboard" replace />;
    }
  } else {
    if (location.pathname !== "/") {
      return <Navigate to="/" replace />;
    }
  }

  return <Outlet />;
};

export default AuthRoutes;
