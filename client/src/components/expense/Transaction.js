import React, { useContext } from "react";
import { deleteTransaction } from "../../actions/expense";
import { useDispatch } from "react-redux";
export const Transaction = ({ transaction }) => {
  const dispatch = useDispatch();
  return (
    <li className={transaction.amount < 0 ? "minus" : "plus"}>
      {transaction.text}{" "}
      <span>
        {transaction.amount < 0 ? "-" : "+"}${Math.abs(transaction.amount)}
      </span>
      <button
        className="delete-btn"
        onClick={() => dispatch(deleteTransaction(transaction._id))}
      >
        x
      </button>
    </li>
  );
};
