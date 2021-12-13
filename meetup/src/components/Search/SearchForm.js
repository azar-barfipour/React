import { useState, useEffect } from "react";
import classes from "./SearchForm.module.css";
import React from "react";
import SearchItems from "./SearchItems";
import Input from '../UI/Input'
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SearchForm = () => {
  const [enteredSearch, setEnteredSearch] = useState("");
  const [events, setEvents] = useState([]);
  const [eventsResult, setEventsResult] = useState([]);
  const inputChangeHandler = (event) => {
    setEnteredSearch(event.target.value);
  };
  useEffect(() => {
    const fetchHandler = async () => {
      const response = await fetch(
        "https://recat-meetup-project-default-rtdb.firebaseio.com/groups.json"
      );
      const data = await response.json();
      let loadedData = [];
      for (const key in data) {
        loadedData.push({ id: key, title: data[key].title });
      }
      setEvents(loadedData);
      const result = events.filter((e) =>
        e.title.toLowerCase().includes(enteredSearch)
      );
      setEventsResult(result);
    };
    fetchHandler();
  }, [enteredSearch]);

  return (
    <div className={classes["form-container"]}>
      <form className={classes.form}>
        <input
          className={classes["form__input"]}
          type="search"
          placeholder="Explore meetup"
          onChange={inputChangeHandler}
          value={enteredSearch}
        />
        <FontAwesomeIcon icon={faSearch} className={classes["form__icon"]}/>
      </form>
      {!enteredSearch && <SearchItems events={events} />}
      {enteredSearch && <SearchItems events={eventsResult} />}
    </div>
  );
};

export default SearchForm;
