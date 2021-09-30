import React, { useState } from "react";

import "./ExpensesFilter.css";

const ExpensesFilter = (props) => {
  const [enteresYear, setenteresYear] = useState("");

  const filterHandler = (event) => {
    props.onExpensesFilter(event.target.value);
  };
  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select onChange={filterHandler}>
          <option value={enteresYear}>2022</option>
          <option value={enteresYear}>2021</option>
          <option value={enteresYear}>2020</option>
          <option value={enteresYear}>2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
