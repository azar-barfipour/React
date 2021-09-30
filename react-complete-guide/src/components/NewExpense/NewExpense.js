import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const saveDataHandler = (enterExpenseData) => {
    const expenseData = {
      ...enterExpenseData,
      id: 1,
    };
    props.onAddNewExpens(expenseData);
  };
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveDataHandler} />
    </div>
  );
};
export default NewExpense;
