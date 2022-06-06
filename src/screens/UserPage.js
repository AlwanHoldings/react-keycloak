import React from "react";
import BackIcon from "../assets/back-arrow.png";
import { useNavigate } from 'react-router-dom';
const UserPage = (props) => {
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
          left: "21%",
          fontFamily: "monospace",
          fontSize: "3vw",
          fontWeight: "bold",
        }}
      >
        BELOW IS YOUR CODING WORKSPACE ....
      </div>
    </div>
  );
};

export default UserPage;
