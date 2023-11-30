import React from "react";
import { Navigate } from "react-router-dom";

function LogedRoute({ authenticated, component }) {
  return authenticated ? component : <Navigate to="/login"></Navigate>;
}

export default LogedRoute;
