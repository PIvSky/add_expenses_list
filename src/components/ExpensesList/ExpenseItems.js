import React from 'react';

import ExpenseDate from './ExpenseDate';
import Card from './Card';
import './ExpenseItems.css';

const container = document.querySelector('.expense-item');

const onTrash = () => {
  container.target.remove();
};

function ExpenseItem(props) {

  return (
    <Card className='expense-item'  >
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'  >
        <h2>{props.title}</h2>
        <div className='expense-item__price'>{props.amount + '$'}</div>
      </div>
      <button className='expense-item__trash' onClick={onTrash} >
        <img className='trash' src='/src/icons/trashIcon.png' alt='trashIcon'></img>
      </button>
    </Card>
    );
};

export default ExpenseItem;