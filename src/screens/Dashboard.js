import React from "react";
import { doLogout } from "../helpers/AuthService";
import { useNavigate } from "react-router";
import asyncLocalStorage from "../helpers/LocalStorage";
const Dashboard = (props) => {
  const navigate = useNavigate();
  return (
    <div
      style={{
        display: "flex",
        height: "100vw",
        flexDirection: "column",
        marginTop: "5vw",
      }}
    >
      <div
        style={{
          fontFamily: "monospace",
          fontSize: "5vw",
          fontWeight: "bold",
         
          width: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {props.role.includes("admin") ? (
          <div>ADMIN DASHBOARD</div>
        ) : (
          <div>USER DASHBOARD</div>
        )}
      </div>

      <div>
        <div
          style={{
            fontFamily: "monospace",
            fontSize: "3vw",
            fontWeight: "bold",
            marginTop: "4vw",
            width: "100%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <button
            style={{ width: "45%" }}
            className="button-33"
            onClick={() => navigate("user")}
            role="button"
          >
            Coding Workspace
          </button>
        </div>

        {props.role.includes("admin") && (
          <div
            style={{
              fontFamily: "monospace",
              alignItems: "center",
              fontSize: "3vw",
              fontWeight: "bold",
              marginTop: "4vw",
              width: "100%",
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <button
              style={{ width: "45%" }}
              className="button-33"
              onClick={() => navigate("admin")}
              role="button"
            >
              Team Monitor
            </button>
          </div>
        )}
      </div>
      <div style={{ position: "absolute", top: 4, right: 5 }}>
        <button
          className="button-24"
          onClick={() => {
            doLogout();
            asyncLocalStorage.clear();
          }}
        >
          Logout{" "}
        </button>
      </div>
    </div>
  );
};
export default Dashboard;
