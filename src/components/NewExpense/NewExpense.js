import React from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';


const NewExpense = (props) => {

    const saveExpenseDataHandles = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            // this spead copy title/amount/date from conse expenseData from <Expense Form> function;
            id: Math.random().toString()
            // this add an id to new passed expense; it's not unique, but good for now;
        };
    props.onAddExpense(expenseData);
    // this is execution of a function which is in App.js JSX; onAddExpense is a prop in <NewExpense>;
    };

    return (
        <div className="new-expense">
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandles} />
        </div>
    )
};

export default NewExpense;