import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesList from "./ExpensesList";

const Expenses = (props) => {
    return (
        <Card className="expenses">
            <ExpensesList expenses={props.expenses} />
        </Card>
    );
};

export default Expenses;