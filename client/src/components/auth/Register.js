import React, { useState } from "react";
import { register } from "../../actions/auth";
import { Link, Redirect } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";

const Register = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const { name, email, password, password2 } = formData;

  const handler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const submithandler = (e) => {
    e.preventDefault();
    if (password !== password2) {
      console.log("password does not match");
    } else {
      dispatch(register(formData));
    }
  };
  if (isAuthenticated) {
    return <Redirect to="/expense" />;
  }
  return (
    <>
      <form onSubmit={(e) => submithandler(e)}>
        <div>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={name}
              onChange={(e) => handler(e)}
              placeholder="Name"
            />
          </label>
        </div>
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
              type="text"
              name="password"
              value={password}
              onChange={(e) => handler(e)}
              placeholder="Password"
            />
          </label>
        </div>
        <div>
          <label>
            Re-enter Password:
            <input
              type="text"
              name="password2"
              value={password2}
              onChange={(e) => handler(e)}
              placeholder="Confirm Password"
            />
          </label>
        </div>

        <input className="btn" type="submit" value="Register" />
      </form>
    </>
  );
};

export default Register;
