import React, {useState} from 'react';

import "./Expenses.css";
import ExpenseItem from "./ExpenseItems";
import Card from "./Card";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";

function Expenses(props) {
    
    const [filteredYear, setFilteredYear ] = useState('2019')

    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear);
    };
  
    let filteredList = props.items.filter(expenses => {
        return expenses.date.getFullYear().toString() === filteredYear
    });

    let expensesContent = undefined

    if (filteredList.length === 0) {
        expensesContent = <p>No expenses found. </p>
    } if (filteredList.length > 0) {
        expensesContent = filteredList.map((expense) => (
            <ExpenseItem
                key={expense.id}
                title={expense.title} 
                amount={expense.amount}
                date={expense.date}
            />
            ))};

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter 
                    selected={filteredYear} 
                    onChangeFilter={filterChangeHandler}
                />
                {expensesContent}
            </Card>
        </div>
    );
}

export default Expenses;
