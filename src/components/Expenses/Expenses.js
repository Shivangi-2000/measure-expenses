import React, { useState } from "react";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
export default function Expenses(props) {
  const [selectedYear, setSelectedYear] = useState("2020");
  const yearFilterHandler = (year) => {
    setSelectedYear(year);
    console.log(`year`, selectedYear);
  };
  return (
    <>
      <Card className="expenses">
        <ExpensesFilter selected={selectedYear} getYear={yearFilterHandler} />
        {props.expenses
          .filter(function (flt) {
            console.log(`flt`, flt, flt.date.getFullYear(), selectedYear);
            return flt.date.getFullYear().toString() === selectedYear;
          })
          .map((expense) => (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            ></ExpenseItem>
          ))}
      </Card>
    </>
  );
}
