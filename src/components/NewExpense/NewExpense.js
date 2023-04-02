import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
const NewExpense = (props) => {
  const [formVisible, setFormVisible] = useState(false);
  const showFormHandler = () => {
    setFormVisible(true);
  };
  const saveExpenseHandler = (e) => {
    const expenseData = {
      ...e,
      id: Math.random().toString(),
    };

    setFormVisible(false);
    props.onSaveExpense(expenseData);
  };

  const hideFormHandler = () => {
    setFormVisible(false);
  };

  if (!formVisible) {
    return (
      <div className="new-expense">
        <button type="button" onClick={showFormHandler}>
          Add New Expense
        </button>
      </div>
    );
  }

  return (
    <div className="new-expense">
      <ExpenseForm
        onSaveExpense={saveExpenseHandler}
        onCancelExpense={hideFormHandler}
      />
    </div>
  );
};

export default NewExpense;
