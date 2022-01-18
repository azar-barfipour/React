import react, { Fragment, useEffect, useState, useContext } from "react";
import CalendarItems from "../components/Calendar/CalendarItems";
import Event from "../components/Event/EventLink";
import AuthContext from "../store/auth-context";

const Calendar = () => {
  const [items, setItems] = useState([]);
  const authctx = useContext(AuthContext);
  const token = authctx.token;
  const userId = authctx.userId;
  //for deleting with filter:
  // const freeEventHandler = (items) => {
  //   setItems(items);
  // };

  useEffect(() => {
    const fetchHandler = async () => {
      const response = await fetch(
        "https://recat-meetup-project-default-rtdb.firebaseio.com/events.json"
      );
      const data = await response.json();
      console.log(data);
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
      console.log(userId);
      console.log(loadedData);
      const loadedDataCopy = [...loadedData];
      console.log(loadedDataCopy);
      const result = loadedDataCopy.filter(
        (loaded) => userId === loaded.userId
      );
      console.log(result);
      setItems(result);
    };
    fetchHandler();
  }, []);

  return (
    <Fragment>
      <Event />
      <CalendarItems items={items} />
      {/* for deleting with filter */}
      {/* <CalendarItems items={items} onFree={freeEventHandler} /> */}
    </Fragment>
  );
};

export default Calendar;
