import React, { useState } from "react";
import './ExpenseForm.css';

const ExpenseForm = (props) => {

    const [enteredTitle, setEnteredTitle]= useState('');
    const [enteredAmount, setEnteredAmount]= useState('');
    const [enteredDate, setEnteredDate]= useState('');

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
    }
    
    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
    }

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
    }

    const submitHandled = (event) => {
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate),
            // an object with key and values;
        };
        
    props.onSaveExpenseData(expenseData);
    // we execute(!) here a function from a ExpenseForm props -> see it in return in NewExpense.js; we can excute this function from another component,
    // becouse we have a pointer in prop to this function in component NewExpens.js;
    
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
    // executing functions; ('') it clears our form after submission
    };

    return (
        <form onSubmit={submitHandled}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value={enteredTitle} onChange={titleChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" min="0.01" step="0.01" value={enteredAmount} onChange={amountChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" min="2019-01-01" step="2022-12-31" value={enteredDate} onChange={dateChangeHandler} />
                </div>

            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
)};

export default ExpenseForm;