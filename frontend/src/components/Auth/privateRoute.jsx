import React from "react";
import PropTypes from "prop-types";
import { Navigate, useLocation } from "react-router-dom";
import checkAuthToken from "./checkAuth";

function PrivateRoute({ children }) {
  const location = useLocation();
  const isAuthenticated = checkAuthToken(); // Checks if a valid auth token is present

  if (!isAuthenticated) {
    // Redirect to login page if not authenticated
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}

PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PrivateRoute;
