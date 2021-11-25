import react, { Fragment, useEffect, useState, useContext } from "react";
import classes from "./Calendar.module.css";
import CalendarItems from "../components/Calendar/CalendarItems";
import Event from "../components/Event/Event";
import AuthContext from "../store/auth-context";

const Calendar = () => {
  const [items, setItems] = useState([]);
  const authctx = useContext(AuthContext);
  const isLoggedIn = authctx.isLoggedIn;
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
          {isLoggedIn ? (
            <h4>Your calendar</h4>
          ) : (
            <div className={classes["header-wrapper"]}>
              <div>
                <h1>Dive in! There are so many things to do on Meetup</h1>
                <p>
                  Make friends, find support, grow a business, and explore your
                  interests. Thousands of events are happening every day, both
                  online and in person!
                </p>
              </div>
              <div>
                <img src="https://www.meetup.com/_next/image/?url=%2Fimages%2Fshared%2Fonline_events.svg&w=640&q=75"></img>
              </div>
            </div>
          )}
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
