import React, { useEffect } from "react";
import Landing from "./components/layout/landing";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import { loadUser } from "./actions/auth";
import Final from "./components/expense/final";
import PrivateRoute from "./PrivateRoute";
import { getTransactions } from "./actions/expense";
import axios from "axios";

import "./App.css";

const App = () => {
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      axios.defaults.headers.common["x-auth-token"] = token;
      localStorage.setItem("token", token);
    } else {
      delete axios.defaults.headers.common["x-auth-token"];
      localStorage.removeItem("token");
    }
    store.dispatch(loadUser());
    store.dispatch(getTransactions());
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <PrivateRoute exact path="/expense" component={Final} />
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;
