import React, { useState } from "react";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";

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
      {filteredExpenses.length === 0 ? (
        <p>No Expenses Found.</p>
      ) : (
        filteredExpenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))
      )}
    </Card>
  );
};
export default Expenses;
