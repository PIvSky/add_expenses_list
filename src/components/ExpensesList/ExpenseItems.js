import React, {useState} from 'react';

import ExpenseDate from './ExpenseDate';
import Card from './Card';
import './ExpenseItems.css';

function ExpenseItem(props) {

  const [showCard, setShowCard] = useState(true);

  const onDelete = (event) => {
    setShowCard(false)
  }
  
  return (
    <li>
      {showCard ? <Card className='expense-item'  >
        <ExpenseDate date={props.date} />
        <div className='expense-item__description'  >
          <h2>{props.title}</h2>
          <div className='expense-item__price' >{props.amount + '$' }</div>
        </div>
        <button type="button" className='expense-item__trash' onClick={onDelete}>
        </button>
      </Card> : '' }
    </li>
  );
};

export default ExpenseItem;

