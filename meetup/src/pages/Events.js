import { Fragment, useState, useCallback, useEffect } from "react";
import classes from "./Groups.module.css";
import GroupItems from "../components/Groups/GroupItems";
import AddGroups from "../components/Groups/AddGroups";
import Button from "../components/UI/Button";
import AddEvent from "../components/Event/AddEvent";
import EventItems from "../components/Event/EventItems";

const stateItem = [
  {
    id: "g1",
    title: "English Conversation",
    description: "an online event for speaking in English",
    // date: new Date(2020, 12, 5, 13, 20),
    image:
      "https://images.unsplash.com/photo-1637270057940-921ced86faee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
  },
  {
    id: "g2",
    title: "Dance Club",
    description: "Having fun and dancing in a great area",
    // date: new Date(1990, 12, 2, 12, 30),
  },

  {
    id: "g3",
    title: "Newcommers",
    description: "gattring at art gallery",
    // date: new Date(2021, 8, 7, 16, 40),
  },
];
const Events = (props) => {
  // ******Adding groups and removing items*****
  // const [stateItem, setStateItem] = useState(DUMMI);
  // const addGroupItemsHandler = (item) => {
  //   setStateItem((prevItemes) => {
  //     return [item, ...prevItemes];
  //   });
  //   props.onAddGroups(stateItem);
  // };
  // const removeHandler = () => {
  //   setStateItem(stateItem.filter((item) => item.id !== stateItem.id));
  // };

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
        <EventItems groups={groups} />
      </div>
    </Fragment>
  );
};

export default Events;
