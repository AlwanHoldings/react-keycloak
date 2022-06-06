import React from "react";
import { doLogin } from "../helpers/AuthService";
import logo from "../assets/Monty-Mobile-Logo-Black.png";

const SplashScreen = (props) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "100%",
      }}
    >
      <div
        style={{
          display: "flex",
          flex: 1,
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            padding: "1%",
          }}
        >
          <img style={{ width: "84%", height: "70%" }} src={logo} alt="logo" />
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flex: 1,
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <button
          style={{ width: "45%" }}
          className="button-33"
          onClick={() => doLogin()}
          role="button"
        >
          MONTY PORTAL
        </button>
      </div>
    </div>
  );
};

export default SplashScreen;
