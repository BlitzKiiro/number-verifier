import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const requireAuth = (Component: React.ComponentType) => {
  const { user } = useSelector((state: any) => state.auth);

  return user ? <Component /> : <Navigate to='/login' />;
};

export default requireAuth;
