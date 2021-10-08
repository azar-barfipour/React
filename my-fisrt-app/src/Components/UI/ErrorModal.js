import React from "react";
import "./ErrorModal.css";

const ErrorModal = (props) => {
  return (
    <div>
      <header className="modal">
        <h2>{props.title}</h2>
      </header>
      <p>{props.message}</p>
      <footer></footer>
    </div>
  );
};

export default ErrorModal;
