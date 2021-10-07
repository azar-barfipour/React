const Card = (props) => {
  const classes = "card ";
  return <div className={classes}>{props.children}</div>;
};
export default Card;
