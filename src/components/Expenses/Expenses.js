import React, { useState } from "react";
import "./Expenses.css";
//import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChar from "./ExpensesChar";
export default function Expenses(props) {
  const [selectedYear, setSelectedYear] = useState("2020");
  const yearFilterHandler = (year) => {
    setSelectedYear(year);
    console.log(`year`, selectedYear);
  };

  let filteredExpense = props.expenses.filter(function (flt) {
    return flt.date.getFullYear().toString() === selectedYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={selectedYear} getYear={yearFilterHandler} />
        <ExpensesChar expenses={filteredExpense} />
        {<ExpensesList item={filteredExpense} />}
      </Card>
    </div>
  );
}
