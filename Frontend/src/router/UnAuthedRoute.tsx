import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const UnAuthedRoute = () => {
  const { user } = useSelector((state: any) => state.auth);
  return user ? <Navigate to='/' /> : <Outlet />;
};

export default UnAuthedRoute;
