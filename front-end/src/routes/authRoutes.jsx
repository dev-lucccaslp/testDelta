import { Outlet, Navigate } from "react-router-dom";
import { useAuthContext } from "../context/useAuthContext";

const AuthRoutes = () => {
  const { userLoged } = useAuthContext();

  const isLoggedIn = userLoged(useAuthContext());

  if (!isLoggedIn) {
    return <Navigate to="/" />;
  }

  return <Outlet />;
};

export default AuthRoutes;
