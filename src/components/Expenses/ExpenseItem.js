import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from '../UI/Card';
import { useState } from 'react'

const ExpenseItem = (props) => {
    const [title, setTitle] = useState(props.expenseData.title);

    const clickHandler = () => {
        setTitle(`Updated by click ${title}`);
    };

    return (
        <li>
        <div className="expense-item">
            <ExpenseDate date={props.expenseData.date} />

            <div className="expense-item_description">
                <h2>{props.expenseData.title}</h2>
                <div className="expense-item_price">
                    {props.expenseData.price}
                </div>
            </div>

            <button onClick={clickHandler}>Click me</button>
        </div>
        </li>
    );
};

export default ExpenseItem;