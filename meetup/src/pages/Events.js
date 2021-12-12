import { Fragment, useState, useCallback, useEffect } from "react";
import classes from "./Groups.module.css";
import AddEvent from "../components/Event/AddEvent";
import EventItems from "../components/Event/EventItems";

const stateItem = [
  {
    image:
      "https://images.unsplash.com/photo-1637270057940-921ced86faee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
  },
];
const Events = (props) => {
  const [groups, setGroups] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchGroupsHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(
        "https://recat-meetup-project-default-rtdb.firebaseio.com/groups.json"
      );
      if (!response.ok) {
        throw new Error("Something went wrong!!!");
      }
      const data = await response.json();
      const loadedGroups = [];
      for (const key in data) {
        loadedGroups.push({
          id: key,
          title: data[key].title,
          description: data[key].description,
          date: data[key].date,
          // image: data[key].image,
        });
      }
      console.log(loadedGroups);
      setGroups(loadedGroups);
      setIsLoading(false);
    } catch (err) {
      setError(err.message);
    }
  }, []);

  useEffect(() => {
    fetchGroupsHandler();
  }, [fetchGroupsHandler]);

  async function addGroupItemsHandler(group) {
    console.log(group);
    const response = await fetch(
      "https://recat-meetup-project-default-rtdb.firebaseio.com/groups.json",
      {
        method: "POST",
        body: JSON.stringify(group),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    console.log(data);
  }

  return (
    <Fragment>
      <AddEvent onAddGroupItems={addGroupItemsHandler} />
      <div className={classes.groups}>
        {/* <EventItems groups={groups} isLoading={isLoading} /> */}
      </div>
    </Fragment>
  );
};

export default Events;
