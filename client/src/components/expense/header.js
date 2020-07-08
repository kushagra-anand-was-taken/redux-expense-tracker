import React from "react";
import { Link } from "react-router-dom";
import { logout } from "../../actions/auth";
import { useDispatch } from "react-redux";

export const Header = () => {
  const dispatch = useDispatch();
  return (
    <div style={{ display: "flex" }}>
      <h2>
        <strong>Expense Tracker</strong>
      </h2>
      <Link className="btn-sm" onClick={() => dispatch(logout())} to="/login">
        {" "}
        Logout
      </Link>
    </div>
  );
};
