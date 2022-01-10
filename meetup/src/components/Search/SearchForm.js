import { useState, useEffect } from "react";
import classes from "./SearchForm.module.css";
import React from "react";
import SearchItems from "./SearchItems";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SearchDate from './SearchDate'

const SearchForm = () => {
  const [enteredSearch, setEnteredSearch] = useState("");
  const [events, setEvents] = useState([]);
  const [eventsResult, setEventsResult] = useState([]);
  const [eventsResult2, setEventsResult2] = useState([]);
  const [events2, setEvents2] = useState(false);
  // const [text,setText] = useState([])
  const inputChangeHandler = (event) => {
    setEnteredSearch(event.target.value);
  };
  const getTextHandler = (text) => {
    // setText(text)
    // for(const i of events){
    //  const date = i.date.slice(0,10);
    //  console.log(date);
    // }
    // setText((prevTexts) => {
    //   return [text, ...prevTexts];
    // });
    setEvents2(true);
    // const result = events.filter((e) =>
    //   (e.date.includes(text))
    //     )
    const today= new Date().toISOString();
    const tommorow= new Date().toISOString() + 1;
    console.log(today);
    console.log(tommorow);
    // console.log(tommorow.toISOString().slice(0,10));
    console.log(events);
    if(text === 'Today') {
    const result = events.filter(e => e.date.slice(0,10) === new Date().toISOString().slice(0,10))
    console.log(result);
      setEventsResult2(result);
  }else if(text === 'Tommorow'){
    const result = events.filter(e => e.date.slice(0,10) === tommorow.slice(0,10))
    console.log(result);
      setEventsResult2(result);
  }
} 
  // console.log(eventsResult2);
  useEffect(() => {
    const fetchHandler = async () => {
      const response = await fetch(
        "https://recat-meetup-project-default-rtdb.firebaseio.com/groups.json"
      );
      const data = await response.json();
      let loadedData = [];
      for (const key in data) {
        loadedData.push({ id: key, title: data[key].title ,date:data[key].date });
      }
      setEvents(loadedData);
      const result = events.filter((e) =>
      e.title.toLowerCase().includes(enteredSearch))
        // console.log(result);
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
      <SearchDate onGetText={getTextHandler}/>
      {!enteredSearch && !events2 && <SearchItems events={events} />}
      {enteredSearch  && <SearchItems events={eventsResult} />}
      {events2 && <SearchItems events={eventsResult2} />}
    </div>
  );
};

export default SearchForm;
