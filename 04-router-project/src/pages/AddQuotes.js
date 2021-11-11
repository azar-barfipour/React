import { useRef, useState } from "react";
const AddQuotes = () => {
  const inputTextRef = useRef();
  const inputAuthorRef = useRef();

  async function AddQuotesHandler(event) {
    event.preventDefault();
    const text = inputTextRef.current.value;
    const author = inputAuthorRef.current.value;

    const quotes = {
      author,
      text,
    };

    const response = await fetch(
      "https://test-router-bbd5a-default-rtdb.firebaseio.com/quote.json",
      {
        method: "POST",
        body: JSON.stringify(quotes),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = response.json();
    console.log(data);
  }
  return (
    <div>
      <form onSubmit={AddQuotesHandler}>
        <label>author</label>
        <input ref={inputAuthorRef} type="text"></input>
        <label>text</label>
        <input ref={inputTextRef} type="text"></input>
        <button type="submit">ADD</button>
      </form>
    </div>
  );
};

export default AddQuotes;
