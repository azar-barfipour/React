import React, { useState } from "react";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {
  const [changeYear, setChangeYear] = useState("2020");
  const saveExpensesFilterHandler = (expensesFilterData) => {
    console.log(setChangeYear(expensesFilterData));
  };
  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={changeYear}
        onExpensesFilter={saveExpensesFilterHandler}
      />
      {props.items.map((expense) => (
        <ExpenseItem
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </Card>
  );
};
export default Expenses;
