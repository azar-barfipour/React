import react, { Fragment, useState } from "react";
import classes from "./Groups.module.css";
import GroupItems from "./GroupItems";
import AddGroups from "./AddGroups";

const DUMMI = [
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
  const [stateItem, setStateItem] = useState(DUMMI);

  const addGroupItemsHandler = (item) => {
    setStateItem((prevItemes) => {
      return [item, ...prevItemes];
    });
  };
  const removeHandler = () => {
    setStateItem(stateItem.filter((item) => item.id !== stateItem.id));
  };

  return (
    <Fragment>
      <AddGroups onAddGroupItems={addGroupItemsHandler} />
      <div className={classes.groups}>
        <div className={classes.title}>
          <h4>Your groups</h4>
          <span>
            <a href="#">See all</a>
          </span>
        </div>
        <ul className={classes.groupItem}>
          {stateItem.map((groupItem) => {
            return (
              <GroupItems
                key={groupItem.id}
                title={groupItem.title}
                description={groupItem.description}
                onRemove={removeHandler.bind(null, groupItem.id)}
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
