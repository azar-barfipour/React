import classes from "./GroupItemsDetails.module.css";
import { useState, useCallback, useEffect } from "react";
import { useParams } from "react-router-dom";
const GroupItemsDetails = () => {
  const params = useParams();
  const { groupDetailId } = params;
  const [groups, setGroups] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchGroupsHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(
        "https://recat-meetup-project-default-rtdb.firebaseio.com/groups/${groupDetailId}.json"
      );
      if (!response.ok) {
        throw new Error("Something went wrong!!!");
      }
      const data = await response.json();
      const loadedGroups = [];
      for (const key in data) {
        loadedGroups.push({
          id: groupDetailId,
          title: data[key].title,
          description: data[key].description,
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
  return (
    // <li>
    //   <h5>{groups.title}</h5>
    //   <p>{groups.description}</p>
    // </li>
    <div>
      <h1>groups</h1>
      <p>{groups.title}</p>
    </div>
  );
};
export default GroupItemsDetails;
