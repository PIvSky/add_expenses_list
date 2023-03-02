import React from "react";
import './ExpensesList.css'

import ExpenseItem from "./ExpenseItems";

const ExpensesList = ({items}) => {

    if (items.length === 0) {
        return <h2 
        style={{color: "red", margin: 16}}
        className="expenses-list__fallback">
        Found no expenses.
        </h2>
    };

    // deleting function
    // const onDelete = () => {    
        
    //     expensesContent(exp => {
    //         return exp.filter(par => par.expense.id !== expense.id);
    //     });
    // };

    return (
        <ul className="expenses-list">
            {items.map((expense) => (
            <ExpenseItem
                key={expense.id}
                title={expense.title} 
                amount={expense.amount}
                date={expense.date}
                // onClick={onDelete}
            />
            ))};
        </ul>
    )
}
export default ExpensesList;

// onClick={props.onClick}