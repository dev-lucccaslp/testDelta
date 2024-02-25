import { Navigate, Outlet, useLocation  } from "react-router-dom";
import { useStudents } from '../context/StudentsContext'

const AuthRoutes = () => { 
  const { userState: isAuthenticated } = useStudents();
  const location = useLocation();


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
