import React from "react";
import { useSelector } from "react-redux";

export const Balance = () => {
  const auth = useSelector((state) => state.auth);
  const transactions = useSelector((state) => state.expense.transactions);
  return (
    <div>
      <h4> {auth.user && auth.user.name} Balance</h4>
      <h1>
        $
        {transactions
          .reduce((acc, qwe) => {
            return (acc += qwe.amount);
          }, 0)
          .toFixed(2)}
      </h1>
    </div>
  );
};
