import Button from "../UI/Button";
import classes from "./AuthForm.module.css";
const AuthForm = () => {
  return (
    <div className={classes.authForm}>
      <h2>Log in</h2>
      <form>
        <a className={classes.authLink}>
          <span>log in with google</span>
        </a>
        <Button name="Log in" type="submit" />
      </form>
    </div>
  );
};
export default AuthForm;
