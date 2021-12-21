/* eslint-disable react/jsx-no-bind */
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Route, Redirect } from "react-router-dom";

import { LocalStorage } from "helpers";

const PrivateRoute = ({ component: Component, ...rest }) => {
  // const tokenData = useSelector(state => state.auth.token);
  const token = LocalStorage.getToken();
  // const [token, setToken] = useState(tokenData ? tokenData : LocalStorage.getToken());

  // useEffect(() => {
  //   setToken(tokenData);
  //   setToken(LocalStorage.getToken());
  // }, [tokenData]);

  // console.log(rest, ' ini dari privateROute');

  return (
    <Route
      {...rest}
      render={(props) => {
        return token ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/",
            }}
          />
        );
      }}
    />
  );
};

export default PrivateRoute;
