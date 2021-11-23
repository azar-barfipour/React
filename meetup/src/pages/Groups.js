import { Fragment, useState, useCallback, useEffect } from "react";
import classes from "./Groups.module.css";
import GroupItems from "../components/Groups/GroupItems";
import AddGroups from "../components/Groups/AddGroups";
import Button from "../components/UI/Button";

const stateItem = [
  {
    id: "g1",
    title: "English Conversation",
    description: "an online event for speaking in English",
    // date: new Date(2020, 12, 5, 13, 20),
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
const Groups = (props) => {
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
          image: data[key].image,
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
      <AddGroups onAddGroupItems={addGroupItemsHandler} />
      <div className={classes.groups}>
        <div className={classes.title}>
          <h4>Explore meetup</h4>
          {/* <Button
            type="button"
            name="All Groups"
            onClick={fetchGroupsHandler}
          /> */}
        </div>
        {!isLoading && groups.length === 0 && <p>No Groups Found.</p>}
        {error && <p>{error}</p>}
        <ul className={classes.groupItem}>
          {groups.map((groupItem) => {
            return (
              !isLoading &&
              groups.length > 0 && (
                <GroupItems
                  key={groupItem.id}
                  id={groupItem.id}
                  title={groupItem.title}
                  description={groupItem.description}
                  image={groupItem.image}
                  // onRemove={removeHandler.bind(null, groupItem.id)} //for removing items
                  // date={groupItem.date}
                />
              )
            );
          })}
        </ul>
      </div>
    </Fragment>
  );
};

export default Groups;
