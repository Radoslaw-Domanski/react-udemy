import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = (props) => {
  if (props.items.length === 0) {
    return <p>No expenses.</p>;
  }

  return (
    <ul>
      {props.items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          amount={expense.amount}
          date={expense.date}
          title={expense.title}
        />
      ))}
    </ul>
  );
};

export default ExpensesList;
