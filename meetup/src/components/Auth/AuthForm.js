import {  Redirect } from "react-router-dom";
import Button from "../UI/Button";
import Input from "../UI/Input";
import classes from "./AuthForm.module.css";
import { useRef, useState, useContext } from "react";
import AuthContext from "../../store/auth-context";
import Modal from "../UI/Modal";
const AuthForm = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const [enteredEmail, setEnteredEmail] = useState();
  const [enteredPassword, setEnteredPassword] = useState();
  const [isLogin, setIsLogin] = useState(true);
  const authCtx = useContext(AuthContext);
  const isLoggedIn = authCtx.isLoggedIn;
  const [modal,setModal] = useState(false);
  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };
  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);
  };
  const logoutHandler = () => {
    authCtx.logout();
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
    if (isLogin) {
      const data = await response.json();
      console.log(data);
      authCtx.login(data.idToken);
    }
    setModal(true);
  }
  const submitHandler = () => {
    setIsLogin(false);
  };
  const loginSubmitHandler = () => {
    setIsLogin(true);
    {
      isLogin && <p>logged in</p>;
    }
  };
const modalHandler = () =>{
  setModal(false)
}
  return (
    <div>
    {modal && isLogin && <Redirect to="/Home" />}
    {modal && !isLogin && <Modal title='Sign up' message='signed in succesefully' onConfirm={modalHandler}/>}
    <div className={classes['auth-form']}>
      {isLogin && <h2 className={classes['auth-form__header']}>Log in</h2>}
      {!isLogin && <h2 className={classes['auth-form__header']}>Sign up</h2>}
      {isLogin && (
        <p className={classes['auth-form__text']}>
          Not a member yet?{" "}
          <button onClick={submitHandler} type="submit" className={classes['auth-form__button']}>
            Sign up
          </button>
        </p>
      )}
      {!isLogin && (
        <p className={classes['auth-form__text']}>
          Already a member?{" "}
          <button onClick={loginSubmitHandler} type="submit" className={classes['auth-form__button']}>
            Log in
          </button>
        </p>
      )}

      <form onSubmit={addSubmitHandler} className={classes['auth-form__wrapper']}>
        <Input
        className={classes['auth-form__input']}
          id="email"
          type="email"
          label="Email"
          ref={emailRef}
          onChange={emailChangeHandler}
          value={enteredEmail}
        />
        <Input
          className={classes['auth-form__input']}
          id="password"
          type="password"
          label="Password"
          ref={passwordRef}
          onChange={passwordChangeHandler}
          value={enteredPassword}
        />

        {!isLoggedIn && (
          <Button name={isLogin ? "Log in" : "Sign up"} type="submit"/>
        )}

        {isLoggedIn && (
          <Button type="submit" name="Log out" onClick={logoutHandler}/>
        )}
      </form>
    </div>
    </div>
  );
};
export default AuthForm;
