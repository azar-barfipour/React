import { useState, useEffect } from "react";
import React from "react";
import SearchItems from "./SearchItems";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import classes from "./SearchForm.module.css";
import SearchDate from "./SearchDate";

const SearchForm = () => {
  const [isTodClicked, setIsTodClicked] = useState(false);
  const [isTomClicked, setIsTomClicked] = useState(false);
  const [isWeekClicked, setIsWeekClicked] = useState(false);
  const [enteredSearch, setEnteredSearch] = useState("");
  const [fetchedEvents, setFetchedEvents] = useState([]);
  const [events, setEvents] = useState([]);

  const curr = new Date(); // get current date

  const first = curr.getDate() - curr.getDay(); // First day is the day of the month - the day of the week
  const last = first + 6; // last day is the first day + 6
  const firstDay = new Date(curr.setDate(first)).toISOString();
  const lastDay = new Date(curr.setDate(last)).toISOString();

  const tomorrow = new Date();
  tomorrow.setDate(new Date().getDate() + 1);

  const inputChangeHandler = (event) => {
    setEnteredSearch(event.target.value);
    console.log(enteredSearch);

    setEvents(
      fetchedEvents.filter(
        (item) =>
          item.title.toLowerCase().indexOf(event.target.value.toLowerCase()) !==
          -1
      )
    );

    if (event.target.value === "") {
      setEvents(fetchedEvents);
    }
  };

  const isTodClickedHandler = (e) => {
    e.preventDefault();
    setIsTodClicked(!isTodClicked);
    setIsTomClicked(false);
    setIsWeekClicked(false);
    const result = events.filter(
      (e) => e.date.slice(0, 10) === new Date().toISOString().slice(0, 10)
    );
    setEvents(result);
    if (isTodClicked === true) {
      setEvents(fetchedEvents);
    }
  };

  const isTomClickHandler = (e) => {
    e.preventDefault();
    setIsTomClicked(!isTomClicked);
    setIsTodClicked(false);
    setIsWeekClicked(false);
    const result = events.filter(
      (e) => e.date.slice(0, 10) === tomorrow.toISOString().slice(0, 10)
    );
    setEvents(result);
    if (isTomClicked === true) {
      setEvents(fetchedEvents);
    }
  };

  const isWeekClickHandler = (e) => {
    e.preventDefault();
    setIsWeekClicked(!isWeekClicked);
    setIsTodClicked(false);
    setIsTomClicked(false);
    const result = events.filter(
      (e) =>
        lastDay.slice(0, 10) >= e.date.slice(0, 10) &&
        e.date.slice(0, 10) >= firstDay.slice(0, 10)
    );
    setEvents(result);
    if (isWeekClicked === true) {
      setEvents(fetchedEvents);
    }
  };

  useEffect(() => {
    const fetchHandler = async () => {
      const response = await fetch(
        "https://recat-meetup-project-default-rtdb.firebaseio.com/groups.json"
      );
      const data = await response.json();
      let loadedData = [];
      for (const key in data) {
        loadedData.push({
          id: key,
          title: data[key].title,
          date: data[key].date,
          image: data[key].image,
        });
      }
      setFetchedEvents(loadedData);
      setEvents(loadedData);
    };

    fetchHandler();
  }, []);
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
        <FontAwesomeIcon icon={faSearch} className={classes["form__icon"]} />
      </form>
      <SearchDate
        onIsTodClicked={isTodClickedHandler}
        isTodClicked={isTodClicked}
        onIsTomClicked={isTomClickHandler}
        isTomClicked={isTomClicked}
        onIsWeekClicked={isWeekClickHandler}
        isWeekClicked={isWeekClicked}
      />
      <SearchItems events={events} />
    </div>
  );
};

export default SearchForm;
