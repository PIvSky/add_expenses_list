import React, { useState } from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';


const NewExpense = (props) => {

    const [isEditing, setIsEditing] = useState(false);

    const saveExpenseDataHandles = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            // this spead copy title/amount/date from conse expenseData from <Expense Form> function;
            id: Math.random().toString()
            // this add an id to new passed expense; it's not unique, but good for now;
        };
        props.onAddExpense(expenseData);
        // this is execution of a function which is in App.js JSX; onAddExpense is a prop in <NewExpense>;
        setIsEditing(false);
        // after submit expenseForm is closing to state FALSE
    };

    const startEditingHandler = () => {
        setIsEditing(true)
    }

    const stopEditingHandler = () => {
        setIsEditing(false)
    }

    return (
        <div className="new-expense">
            {!isEditing && (
                <button type="button" onClick={startEditingHandler}>Add New Expense</button>
            )}
            {isEditing && (
                <ExpenseForm onSaveExpenseData={saveExpenseDataHandles} onClick={stopEditingHandler}/>
            )}
        </div>
    )
};

export default NewExpense;