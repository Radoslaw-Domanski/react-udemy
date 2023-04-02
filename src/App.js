import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const initial_expenses = [
  {
    id: 1,
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2022, 7, 14),
  },
  {
    id: 2,
    title: "Toilet Paper1",
    amount: 12.12,
    date: new Date(2019, 7, 14),
  },
  {
    id: 3,
    title: "Toilet Paper2",
    amount: 44.12,
    date: new Date(2022, 7, 14),
  },
  {
    id: 4,
    title: "Toilet Paper3",
    amount: 33.12,
    date: new Date(2019, 7, 14),
  },
  {
    id: 5,
    title: "Toilet Paper4",
    amount: 66.12,
    date: new Date(2020, 7, 14),
  },
];

function App() {
  const [expenses, setExpenses] = useState(initial_expenses);

  const saveExpenseHandler = (e) => {
    setExpenses((prevExpenses) => {
      return [e, ...prevExpenses];
    });
  };
  return (
    <div>
      <NewExpense onSaveExpense={saveExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
