import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Redirect } from "react-router-dom";

import { login } from "../../actions/auth";

const Login = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const handler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const submithandler = (e) => {
    e.preventDefault();
    dispatch(login(formData));
  };

  if (isAuthenticated) {
    return <Redirect to="/expense" />;
  }

  return (
    <>
      <form onSubmit={(e) => submithandler(e)}>
        <div>
          <label>
            Email:
            <input
              type="text"
              name="email"
              value={email}
              onChange={(e) => handler(e)}
              placeholder="Email"
            />
          </label>
        </div>
        <div>
          <label>
            Password:
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => handler(e)}
              placeholder="Password"
            />
          </label>
        </div>

        <input className="btn" type="submit" value="Login" />
      </form>
    </>
  );
};

export default Login;
