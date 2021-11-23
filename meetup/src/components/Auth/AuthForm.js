import Button from "../UI/Button";
import Input from "../UI/Input";
import classes from "./AuthForm.module.css";
import { useRef, useState, useContext } from "react";
import AuthContext from "../../store/auth-context";
const AuthForm = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const [enteredEmail, setEnteredEmail] = useState();
  const [enteredPassword, setEnteredPassword] = useState();
  const [isLogin, setIsLogin] = useState(true);
  const authCtx = useContext(AuthContext);
  const isLoggedIn = authCtx.isLoggedIn;
  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };
  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);
  };

  async function addSubmitHandler(event) {
    event.preventDefault();
    const enteredEmailRef = emailRef.current.value;
    const enteredPasswordRef = passwordRef.current.value;

    let url;
    if (isLogin) {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBPzh_70XgT3p1zKFsHQ-eOLHinYkyXYjM";
    } else {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBPzh_70XgT3p1zKFsHQ-eOLHinYkyXYjM";
    }
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify({
        email: enteredEmail,
        password: enteredPassword,
        returnSecureToken: true,
      }),
      headers: { "Content-Type": "application/json" },
    });
    const data = await response.json();
    console.log(data);
    {
      isLoggedIn ? alert("signed up") : alert("logged in");
    }
  }
  const submitHandler = () => {
    setIsLogin(false);
  };
  const loginSubmitHandler = () => {
    setIsLogin(true);
    console.log(isLoggedIn);
    {
      isLoggedIn && <p>logged in</p>;
    }
  };

  return (
    <div className={classes.authForm}>
      {isLogin && <h2>Log in</h2>}
      {!isLogin && <h2>Sign up</h2>}
      {isLogin && (
        <p>
          Not a member yet?{" "}
          <button onClick={submitHandler} type="submit">
            Sign up
          </button>
        </p>
      )}
      {!isLogin && (
        <p>
          Already a member?{" "}
          <button onClick={loginSubmitHandler} type="submit">
            Log in
          </button>
        </p>
      )}
      <form onSubmit={addSubmitHandler}>
        <Input
          id="email"
          type="email"
          label="Email"
          ref={emailRef}
          onChange={emailChangeHandler}
          value={enteredEmail}
        />
        <Input
          id="password"
          type="password"
          label="Password"
          ref={passwordRef}
          onChange={passwordChangeHandler}
          value={enteredPassword}
        />
        <Button name={isLogin ? "Log in" : "Sign up"} type="submit" />
      </form>
    </div>
  );
};
export default AuthForm;
