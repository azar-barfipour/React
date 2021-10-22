import react, { Fragment } from "react";
import classes from "./Groups.module.css";
import GroupItems from "./GroupItems";
const Groups = () => {
  const groupItemes = [
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
  return (
    <Fragment>
      <div className={classes.groups}>
        <div className={classes.title}>
          <h4>Your groups</h4>
          <span>
            <a href="#">See all</a>
          </span>
        </div>
        <ul className={classes.groupItem}>
          {groupItemes.map((groupItem) => {
            return <GroupItems title={groupItem.title} />;
          })}
        </ul>
      </div>
    </Fragment>
  );
};

export default Groups;