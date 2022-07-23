import { Fragment, useState, useCallback, useEffect } from "react";
import AddEvent from "../components/Event/AddEvent";

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
        });
      }
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
  }

  return (
    <Fragment>
      <AddEvent onAddGroupItems={addGroupItemsHandler} />
    </Fragment>
  );
};

export default Events;
