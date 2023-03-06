import './Card.css';

function Card(props) {
  const classes = 'card' + ' ' + props.className;
  // adding classNames to component <Card>
  
  return <div className={classes}>{props.children}</div>;
}

export default Card;