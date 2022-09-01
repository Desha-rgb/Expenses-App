import React from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpeneForm";

const NewExpense = (props) => {
  const saveExpensDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpensDataHandler} />
    </div>
  );
};

export default NewExpense;
