import React from "react";
import PropTypes from "prop-types";
import { Route, Navigate } from "react-router-dom";

function RouteWrapper({ redirectTo, isPrivate, ...rest }) {
  const authenticated = localStorage.getItem("token");

  if (!authenticated && isPrivate) return <Navigate to={"/login"} />;

  return <Route {...rest} />;
}

RouteWrapper.propTypes = {
  redirectTo: PropTypes.string,
  isPrivate: PropTypes.bool,
};

RouteWrapper.defaultProps = {
  redirectTo: "/",
  isPrivate: true,
};

export default RouteWrapper;
