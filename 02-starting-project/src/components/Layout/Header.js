import React, { Fragment } from "react";
import classes from "./Header.module.css";
import FoodImage from "../../assets/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton></HeaderCartButton>
      </header>
      <div className={classes[`main-image`]}>
        <img src={FoodImage} alt="a table full of food!"></img>
      </div>
    </Fragment>
  );
};
export default Header;
