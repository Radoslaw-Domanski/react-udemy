import "./Expenses.css";
import ExpensesList from "./ExpensesList";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";
import ExpenseChart from "./ExpenseChart";
import { useState } from "react";

function Expenses(props) {
  const [selectedYear, setFilteredYear] = useState("2022");
  // const [expensesList, setExpensesList] = useState(props.expensesList)

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
    // setExpensesList((prevExpenses)=>{

    // })
  };

  const filteredExpensesList = props.expenses.filter(
    (el) => el.date.getFullYear().toString() === selectedYear
  );

  return (
    <Card className="expenses">
      <ExpensesFilter
        selectedYear={selectedYear}
        onChangeFilter={filterChangeHandler}
      />
      <ExpenseChart expenses={filteredExpensesList} />
      <ExpensesList items={filteredExpensesList}></ExpensesList>
    </Card>
  );
}

export default Expenses;
