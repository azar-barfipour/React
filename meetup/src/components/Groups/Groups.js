import react, { Fragment, useState } from "react";
import classes from "./Groups.module.css";
import GroupItems from "./GroupItems";
import AddGroups from "./AddGroups";

const DUMMI = [
  {
    id: "g1",
    title: "English Conversation",
  },
  {
    id: "g2",
    title: "Dance Club",
  },

  {
    id: "g3",
    title: "Newcommers",
  },
];
const Groups = (props) => {
  const [stateItem, setStateItem] = useState([]);

  const addGroupItemsHandler = (item) => {
    setStateItem((prevItemes) => {
      return [item, ...prevItemes];
    });
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
            return <GroupItems title={groupItem.title} />;
          })}
        </ul>
      </div>
    </Fragment>
  );
};

export default Groups;
