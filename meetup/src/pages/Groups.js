import { Fragment, useState, useCallback, useEffect } from "react";
import classes from "./Groups.module.css";
import GroupItems from "../components/Groups/GroupItems";
import AddGroups from "../components/Groups/AddGroups";

const Groups = (props) => {
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
      <AddGroups onAddGroupItems={addGroupItemsHandler} />
      <div className={classes.groups}>
        <div className={classes.title}>
          <h4>Explore meetup</h4>
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
