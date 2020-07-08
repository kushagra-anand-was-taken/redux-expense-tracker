import axios from "axios";
import { GET_TRANSACTION, ADD_TRANSACTION, DELETE_TRANSACTION } from "./types";

export const getTransactions = () => async (dispatch) => {
  const token = localStorage.getItem("token");
  if (token) {
    axios.defaults.headers.common["x-auth-token"] = token;
    localStorage.setItem("token", token);
  } else {
    delete axios.defaults.headers.common["x-auth-token"];
    localStorage.removeItem("token");
  }
  try {
    const res = await axios.get("/transaction");

    dispatch({ type: GET_TRANSACTION, payload: res.data });
  } catch (error) {
    console.log(error.response.data.error);
  }
};

export const deleteTransaction = (id) => async (dispatch) => {
  const token = localStorage.getItem("token");
  if (token) {
    axios.defaults.headers.common["x-auth-token"] = token;
    localStorage.setItem("token", token);
  } else {
    delete axios.defaults.headers.common["x-auth-token"];
    localStorage.removeItem("token");
  }
  console.log(id);
  try {
    await axios.delete(`/transaction/${id}`);
    dispatch({
      type: DELETE_TRANSACTION,
      payload: id,
    });
  } catch (error) {
    console.log(error.response.data.error);
  }
};

export const addTransactions = (transaction) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const token = localStorage.getItem("token");
  if (token) {
    axios.defaults.headers.common["x-auth-token"] = token;
    localStorage.setItem("token", token);
  } else {
    delete axios.defaults.headers.common["x-auth-token"];
    localStorage.removeItem("token");
  }
  try {
    const res = await axios.post("/transaction", transaction, config);
    dispatch({ type: ADD_TRANSACTION, payload: res.data });
  } catch (error) {
    console.log(error.response.data.error);
  }
};
