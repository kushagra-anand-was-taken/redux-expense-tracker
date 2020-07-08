import React, { useContext, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Transaction } from "./Transaction";
import { getTransactions } from "../../actions/expense";

export const TransactionList = () => {
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(getTransactions());
  // }, []);
  const expense = useSelector((state) => state.expense);
  const { transactions } = expense;

  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {transactions &&
          transactions.map((transaction) => (
            <Transaction key={transaction._id} transaction={transaction} />
          ))}
      </ul>
    </>
  );
};
