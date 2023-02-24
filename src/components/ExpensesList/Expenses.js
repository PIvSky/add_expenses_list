import React, {useState} from 'react';

import "./Expenses.css";
import ExpenseItem from "./ExpenseItems";
import Card from "./Card";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import ExpensesList from './ExpensesList';

function Expenses(props) {
    
    const [filteredYear, setFilteredYear] = useState('2019')

    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear);
    };
  
    let filteredList = props.items.filter(expenses => {
        return expenses.date.getFullYear().toString() === filteredYear
    });

    // deleting function
    // const onDelete = () => {    
        
    //     expensesContent(exp => {
    //         return exp.filter(par => par.expense.id !== expense.id);
    //     });
    // };

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter 
                    selected={filteredYear} 
                    onChangeFilter={filterChangeHandler}
                />
                <ExpensesList items={filteredList} />
            </Card>
        </div>
    );
}

export default Expenses;