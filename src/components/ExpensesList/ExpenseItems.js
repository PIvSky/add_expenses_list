import React from 'react';

import ExpenseDate from './ExpenseDate';
import Card from './Card';
import './ExpenseItems.css';


const onTrash = () => {
  // const container = document.querySelector('.container');
  const container = document.querySelector('.expense-item');
  container.remove(container.childElement);
  // container.removeChild(container)
  // container?.removeChild(container)
  // console.log(container.nodeValue)
};

function ExpenseItem(props) {

  return (
    <div>
      <Card className='expense-item'  >
        <ExpenseDate date={props.date} />
        <div className='expense-item__description'  >
          <h2>{props.title}</h2>
          <div className='expense-item__price' >{props.amount + '$' }</div>
        </div>
        <button type="button" className='expense-item__trash' onClick={onTrash} >
          {/* <img className='trash' src='/src/icons/trashIcon.png' alt='trashIcon'></img> */}
        </button>
      </Card>
    </div>
    );
};

export default ExpenseItem;