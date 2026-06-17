import "./ExpenseItem.css";

function ExpenseItem() {
    return (
        <div className="expense-item">
            <div>28.03.2024</div>
            <div className="expense-item__description">
                <h2>Uus telefon</h2>
                <div className="expense-item__price">799€</div>
            </div>
        </div>
    );
}

export default ExpenseItem;