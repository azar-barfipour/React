import React, { useState } from "react";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import ExpenseList from "./ExpenseList";

const Expenses = (props) => {
  const [changeYear, setChangeYear] = useState("2020");

  const saveExpensesFilterHandler = (expensesFilterData) => {
    setChangeYear(expensesFilterData);
  };

  const filteredExpenses = props.items.filter((item) => {
    return item.date.getFullYear().toString() === changeYear;
  });
  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={changeYear}
        onExpensesFilter={saveExpensesFilterHandler}
      />
      <ExpenseList filteredExpenses={filteredExpenses} />
    </Card>
  );
};
export default Expenses;
