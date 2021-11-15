import classes from "./GroupItemsDetails.module.css";
import { useState, useCallback, useEffect } from "react";
import { useParams, Route } from "react-router-dom";
import Comment from "../components/Comment/Comment";
import { Link } from "react-router-dom";
import Card from "../components/UI/Card";

const GroupItemsDetails = () => {
  const params = useParams();
  const [groups, setGroups] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchGroups = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await fetch(
          `https://recat-meetup-project-default-rtdb.firebaseio.com/groups/${params.groupDetailId}.json`
        );

        if (!response.ok) {
          throw new Error("Something went wrong!!!");
        }
        const data = await response.json();
        setGroups(data);
        setIsLoading(false);
      } catch (err) {
        setError(err.message);
      }
    };
    fetchGroups();
  }, []);

  return (
    <div className={classes.datail}>
      <h4>groups</h4>
      <Card className={classes.card}>
        <li>
          {/* <p>{params.groupDetailId}</p> */}
          <h5>{groups.title}</h5>
          <p>{groups.description}</p>
        </li>
      </Card>
      <Link
        className={classes.btn}
        to={`/Explore/${params.groupDetailId}/Comment`}
      >
        Comment
      </Link>
      <Route path="/Explore/:groupDetailId/Comment">
        <Comment />
      </Route>
    </div>
  );
};
export default GroupItemsDetails;
