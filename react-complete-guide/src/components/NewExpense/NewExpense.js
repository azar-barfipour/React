import react, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [clicked, setClicked] = useState(false);
  const saveDataHandler = (enterExpenseData) => {
    const expenseData = {
      ...enterExpenseData,
      id: 1,
    };
    props.onAddNewExpens(expenseData);
    setClicked(false);
  };
  const newButtonHandler = () => {
    setClicked(true);
  };
  const cancleAddingExpense = () => {
    setClicked(false);
  };
  return (
    <div className="new-expense">
      {clicked ? (
        <ExpenseForm
          onSaveExpenseData={saveDataHandler}
          cancleHandler={cancleAddingExpense}
        />
      ) : (
        <button onClick={newButtonHandler}>Add New Expense</button>
      )}
    </div>
  );
};
export default NewExpense;
