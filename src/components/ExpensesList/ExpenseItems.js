import React, {useState} from 'react';

import ExpenseDate from './ExpenseDate';
import Card from './Card';
import './ExpenseItems.css';

function ExpenseItem(props) {

  const [showCard, setShowCard] = useState(true);

  const onHide = (event) => {
    setShowCard(false)
  }

  const onShow = (event) => {
    setShowCard(true)
  }
  
  return (
    <li>
      {showCard ? <Card className='expense-item'>
        <ExpenseDate date={props.date} />
        <div className='expense-item__description'>
          <h2>{props.title}</h2>
          <div className='expense-item__price' >{props.amount + '$'}</div>
        </div>
        <button type="button" className='expense-item__buttonHide' onClick={onHide}></button>
      </Card> 
      : 
      <Card className='expense-item'>
        <p className='expense-item__hiddenText'>Hidden from the Wife!</p>
        <button type="button" className='expense-item__buttonShow' onClick={onShow}></button>
      </Card>  
      }
    </li>
  );
};

export default ExpenseItem;

