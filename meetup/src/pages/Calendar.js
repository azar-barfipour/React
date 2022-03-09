import react, { Fragment, useEffect, useState, useContext } from "react";
import CalendarItems from "../components/Calendar/CalendarItems";
import Event from "../components/Event/EventLink";
import AuthContext from "../store/auth-context";

const Calendar = () => {
  const [events, setEvents] = useState([]);
  const authctx = useContext(AuthContext);
  const token = authctx.token;
  const userId = authctx.userId;
  //for deleting with filter:
  // const freeEventHandler = (events) => {
  //   setEvents(events);
  // };

  // from parent component / calendar
  const deleteEvent = (eventId) => {
    console.log("delete event");

    // filter events
    const filtered = events.filter((event) => {
      return event.id !== eventId;
    });
    setEvents(filtered);
  };

  useEffect(() => {
    const initializeEvents = async () => {
      // fetch data from backend
      const response = await fetch(
        "https://recat-meetup-project-default-rtdb.firebaseio.com/events.json"
      );
      const data = await response.json();

      // change data format
      let loadedData = [];
      for (const key in data) {
        loadedData.push({
          id: key,
          title: data[key].title,
          description: data[key].description,
          date: data[key].date,
          location: data[key].location,
          token: data[key].token,
          userId: data[key].userId,
        });
      }
      const filteredData = loadedData.filter(
        (loaded) => userId === loaded.userId
      );

      // update state
      setEvents(filteredData);
    };

    initializeEvents();
  }, []);

  // useEffect(() => {
  //   console.log("events changed!");
  // }, [events]);

  return (
    <Fragment>
      <Event />
      <CalendarItems items={events} deleteEvent={deleteEvent} />
      {/* for deleting with filter */}
      {/* <CalendarItems items={items} onFree={freeEventHandler} /> */}
    </Fragment>
  );
};

export default Calendar;
