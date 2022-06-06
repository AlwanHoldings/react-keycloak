import React, { useEffect, useState } from "react";
import { _kc } from "../helpers/AuthService";
import asyncLocalStorage from "../helpers/LocalStorage";
import SplashScreen from "../screens/LandingPage";
import AuthorizedRoute from "./AuthorizedRoute";

const AppRouter = (children) => {
  const [state, setState] = useState({
    isloading: false,
    isauthenticated: false,
    role: null,
  });
  const isLoggedIn = (value) => {
    if (value !== null) {
      const myJSON = JSON.parse(JSON.stringify(value));
      let authenticated = JSON.parse(myJSON).authenticated;
      setState({
        isloading: false,
        isauthenticated: authenticated,
        role: JSON.parse(myJSON).realmAccess.roles,
      });
    } else {
      setState({ isloading: false, isauthenticated: false, role: null });
    }
  };
  useEffect(() => {
    asyncLocalStorage
      .getItem("keycloak")
      .then((value) => isLoggedIn(value))
      .catch(() => {});
  }, [asyncLocalStorage]);

  _kc.onAuthSuccess = function () {
    asyncLocalStorage
      .setItem("keycloak", JSON.stringify(_kc))
      .then(function () {
        return asyncLocalStorage.getItem("keycloak");
      })
      .then(function (value) {
        isLoggedIn(value);
      });
  };
  if (state.isloading) {
    return <div>Loading...</div>;
  } else {
    return state.isauthenticated ? (
      <AuthorizedRoute role={state.role} />
    ) : (
      <SplashScreen />
    );
  }
};
export default AppRouter;
