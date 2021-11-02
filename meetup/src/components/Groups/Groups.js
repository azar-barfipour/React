import react, { Fragment, useState } from "react";
import classes from "./Groups.module.css";
import GroupItems from "./GroupItems";
import AddGroups from "./AddGroups";
import Button from "../UI/Button";

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
  // Adding groups and removing items
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
  async function fetchGroupsHandler() {
    const response = await fetch(
      "https://recat-meetup-project-default-rtdb.firebaseio.com/groups.json"
    );
    const data = await response.json();
    const loadedGroups = [];
    for (const key in data) {
      loadedGroups.push({
        id: key,
        title: data[key].title,
        description: data[key].description,
      });
    }
    setGroups(loadedGroups);
  }

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
          <h4>Your groups</h4>
          <Button
            type="button"
            name="All Groups"
            onClick={fetchGroupsHandler}
          />
        </div>
        <ul className={classes.groupItem}>
          {groups.map((groupItem) => {
            return (
              <GroupItems
                key={groupItem.id}
                title={groupItem.title}
                description={groupItem.description}
                // onRemove={removeHandler.bind(null, groupItem.id)} //for removing items
                // date={groupItem.date}
              />
            );
          })}
        </ul>
      </div>
    </Fragment>
  );
};

export default Groups;
