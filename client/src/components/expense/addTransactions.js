import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTransactions } from "../../actions/expense";

export const AddTransactions = () => {
  const dispatch = useDispatch();
  const [text, setText] = useState("");
  const [amount, setAmount] = useState();
  const onsubmit = (e) => {
    e.preventDefault();
    const newTransaction = {
      amount: +amount,
      text,
    };
    dispatch(addTransactions(newTransaction));
    setText("");
    setAmount("");
  };

  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={onsubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            placeholder="Enter text..."
            value={text}
            onChange={(e) => {
              setText(e.target.value);
            }}
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            type="number"
            placeholder="Enter amount..."
            value={amount}
            onChange={(e) => {
              setAmount(e.target.value);
            }}
          />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </>
  );
};
