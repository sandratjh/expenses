const ExpenseDate = (props) => {

    const date = new Date(props.date); // 🔥 oluline fix

    const day = new Date(props.date).toLocaleString("en-US", { day: "2-digit" });
    const month = new Date(props.date).toLocaleString("en-US", { month: "long" });
    const year = new Date(props.date).getFullYear();

    return (
        <div>
            <div>{month}</div>
            <div>{day}</div>
            <div>{year}</div>
        </div>
    );
};

export default ExpenseDate;