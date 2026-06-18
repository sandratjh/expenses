import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";

const Expenses = (props) => {

    props.expenses.map((expense) => {
        console.log(expense);
        return null;
    });

    return (
        <Card className="expenses">
            {props.expenses.map((expense) => (
                <ExpenseItem
                    key={expense.id}
                    expenseData={expense}
                />
            ))}
        </Card>
    );
};

export default Expenses;