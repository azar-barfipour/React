import react, { Fragment, useEffect, useState } from "react";
import classes from "./Calendar.module.css";
import CalendarItems from "../components/Calendar/CalendarItems";
import Event from "../components/Event/Event";

const Calendar = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchHandler = async () => {
      const response = await fetch(
        "https://recat-meetup-project-default-rtdb.firebaseio.com/groups.json"
      );
      const data = await response.json();
      console.log(data);
      let loadedData = [];
      for (const key in data) {
        loadedData.push({
          id: key,
          title: data[key].title,
          description: data[key].description,
        });
      }
      setItems(loadedData);
    };
    fetchHandler();
  }, []);

  return (
    <Fragment>
      <Event />
      <div className={classes.calendar}>
        <div className={classes.header}>
          <h4>Your calendar</h4>
        </div>
        <ul className={classes.calendarItemes}>
          {items.map((item) => {
            return (
              <CalendarItems
                key={item.id}
                title={item.title}
                description={item.description}
                // date={item.date}
              />
            );
          })}
        </ul>
      </div>
    </Fragment>
  );
};

export default Calendar;
