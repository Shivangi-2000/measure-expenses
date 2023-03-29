import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
export default function NewExpense(props) {
  const [editing, setEditing] = useState(false);
  const setEditingHandler = () => {
    setEditing(true);
  };
  const stopEditing = () => {
    setEditing(false);
  };
  const saveExpenseDataHandler = (savedExpenseData) => {
    const expenseData = {
      ...savedExpenseData,
      id: Math.random().toString(),
    };
    //console.log(expenseData);
    props.onAddExpense(expenseData);
    setEditing(false);
  };
  return (
    <div className="new-expense">
      {!editing && (
        <button type="submit" onClick={setEditingHandler}>
          Add New Expense
        </button>
      )}
      {editing && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={stopEditing}
        />
      )}
    </div>
  );
}
