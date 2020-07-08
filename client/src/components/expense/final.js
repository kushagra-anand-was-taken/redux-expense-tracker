import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTransactions } from "../../actions/expense";
import { Header } from "./header";
import { Balance } from "./balance";
import { IncomeExpenses } from "./incomeExpenses";
import { TransactionList } from "./transactionList";
import { AddTransactions } from "./addTransactions";

function Final() {
  const expense = useSelector((state) => state.expense);
  const { transactions, loading } = expense;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTransactions());
  }, []);

  // if (isAuthenticated) {
  //   return <Redirect to="/expense" />;
  // }
  return loading || transactions === null ? (
    <h1>wait</h1>
  ) : (
    <>
      <Header />
      <Balance />
      <IncomeExpenses />
      <TransactionList />
      <AddTransactions />
    </>
  );
}

export default Final;
