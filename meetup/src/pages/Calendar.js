import { Fragment, useEffect, useState, useContext } from "react";

import CalendarItems from "../components/Calendar/CalendarItems";
import Event from "../components/Event/EventLink";
import AuthContext from "../store/auth-context";

const Calendar = () => {
  const [events, setEvents] = useState([]);
  const authCtx = useContext(AuthContext);
  const userId = authCtx.userId;

  const deleteEvent = (eventId) => {
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
          image: data[key].image,
        });
      }
      const filteredData = loadedData.filter(
        (loaded) => userId === loaded.userId
      );
      setEvents(filteredData);
    };

    initializeEvents();
  }, []);

  return (
    <Fragment>
      <Event />
      <CalendarItems items={events} deleteEvent={deleteEvent} />
    </Fragment>
  );
};

export default Calendar;
