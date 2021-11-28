import { useState, useEffect } from "react";
import classes from "./SearchForm.module.css";
import React from "react";
import SearchItems from "./SearchItems";

const SearchForm = () => {
  const [enteredSearch, setEnteredSearch] = useState("");
  const [events, setEvents] = useState([]);
  const [searchParam] = useState(["title"]);
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
    };
    fetchHandler();
  }, []);

  //   const search = () => {
  //       return items.filter((item) => {
  //                 return searchParam.some((newItem) => {
  //                     return (
  //                         item[newItem]
  //                             .toString()
  //                             .toLowerCase()
  //                             .indexOf(q.toLowerCase()) > -1
  //                     );
  //                 });
  //             });
  //         }
  //   }

  return (
    <div className={classes["form-container"]}>
      <form className={classes.form}>
        <label value="Explore meetup">Explore meetup</label>
        <input
          type="search"
          onChange={inputChangeHandler}
          value={enteredSearch}
        ></input>
      </form>
      <SearchItems events={events} />
    </div>
  );
};

export default SearchForm;
