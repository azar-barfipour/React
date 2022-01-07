import react, { Fragment, useEffect, useState, useContext } from "react";
import CalendarItems from "../components/Calendar/CalendarItems";
import Event from "../components/Event/EventLink";
import AuthContext from "../store/auth-context";

const Calendar = () => {
  const [items, setItems] = useState([]);
  const authctx = useContext(AuthContext);
  const token = authctx.token;
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
          token : data[key].token
        });
      }
console.log(token);
const result = loadedData.filter(loaded => token === loaded.token);
console.log(result);
      setItems(result);
    };
    fetchHandler();
  }, []);

  return (
    <Fragment>
      <Event />
      <CalendarItems items={items}/>
    </Fragment>
  );
};

export default Calendar;
