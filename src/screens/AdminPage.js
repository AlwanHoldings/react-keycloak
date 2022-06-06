import React from "react";
import BackIcon from "../assets/back-arrow.png";
import { useNavigate } from 'react-router-dom';
const AdminPage = (props) => {
    const navigate = useNavigate();
  return (
    <div>
      <div
        style={{
          position: "absolute",
          top: "10",
          left: "10",
        }}
      >
        <img
          style={{cursor:"pointer", width: "10%", height: "10%" }}
          src={BackIcon}
          alt="logo"
          onClick={() => navigate(-1)}
        />
      </div>
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "25%",
          fontFamily: "monospace",
          fontSize: "3vw",
          fontWeight: "bold",
        }}
      >
        HERE YOU MONITOR TEAMS ....
      </div>
    </div>
  );
};

export default AdminPage;