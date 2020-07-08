import React from "react";
import { Link } from "react-router-dom";

const landing = () => {
  return (
    <>
      <h1 style={{ marginBottom: "16px" }}>Welcome to expense Tracker</h1>
      <div className="l-button">
        <Link to="/register" className="btn" style={{ marginRight: "16px" }}>
          Register
        </Link>
        <Link to="/login" className="btn">
          Login
        </Link>
      </div>
    </>
  );
};

export default landing;
